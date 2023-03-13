const express=require("express")
const requests = require("../controllers/Requests");
const requestsRouter = express.Router();


requestsRouter.route("/")
    .get(requests.getAllRequests)    
    .post(requests.createRequest)
requestsRouter.route("/id/:id")
    .get(requests.getRequestById)
    .put(requests.updateRequestById)
    .delete(requests.deleteRequestById)

    
module.exports = requestsRouter;