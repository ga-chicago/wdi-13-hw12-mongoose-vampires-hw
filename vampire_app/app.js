// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');

const vampires = require('./populateVampires.js');

// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/test';

// 4. Open your mongoose connection
mongoose.connect(connectionString,  {useNewUrlParser: true });

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
	console.log(`Mongoose is disconnected`);
});

mongoose.connection.on('error', (err) => {
	console.log(err, 'Mongoose error');
});


/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// INSERT USING MONGOOSE

// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampires,(err, data) => {
//     console.log("Added Provided Vampire Data")
//     mongoose.connection.close();
//   });


// ### Add some new vampire data
// Vampire.create({
// 	name: 'Kiss-Shot Acerola-Orion Heart-Under-Blade',
// 	hair_color: 'gold',
// 	eye_color: 'gold',
// 	dob: new Date(1420, 4, 20, 5, 50),
// 	loves: ['doughnuts', 'men in samurai armour'],
// 	location: 'Eikou Cram School',
// 	gender: 'f',
// 	victims: 3759
// 	}, (err, createdVamp) => {
// 		if (err){console.log(err);}
// 		else {console.log("---------- Created VAMP ----------", createdVamp);}
// });

// Vampire.create({
// 	name: 'Lilith Sahl',
// 	hair_color: 'red',
// 	eye_color: 'yellow',
// 	dob: new Date(2085, 9, 26, 23, 22),
// 	loves: ['medicine', 'humans'],
// 	location: 'Rome',
// 	gender: 'f',
// 	victims: 0
// }, (err, createdVamp) => {
// 		if (err){console.log(err);}
// 		else {console.log("---------- Created VAMP ----------", createdVamp);}
// });

// Vampire.create({
// 	name: 'Alucard',
// 	hair_color: 'black',
// 	eye_color: 'red',
// 	dob: new Date(1450, 11, 15, 3, 30),
// 	loves: ['himself', 'Queen Elizabeth II'],
// 	location: 'Vatican',
// 	gender: 'm',
// 	victims: 5284
// }, (err, createdVamp) => {
// 		if (err){console.log(err);}
// 		else {console.log("---------- Created VAMP ----------", createdVamp);}		
// });

// Vampire.create({
// 	name: 'Dio Brando',
// 	hair_color: 'blonde',
// 	eye_color: 'orange',
// 	dob: new Date(1867, 3, 9, 20, 2),
// 	loves: ['red wine', 'reading'],
// 	location: 'Joestar Estate',
// 	gender: 'm',
// 	victims: 1
// }, (err, createdVamp) => {
// 		if (err){console.log(err);}
// 		else {console.log("---------- Created VAMP ----------", createdVamp);}		
// });


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Find all the vampires that that are females
Vampire.find({gender: 'f'}, (err, foundFemales) => {
		if (err){
			console.log(err);
		} else {
			console.log("---------- foundFemales ---------\n", foundFemales);
		}	
	}
);

// have greater than 500 victims
Vampire.find({victims: {$gt: 500}}, (err, foundMoreThan500) => {
		if (err){
			console.log(err);
		} else {
			console.log("---------- foundMoreThan500 ---------\n", foundMoreThan500);
		}	
	}
);

// have fewer than or equal to 150 victims
Vampire.find({victims: {$lte: 150}}, (err, foundLessThan150) => {
		if (err){
			console.log(err);
		} else {
			console.log("---------- foundLessThan150 ---------\n", foundLessThan150);
		}	
	}
);

// have a victim count is not equal to 210234
Vampire.find({victims: {$ne: 210234}}, (err, foundNot210234) => {
		if (err){
			console.log(err);
		} else {
			console.log("---------- foundNot210234 ---------\n", foundNot210234);
		}	
	}
);

// have greater than 150 AND fewer than 500 victims
Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, foundBetween150and500) => {
		if (err){
			console.log(err);
		} else {
			console.log("---------- foundBetween150and500 ---------\n", foundBetween150and500);
		}	
	}
);

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
