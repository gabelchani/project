const db = require("../models/index")
const Messengers_in_placesDB = db.messengers_in_places;
const RequestsDB = db.requests;
const Op = db.Sequelize.Op;

exports.createRequest=async(Request)=>{
    return await RequestsDB.create(Request)
}

exports.getAllRequests=async()=>{
    return await RequestsDB.findAll()
}

exports.getRequestById=async(id)=>{
  return await RequestsDB.findByPk(id)
}

exports.updateRequestById=async(id, dataToUpdate)=>{
    return await RequestsDB.update(dataToUpdate, {
          where: { id: id }
        })
  }

exports.deleteRequestById=async(id)=>{
  return await RequestsDB.destroy({
    where: { id: id }
})
}

