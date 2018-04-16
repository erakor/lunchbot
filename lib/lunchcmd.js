// var tools = require('./tools');
var request = require("request");


module.exports = function (req, res, body) {
  var title       = req.body.title;
  var userName    = req.body.user_name;
  var channelName = req.body.channel_name;
  var text        = req.body.text;
  var command     = req.body.command;
  var token       = req.body.token;
  var apiURL      = "https://api.zerocater.com/v3/";

  var url = "https://api.zerocater.com/v3/companies/3NFY/meals";

  function getDateFormat(reqDate) {
    var today = new Date();
    var dd    = today.getDate();
    var mm    = today.getMonth()+1; //January is 0!
    var yyyy  = today.getFullYear();

    if(dd<10) {
      dd='0'+dd
    }

    if(mm<10) {
      mm='0'+mm
    }

    if (reqDate === "tomorrow") {
      dd += 1;
    }

    date = yyyy + '-' + mm + '-' + dd;

    return date
  }

  // Src: https://gist.github.com/kmaida/6045266
  function convertTimestamp(timestamp) {
    var   d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
          yyyy = d.getFullYear(),
          mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
          dd = ('0' + d.getDate()).slice(-2),     // Add leading 0.
          time;

    // ie: 2013-02-18
    time = yyyy + '-' + mm + '-' + dd;

    return time;
  }

  if (text === "today" || text === "tomorrow" || text ==="") {

    if (text === "") {
      text === "today";
    }

    // Format requested date to yyyy-mm-dd
    search_date = getDateFormat(text);

    request({url: url, json: true}, function (error, response, body) {

      for (var i = 0; i < body.length; i++) {
        if (convertTimestamp(body[i].time)  === search_date) {
              var obj = {
                title: body[i].name,
                text: body[i].vendor_name,
                thumb_url: body[i].vendor_image_url
              }
              results.push(obj);
            }

          }
          var msg = {
            text: "Today's lunch:" ,
            attachments:
              results
          };

      return res.status(200).json(msg);
    });
  }
  else {
    msg = "No idea what lunch is on " + text;
    return res.status(200).json(msg);
  }

  var results = [];

};
