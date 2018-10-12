const mongoose = require('mongoose');



const vampireSchema  = mongoose.Schema({
	name: {type: String, required: true},
	hair_color: {type: String, default: 'blonde'},
	dob: Date,
	loves: [String],
	location: String,
	gender: String,
	victims: {type: Number, required: true}
})

module.exports = mongoose.model('Vampire', vampireSchema)