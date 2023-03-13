const db = require("../models/index")
const notesDB = db.notes;

exports.createnote = async (note) => {
  return await notesDB.create(note)
}

exports.getAllnotes = async () => {
  return await notesDB.findAll()
}

exports.getnoteById = async (id) => {
  return await notesDB.findByPk(id)
}

exports.deletenoteById = async (id) => {
  return await notesDB.destroy({
    where: { id: id }
  })
}
exports.getnoteByPlace_id = async (id) => {
  return await notesDB.findAll({
    where: {place_id: id}// }
  })
}
