module.exports = function (app) {
  app.get('/ping', function (req, res) {
    res.send('<h1>Pong</h1>');
  })
};
