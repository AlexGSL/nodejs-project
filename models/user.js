var mongoose = require('mongoose');

//User Schema
var userSchema =  mongoose.Schema({
	username:{
		type: String,
		require: true
	},

	email:{
		type: String,
		require: true
	},

	password:{
		type: String,
		require: true
	},

	privileges:{
		type: String,
		require: true
	},

	create_date:{
		type: Date,
		default: Date.now
	}
});

var User =  module.exports = mongoose.model('User', userSchema);

// Get Users
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}

// Get User
module.exports.getUserById = function(id, limit){
	User.findById(id, callback);
}

// Add User
module.exports.addUser = function(user, kimit){
	User.create(user, callback);
}

// Update User
module.exports.updateUser = function(id, user, options, callback){
	var query = {_id: id};
	var update = {
		username : user.username,
		email : user.email,
		password : user.password,
		privileges : user.privileges,
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = function(id, callback){
	var query = {_id : id};
	User.remove(query, callback);
}