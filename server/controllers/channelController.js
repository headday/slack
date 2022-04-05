const { Channel, UserChannel } = require("../models");
class channelController {
  async add(req, res) {
    const {user} = req
    const { name, description} = req.body;
    
    const {id:id_user} = user;
    await Channel.create({
      name, 
      description
    })

    const currentChannel = await Channel.findOne({
      attributes: ["id"],
      where: {
        name
      }
    })
    
    const id_channel = currentChannel.id;
    
    await UserChannel.create({
      id_user,
      id_channel:13,
    });
    return res.status(200).json({status: "succes",
  id_channel,
id_user})
    
  }

  delete() {

  }
}

module.exports = new channelController();