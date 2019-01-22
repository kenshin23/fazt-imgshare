const express = require('express');

const config = require('./server/config')

//Starting the database connection:
require('./database')
//Starting the server:
const app = config(express());

app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'))
});