const { user, shortlink } = require('../../models')
const { nanoid } = require('nanoid')

// Publish link
exports.publishLink = async (req, res) => {
    try {
        const newLink = await shortlink.create({
            idUser: req.user.id,
            title: req.body.titleform,
            uniqueLink: nanoid(8),
            image: req.file.filename,
            description: req.body.descriptionform,
            titlelink: req.body.titlelinkform,
            link: req.body.linkform
        })

        const seeLink = await shortlink.findOne({
            where: {
                id: newLink.id
            },
            attributes: {
                exclude: ["updatedAt","createdAt"]
            }
        })
        let array1 = seeLink.dataValues
        array1 = JSON.parse(JSON.stringify(array1))
        console.log(typeof(array1))
        res.status(400).send({
            message: "Success",
            data: {
                ...array1
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "Failed",
            message: "Server Error"
        })
    }
}

// Get Link
exports.getLink = async(req, res) => {
    const { uniqueLink } = req.params
    try {
        let shortenLink = await shortlink.findOne({
            where: {
                uniqueLink
            },attributes: {
                exclude: ["createdAt","updatedAt"]
            }
        })
        shortenLink = JSON.parse(JSON.stringify(shortenLink.dataValues))
        let abc = shortenLink.link
        console.log(abc.length)
        res.status(400).send({
            status: "success",
            shortenLink
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: "failed",
            message: "Server Error"
        })
    }
}

// Get all link
exports.getLinks = async(req, res) => {
    try {
        const allLinks = await shortlink.findAll({
            attributes: {
                exclude: ['createdAt','updatedAt']
            }
        })

        res.status(400).send({
            status: "Success",
            allLinks
        })
    } catch (error) {
        res.send({
            status: "Failed",
            message: "Server Error"
        })
    }
}

// Get all link that user create
exports.userLinks = async(req, res) => {
    try {
        const uLink = await shortlink.findAll({
            where: {
                idUser: req.user.id
            },
            attributes: {
                exclude: ['createdAt','updatedAt']
            }
        })
        const shortUser = JSON.parse(JSON.stringify(uLink))
        const tesImage = shortUser.map((item) => item.image = process.env.PATH_FILE_LINK_IMAGE + item.image)

        res.status(200).send({
            status: "Success",
            shortUser
        })
    } catch (error) {
        res.send({
            status: "Failed",
            message: "Server Error"
        })
    }
}