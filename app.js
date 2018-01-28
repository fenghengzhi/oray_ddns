const fetch = require('node-fetch');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
const username = config.username;
const password = config.password;
const hostname = config.hostname;
const interval = config.interval;

function updateIp() {
    fetch('http://ddns.oray.com/checkip')
        .then(res => res.text())
        .then((d) => {
            const ip = d.match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/)[0];
            return fetch(`http://${username}:${password}@ddns.oray.com/ph/update?hostname=${hostname}&myip=${ip}`);
        });
}

setInterval(updateIp, interval);
