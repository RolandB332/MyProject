const appService = require('@ets-applications/android-poc-application-service');
const fieldService = require('@ets-components/field-calculation-service');
const serveStatic = require('serve-static');
const http = require('http');
const finalhandler = require('finalhandler');

const startObjectApp = {
	port: 3002
}
const startObjectField = {
	port: 3001
}

function startBackends() {
	fieldService.startService(startObjectField);
	appService.startService(startObjectApp);
}

function serveFrontend() {
	const frontendRootPath = `${__dirname}`;
	const serve = serveStatic(frontendRootPath, { index: ['index.html'] });

	const server = http.createServer((req, res) => {
		serve(req, res, finalhandler(req, res));
	});

	server.listen(4204);
}

	startBackends();
	serveFrontend();
