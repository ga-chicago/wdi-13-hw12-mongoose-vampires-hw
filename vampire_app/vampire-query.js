require('./app');
const vampireData = require('./populateVampires')

const Vampire = require('./models/vampire')

Vampire.collection.insertMany(vampireData, (err, data) => {
	if(err) { 
		console.log(err);
	} else {
		console.log('added provided vampire data');
	}
})