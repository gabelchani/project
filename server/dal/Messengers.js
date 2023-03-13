const db = require("../models/index")
const { Op } = require('sequelize');
const messengersDB = db.messengers;

login= async (id,password) => {
   data=await messengersDB.findOne({
    where: {
      [Op.and]: [{ id: id },{ password: password }]}
})
  return data;
}

createMessenger = (messenger) => {
  return messengersDB.create(messenger);
}

getAllMessengers = async () => {
  return await messengersDB.findAll()
}

getMessengerById = async (id) => {
  return await messengersDB.findByPk(id)
}

updateMessengerById = async (id, dataToUpdate) => {
  return await messengersDB.update(dataToUpdate, {
    where: { id: id }
  })
}

deleteMessengerById = async (id) => {
  return await messengersDB.destroy({
    where: { id: id }
  })
}
getMessengerByName = async (name_) => {
  return await messengersDB.findAll({
    where: { name: { [Op.substring]: name_ } }
  })
}
getMessengerByPlace = async (place) => {
  return await messengersDB.findAll({
    where: { places: { [Op.substring]: place } }
  })
}
getMessengerByPassword = async (password) => {
  return await messengersDB.findAll({
    where: { password: password }
  })
}
getMessengerByActivation = async (active) => {
    return await messengersDB.findAll({
      where: { is_active: active}
    })

}
module.exports = {
  login,
  createMessenger,
  getAllMessengers,
  updateMessengerById,
  deleteMessengerById,
  getMessengerById,
  getMessengerByName,
  getMessengerByPlace,
  getMessengerByPassword,
  getMessengerByActivation
}