const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/vampire';
//this is where our mongodb server is running on our computer

//test is what we are calling our database, a db called test is automatically created when we connect

mongoose.connect(connectionString)

mongoose.connection.on('connected', () => {
	console.log('Mongoose connected to' + connectionString)
})

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose disconnected')
})

mongoose.connection.on('error', (err) => {
	console.log(err, 'Mongoose error')
})