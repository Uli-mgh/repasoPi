const  {allCharacters} = require ("./controller.character");
const principalCharacters = async (req, res) => {
    const charactersAllApi = await allCharacters();
    res.status(200).send(charactersAllApi);
}
module.exports = {
    principalCharacters
}