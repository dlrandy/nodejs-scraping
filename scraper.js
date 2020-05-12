const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./parse');

const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
    .then(html => {
        console.log('html');
        const wikiUrls = [];
        for (let i = 0; i < 5; i++) {
          wikiUrls.push($('td > b > a', html)[i].attribs.href);
        }
        console.log(wikiUrls);
        
        return Promise.all(
            wikiUrls.map(function(url) {
              return potusParse('https://en.wikipedia.org' + url);
            })
          );
    })
    .then(function(presidents) {
        console.log(presidents);
      })
    .catch(err => {
        console.error(err);
        
    })


