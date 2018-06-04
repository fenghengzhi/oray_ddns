const {username, password, hostname, interval} = require('../config.json');
import Axios from 'axios';
import * as cheerio from 'cheerio';


// console.log('start')

function updateIp() {
    // console.log('start1')
    // Axios.get('http://ddns.oray.com/checkip')
    //     .then(res => res.data)
    //     .then(html => cheerio.load(html))
    //     .then($ => $('body').text())
    //     // .then(d => console.log(d))
    //     .then(body => {
    //         const ip = body.match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/)[0];
    //         // console.log(ip, `http://${username}:${password}@ddns.oray.com/ph/update?hostname=${hostname}&myip=${ip}`)
    //         return Axios.get(`http://${username}:${password}@ddns.oray.com/ph/update?hostname=${hostname}&myip=${ip}`)
    //     });
    Axios.get(`http://${username}:${password}@ddns.oray.com/ph/update?hostname=${hostname}`)
        .then(res => console.log(res.data))
        .catch(err => console.log('error'))
}

updateIp();
setInterval(updateIp, interval);
