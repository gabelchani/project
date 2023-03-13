var MessengersDB = require("../dal/Messengers");
var sendEmail = require("../services/Email");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  if (!req.params.id || !req.params.password) {
    return res.status(400).json({
      message: 'All fields are required'
    })
  }
  const data = await MessengersDB.getMessengerById(req.params.id);
  if (!data || !data.password) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  const match = bcrypt.compare(req.params.password, data.password);

  if (!match) return res.status(401).json({ message: 'Unauthorized' })

  const userInfo = {
    id: data.id, name: data.name,
    img: data.img, phone: data.phone, place: data.place, is_active: data.is_active
  }

  res.send(userInfo)
}

const createMessenger = async (req, res) => {
  if (!req.body.name || !req.body.id || !req.body.password
    || !req.body.id || !req.body.email || !req.body.phone) {
    return res.status(400).json({
      message: 'All fields are required'
    })
  }
  const data = await MessengersDB.getMessengerById(req.body.id);
  if (data) {
    return res.status(409).json({ message: "Duplicate username" })
  }
  const hashedPwd = await bcrypt.hash(req.body.password, 10)
  req.body.password = hashedPwd;
  MessengersDB.createMessenger(req.body)
    .then(data => {
      sendEmail.sendEmail(data.email, "join sucssesed!!", "Hello " + data.name + "!\nThank for join");
      //sendEmail.sendEmailWithAttachment(data.email,'example.jpg','M:\\project\\server_new\\example.jpg');
      res.send(`add Messenger ${data}`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Messenger."
      });
    });
}

getAllMessengers = (req, res) => {
  MessengersDB.getAllMessengers()
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

updateMessengerById = (req, res) => {
  MessengersDB.updateMessengerById(req.params.id, req.body)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Messenger was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Messenger with id=${req.params.id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Messenger with id=" + req.params.id
      });
    });

}

getMessengerById = (req, res) => {
  MessengersDB.getMessengerById(req.params.id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(400).send({
          message: `Cannot find Messenger with id=${req.params.id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Messenger with id=" + req.params.id
      });
    });

}

deleteMessengerById = (req, res) => {
  MessengersDB.deleteMessengerById(req.params.id)
    .then(num => {
      if (num == 1) {
        sendEmail.sendEmail(data.email, "Delete sucssesed!!", "Hello " + data.name + "!\nThank you");
        res.send({
          message: "Messenger was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Messenger with id=${req.params.id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Messenger with id=" + req.params.id
      });
    });
}

getMessengerByName = (req, res) => {
  MessengersDB.getMessengerByName(req.body.name)
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

getMessengerByPlace = (req, res) => {
  console.log(req.params.place)
  MessengersDB.getMessengerByPlace(req.params.place)
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

getMessengerByPassword = (req, res) => {//לא עובד אין לו אפשרות זיהוי סיסמא
  MessengersDB.getMessengerByPassword(req.params.password)
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

getMessengerByActivation = (req, res) => {
  if (req.params.is_active)
    MessengersDB.getMessengerByActivation(1)
  else
    MessengersDB.getMessengerByActivation(0)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Active."
        });
      });
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