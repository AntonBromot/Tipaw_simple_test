const itemsController = require('../controllers/itemsController');
const { ItemSchemas: { responseSchemas, requestSchemas } } = require("../schemas/ItemSchema");

module.exports = [
    {
        method: 'GET',
        path: '/items/getItem/{_id}',
        handler: itemsController.getItem,
        options: {
            description: 'Get item by id',
            tags: ['api', 'item'],
            auth: false,
            validate: { params: requestSchemas.getItem },
            response: { schema: responseSchemas.getItem }
        }
    },
    {
        method: 'GET',
        path: '/items/getAllItems/{year}/{type?}',
        handler: itemsController.getAllItems,
        options: {
            description: 'Get all items by year/type',
            tags: ['api', 'item'],
            auth: false,
            response: { schema: responseSchemas.getAllItems }
        }
    },
    {
        method: 'POST',
        path: '/items/createItem',
        handler: itemsController.createItem,
        options: {
            description: 'Create new item',
            tags: ['api', 'item'],
            auth: false,
            validate: { payload: requestSchemas.createItem },
            response: { schema: responseSchemas.createItem }
        }
    },
    {
        method: 'PUT',
        path: '/items/updateItem',
        handler: itemsController.updateItem,
        options: {
            description: 'Update new item',
            tags: ['api', 'item'],
            auth: false,
            validate: { payload: requestSchemas.updateItem },
            response: { schema: responseSchemas.updateItem }
        }
    },
];
