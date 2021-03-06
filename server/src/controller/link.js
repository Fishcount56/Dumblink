const { user, shortlink } = require('../../models')
const { nanoid } = require('nanoid')

// Publish link
exports.publishLink = async (req, res) => {
    try {
        const newLink = await shortlink.create({
            idUser: req.user.id,
            title: req.body.title,
            uniqueLink: nanoid(8),
            visitTime: 0,
            image: req.file.filename,
            description: req.body.description,
            titlelink: req.body.titlelink,
            link: req.body.link
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
        
        res.status(200).send({
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
        const increaseVisit = await shortlink.increment({
            visitTime: 1
        }, 
        { where: { 
                uniqueLink 
            } 
        })
        
        let shortLink = await shortlink.findOne({
            where: {
                uniqueLink
            },attributes: {
                exclude: ["createdAt","updatedAt"]
            }
        })

        shortLink = JSON.parse(JSON.stringify(shortLink))


        let titleLinkReplace = shortLink.titlelink.replace(/"/g, '')
        let titleLinkArray = titleLinkReplace.split(',')
        let linkReplace = shortLink.link.replace(/"/g, '')
        let linkArray = linkReplace.split(',')

        shortLink.image = process.env.PATH_FILE_LINK_IMAGE + shortLink.image
        shortLink.titlelink = titleLinkArray
        shortLink.link = linkArray
        
        const objectPropsData = ({titlelinks: shortLink.titlelink, links: shortLink.link})
        
        res.status(200).send({
            status: "success",
            data: {
                shortLink,
                objectPropsData
            }
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

exports.deleteLinks = async(req, res) => {
    const { uniqueLink } = req.params
    try {
        await shortlink.destroy({
            where: {
                uniqueLink
            }
        })

        res.send({
            statue: "Success",
            message: `Success delete link with ${uniqueLink} id`
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: "Failed",
            message: "Server Error"
        })
    }
}