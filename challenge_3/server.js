const express = require('express');
const app = express();
const databaseMethods = require('./database/index.js');
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: true}), bodyParser.json(), express.static(__dirname + './public/'));

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

var testData = {
  "name": "Matt",
  "email":"matt@matt.com",
  "password": "1234",
  "line1": "10 Good Street",
  "line2": "#5",
  "city": "San Fran",
  "state": "CA",
  "zipcode": "12345",
  "phonenumber": "1234567890",
  "creditcard": "12345678970123456",
  "expirydate": "01/01/10",
  "cvv": 123,
  "billingzip": 12345
};

// POST method route
app.post('/project', function (req, res) {
  databaseMethods.insertFormData(testData, (error) => {
    if (error) {
      res.send(error);
    } else {
      res.status(201).send()
    }
  })
})


app.listen(3000, () => console.log('listening on port 3000!'))
