const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: ['https://real-estate-properties-ms-frontend.onrender.com']
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