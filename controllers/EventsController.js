const Users = require('../models').events;
const validator = require('validator');

const createevent = async function (req, res) {
  res.setHeader('ContentType', 'application/json');
  const body = req.body; //Post Request

  if (!body.eventName) {
    return ReE(res, 'Please enter the event name', 422);
  } else if (!body.eventDate) {
    return ReE(res, 'Please enter the event date', 422);
  } else if (!body.eventTime) {
    return ReE(res, 'Please enter the event time', 422);
  } else if (!body.eventLocation) {
    return ReE(res, 'Please enter the event location', 422);
  } else {
    let err, user

    [err, user] = await to(createevent(body));
    if (err) return ReE(res, err, 422);

    return ReS(res, user, 201);
  }
}
module.exports.create = createevents;

const updateevent = async function (userInfo) {
  let err, events, data;
  events = req.events;
  data = req.body;
  events.set(data);
  if (err) {
    if (typeof err == "object" && typeof err.message != "undefined") {
      err = err.message;
    }

    if (typeof code !== "undefined") res.statusCode = code;
    res.statusCode = 422;
    return res.json({ success: false, error: err });
  }

  return res.json(events);
};

module.exports.update = updateevents;

const getevents = async function (req, res) {
  let err, events;
  let events = parseInt(req.params.eventName);
  res.setHeader("Content-Type", "application/json");
  [err, events] = await to(events.findByPk(eventName));
  if (!events){
      res.statusCode = 402;
      return res.json({ success: false, error: err})
  } 
        return res.json(events);

  
}
module.exports.get = getevents;

const deleteevents = async function(req, res) {
    let err, events;
    events = req.events;
    [err, events] = await to(events.delete());
    if (!events) {
      res.statusCode = 404;
      return res.json({ success: false, error: err });
    }
  };
  module.exports.delete = deleteevents;
  