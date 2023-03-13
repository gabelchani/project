var messengers_to_addDB = require("../dal/messengers_to_add");


create_messengers_to_add = (req, res) => {
  messengers_to_addDB.createMessengers_to_add(req.body)
    .then(data => {
      res.send(`add messengers_to_add ${data}`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating messengers to add."
      });
    });
}

delete_messengers_to_add_ById = (req, res) => {
  messengers_to_addDB.deleteMessengers_to_addById(req.params.id)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${req.params.id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + req.params.id
      });
    });

}

update_messengers_to_add = (req, res) => {
  messengers_to_addDB.updateMessengers_to_addById(req.params.id, req.body)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${req.params.id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + req.params.id
      });
    });
}

get_messengers_to_add_ById = (req, res) => {
  messengers_to_addDB.getMessengers_to_addById(req.params.id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(400).send({
          message: `Cannot find Tutorial with id=${req.params.id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + req.params.id
      });
    });
}

get_All_messengers_to_add = (req, res) => {
  messengers_to_addDB.getAllMessengers_to_add()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reciepts."
      });
    });
}

getmessengers_to_addByPassword = (req, res) => {
  messengers_to_addDB.getmessengers_to_addByPassword(req.params.password)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Password."
      });
    });
}


module.exports = {
  get_All_messengers_to_add,
  update_messengers_to_add,
  create_messengers_to_add,
  get_messengers_to_add_ById,
  delete_messengers_to_add_ById,
  getmessengers_to_addByPassword
}