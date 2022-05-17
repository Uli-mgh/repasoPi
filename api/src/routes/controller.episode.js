const axios = require('axios');
const {Episode} = require('../db');

const getEpisodes= async () => {
    try{
        let episodeArray = [];
        let episodeApi = 'https://rickandmortyapi.com/api/episode';
        for (let i = 0; i < 3; i++) {
        const dataUrl = await axios.get(episodeApi);
        dataUrl.data.results.map((e) => {
            episodeArray.push({
                name: e.name,
            })
        })
            episodeApi= dataUrl.data.info.next;
}   console.log('devuelve esto', episodeArray);
    episodeArray.map((elementName) => {
        Episode.findOrCreate({
            where: {
                name: elementName.name
            }
        })
    });
    const allEpisodes = await Episode.findAll();
    return allEpisodes;
   }catch (e) {
    console.log(e.message);

   }

}
module.exports = {
    getEpisodes
}