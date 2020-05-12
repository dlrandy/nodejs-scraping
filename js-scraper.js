const rp = require('request-promise');
const url = 'https://www.reddit.com';
const puppeteer = require('puppeteer');
const $ = require('cheerio');

puppeteer.launch()
    .then(browser => browser.newPage())
    .then(page => page.goto(url).then(() => page.content()))
// rp(url)
  .then(function(html){
    //success!
    $('h2', html).each(function() {
        console.log($(this).text());
      });
  })
  .catch(function(err){
    //handle error
  });
