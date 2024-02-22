const request = require("request");

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;
    films.forEach((film) => {
      film.characters.forEach((characterUrl) => {
        if (characterUrl.includes(/people/${characterId}/)) {
          count++;
        }
      });
    });
    console.log(count);
  } else {
    console.log(