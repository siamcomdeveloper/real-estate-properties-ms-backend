const hostName = process.env.DOMAIN_NAME_BACKEND;

module.exports = async function uploadImage(req, res) {

    try {

        let currentFileName = req.file.filename.split('.')[0];
        let currentFileType = '.'+req.file.filename.split('.')[1];

        let path = `${hostName}/images/${currentFileName}${currentFileType}`;

        return res.json({
            name: req.file.originalname,
            status: "done",
            url: path,
            thumbUrl: path,
        });

    }
    catch(error){
        return res.json(error);
    }

};