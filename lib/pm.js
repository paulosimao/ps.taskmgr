var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/taskmgr');

var taskSchema = mongoose.Schema({
	name: String,
	complete: Boolean
}, {
	toObject: {
		virtuals: true
	},
	toJSON: {
		virtuals: true
	}
});

var recid = taskSchema.virtual('recid');
recid.get(function () {
	return this._id.toString();
});

var taskListSchema = mongoose.Schema({
	name: String
});

module.exports = {
	task: mongoose.model('Task', taskSchema),
	tasklist: mongoose.model('TaskList', taskListSchema)
}