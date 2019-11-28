const legendsController = require('../controllers/legendsController');
const { LegendsSchemas: { responseSchemas, requestSchemas } } = require("../schemas/LegendsModel");

module.exports = [
    {
        method: 'GET',
        path: '/legends/getLegend/{_id}',
        handler: legendsController.getLegend,
        options: {
            description: 'Get legend by id',
            tags: ['api', 'legend'],
            auth: false,
            validate: { params: requestSchemas.getLegend },
            response: { schema: responseSchemas.getLegend }
        }
    },
    {
        method: 'GET',
        path: '/legends/getAllLegends',
        handler: legendsController.getAllLegends,
        options: {
            description: 'Get all legends',
            tags: ['api', 'legend'],
            auth: false,
            response: { schema: responseSchemas.getAllLegends }
        }
    },
    {
        method: 'POST',
        path: '/legends/createLegend',
        handler: legendsController.createLegend,
        options: {
            description: 'Create new legend',
            tags: ['api', 'legend'],
            auth: false,
            validate: { payload: requestSchemas.createLegend },
            response: { schema: responseSchemas.createLegend }
        }
    },
    {
        method: 'PUT',
        path: '/legends/updateLegend',
        handler: legendsController.updateLegend,
        options: {
            description: 'Update  legend by _id',
            tags: ['api', 'legend'],
            auth: false,
            validate: { payload: requestSchemas.updateLegend },
            response: { schema: responseSchemas.updateLegend }
        }
    },
];
