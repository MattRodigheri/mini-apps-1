'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'checkout'
});

//get
var getFormData = function getFormData(callback) {
  connection.query('SELECT * FROM formdata', function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

//post
var insertFormData = function insertFormData(item, callback) {
  //connection.query((`INSERT INTO formdata (name, email, password, line1, line2, city, state, zipcode, phonenumber, creditcard, expirydate, cvv, billingzip) VALUES("${item.name}", "${item.email}", "${item.password}", "${item.line1}", "${item.line2}", "${item.city}", "${item.state}", "${item.zipcode}", "${item.phonenumber}", "${item.creditcard}", "${item.expirydate}", ${item.cvv}, ${item.billingzip});`), function (error, results, fields) {
  connection.query('INSERT INTO formdata (name, email, password) VALUES("' + item.name + '", "' + item.email + '", "' + item.password + '");', function (error, results, fields) {
    console.log(error);
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  });
};

module.exports.getFormData = getFormData;
module.exports.insertFormData = insertFormData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RhdGFiYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJkYXRhYmFzZSIsImdldEZvcm1EYXRhIiwiY2FsbGJhY2siLCJxdWVyeSIsImVycm9yIiwicmVzdWx0cyIsImZpZWxkcyIsImluc2VydEZvcm1EYXRhIiwiaXRlbSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7O0FBRUEsSUFBSUMsYUFBYUYsTUFBTUcsZ0JBQU4sQ0FBdUI7QUFDdENDLFFBQVcsV0FEMkI7QUFFdENDLFFBQVcsTUFGMkI7QUFHdENDLFlBQVc7QUFIMkIsQ0FBdkIsQ0FBakI7O0FBTUE7QUFDQSxJQUFJQyxjQUFjLFNBQWRBLFdBQWMsQ0FBU0MsUUFBVCxFQUFtQjtBQUNuQ04sYUFBV08sS0FBWCxDQUFpQix3QkFBakIsRUFBMkMsVUFBVUMsS0FBVixFQUFpQkMsT0FBakIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQzNFLFFBQUlGLEtBQUosRUFBVztBQUNURixlQUFTRSxLQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0xGLGVBQVMsSUFBVCxFQUFlRyxPQUFmO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0FSRDs7QUFVQTtBQUNBLElBQUlFLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBU0MsSUFBVCxFQUFlTixRQUFmLEVBQXlCO0FBQzVDO0FBQ0FOLGFBQVdPLEtBQVgsMkRBQTBFSyxLQUFLQyxJQUEvRSxZQUEwRkQsS0FBS0UsS0FBL0YsWUFBMkdGLEtBQUtHLFFBQWhILFVBQWdJLFVBQVVQLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxNQUExQixFQUFrQztBQUNoS00sWUFBUUMsR0FBUixDQUFZVCxLQUFaO0FBQ0EsUUFBSUEsS0FBSixFQUFXO0FBQ1RGLGVBQVNFLEtBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEYsZUFBUyxJQUFUO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0FWRDs7QUFhQVksT0FBT0MsT0FBUCxDQUFlZCxXQUFmLEdBQTZCQSxXQUE3QjtBQUNBYSxPQUFPQyxPQUFQLENBQWVSLGNBQWYsR0FBZ0NBLGNBQWhDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15c3FsID0gcmVxdWlyZSgnbXlzcWwnKTtcblxudmFyIGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgaG9zdCAgICAgOiAnbG9jYWxob3N0JyxcbiAgdXNlciAgICAgOiAncm9vdCcsXG4gIGRhdGFiYXNlIDogJ2NoZWNrb3V0J1xufSk7XG5cbi8vZ2V0XG52YXIgZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGZvcm1kYXRhJywgZnVuY3Rpb24gKGVycm9yLCByZXN1bHRzLCBmaWVsZHMpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgfVxuICB9KVxufTtcblxuLy9wb3N0XG52YXIgaW5zZXJ0Rm9ybURhdGEgPSBmdW5jdGlvbihpdGVtLCBjYWxsYmFjaykge1xuICAvL2Nvbm5lY3Rpb24ucXVlcnkoKGBJTlNFUlQgSU5UTyBmb3JtZGF0YSAobmFtZSwgZW1haWwsIHBhc3N3b3JkLCBsaW5lMSwgbGluZTIsIGNpdHksIHN0YXRlLCB6aXBjb2RlLCBwaG9uZW51bWJlciwgY3JlZGl0Y2FyZCwgZXhwaXJ5ZGF0ZSwgY3Z2LCBiaWxsaW5nemlwKSBWQUxVRVMoXCIke2l0ZW0ubmFtZX1cIiwgXCIke2l0ZW0uZW1haWx9XCIsIFwiJHtpdGVtLnBhc3N3b3JkfVwiLCBcIiR7aXRlbS5saW5lMX1cIiwgXCIke2l0ZW0ubGluZTJ9XCIsIFwiJHtpdGVtLmNpdHl9XCIsIFwiJHtpdGVtLnN0YXRlfVwiLCBcIiR7aXRlbS56aXBjb2RlfVwiLCBcIiR7aXRlbS5waG9uZW51bWJlcn1cIiwgXCIke2l0ZW0uY3JlZGl0Y2FyZH1cIiwgXCIke2l0ZW0uZXhwaXJ5ZGF0ZX1cIiwgJHtpdGVtLmN2dn0sICR7aXRlbS5iaWxsaW5nemlwfSk7YCksIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0cywgZmllbGRzKSB7XG4gIGNvbm5lY3Rpb24ucXVlcnkoKGBJTlNFUlQgSU5UTyBmb3JtZGF0YSAobmFtZSwgZW1haWwsIHBhc3N3b3JkKSBWQUxVRVMoXCIke2l0ZW0ubmFtZX1cIiwgXCIke2l0ZW0uZW1haWx9XCIsIFwiJHtpdGVtLnBhc3N3b3JkfVwiKTtgKSwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHRzLCBmaWVsZHMpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5nZXRGb3JtRGF0YSA9IGdldEZvcm1EYXRhO1xubW9kdWxlLmV4cG9ydHMuaW5zZXJ0Rm9ybURhdGEgPSBpbnNlcnRGb3JtRGF0YTtcbiJdfQ==