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
      checkoutButton: true,
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
      var _this2 = this;

      this.setState({
        checkoutButton: false,
        form1NextButton: true
      }, function () {
        console.log("checkout ", _this2.state.checkoutButton);
      });
    }
    //function to go from form1 -> form2

  }, {
    key: 'form1Next',
    value: function form1Next() {
      var _this3 = this;

      this.setState({
        form1NextButton: false,
        form2NextButton: true
      }, function () {
        console.log("form1 ", _this3.state.form1NextButton);
      });
    }
    //function to go from form2 -> form3

  }, {
    key: 'form2Next',
    value: function form2Next() {
      var _this4 = this;

      this.setState({
        form2NextButton: false,
        form3NextButton: true
      }, function () {
        console.log("form2 ", _this4.state.form2NextButton);
      });
    }
    //function to go from form3 -> purchase

  }, {
    key: 'form3Next',
    value: function form3Next() {
      var _this5 = this;

      this.setState({
        form3NextButton: false,
        purchaseButton: true
      }, function () {
        console.log("form3 ", _this5.state.form3NextButton);
      });
    }
    //function to go from purchase -> home

  }, {
    key: 'purchase',
    value: function purchase() {
      var _this6 = this;

      this.setState({
        purchaseButton: false,
        checkoutButton: true
      }, function () {
        console.log("purchase ", _this6.state.purchaseButton);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.checkoutButton) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Checkout App'
          ),
          React.createElement(Home, { checkout: this.checkout })
        );
      } else if (this.state.form1NextButton) {
        return React.createElement(Form1, { form1: this.form1Next });
      } else if (this.state.form2NextButton) {
        return React.createElement(Form2, { form2: this.form2Next });
      } else if (this.state.form3NextButton) {
        return React.createElement(Form3, { form3: this.form3Next });
      } else if (this.state.purchaseButton) {
        return React.createElement(Confirmation, { purchase: this.purchase });
      }
      // else {
      //   this.state.checkoutButton = true;
      // }
    }
  }]);

  return App;
}(React.Component);

;

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
      { id: 'form1NextButton', onClick: props.form1 },
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
      { id: 'form2NextButton', onClick: props.form2 },
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
      { id: 'form3NextButton', onClick: props.form3 },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcGNvZGUiLCJwaG9uZW51bWJlciIsImNyZWRpdGNhcmQiLCJleHBpcnlkYXRlIiwiY3Z2IiwiYmlsbGluZ3ppcCIsImNoZWNrb3V0QnV0dG9uIiwiZm9ybTFOZXh0QnV0dG9uIiwiZm9ybTJOZXh0QnV0dG9uIiwiZm9ybTNOZXh0QnV0dG9uIiwicHVyY2hhc2VCdXR0b24iLCJjaGVja291dCIsImJpbmQiLCJmb3JtMU5leHQiLCJmb3JtMk5leHQiLCJmb3JtM05leHQiLCJwdXJjaGFzZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSG9tZSIsInByb3BzIiwiRm9ybTEiLCJmb3JtMSIsIkZvcm0yIiwiZm9ybTIiLCJGb3JtMyIsImZvcm0zIiwiQ29uZmlybWF0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsZ0JBQVUsRUFIQztBQUlYQyxhQUFPLEVBSkk7QUFLWEMsYUFBTyxFQUxJO0FBTVhDLFlBQU0sRUFOSztBQU9YTixhQUFPLEVBUEk7QUFRWE8sZUFBUyxFQVJFO0FBU1hDLG1CQUFhLEVBVEY7QUFVWEMsa0JBQVksRUFWRDtBQVdYQyxrQkFBWSxFQVhEO0FBWVhDLFdBQUssQ0FaTTtBQWFYQyxrQkFBWSxDQWJEO0FBY1hDLHNCQUFnQixJQWRMO0FBZVhDLHVCQUFpQixLQWZOO0FBZ0JYQyx1QkFBaUIsS0FoQk47QUFpQlhDLHVCQUFpQixLQWpCTjtBQWtCWEMsc0JBQWdCO0FBbEJM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QixLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBaUIscUNBQU8sTUFBSyxNQUFaO0FBQWpCLEtBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFTLHFDQUFPLE1BQUssUUFBWjtBQUFULEtBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFzQixxQ0FBTyxNQUFLLFFBQVo7QUFBdEIsS0FKRjtBQUtFO0FBQUE7QUFBQSxRQUFRLElBQUcsaUJBQVgsRUFBNkIsU0FBU0EsTUFBTU0sS0FBNUM7QUFBQTtBQUFBO0FBTEYsR0FERjtBQVNEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JQLEtBQXRCLEVBQTZCO0FBQzNCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsSUFBRyxnQkFBWCxFQUE0QixTQUFTQSxNQUFNUCxRQUEzQztBQUFBO0FBQUE7QUFGRixHQURGO0FBTUQ7O0FBRURlLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGxpbmUxOiAnJyxcbiAgICAgIGxpbmUyOiAnJyxcbiAgICAgIGNpdHk6ICcnLFxuICAgICAgc3RhdGU6ICcnLFxuICAgICAgemlwY29kZTogJycsXG4gICAgICBwaG9uZW51bWJlcjogJycsXG4gICAgICBjcmVkaXRjYXJkOiAnJyxcbiAgICAgIGV4cGlyeWRhdGU6ICcnLFxuICAgICAgY3Z2OiAwLFxuICAgICAgYmlsbGluZ3ppcDogMCxcbiAgICAgIGNoZWNrb3V0QnV0dG9uOiB0cnVlLFxuICAgICAgZm9ybTFOZXh0QnV0dG9uOiBmYWxzZSxcbiAgICAgIGZvcm0yTmV4dEJ1dHRvbjogZmFsc2UsXG4gICAgICBmb3JtM05leHRCdXR0b246IGZhbHNlLFxuICAgICAgcHVyY2hhc2VCdXR0b246IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuY2hlY2tvdXQgPSB0aGlzLmNoZWNrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtMU5leHQgPSB0aGlzLmZvcm0xTmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybTJOZXh0ID0gdGhpcy5mb3JtMk5leHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm0zTmV4dCA9IHRoaXMuZm9ybTNOZXh0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wdXJjaGFzZSA9IHRoaXMucHVyY2hhc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vZnVuY3Rpb24gdG8gZ28gZnJvbSBob21lIC0+IGZvcm0xXG4gIGNoZWNrb3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tvdXRCdXR0b246IGZhbHNlLFxuICAgICAgZm9ybTFOZXh0QnV0dG9uOiB0cnVlXG4gICAgfSwgKCkgPT4ge2NvbnNvbGUubG9nKFwiY2hlY2tvdXQgXCIsIHRoaXMuc3RhdGUuY2hlY2tvdXRCdXR0b24pO30pXG4gIH1cbiAgLy9mdW5jdGlvbiB0byBnbyBmcm9tIGZvcm0xIC0+IGZvcm0yXG4gIGZvcm0xTmV4dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm0xTmV4dEJ1dHRvbjogZmFsc2UsXG4gICAgICBmb3JtMk5leHRCdXR0b246IHRydWVcbiAgICB9LCAoKSA9PiB7Y29uc29sZS5sb2coXCJmb3JtMSBcIix0aGlzLnN0YXRlLmZvcm0xTmV4dEJ1dHRvbik7fSlcbiAgfVxuICAvL2Z1bmN0aW9uIHRvIGdvIGZyb20gZm9ybTIgLT4gZm9ybTNcbiAgZm9ybTJOZXh0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybTJOZXh0QnV0dG9uOiBmYWxzZSxcbiAgICAgIGZvcm0zTmV4dEJ1dHRvbjogdHJ1ZVxuICAgIH0sICgpID0+IHtjb25zb2xlLmxvZyhcImZvcm0yIFwiLCB0aGlzLnN0YXRlLmZvcm0yTmV4dEJ1dHRvbik7fSlcbiAgfVxuICAvL2Z1bmN0aW9uIHRvIGdvIGZyb20gZm9ybTMgLT4gcHVyY2hhc2VcbiAgZm9ybTNOZXh0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybTNOZXh0QnV0dG9uOiBmYWxzZSxcbiAgICAgIHB1cmNoYXNlQnV0dG9uOiB0cnVlXG4gICAgfSwgKCkgPT4ge2NvbnNvbGUubG9nKFwiZm9ybTMgXCIsIHRoaXMuc3RhdGUuZm9ybTNOZXh0QnV0dG9uKTt9KVxuICB9XG4gIC8vZnVuY3Rpb24gdG8gZ28gZnJvbSBwdXJjaGFzZSAtPiBob21lXG4gIHB1cmNoYXNlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHVyY2hhc2VCdXR0b246IGZhbHNlLFxuICAgICAgY2hlY2tvdXRCdXR0b246IHRydWVcbiAgICB9LCAoKSA9PiB7Y29uc29sZS5sb2coXCJwdXJjaGFzZSBcIiwgdGhpcy5zdGF0ZS5wdXJjaGFzZUJ1dHRvbik7fSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jaGVja291dEJ1dHRvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+Q2hlY2tvdXQgQXBwPC9oMT5cbiAgICAgICAgICA8SG9tZSBjaGVja291dD17dGhpcy5jaGVja291dH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5mb3JtMU5leHRCdXR0b24pe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0xIGZvcm0xPXt0aGlzLmZvcm0xTmV4dH0vPlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm0yTmV4dEJ1dHRvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0yIGZvcm0yPXt0aGlzLmZvcm0yTmV4dH0vPlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm0zTmV4dEJ1dHRvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0zIGZvcm0zPXt0aGlzLmZvcm0zTmV4dH0vPlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnB1cmNoYXNlQnV0dG9uKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29uZmlybWF0aW9uIHB1cmNoYXNlPXt0aGlzLnB1cmNoYXNlfS8+XG4gICAgICApXG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgdGhpcy5zdGF0ZS5jaGVja291dEJ1dHRvbiA9IHRydWU7XG4gICAgLy8gfVxuICB9XG59O1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ib21lIFBhZ2U8L2gxPlxuICAgICAgPGJ1dHRvbiBpZD1cImNoZWNrb3V0QnV0dG9uXCIgb25DbGljaz17cHJvcHMuY2hlY2tvdXR9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gRm9ybTEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5OYW1lOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PkVtYWlsOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PlBhc3N3b3JkOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiZm9ybTFOZXh0QnV0dG9uXCIgb25DbGljaz17cHJvcHMuZm9ybTF9Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBGb3JtMihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PkFkZHJlc3MgTGluZSAxOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PkFkZHJlc3MgTGluZSAyOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PkNpdHk6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+U3RhdGU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+WmlwIENvZGU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+UGhvbmUgTnVtYmVyOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+PC9kaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiZm9ybTJOZXh0QnV0dG9uXCIgb25DbGljaz17cHJvcHMuZm9ybTJ9Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBGb3JtMyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PkNyZWRpdCBDYXJkIE51bWJlcjo8aW5wdXQgdHlwZT1cInRleHRcIiAvPjwvZGl2PlxuICAgICAgPGRpdj5FeHBpcnkgRGF0ZTo8aW5wdXQgdHlwZT1cInRleHRcIiAvPjwvZGl2PlxuICAgICAgPGRpdj5DVlY6PGlucHV0IHR5cGU9XCJudW1iZXJcIiAvPjwvZGl2PlxuICAgICAgPGRpdj5CaWxsaW5nIFppcCBDb2RlOjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgLz48L2Rpdj5cbiAgICAgIDxidXR0b24gaWQ9XCJmb3JtM05leHRCdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5mb3JtM30+TmV4dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIENvbmZpcm1hdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Rm9ybSBJbmZvOjwvaDE+XG4gICAgICA8YnV0dG9uIGlkPVwicHVyY2hhc2VCdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5wdXJjaGFzZX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==