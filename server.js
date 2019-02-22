var express = require('express');
var db = require('./models');
var app = express();

app.use(express.urlencoded({ extended: false }));

// GET /bikes
app.get('/bikes', function (req, res) {
  db.bike.findAll().then(function (bikes) {
    res.json(bikes);
  });
});
// POST (CREATE) new or find a bike
app.post('/bikes', function (req, res) {
  db.bike.findOrCreate({
    where: {
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      price: (req.body.price)
    }
  }).spread(function (bike, created) {
    res.redirect('/bikes');
  });
});
// GET one bike
app.get('/bikes/:id', function (req, res) {
  db.bike.findOne({
    where: { id: req.params.id }
  }).then(function (bike) {
    res.json(bike);
  });
});
// PUT (UPDATE) one bike
app.put('/bikes/:id', function (req, res) {
  db.bike.update({
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    price: req.body.price
  }, {
      where: { id: req.params.id }
    }).then(function (bike) {
      res.json(bike)
    });
});
// DELETE
app.delete('/bikes/:id', function (req, res) {
  db.bike.destroy({
    where: { id: req.params.id }
  }).then(function () {
    res.redirect('/bikes');
  });
});

app.listen(3000);