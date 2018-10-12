const mongoose = require('mongoose');

const conectionString = 'monogdb://localhost/test';

mongoose.connect(conectionString);

mongoose.connection.on('connected', () => {
		
})