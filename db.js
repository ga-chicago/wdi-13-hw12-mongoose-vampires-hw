const mongoose = require('mongoose');

const conectionString = 'mongodb://localhost/vampire';

mongoose.connect(conectionString);

mongoose.connection.on('connected', () => {
		console.log('Mongoose connected to' + conectionString);
})
mongoose.connection.on('disconnected', () => {
		console.log('Mongoose is disconnected');
})
mongoose.connection.on('error', (err) => {
		console.log(err);
})