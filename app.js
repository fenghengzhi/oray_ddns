const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'))
fetch('http://ddns.oray.com/checkip')
    .then(res => res.text())
    .then((d) => {
        const $ = cheerio.load(d);
        const body = $('body').text();
        const ip = body.replace('Current IP Address: ', '');
        return fetch(`http://username:password@ddns.oray.com/ph/update?hostname=yourhostname&myip=ipaddress`);
    });