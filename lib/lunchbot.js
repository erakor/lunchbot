module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var lunchBot = {
    text : 'Hello, ' + userName + '!'
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(lunchBot);
  } else {
    return res.status(200).end();
  }
}
