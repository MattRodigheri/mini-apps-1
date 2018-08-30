var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'checkout'
});

//get
var getFormData = function(callback) {
  connection.query('SELECT * FROM formdata', function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  })
};

//post
var insertFormData = function(item, callback) {
  //connection.query((`INSERT INTO formdata (name, email, password, line1, line2, city, state, zipcode, phonenumber, creditcard, expirydate, cvv, billingzip) VALUES("${item.name}", "${item.email}", "${item.password}", "${item.line1}", "${item.line2}", "${item.city}", "${item.state}", "${item.zipcode}", "${item.phonenumber}", "${item.creditcard}", "${item.expirydate}", ${item.cvv}, ${item.billingzip});`), function (error, results, fields) {
  connection.query((`INSERT INTO formdata (name, email, password) VALUES("${item.name}", "${item.email}", "${item.password}");`), function (error, results, fields) {
    console.log(error)
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  });
}


module.exports.getFormData = getFormData;
module.exports.insertFormData = insertFormData;
