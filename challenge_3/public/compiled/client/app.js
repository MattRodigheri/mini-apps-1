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

      var nameInput = document.getElementById('name').value;
      var emailInput = document.getElementById('email').value;
      var passwordInput = document.getElementById('password').value;

      var item = { name: nameInput, email: emailInput, password: passwordInput };

      $.ajax({
        url: 'http://localhost:3000/project',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(item),
        success: function success() {
          console.log('added info!');
          _this3.setState({
            //name, email password

            form1NextButton: false,
            form2NextButton: true
          }, function () {
            console.log("form1 ", _this3.state.form1NextButton);
          });
        },
        error: function error() {}
      });
    }
    //function to go from form2 -> form3

  }, {
    key: 'form2Next',
    value: function form2Next() {
      var _this4 = this;

      this.setState({
        //line1, line2, city, state, zipcode, phonenumber


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
        //creditcard, expirydate, cvv, billingzip


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
      React.createElement('input', { type: 'text', id: 'name' })
    ),
    React.createElement(
      'div',
      null,
      'Email:',
      React.createElement('input', { type: 'text', id: 'email' })
    ),
    React.createElement(
      'div',
      null,
      'Password:',
      React.createElement('input', { type: 'text', id: 'password' })
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
      React.createElement('input', { type: 'text', id: 'line1' })
    ),
    React.createElement(
      'div',
      null,
      'Address Line 2:',
      React.createElement('input', { type: 'text', id: 'line2' })
    ),
    React.createElement(
      'div',
      null,
      'City:',
      React.createElement('input', { type: 'text', id: 'city' })
    ),
    React.createElement(
      'div',
      null,
      'State:',
      React.createElement('input', { type: 'text', id: 'state' })
    ),
    React.createElement(
      'div',
      null,
      'Zip Code:',
      React.createElement('input', { type: 'text', id: 'zipcode' })
    ),
    React.createElement(
      'div',
      null,
      'Phone Number:',
      React.createElement('input', { type: 'text', id: 'phonenumber' })
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
      React.createElement('input', { type: 'text', id: 'creditcard' })
    ),
    React.createElement(
      'div',
      null,
      'Expiry Date:',
      React.createElement('input', { type: 'text', id: 'expirydate' })
    ),
    React.createElement(
      'div',
      null,
      'CVV:',
      React.createElement('input', { type: 'number', id: 'cvv' })
    ),
    React.createElement(
      'div',
      null,
      'Billing Zip Code:',
      React.createElement('input', { type: 'number', id: 'billingzip' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcGNvZGUiLCJwaG9uZW51bWJlciIsImNyZWRpdGNhcmQiLCJleHBpcnlkYXRlIiwiY3Z2IiwiYmlsbGluZ3ppcCIsImNoZWNrb3V0QnV0dG9uIiwiZm9ybTFOZXh0QnV0dG9uIiwiZm9ybTJOZXh0QnV0dG9uIiwiZm9ybTNOZXh0QnV0dG9uIiwicHVyY2hhc2VCdXR0b24iLCJjaGVja291dCIsImJpbmQiLCJmb3JtMU5leHQiLCJmb3JtMk5leHQiLCJmb3JtM05leHQiLCJwdXJjaGFzZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm5hbWVJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImVtYWlsSW5wdXQiLCJwYXNzd29yZElucHV0IiwiaXRlbSIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiY29udGVudFR5cGUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJlcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSG9tZSIsInByb3BzIiwiRm9ybTEiLCJmb3JtMSIsIkZvcm0yIiwiZm9ybTIiLCJGb3JtMyIsImZvcm0zIiwiQ29uZmlybWF0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxnQkFBVSxFQUhDO0FBSVhDLGFBQU8sRUFKSTtBQUtYQyxhQUFPLEVBTEk7QUFNWEMsWUFBTSxFQU5LO0FBT1hOLGFBQU8sRUFQSTtBQVFYTyxlQUFTLEVBUkU7QUFTWEMsbUJBQWEsRUFURjtBQVVYQyxrQkFBWSxFQVZEO0FB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LEtBQXhCO0FBQVQsS0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQXNCLHFDQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFlBQXhCO0FBQXRCLEtBSkY7QUFLRTtBQUFBO0FBQUEsUUFBUSxJQUFHLGlCQUFYLEVBQTZCLFNBQVNBLE1BQU1NLEtBQTVDO0FBQUE7QUFBQTtBQUxGLEdBREY7QUFTRDs7QUFFRCxTQUFTQyxZQUFULENBQXNCUCxLQUF0QixFQUE2QjtBQUMzQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFRLElBQUcsZ0JBQVgsRUFBNEIsU0FBU0EsTUFBTXhCLFFBQTNDO0FBQUE7QUFBQTtBQUZGLEdBREY7QUFNRDs7QUFFRGdDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QjVCLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBsaW5lMTogJycsXG4gICAgICBsaW5lMjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcGNvZGU6ICcnLFxuICAgICAgcGhvbmVudW1iZXI6ICcnLFxuICAgICAgY3JlZGl0Y2FyZDogJycsXG4gICAgICBleHBpcnlkYXRlOiAnJyxcbiAgICAgIGN2djogMCxcbiAgICAgIGJpbGxpbmd6aXA6IDAsXG4gICAgICBjaGVja291dEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGZvcm0xTmV4dEJ1dHRvbjogZmFsc2UsXG4gICAgICBmb3JtMk5leHRCdXR0b246IGZhbHNlLFxuICAgICAgZm9ybTNOZXh0QnV0dG9uOiBmYWxzZSxcbiAgICAgIHB1cmNoYXNlQnV0dG9uOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmNoZWNrb3V0ID0gdGhpcy5jaGVja291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybTFOZXh0ID0gdGhpcy5mb3JtMU5leHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm0yTmV4dCA9IHRoaXMuZm9ybTJOZXh0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtM05leHQgPSB0aGlzLmZvcm0zTmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHVyY2hhc2UgPSB0aGlzLnB1cmNoYXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvL2Z1bmN0aW9uIHRvIGdvIGZyb20gaG9tZSAtPiBmb3JtMVxuICBjaGVja291dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrb3V0QnV0dG9uOiBmYWxzZSxcbiAgICAgIGZvcm0xTmV4dEJ1dHRvbjogdHJ1ZVxuICAgIH0sICgpID0+IHtjb25zb2xlLmxvZyhcImNoZWNrb3V0IFwiLCB0aGlzLnN0YXRlLmNoZWNrb3V0QnV0dG9uKTt9KVxuICB9XG4gIC8vZnVuY3Rpb24gdG8gZ28gZnJvbSBmb3JtMSAtPiBmb3JtMlxuICBmb3JtMU5leHQoKSB7XG4gICAgdmFyIG5hbWVJbnB1dCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlKTtcbiAgICB2YXIgZW1haWxJbnB1dCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZSk7XG4gICAgdmFyIHBhc3N3b3JkSW5wdXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJykudmFsdWUpO1xuXG4gICAgdmFyIGl0ZW0gPSB7bmFtZTogbmFtZUlucHV0LCBlbWFpbDogZW1haWxJbnB1dCwgcGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXR9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2plY3QnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoaXRlbSksXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRlZCBpbmZvIScpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAvL25hbWUsIGVtYWlsIHBhc3N3b3JkXG5cbiAgICAgICAgICBmb3JtMU5leHRCdXR0b246IGZhbHNlLFxuICAgICAgICAgIGZvcm0yTmV4dEJ1dHRvbjogdHJ1ZVxuICAgICAgICB9LCAoKSA9PiB7Y29uc29sZS5sb2coXCJmb3JtMSBcIix0aGlzLnN0YXRlLmZvcm0xTmV4dEJ1dHRvbik7fSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KTtcblxuICB9XG4gIC8vZnVuY3Rpb24gdG8gZ28gZnJvbSBmb3JtMiAtPiBmb3JtM1xuICBmb3JtMk5leHQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAvL2xpbmUxLCBsaW5lMiwgY2l0eSwgc3RhdGUsIHppcGNvZGUsIHBob25lbnVtYmVyXG5cblxuICAgICAgZm9ybTJOZXh0QnV0dG9uOiBmYWxzZSxcbiAgICAgIGZvcm0zTmV4dEJ1dHRvbjogdHJ1ZVxuICAgIH0sICgpID0+IHtjb25zb2xlLmxvZyhcImZvcm0yIFwiLCB0aGlzLnN0YXRlLmZvcm0yTmV4dEJ1dHRvbik7fSlcbiAgfVxuICAvL2Z1bmN0aW9uIHRvIGdvIGZyb20gZm9ybTMgLT4gcHVyY2hhc2VcbiAgZm9ybTNOZXh0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy9jcmVkaXRjYXJkLCBleHBpcnlkYXRlLCBjdnYsIGJpbGxpbmd6aXBcblxuXG5cblxuICAgICAgZm9ybTNOZXh0QnV0dG9uOiBmYWxzZSxcbiAgICAgIHB1cmNoYXNlQnV0dG9uOiB0cnVlXG4gICAgfSwgKCkgPT4ge2NvbnNvbGUubG9nKFwiZm9ybTMgXCIsIHRoaXMuc3RhdGUuZm9ybTNOZXh0QnV0dG9uKTt9KVxuICB9XG4gIC8vZnVuY3Rpb24gdG8gZ28gZnJvbSBwdXJjaGFzZSAtPiBob21lXG4gIHB1cmNoYXNlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHVyY2hhc2VCdXR0b246IGZhbHNlLFxuICAgICAgY2hlY2tvdXRCdXR0b246IHRydWVcbiAgICB9LCAoKSA9PiB7Y29uc29sZS5sb2coXCJwdXJjaGFzZSBcIiwgdGhpcy5zdGF0ZS5wdXJjaGFzZUJ1dHRvbik7fSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jaGVja291dEJ1dHRvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+Q2hlY2tvdXQgQXBwPC9oMT5cbiAgICAgICAgICA8SG9tZSBjaGVja291dD17dGhpcy5jaGVja291dH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5mb3JtMU5leHRCdXR0b24pe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0xIGZvcm0xPXt0aGlzLmZvcm0xTmV4dH0vPlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm0yTmV4dEJ1dHRvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0yIGZvcm0yPXt0aGlzLmZvcm0yTmV4dH0vPlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm0zTmV4dEJ1dHRvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0zIGZvcm0zPXt0aGlzLmZvcm0zTmV4dH0vPlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnB1cmNoYXNlQnV0dG9uKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29uZmlybWF0aW9uIHB1cmNoYXNlPXt0aGlzLnB1cmNoYXNlfS8+XG4gICAgICApXG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ib21lIFBhZ2U8L2gxPlxuICAgICAgPGJ1dHRvbiBpZD1cImNoZWNrb3V0QnV0dG9uXCIgb25DbGljaz17cHJvcHMuY2hlY2tvdXR9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gRm9ybTEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5OYW1lOjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiLz48L2Rpdj5cbiAgICAgIDxkaXY+RW1haWw6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiLz48L2Rpdj5cbiAgICAgIDxkaXY+UGFzc3dvcmQ6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiLz48L2Rpdj5cbiAgICAgIDxidXR0b24gaWQ9XCJmb3JtMU5leHRCdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5mb3JtMX0+TmV4dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEZvcm0yKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+QWRkcmVzcyBMaW5lIDE6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsaW5lMVwiLz48L2Rpdj5cbiAgICAgIDxkaXY+QWRkcmVzcyBMaW5lIDI6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsaW5lMlwiLz48L2Rpdj5cbiAgICAgIDxkaXY+Q2l0eTo8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIi8+PC9kaXY+XG4gICAgICA8ZGl2PlN0YXRlOjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3RhdGVcIi8+PC9kaXY+XG4gICAgICA8ZGl2PlppcCBDb2RlOjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiemlwY29kZVwiLz48L2Rpdj5cbiAgICAgIDxkaXY+UGhvbmUgTnVtYmVyOjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVudW1iZXJcIi8+PC9kaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiZm9ybTJOZXh0QnV0dG9uXCIgb25DbGljaz17cHJvcHMuZm9ybTJ9Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBGb3JtMyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PkNyZWRpdCBDYXJkIE51bWJlcjo8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNyZWRpdGNhcmRcIi8+PC9kaXY+XG4gICAgICA8ZGl2PkV4cGlyeSBEYXRlOjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZXhwaXJ5ZGF0ZVwiLz48L2Rpdj5cbiAgICAgIDxkaXY+Q1ZWOjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJjdnZcIi8+PC9kaXY+XG4gICAgICA8ZGl2PkJpbGxpbmcgWmlwIENvZGU6PGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImJpbGxpbmd6aXBcIi8+PC9kaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiZm9ybTNOZXh0QnV0dG9uXCIgb25DbGljaz17cHJvcHMuZm9ybTN9Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBDb25maXJtYXRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkZvcm0gSW5mbzo8L2gxPlxuICAgICAgPGJ1dHRvbiBpZD1cInB1cmNoYXNlQnV0dG9uXCIgb25DbGljaz17cHJvcHMucHVyY2hhc2V9PlB1cmNoYXNlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=