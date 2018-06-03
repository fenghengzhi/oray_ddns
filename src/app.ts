import config from '../config';
import Axios from 'axios';
import * as cheerio from 'cheerio';

const {username, password, hostname, interval} = config;

// console.log('start')

function updateIp() {
    // console.log('start1')
    Axios.get('http://ddns.oray.com/checkip')
        .then(res => res.data)
        .then(html => cheerio.load(html))
        .then($ => $('body').text())
        // .then(d => console.log(d))
        .then(d => {
            const ip = d.match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/)[0];
            return Axios.get(`http://${username}:${password}@ddns.oray.com/ph/update?hostname=${hostname}&myip=${ip}`);
        });
}

updateIp();
setInterval(updateIp, interval);
