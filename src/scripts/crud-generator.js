const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '../..');

const SRC_DIR = path.join(ROOT_DIR, 'src');

const DIRECTORIES = {
    controllers: path.join(SRC_DIR, 'controllers'),
    repositories: path.join(SRC_DIR, 'repositories'),
    services: path.join(SRC_DIR, 'services'),
    routes: path.join(SRC_DIR, 'routes')
};

function log(message) {
    console.log(`[CRUD] ${message}`);
}

function error(message) {
    console.error(`[CRUD ERROR] ${message}`);
}

function ensureDirectories() {
    Object.values(DIRECTORIES).forEach((directory) => {
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
    });
}

function runCommand(command) {
    try {
        execSync(command, {
            cwd: ROOT_DIR,
            stdio: 'inherit'
        });

        return true;
    } catch (err) {
        return false;
    }
}

function getSchemaContent() {
    const schemaPath = path.join(
        ROOT_DIR,
        'prisma',
        'schema.prisma'
    );

    if (!fs.existsSync(schemaPath)) {
        throw new Error(
            'No se encontró prisma/schema.prisma'
        );
    }

    return fs.readFileSync(schemaPath, 'utf8');
}

function modelExists(tableName) {
    const schema = getSchemaContent();

    const regex = new RegExp(
        `model\\s+${escapeRegex(tableName)}\\s*\\{`
    );

    return regex.test(schema);
}

function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function syncPrisma() {
    log('Sincronizando schema.prisma con PostgreSQL...');

    const success = runCommand(
        'npx prisma db pull'
    );

    if (!success) {
        throw new Error(
            'No fue posible ejecutar prisma db pull'
        );
    }

    log('Schema de Prisma actualizado.');
}

function getPrismaModel(tableName) {
    const schema = getSchemaContent();

    const regex = new RegExp(
        `model\\s+${escapeRegex(tableName)}\\s*\\{([\\s\\S]*?)\\n\\}`,
        'm'
    );

    const match = schema.match(regex);

    if (!match) {
        return null;
    }

    return match[0];
}

function generateRepository(tableName) {
    const content = `const prisma = require('../config/database');

const findAll = async () => {
    return prisma.${tableName}.findMany();
};

const findById = async (id) => {
    return prisma.${tableName}.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.${tableName}.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.${tableName}.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.${tableName}.delete({
        where: {
            id
        }
    });
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
`;

    const filePath = path.join(
        DIRECTORIES.repositories,
        `${tableName}.repository.js`
    );

    fs.writeFileSync(filePath, content);

    log(`Repository creado: ${filePath}`);
}

function generateService(tableName) {
    const content = `const ${tableName}Repository = require('../repositories/${tableName}.repository');

const getAll = async () => {
    return ${tableName}Repository.findAll();
};

const getById = async (id) => {
    const record = await ${tableName}Repository.findById(id);

    if (!record) {
        const error = new Error('${tableName} no encontrado');
        error.statusCode = 404;
        throw error;
    }

    return record;
};

const create = async (data) => {
    return ${tableName}Repository.create(data);
};

const update = async (id, data) => {
    await getById(id);

    return ${tableName}Repository.update(id, data);
};

const remove = async (id) => {
    await getById(id);

    return ${tableName}Repository.remove(id);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
`;

    const filePath = path.join(
        DIRECTORIES.services,
        `${tableName}.service.js`
    );

    fs.writeFileSync(filePath, content);

    log(`Service creado: ${filePath}`);
}

function generateController(tableName) {
    const content = `const ${tableName}Service = require('../services/${tableName}.service');

const getAll = async (req, res, next) => {
    try {
        const data = await ${tableName}Service.getAll();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const data = await ${tableName}Service.getById(id);

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const data = await ${tableName}Service.create(req.body);

        res.status(201).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const data = await ${tableName}Service.update(
            id,
            req.body
        );

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        await ${tableName}Service.remove(id);

        res.status(200).json({
            success: true,
            message: '${tableName} eliminado correctamente'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
`;

    const filePath = path.join(
        DIRECTORIES.controllers,
        `${tableName}.controller.js`
    );

    fs.writeFileSync(filePath, content);

    log(`Controller creado: ${filePath}`);
}

function generateRoutes(tableName) {
    const content = `const express = require('express');

const ${tableName}Controller = require('../controllers/${tableName}.controller');

const router = express.Router();

router.get('/get-all', ${tableName}Controller.getAll);

router.post('/create', ${tableName}Controller.create);

router.get('/find-id/:id', ${tableName}Controller.getById);

router.put('/update/:id', ${tableName}Controller.update);

router.delete('/delete/:id', ${tableName}Controller.remove);

module.exports = router;
`;

    const filePath = path.join(
        DIRECTORIES.routes,
        `${tableName}.routes.js`
    );

    fs.writeFileSync(filePath, content);

    log(`Routes creado: ${filePath}`);
}

function generate(tableName) {
    log(`Generando CRUD para: ${tableName}`);

    ensureDirectories();

    /*
     * 1. Verificar si el modelo existe en Prisma.
     */
    if (!modelExists(tableName)) {
        log(
            `El modelo "${tableName}" no existe en schema.prisma.`
        );

        /*
         * 2. Sincronizar Prisma con PostgreSQL.
         */
        syncPrisma();
    }

    /*
     * 3. Volver a verificar.
     */
    if (!modelExists(tableName)) {
        throw new Error(
            `La tabla/modelo "${tableName}" no existe en PostgreSQL o no pudo ser importada por Prisma.`
        );
    }

    /*
     * 4. Obtener el modelo.
     */
    const model = getPrismaModel(tableName);

    if (!model) {
        throw new Error(
            `No fue posible obtener el modelo "${tableName}" de schema.prisma.`
        );
    }

    log(`Modelo "${tableName}" encontrado en Prisma.`);

    /*
     * 5. Generar capas.
     */
    generateRepository(tableName);
    generateService(tableName);
    generateController(tableName);
    generateRoutes(tableName);
    updateRoutesIndex(tableName);

    log(`CRUD de "${tableName}" generado correctamente.`);
}

function updateRoutesIndex(tableName) {
    const routesIndexPath = path.join(
        DIRECTORIES.routes,
        'index.js'
    );

    let content = '';

    if (fs.existsSync(routesIndexPath)) {
        content = fs.readFileSync(
            routesIndexPath,
            'utf8'
        );
    }

    const importLine =
        `const ${tableName}Routes = require('./${tableName}.routes');`;

    const useLine =
        `router.use('/${tableName}', ${tableName}Routes);`;

    /*
     * Agregar import si no existe
     */
    if (!content.includes(importLine)) {
        const lines = content.split('\n');

        let lastImportIndex = -1;

        lines.forEach((line, index) => {
            if (
                line.trim().startsWith('const ') &&
                line.includes("require(")
            ) {
                lastImportIndex = index;
            }
        });

        lines.splice(
            lastImportIndex + 1,
            0,
            importLine
        );

        content = lines.join('\n');
    }

    /*
     * Agregar router.use si no existe
     */
    if (!content.includes(useLine)) {
        const lines = content.split('\n');

        let moduleExportsIndex =
            lines.findIndex(
                line => line.includes('module.exports')
            );

        if (moduleExportsIndex === -1) {
            throw new Error(
                'No se encontró module.exports en routes/index.js'
            );
        }

        lines.splice(
            moduleExportsIndex,
            0,
            useLine
        );

        content = lines.join('\n');
    }

    fs.writeFileSync(
        routesIndexPath,
        content
    );

    log(
        `routes/index.js actualizado para "${tableName}".`
    );
}

const tableName = process.argv[2];

if (!tableName) {
    error(
        'Debes indicar el nombre de la tabla.'
    );

    console.log('');
    console.log(
        'Ejemplo:'
    );

    console.log(
        'npm run crud -- voluntarios'
    );

    process.exit(1);
}

generate(tableName);