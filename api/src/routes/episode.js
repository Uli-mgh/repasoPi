const {getEpisodes} = require ("./controller.episode");
const principalEpisodes = async(req, res) => {
    const episodeAllApi = await getEpisodes();
    res.status(200).send(episodeAllApi);
}
module.exports = {
    principalEpisodes
}