const allowedOrigins = require('./allowedOrigins');

const corsOptions = {   
    origin: 'https://real-estate-properties-ms-frontend.onrender.com', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true,
    optionSuccessStatus:200,

    // origin: (origin, callback) => {
    //     if(allowedOrigins.indexOf(origin) !== -1 || !origin) {
    //         callback(null, true)
    //     } else {
    //         callback(new Error('Not allowed by CORS'));
    //     }
    // },
    // optionsSuccessStatus: 200
}

module.exports = corsOptions;