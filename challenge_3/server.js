const express = require('express');
const app = express();
const databaseMethods = require('./database/index.js');
const bodyParser = require('body-parser');
console.log(__dirname + './public/')
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({extended: true}), bodyParser.json());
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//   res.header('Access-Control-Expose-Headers', 'Content-Length');
// });

// GET method route
app.get('/project', (req, res) => {
  databaseMethods.getFormData((error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

// var testData = {
//   "name": "Matt",
//   "email":"matt@matt.com",
//   "password": "1234",
//   "line1": "10 Good Street",
//   "line2": "#5",
//   "city": "San Fran",
//   "state": "CA",
//   "zipcode": "12345",
//   "phonenumber": "1234567890",
//   "creditcard": "12345678970123456",
//   "expirydate": "01/01/10",
//   "cvv": 123,
//   "billingzip": 12345
// };

// POST method route
app.post('/project', function (req, res) {
  databaseMethods.insertFormData(req.body, (error) => {
    // console.log(error)
    if (error) {
      res.send(error);
    } else {
      res.status(201).send()
    }
  })
})


app.listen(3000, () => console.log('listening on port 3000!'))
