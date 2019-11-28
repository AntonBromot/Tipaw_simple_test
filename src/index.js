`use strict`;
const Hapi = require('hapi');
console.log("Hapi", Hapi)
const routes = require('./routes');
const plugins = require('./plugins');
const {failAction} = require('./helpers');
const {serviceAuth, simpleAuth} = require('./helpers/authValidation')
const database = require("./db")

const server = Hapi.server({
    port: 3000,
    routes: {
        validate: {failAction},
        response: {failAction}
    }
});

const init = async () => {
    await server.register(plugins);
    database()
    server.auth.strategy('service-auth', 'basic', {validate: serviceAuth});
    server.auth.strategy('simple-auth', 'basic', {validate: simpleAuth});
    routes.forEach(route => server.route(route));
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
