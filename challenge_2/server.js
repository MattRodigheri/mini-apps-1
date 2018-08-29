var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static('./client'));

//GET method route
app.get('/samples', function (req, res) {
  fs.readFile('./samples/csv_report.csv', (err, data) => {
    if (err) {
      res.status(500)
      res.send(err)
    } else {
      console.log('successful get')
      res.send(data)
    }
  })
})

// POST method route
app.post('/samples', function (req, res) {
  //take in data from form
  //var data = 'hi';
  //if (err) {
  //   res.status(500)
  //   res.send(err)
  // } else {
    //console.log('hey')
    res.status(201).send(req.data)
  //}
})

app.listen(3000, () => console.log('listening on port 3000!'))
