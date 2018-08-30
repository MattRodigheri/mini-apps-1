'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phonenumber: '',
      creditcard: '',
      expirydate: '',
      cvv: 0,
      billingzip: 0,
      checkoutButton: false,
      form1NextButton: false,
      form2NextButton: false,
      form3NextButton: false,
      purchaseButton: false
    };
    _this.checkout = _this.checkout.bind(_this);
    _this.form1Next = _this.form1Next.bind(_this);
    _this.form2Next = _this.form2Next.bind(_this);
    _this.form3Next = _this.form3Next.bind(_this);
    _this.purchase = _this.purchase.bind(_this);
    return _this;
  }

  //function to go from home -> form1


  _createClass(App, [{
    key: 'checkout',
    value: function checkout() {
      console.log('checkout button clicked');
    }
    //function to go from form1 -> form2

  }, {
    key: 'form1Next',
    value: function form1Next() {}
    //function to go from form2 -> form3

  }, {
    key: 'form2Next',
    value: function form2Next() {}
    //function to go from form3 -> purchase

  }, {
    key: 'form3Next',
    value: function form3Next() {}
    //function to go from purchase -> home

  }, {
    key: 'purchase',
    value: function purchase() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Checkout App'
        ),
        React.createElement(Home, null),
        React.createElement(Form1, null),
        React.createElement(Form2, null),
        React.createElement(Form3, null),
        React.createElement(Confirmation, null)
      );
    }
  }]);

  return App;
}(React.Component);

function Home(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Home Page'
    ),
    React.createElement(
      'button',
      { id: 'checkoutButton', onClick: props.checkout },
      'Checkout'
    )
  );
}

function Form1(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      'Name:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'Email:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'Password:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'button',
      { id: 'form1NextButton', onClick: props.form1Next },
      'Next'
    )
  );
}

function Form2(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      'Address Line 1:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'Address Line 2:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'City:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'State:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'Zip Code:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'Phone Number:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'button',
      { id: 'form2NextButton', onClick: props.form2Next },
      'Next'
    )
  );
}

function Form3(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      'Credit Card Number:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'Expiry Date:',
      React.createElement('input', { type: 'text' })
    ),
    React.createElement(
      'div',
      null,
      'CVV:',
      React.createElement('input', { type: 'number' })
    ),
    React.createElement(
      'div',
      null,
      'Billing Zip Code:',
      React.createElement('input', { type: 'number' })
    ),
    React.createElement(
      'button',
      { id: 'form3NextButton', onClick: props.form3Next },
      'Next'
    )
  );
}

function Confirmation(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Form Info:'
    ),
    React.createElement(
      'button',
      { id: 'purchaseButton', onClick: props.purchase },
      'Purchase'
    )
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcGNvZGUiLCJwaG9uZW51bWJlciIsImNyZWRpdGNhcmQiLCJleHBpcnlkYXRlIiwiY3Z2IiwiYmlsbGluZ3ppcCIsImNoZWNrb3V0QnV0dG9uIiwiZm9ybTFOZXh0QnV0dG9uIiwiZm9ybTJOZXh0QnV0dG9uIiwiZm9ybTNOZXh0QnV0dG9uIiwicHVyY2hhc2VCdXR0b24iLCJjaGVja291dCIsImJpbmQiLCJmb3JtMU5leHQiLCJmb3JtMk5leHQiLCJmb3JtM05leHQiLCJwdXJjaGFzZSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhvbWUiLCJwcm9wcyIsIkZvcm0xIiwiRm9ybTIiLCJGb3JtMyIsIkNvbmZpcm1hdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGdCQUFVLEVBSEM7QUFJWEMsYUFBTyxFQUpJO0FBS1hDLGFBQU8sRUFMSTtBQU1YQyxZQUFNLEVBTks7QUFPWE4sYUFBTyxFQVBJO0FBUVhPLGVBQVMsRUFSRTtBQVNYQyxtQkFBYSxFQVRGO0FBVVhDLGtCQUFZLEVBVkQ7QUFXWEMsa0JBQVksRUFYRDtBQVlYQyxXQUFLLENBWk07QUFhWEMsa0JBQVksQ0FiRDtBQWNYQyxzQkFBZ0IsS0FkTDtBQWVYQyx1QkFBaUIsS0FmTjtBQWdCWEMsdUJBQWlCLEtBaEJOO0FBaUJYQyx1QkFBaUIsS0FqQk47QUFrQlhDLHNCQUFnQjtBQWxCTCxLQUFiO0FBb0JBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVELElBQWYsT0FBakI7QUFDQSxVQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixPQUFqQjtBQUNBLFVBQUtHLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlSCxJQUFmLE9BQWpCO0FBQ0EsVUFBS0ksUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNKLElBQWQsT0FBaEI7QUExQlk7QUEyQmI7O0FBRUQ7Ozs7OytCQUNXO0FBQ1RLLGNBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNEO0FBQ0Q7Ozs7Z0NBQ1ksQ0FFWDtBQUNEOzs7O2dDQUNZLENBRVg7QUFDRDs7OztnQ0FDWSxDQUVYO0FBQ0Q7Ozs7K0JBQ1csQ0FFVjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxJQUFELE9BRkY7QUFHRSw0QkFBQyxLQUFELE9BSEY7QUFJRSw0QkFBQyxLQUFELE9BSkY7QUFLRSw0QkFBQyxLQUFELE9BTEY7QUFNRSw0QkFBQyxZQUFEO0FBTkYsT0FERjtBQVVEOzs7O0VBOURlQyxNQUFNQyxTOztBQWlFeEIsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsSUFBRyxnQkFBWCxFQUE0QixTQUFTQSxNQUFNWCxRQUEzQztBQUFBO0FBQUE7QUFGRixHQURGO0FBTUQ7O0FBRUQsU0FBU1ksS0FBVCxDQUFlRCxLQUFmLEVBQXNCO0FBQ3BCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBVSxxQ0FBTyxNQUFLLE1BQVo7QUFBVixLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBVyxxQ0FBTyxNQUFLLE1BQVo7QUFBWCxLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBYyxxQ0FBTyxNQUFLLE1BQVo7QUFBZCxLQUhGO0FBSUU7QUFBQTtBQUFBLFFBQVEsSUFBRyxpQkFBWCxFQUE2QixTQUFTQSxNQUFNVCxTQUE1QztBQUFBO0FBQUE7QUFKRixHQURGO0FBUUQ7O0FBRUQsU0FBU1csS0FBVCxDQUFlRixLQUFmLEVBQXNCO0FBQ3BCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBb0IscUNBQU8sTUFBSyxNQUFaO0FBQXBCLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFvQixxQ0FBTyxNQUFLLE1BQVo7QUFBcEIsS0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQVUscUNBQU8sTUFBSyxNQUFaO0FBQVYsS0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQVcscUNBQU8sTUFBSyxNQUFaO0FBQVgsS0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQWMscUNBQU8sTUFBSyxNQUFaO0FBQWQsS0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQWtCLHFDQUFPLE1BQUssTUFBWjtBQUFsQixLQU5GO0FBT0U7QUFBQTtBQUFBLFFBQVEsSUFBRyxpQkFBWCxFQUE2QixTQUFTQSxNQUFNUixTQUE1QztBQUFBO0FBQUE7QUFQRixHQURGO0FBV0Q7O0FBRUQsU0FBU1csS0FBVCxDQUFlSCxLQUFmLEVBQXNCO0FBQ3BCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBd0IscUNBQU8sTUFBSyxNQUFaO0FBQXhCLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFpQixxQ0FBTyxNQUFLLE1BQVo7QUFBakIsS0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQVMscUNBQU8sTUFBSyxRQUFaO0FBQVQsS0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQXNCLHFDQUFPLE1BQUssUUFBWjtBQUF0QixLQUpGO0FBS0U7QUFBQTtBQUFBLFFBQVEsSUFBRyxpQkFBWCxFQUE2QixTQUFTQSxNQUFNUCxTQUE1QztBQUFBO0FBQUE7QUFMRixHQURGO0FBU0Q7O0FBRUQsU0FBU1csWUFBVCxDQUFzQkosS0FBdEIsRUFBNkI7QUFDM0IsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxJQUFHLGdCQUFYLEVBQTRCLFNBQVNBLE1BQU1OLFFBQTNDO0FBQUE7QUFBQTtBQUZGLEdBREY7QUFNRDs7QUFFRFcsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgbGluZTE6ICcnLFxuICAgICAgbGluZTI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXBjb2RlOiAnJyxcbiAgICAgIHBob25lbnVtYmVyOiAnJyxcbiAgICAgIGNyZWRpdGNhcmQ6ICcnLFxuICAgICAgZXhwaXJ5ZGF0ZTogJycsXG4gICAgICBjdnY6IDAsXG4gICAgICBiaWxsaW5nemlwOiAwLFxuICAgICAgY2hlY2tvdXRCdXR0b246IGZhbHNlLFxuICAgICAgZm9ybTFOZXh0QnV0dG9uOiBmYWxzZSxcbiAgICAgIGZvcm0yTmV4dEJ1dHRvbjogZmFsc2UsXG4gICAgICBmb3JtM05leHRCdXR0b246IGZhbHNlLFxuICAgICAgcHVyY2hhc2VCdXR0b246IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuY2hlY2tvdXQgPSB0aGlzLmNoZWNrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtMU5leHQgPSB0aGlzLmZvcm0xTmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybTJOZXh0ID0gdGhpcy5mb3JtMk5leHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm0zTmV4dCA9IHRoaXMuZm9ybTNOZXh0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wdXJjaGFzZSA9IHRoaXMucHVyY2hhc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vZnVuY3Rpb24gdG8gZ28gZnJvbSBob21lIC0+IGZvcm0xXG4gIGNoZWNrb3V0KCkge1xuICAgIGNvbnNvbGUubG9nKCdjaGVja291dCBidXR0b24gY2xpY2tlZCcpXG4gIH1cbiAgLy9mdW5jdGlvbiB0byBnbyBmcm9tIGZvcm0xIC0+IGZvcm0yXG4gIGZvcm0xTmV4dCgpIHtcblxuICB9XG4gIC8vZnVuY3Rpb24gdG8gZ28gZnJvbSBmb3JtMiAtPiBmb3JtM1xuICBmb3JtMk5leHQoKSB7XG5cbiAgfVxuICAvL2Z1bmN0aW9uIHRvIGdvIGZyb20gZm9ybTMgLT4gcHVyY2hhc2VcbiAgZm9ybTNOZXh0KCkge1xuXG4gIH1cbiAgLy9mdW5jdGlvbiB0byBnbyBmcm9tIHB1cmNoYXNlIC0+IGhvbWVcbiAgcHVyY2hhc2UoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNoZWNrb3V0IEFwcDwvaDE+XG4gICAgICAgIDxIb21lIC8+XG4gICAgICAgIDxGb3JtMSAvPlxuICAgICAgICA8Rm9ybTIgLz5cbiAgICAgICAgPEZvcm0zIC8+XG4gICAgICAgIDxDb25maXJtYXRpb24gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ib21lIFBhZ2U8L2gxPlxuICAgICAgPGJ1dHRvbiBpZD1cImNoZWNrb3V0QnV0dG9uXCIgb25DbGljaz17cHJvcHMuY2hlY2tvdXR9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gRm9ybTEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5OYW1lOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PkVtYWlsOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PlBhc3N3b3JkOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiZm9ybTFOZXh0QnV0dG9uXCIgb25DbGljaz17cHJvcHMuZm9ybTFOZXh0fT5OZXh0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gRm9ybTIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5BZGRyZXNzIExpbmUgMTo8aW5wdXQgdHlwZT1cInRleHRcIiAvPjwvZGl2PlxuICAgICAgPGRpdj5BZGRyZXNzIExpbmUgMjo8aW5wdXQgdHlwZT1cInRleHRcIiAvPjwvZGl2PlxuICAgICAgPGRpdj5DaXR5OjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PlN0YXRlOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PlppcCBDb2RlOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PlBob25lIE51bWJlcjo8aW5wdXQgdHlwZT1cInRleHRcIiAvPjwvZGl2PlxuICAgICAgPGJ1dHRvbiBpZD1cImZvcm0yTmV4dEJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLmZvcm0yTmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEZvcm0zKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+Q3JlZGl0IENhcmQgTnVtYmVyOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PkV4cGlyeSBEYXRlOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PkNWVjo8aW5wdXQgdHlwZT1cIm51bWJlclwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PkJpbGxpbmcgWmlwIENvZGU6PGlucHV0IHR5cGU9XCJudW1iZXJcIiAvPjwvZGl2PlxuICAgICAgPGJ1dHRvbiBpZD1cImZvcm0zTmV4dEJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLmZvcm0zTmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIENvbmZpcm1hdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Rm9ybSBJbmZvOjwvaDE+XG4gICAgICA8YnV0dG9uIGlkPVwicHVyY2hhc2VCdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5wdXJjaGFzZX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==