const express = require("express");
const router = express.Router();
//middleware
const { checkAuth } = require("../middleware/auth");
require("dotenv").config();

//controllers
const CardController = require("../controller/CardController");

router.put("/update/:cardId?", checkAuth, CardController.update);
router.post("/card", checkAuth, CardController.add);
router.delete("/delete/:cardId?", checkAuth, CardController.delete);
router.get("/user/:userId?", checkAuth, CardController.getCardsByUser);
router.get("/:cardId?", checkAuth, CardController.getCardById);
router.get("/cards/all", checkAuth, CardController.getAllCards);

module.exports = router;
