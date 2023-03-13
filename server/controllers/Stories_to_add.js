var stories_to_addDB = require("../dal/stories_to_add");


createStoryToAdd = (req, res) => {  
    stories_to_addDB.createStoryToAdd(req.body)
    .then(data=>{
        res.send(`add StoryToAdd ${data}`);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating StoryToAdd."
        });
    });
}

deleteStoryToAddById =  (req, res) => {
    stories_to_addDB.deleteStoryToAddById(req.params.id)
    .then(num => {
        if (num == 1) {
          res.send({
            message: "StoryToAdd was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete StoryToAdd with id=${req.params.id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete StoryToAdd with id=" + req.params.id
        });
      }); 

}

updateStoryToAddById =  (req, res) => {
    stories_to_addDB.updateStoryToAddById(req.params.id, req.body)
    .then(num => {
        if (num == 1) {
          res.send({
            message: "StoryToAdd was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update StoryToAdd with id=${req.params.id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating StoryToAdd with id=" + req.params.id
        });
      });
}

getStoryToAddById =  (req, res) => {
    stories_to_addDB.getStoryToAddById(req.params.id)
        .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(400).send({
                message: `Cannot find StoryToAdd with id=${req.params.id}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving StoryToAdd with id=" + req.params.id
            });
          });
}

getAllStoryToAdd =  (req, res) => {
    stories_to_addDB.getAllStoryToAdd()
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


module.exports = {
    createStoryToAdd,
    deleteStoryToAddById,
    updateStoryToAddById,
    getStoryToAddById,
    getAllStoryToAdd
}