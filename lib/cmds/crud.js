module.exports = function (req, res) {
	var body  = req.body;
	//get model from pm;
	var model = req.app.pm[body.model];
	switch (body.op) {
		case 'C':
			var obj   = body.object
			var dbobj = new model(obj);
			dbobj.save((err)=> {
				if (err) {
					return res.json({err: err})
				} else {
					return res.json({res: dbobj});
				}
			});
			break;
		case 'R':
			model.find(body.query || {}, (err, docs)=> {
				if (err) {
					return res.json({err: err})
				} else {
					return res.json({res: docs});
				}
			});
			break;
		case 'U':
			model.update({_id: body.id}, {$set: body.update}, (err, doc)=> {
				if (err) {
					return res.json({err: err})
				} else {
					return res.json({res: 'ok'});
				}
			});
			break;
		case 'D':
			model.remove({_id: body.id}, (err)=> {
				if (err) {
					return res.json({err: err})
				} else {
					return res.json({res: 'ok'});
				}
			});
			break;
		default:
			break;
	}
}