const { user, shortlink } = require('../../models')

// Publish link
exports.publishLink = async (req, res) => {
    try {
        const newLink = await shortlink.create({
            idUser: req.user.id,
            title: req.body.titleform,
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
        let linktitle = array1.titlelink
        linktitle = JSON.parse(linktitle)
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