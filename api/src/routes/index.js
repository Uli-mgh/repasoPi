const { Router } = require("express");
const {principalCharacters} = require("./characters");
const {principalEpisodes} = require("./episode");

const router = Router();

// Configurar los routers
router.get('/characters', principalCharacters)
router.get('/episodes', principalEpisodes)
module.exports = router;
