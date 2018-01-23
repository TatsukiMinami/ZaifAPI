var zaif = require('zaif.jp');
var api = zaif.PublicApi;
api.lastPrice('mona_jpy').then(console.log)
{ last_price: 16.4 }