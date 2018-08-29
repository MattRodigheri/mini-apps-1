'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'checkout'
});

var getFormData = function getFormData(callback) {
  connection.query('SELECT * FROM formdata', function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJkYXRhYmFzZSIsImdldEZvcm1EYXRhIiwiY2FsbGJhY2siLCJxdWVyeSIsImVycm9yIiwicmVzdWx0cyIsImZpZWxkcyIsImluc2VydEZvcm1EYXRhIiwiaXRlbSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJzdGF0ZSIsInppcGNvZGUiLCJwaG9uZW51bWJlciIsImNyZWRpdGNhcmQiLCJleHBpcnlkYXRlIiwiY3Z2IiwiYmlsbGluZ3ppcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7O0FBRUEsSUFBSUMsYUFBYUYsTUFBTUcsZ0JBQU4sQ0FBdUI7QUFDdENDLFFBQVcsV0FEMkI7QUFFdENDLFFBQVcsTUFGMkI7QUFHdENDLFlBQVc7QUFIMkIsQ0FBdkIsQ0FBakI7O0FBTUEsSUFBSUMsY0FBYyxTQUFkQSxXQUFjLENBQVNDLFFBQVQsRUFBbUI7QUFDbkNOLGFBQVdPLEtBQVgsQ0FBaUIsd0JBQWpCLEVBQTJDLFVBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxNQUExQixFQUFrQztBQUMzRSxRQUFJRixLQUFKLEVBQVc7QUFDVEYsZUFBU0UsS0FBVDtBQUNELEtBRkQsTUFFTztBQUNMRixlQUFTLElBQVQsRUFBZUcsT0FBZjtBQUNEO0FBQ0YsR0FORDtBQU9ELENBUkQ7O0FBVUEsSUFBSUUsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTQyxJQUFULEVBQWVOLFFBQWYsRUFBeUI7QUFDNUNOLGFBQVdPLEtBQVgscUpBQW9LSyxLQUFLQyxJQUF6SyxZQUFvTEQsS0FBS0UsS0FBekwsWUFBcU1GLEtBQUtHLFFBQTFNLFlBQXlOSCxLQUFLSSxLQUE5TixZQUEwT0osS0FBS0ssS0FBL08sWUFBMlBMLEtBQUtNLElBQWhRLFlBQTJRTixLQUFLTyxLQUFoUixZQUE0UlAsS0FBS1EsT0FBalMsWUFBK1NSLEtBQUtTLFdBQXBULFlBQXNVVCxLQUFLVSxVQUEzVSxZQUE0VlYsS0FBS1csVUFBalcsV0FBaVhYLEtBQUtZLEdBQXRYLFVBQThYWixLQUFLYSxVQUFuWSxTQUFvWixVQUFVakIsS0FBVixFQUFpQkMsT0FBakIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ3BiLFFBQUlGLEtBQUosRUFBVztBQUNURixlQUFTRSxLQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0xGLGVBQVMsSUFBVDtBQUNEO0FBQ0YsR0FORDtBQU9ELENBUkQ7O0FBV0FvQixPQUFPQyxPQUFQLENBQWV0QixXQUFmLEdBQTZCQSxXQUE3QjtBQUNBcUIsT0FBT0MsT0FBUCxDQUFlaEIsY0FBZixHQUFnQ0EsY0FBaEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpO1xuXG52YXIgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICBob3N0ICAgICA6ICdsb2NhbGhvc3QnLFxuICB1c2VyICAgICA6ICdyb290JyxcbiAgZGF0YWJhc2UgOiAnY2hlY2tvdXQnXG59KTtcblxudmFyIGdldEZvcm1EYXRhID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBmb3JtZGF0YScsIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0cywgZmllbGRzKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xuICAgIH1cbiAgfSlcbn07XG5cbnZhciBpbnNlcnRGb3JtRGF0YSA9IGZ1bmN0aW9uKGl0ZW0sIGNhbGxiYWNrKSB7XG4gIGNvbm5lY3Rpb24ucXVlcnkoKGBJTlNFUlQgSU5UTyBmb3JtZGF0YSAobmFtZSwgZW1haWwsIHBhc3N3b3JkLCBsaW5lMSwgbGluZTIsIGNpdHksIHN0YXRlLCB6aXBjb2RlLCBwaG9uZW51bWJlciwgY3JlZGl0Y2FyZCwgZXhwaXJ5ZGF0ZSwgY3Z2LCBiaWxsaW5nemlwKSBWQUxVRVMoXCIke2l0ZW0ubmFtZX1cIiwgXCIke2l0ZW0uZW1haWx9XCIsIFwiJHtpdGVtLnBhc3N3b3JkfVwiLCBcIiR7aXRlbS5saW5lMX1cIiwgXCIke2l0ZW0ubGluZTJ9XCIsIFwiJHtpdGVtLmNpdHl9XCIsIFwiJHtpdGVtLnN0YXRlfVwiLCBcIiR7aXRlbS56aXBjb2RlfVwiLCBcIiR7aXRlbS5waG9uZW51bWJlcn1cIiwgXCIke2l0ZW0uY3JlZGl0Y2FyZH1cIiwgXCIke2l0ZW0uZXhwaXJ5ZGF0ZX1cIiwgJHtpdGVtLmN2dn0sICR7aXRlbS5iaWxsaW5nemlwfSk7YCksIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0cywgZmllbGRzKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMuZ2V0Rm9ybURhdGEgPSBnZXRGb3JtRGF0YTtcbm1vZHVsZS5leHBvcnRzLmluc2VydEZvcm1EYXRhID0gaW5zZXJ0Rm9ybURhdGE7XG4iXX0=