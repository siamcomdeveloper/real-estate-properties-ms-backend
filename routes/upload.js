const express = require("express");
const router = express.Router();
const multer = require("multer");

const uploadImage = require("../controllers/upload.js");

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
        const typeName = file.mimetype === "image/png" ? ".png" : ".jpeg";
        cb(null, Date.now() + typeName)
    }
});

const fileFilter = function (req, file, cb) {
    var allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        console.log('Invalid file type. Only jpg, png image files are allowed.');
        cb({
            success: false,
            message: 'Invalid file type. Only jpg, png image files are allowed.'
        }, false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter});

router.route('/').post(upload.single('file'), uploadImage)

module.exports = router;