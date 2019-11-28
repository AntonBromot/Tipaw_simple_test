const updatesController = require('../controllers/updatesController');
const { UpdatesSchemas: { responseSchemas, requestSchemas } } = require("../schemas/UpdatesSchema");

module.exports = [
    {
        method: 'GET',
        path: '/updates/getCollectionsUpdates',
        handler: updatesController.getCollectionsUpdates,
        options: {
            description: 'Get updates',
            tags: ['api', 'updates'],
            auth: false,
            response: { schema: responseSchemas.getUpdates }
        }
    },
    {
        method: 'GET',
        path: '/updates/getLegendsUpdates',
        handler: updatesController.getLegendsUpdates,
        options: {
            description: 'Get updates',
            tags: ['api', 'updates'],
            auth: false,
            response: { schema: responseSchemas.getUpdates }
        }
    },
    {
        method: 'GET',
        path: '/updates/getItemsUpdates/{year}/{type}',
        handler: updatesController.getItemsUpdates,
        options: {
            description: 'Get updates',
            tags: ['api', 'updates'],
            auth: false,
            validate: { params: requestSchemas.createLegend },
            response: { schema: responseSchemas.getUpdates }
        }
    }
];
