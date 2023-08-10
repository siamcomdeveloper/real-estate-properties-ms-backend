const allowedOrigins = require('./allowedOrigins');

const corsOptions = {   
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    preflightContinue: true,
    credentials: true,
    optionSuccessStatus:200
}

module.exports = corsOptions;