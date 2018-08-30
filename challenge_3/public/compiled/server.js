'use strict';

var express = require('express');
var app = express();
var databaseMethods = require('./database/index.js');
var bodyParser = require('body-parser');
console.log(__dirname + './public/');
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({ extended: true }), bodyParser.json());
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//   res.header('Access-Control-Expose-Headers', 'Content-Length');
// });

// GET method route
app.get('/project', function (req, res) {
  databaseMethods.getFormData(function (error, data) {
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
  databaseMethods.insertFormData(req.body, function (error) {
    // console.log(error)
    if (error) {
      res.send(error);
    } else {
      res.status(201).send();
    }
  });
});

app.listen(3000, function () {
  return console.log('listening on port 3000!');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsImRhdGFiYXNlTWV0aG9kcyIsImJvZHlQYXJzZXIiLCJjb25zb2xlIiwibG9nIiwiX19kaXJuYW1lIiwidXNlIiwic3RhdGljIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImdldCIsInJlcSIsInJlcyIsImdldEZvcm1EYXRhIiwiZXJyb3IiLCJkYXRhIiwic2VuZCIsInN0YXR1cyIsInBvc3QiLCJpbnNlcnRGb3JtRGF0YSIsImJvZHkiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVUMsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUMsTUFBTUYsU0FBWjtBQUNBLElBQU1HLGtCQUFrQkYsUUFBUSxxQkFBUixDQUF4QjtBQUNBLElBQU1HLGFBQWFILFFBQVEsYUFBUixDQUFuQjtBQUNBSSxRQUFRQyxHQUFSLENBQVlDLFlBQVksV0FBeEI7QUFDQUwsSUFBSU0sR0FBSixDQUFRUixRQUFRUyxNQUFSLENBQWVGLFlBQVksVUFBM0IsQ0FBUjtBQUNBTCxJQUFJTSxHQUFKLENBQVFSLFFBQVFVLFVBQVIsQ0FBbUIsRUFBQ0MsVUFBVSxJQUFYLEVBQW5CLENBQVIsRUFBOENQLFdBQVdRLElBQVgsRUFBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQVYsSUFBSVcsR0FBSixDQUFRLFVBQVIsRUFBb0IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDaENaLGtCQUFnQmEsV0FBaEIsQ0FBNEIsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQzNDLFFBQUlELEtBQUosRUFBVztBQUNURixVQUFJSSxJQUFKLENBQVNGLEtBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEYsVUFBSUssTUFBSixDQUFXLEdBQVgsRUFBZ0JELElBQWhCLENBQXFCRCxJQUFyQjtBQUNEO0FBQ0YsR0FORDtBQU9ELENBUkQ7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0FoQixJQUFJbUIsSUFBSixDQUFTLFVBQVQsRUFBcUIsVUFBVVAsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ3ZDWixrQkFBZ0JtQixjQUFoQixDQUErQlIsSUFBSVMsSUFBbkMsRUFBeUMsVUFBQ04sS0FBRCxFQUFXO0FBQ2xEO0FBQ0EsUUFBSUEsS0FBSixFQUFXO0FBQ1RGLFVBQUlJLElBQUosQ0FBU0YsS0FBVDtBQUNELEtBRkQsTUFFTztBQUNMRixVQUFJSyxNQUFKLENBQVcsR0FBWCxFQUFnQkQsSUFBaEI7QUFDRDtBQUNGLEdBUEQ7QUFRRCxDQVREOztBQVlBakIsSUFBSXNCLE1BQUosQ0FBVyxJQUFYLEVBQWlCO0FBQUEsU0FBTW5CLFFBQVFDLEdBQVIsQ0FBWSx5QkFBWixDQUFOO0FBQUEsQ0FBakIiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGRhdGFiYXNlTWV0aG9kcyA9IHJlcXVpcmUoJy4vZGF0YWJhc2UvaW5kZXguanMnKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuY29uc29sZS5sb2coX19kaXJuYW1lICsgJy4vcHVibGljLycpXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljLycpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pLCBib2R5UGFyc2VyLmpzb24oKSk7XG4vLyBhcHAudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4vLyAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4vLyAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbi8vICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsSEVBRCxQVVQsUEFUQ0gsUE9TVCxERUxFVEUnKTtcbi8vICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnMnLCAnQ29udGVudC1MZW5ndGgnKTtcbi8vIH0pO1xuXG4vLyBHRVQgbWV0aG9kIHJvdXRlXG5hcHAuZ2V0KCcvcHJvamVjdCcsIChyZXEsIHJlcykgPT4ge1xuICBkYXRhYmFzZU1ldGhvZHMuZ2V0Rm9ybURhdGEoKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXMuc2VuZChlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8gdmFyIHRlc3REYXRhID0ge1xuLy8gICBcIm5hbWVcIjogXCJNYXR0XCIsXG4vLyAgIFwiZW1haWxcIjpcIm1hdHRAbWF0dC5jb21cIixcbi8vICAgXCJwYXNzd29yZFwiOiBcIjEyMzRcIixcbi8vICAgXCJsaW5lMVwiOiBcIjEwIEdvb2QgU3RyZWV0XCIsXG4vLyAgIFwibGluZTJcIjogXCIjNVwiLFxuLy8gICBcImNpdHlcIjogXCJTYW4gRnJhblwiLFxuLy8gICBcInN0YXRlXCI6IFwiQ0FcIixcbi8vICAgXCJ6aXBjb2RlXCI6IFwiMTIzNDVcIixcbi8vICAgXCJwaG9uZW51bWJlclwiOiBcIjEyMzQ1Njc4OTBcIixcbi8vICAgXCJjcmVkaXRjYXJkXCI6IFwiMTIzNDU2Nzg5NzAxMjM0NTZcIixcbi8vICAgXCJleHBpcnlkYXRlXCI6IFwiMDEvMDEvMTBcIixcbi8vICAgXCJjdnZcIjogMTIzLFxuLy8gICBcImJpbGxpbmd6aXBcIjogMTIzNDVcbi8vIH07XG5cbi8vIFBPU1QgbWV0aG9kIHJvdXRlXG5hcHAucG9zdCgnL3Byb2plY3QnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgZGF0YWJhc2VNZXRob2RzLmluc2VydEZvcm1EYXRhKHJlcS5ib2R5LCAoZXJyb3IpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcilcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJlcy5zZW5kKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoKVxuICAgIH1cbiAgfSlcbn0pXG5cblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiBjb25zb2xlLmxvZygnbGlzdGVuaW5nIG9uIHBvcnQgMzAwMCEnKSlcbiJdfQ==