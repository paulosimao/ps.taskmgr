/**
 * Created by paulo.simao on 25/03/2016.
 */
var crudfacade = {

	r: function (model, query, cb) {
		crudfacade.sendCommand('crud', {op: 'R', model: model, query: query}, cb);
	},

	u: function (model, id, prop, val, cb) {
		var update   = {}
		update[prop] = val;
		crudfacade.sendCommand('crud', {op: 'U', model: model, id: id, update: update}, cb);
	},

	c: function (model, obj, cb) {
		crudfacade.sendCommand('crud', {op: 'C', model: model, object: obj}, cb);
	},

	d: function (model, id, cb) {
		crudfacade.sendCommand('crud', {op: 'D', model: model, id: id}, cb);
	},

	sendCommand: function (cmd, data, cb) {
		$.post('/c/' + cmd, data, cb);
	}
}