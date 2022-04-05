const {Channel, UserChannel} = require("../models");

class channelController {
    async add(req, res) {
        try {
            const {user} = req
            const {name, description} = req.body;

            const {id: id_user} = user;
            const channel = await Channel.create({
                name,
                description
            })

            const id_channel = channel.id;

            await UserChannel.create({
                id_user,
                id_channel,
            });
            return res.status(200).json({
                status: "success",
                id_channel,
                id_user
            })
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Adding channel error" });
        }
    }

    delete() {

    }
}

module.exports = new channelController();