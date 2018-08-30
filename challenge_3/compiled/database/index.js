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
  connection.query('INSERT INTO formdata (name, email, password, line1, line2, city, state, zipcode, phonenumber, creditcard, expirydate, cvv, billingzip) VALUES("' + item.name + '", "' + item.email + '", "' + item.password + '", "' + item.line1 + '", "' + item.line2 + '", "' + item.city + '", "' + item.state + '", "' + item.zipcode + '", "' + item.phonenumber + '", "' + item.creditcard + '", "' + item.expirydate + '", ' + item.cvv + ', ' + item.billingzip + ');', function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  });
};

module.exports.getFormData = getFormData;
module.exports.insertFormData = insertFormData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJkYXRhYmFzZSIsImdldEZvcm1EYXRhIiwiY2FsbGJhY2siLCJxdWVyeSIsImVycm9yIiwicmVzdWx0cyIsImZpZWxkcyIsImluc2VydEZvcm1EYXRhIiwiaXRlbSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJzdGF0ZSIsInppcGNvZGUiLCJwaG9uZW51bWJlciIsImNyZWRpdGNhcmQiLCJleHBpcnlkYXRlIiwiY3Z2IiwiYmlsbGluZ3ppcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7O0FBRUEsSUFBSUMsYUFBYUYsTUFBTUcsZ0JBQU4sQ0FBdUI7QUFDdENDLFFBQVcsV0FEMkI7QUFFdENDLFFBQVcsTUFGMkI7QUFHdENDLFlBQVc7QUFIMkIsQ0FBdkIsQ0FBakI7O0FBTUE7QUFDQSxJQUFJQyxjQUFjLFNBQWRBLFdBQWMsQ0FBU0MsUUFBVCxFQUFtQjtBQUNuQ04sYUFBV08sS0FBWCxDQUFpQix3QkFBakIsRUFBMkMsVUFBVUMsS0FBVixFQUFpQkMsT0FBakIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQzNFLFFBQUlGLEtBQUosRUFBVztBQUNURixlQUFTRSxLQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0xGLGVBQVMsSUFBVCxFQUFlRyxPQUFmO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0FSRDs7QUFVQTtBQUNBLElBQUlFLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBU0MsSUFBVCxFQUFlTixRQUFmLEVBQXlCO0FBQzVDTixhQUFXTyxLQUFYLHFKQUFvS0ssS0FBS0MsSUFBekssWUFBb0xELEtBQUtFLEtBQXpMLFlBQXFNRixLQUFLRyxRQUExTSxZQUF5TkgsS0FBS0ksS0FBOU4sWUFBME9KLEtBQUtLLEtBQS9PLFlBQTJQTCxLQUFLTSxJQUFoUSxZQUEyUU4sS0FBS08sS0FBaFIsWUFBNFJQLEtBQUtRLE9BQWpTLFlBQStTUixLQUFLUyxXQUFwVCxZQUFzVVQsS0FBS1UsVUFBM1UsWUFBNFZWLEtBQUtXLFVBQWpXLFdBQWlYWCxLQUFLWSxHQUF0WCxVQUE4WFosS0FBS2EsVUFBblksU0FBb1osVUFBVWpCLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxNQUExQixFQUFrQztBQUNwYixRQUFJRixLQUFKLEVBQVc7QUFDVEYsZUFBU0UsS0FBVDtBQUNELEtBRkQsTUFFTztBQUNMRixlQUFTLElBQVQ7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQVJEOztBQVdBb0IsT0FBT0MsT0FBUCxDQUFldEIsV0FBZixHQUE2QkEsV0FBN0I7QUFDQXFCLE9BQU9DLE9BQVAsQ0FBZWhCLGNBQWYsR0FBZ0NBLGNBQWhDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15c3FsID0gcmVxdWlyZSgnbXlzcWwnKTtcblxudmFyIGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgaG9zdCAgICAgOiAnbG9jYWxob3N0JyxcbiAgdXNlciAgICAgOiAncm9vdCcsXG4gIGRhdGFiYXNlIDogJ2NoZWNrb3V0J1xufSk7XG5cbi8vZ2V0XG52YXIgZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGZvcm1kYXRhJywgZnVuY3Rpb24gKGVycm9yLCByZXN1bHRzLCBmaWVsZHMpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgfVxuICB9KVxufTtcblxuLy9wb3N0XG52YXIgaW5zZXJ0Rm9ybURhdGEgPSBmdW5jdGlvbihpdGVtLCBjYWxsYmFjaykge1xuICBjb25uZWN0aW9uLnF1ZXJ5KChgSU5TRVJUIElOVE8gZm9ybWRhdGEgKG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgbGluZTEsIGxpbmUyLCBjaXR5LCBzdGF0ZSwgemlwY29kZSwgcGhvbmVudW1iZXIsIGNyZWRpdGNhcmQsIGV4cGlyeWRhdGUsIGN2diwgYmlsbGluZ3ppcCkgVkFMVUVTKFwiJHtpdGVtLm5hbWV9XCIsIFwiJHtpdGVtLmVtYWlsfVwiLCBcIiR7aXRlbS5wYXNzd29yZH1cIiwgXCIke2l0ZW0ubGluZTF9XCIsIFwiJHtpdGVtLmxpbmUyfVwiLCBcIiR7aXRlbS5jaXR5fVwiLCBcIiR7aXRlbS5zdGF0ZX1cIiwgXCIke2l0ZW0uemlwY29kZX1cIiwgXCIke2l0ZW0ucGhvbmVudW1iZXJ9XCIsIFwiJHtpdGVtLmNyZWRpdGNhcmR9XCIsIFwiJHtpdGVtLmV4cGlyeWRhdGV9XCIsICR7aXRlbS5jdnZ9LCAke2l0ZW0uYmlsbGluZ3ppcH0pO2ApLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdHMsIGZpZWxkcykge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzLmdldEZvcm1EYXRhID0gZ2V0Rm9ybURhdGE7XG5tb2R1bGUuZXhwb3J0cy5pbnNlcnRGb3JtRGF0YSA9IGluc2VydEZvcm1EYXRhO1xuIl19