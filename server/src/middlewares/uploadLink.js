const multer = require("multer")

exports.uploadLink = (imageFile) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "upload/link")
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname.replace(/\s/g, ""))
        }
    })

    const fileFilter = function (req, file, cb) {
        if (file.fieldname === imageFile) {
            if(!file.originalname.match(/\.(JPG|jpg|PNG|png|JPEG|JPEG)$/)) {
                req.fileValidationError = {
                    message: "Only image file are allowed!"
                }
                return cb(new Error("Only image file are allowed!"), false)
            }
        }
        cb(null, true)
    }

    const upload = multer({
        storage,
        fileFilter,
    }).single(imageFile)

    return(req, res, next) => {
        upload(req, res, function(err) {
            if(req.fileValidationError) {
                return res.status(400).send(req.fileValidationError)
            }

            if(!req.file && !err) {
                return res.status(400).send({
                    message: "Please select image file to upload"
                })
            }

            return next()
        })
    }
}