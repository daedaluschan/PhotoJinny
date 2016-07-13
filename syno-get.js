var config = require('./config');
var Syno = require('syno');
var syno = new Syno({
    // Requests protocol : 'http' or 'https' (default: http)
    protocol: 'https',
    // DSM host : ip, domain name (default: localhost)
    host: '192.168.1.105',
    // DSM port : port number (default: 5000)
    port: '5001',
    // DSM User account (required)
    account: config.syno_user,
    // DSM User password (required)
    passwd: 'my_password'
    // DSM User password (optional, default: 6.0)
    apiVersion: '6.0'
});
