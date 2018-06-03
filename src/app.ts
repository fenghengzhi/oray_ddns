import config from '../config';
import Axios from 'axios';

const {username, password, hostname, interval} = config;

function updateIp() {
    Axios.get('http://ddns.oray.com/checkip')
        .then(res => res.text())
        .then((d) => {
            const ip = d.match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/)[0];
            return fetch(`http://${username}:${password}@ddns.oray.com/ph/update?hostname=${hostname}&myip=${ip}`);
        });
}

setInterval(updateIp, interval);
