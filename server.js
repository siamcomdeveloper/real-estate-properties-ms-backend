require('dotenv').config();
const express = require('express');
const cors = require('cors');

const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const connectDB = require('./config/dbConn');

const app = express();
const port = process.env.PORT || 5000;

// custom middleware logger
app.use(logger);

//Handle options credentials check - BEFORE CORS!
//and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use(express.json());
app.use(express.static('public'));
app.use('/images', express.static('images'));

//Connect to MongoDB
connectDB();

// import routes
const propertyRouter = require("./routes/property");
const realtorRoute = require("./routes/realtor");
const sellerRouter = require("./routes/sellers");
const uploadImageRouter = require('./routes/upload');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://real-estate-properties-ms-frontend.onrender.com");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use("/property", propertyRouter);
app.use("/realtors", realtorRoute);
app.use("/sellers", sellerRouter);
app.use('/upload', uploadImageRouter);

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
