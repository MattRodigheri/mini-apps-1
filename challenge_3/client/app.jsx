class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
    }
    this.checkout = this.checkout.bind(this);
    this.form1Next = this.form1Next.bind(this);
    this.form2Next = this.form2Next.bind(this);
    this.form3Next = this.form3Next.bind(this);
    this.purchase = this.purchase.bind(this);
  }

  //function to go from home -> form1
  checkout() {
    this.setState({
      checkoutButton: false,
      form1NextButton: true
    }, () => {console.log("checkout ", this.state.checkoutButton);})
  }
  //function to go from form1 -> form2
  form1Next() {
    var nameInput = (document.getElementById('name').value);
    var emailInput = (document.getElementById('email').value);
    var passwordInput = (document.getElementById('password').value);

    var item = {name: nameInput, email: emailInput, password: passwordInput}

    $.ajax({
      url: 'http://localhost:3000/project',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(item),
      success: () => {
        console.log('added info!');
        this.setState({
          //name, email password

          form1NextButton: false,
          form2NextButton: true
        }, () => {console.log("form1 ",this.state.form1NextButton);})
      },
      error: () => {}
    });

  }
  //function to go from form2 -> form3
  form2Next() {
    this.setState({
      //line1, line2, city, state, zipcode, phonenumber


      form2NextButton: false,
      form3NextButton: true
    }, () => {console.log("form2 ", this.state.form2NextButton);})
  }
  //function to go from form3 -> purchase
  form3Next() {
    this.setState({
      //creditcard, expirydate, cvv, billingzip




      form3NextButton: false,
      purchaseButton: true
    }, () => {console.log("form3 ", this.state.form3NextButton);})
  }
  //function to go from purchase -> home
  purchase() {
    this.setState({
      purchaseButton: false,
      checkoutButton: true
    }, () => {console.log("purchase ", this.state.purchaseButton);})
  }

  render() {
    if (this.state.checkoutButton) {
      return (
        <div>
          <h1>Checkout App</h1>
          <Home checkout={this.checkout}/>
        </div>
      )
    }
    else if (this.state.form1NextButton){
      return (
        <Form1 form1={this.form1Next}/>
      )
    }
    else if (this.state.form2NextButton) {
      return (
        <Form2 form2={this.form2Next}/>
      )
    }
    else if (this.state.form3NextButton) {
      return (
        <Form3 form3={this.form3Next}/>
      )
    }
    else if (this.state.purchaseButton) {
      return (
        <Confirmation purchase={this.purchase}/>
      )
    }
  }
};

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <button id="checkoutButton" onClick={props.checkout}>Checkout</button>
    </div>
  )
}

function Form1(props) {
  return (
    <div>
      <div>Name:<input type="text" id="name"/></div>
      <div>Email:<input type="text" id="email"/></div>
      <div>Password:<input type="text" id="password"/></div>
      <button id="form1NextButton" onClick={props.form1}>Next</button>
    </div>
  )
}

function Form2(props) {
  return (
    <div>
      <div>Address Line 1:<input type="text" id="line1"/></div>
      <div>Address Line 2:<input type="text" id="line2"/></div>
      <div>City:<input type="text" id="city"/></div>
      <div>State:<input type="text" id="state"/></div>
      <div>Zip Code:<input type="text" id="zipcode"/></div>
      <div>Phone Number:<input type="text" id="phonenumber"/></div>
      <button id="form2NextButton" onClick={props.form2}>Next</button>
    </div>
  )
}

function Form3(props) {
  return (
    <div>
      <div>Credit Card Number:<input type="text" id="creditcard"/></div>
      <div>Expiry Date:<input type="text" id="expirydate"/></div>
      <div>CVV:<input type="number" id="cvv"/></div>
      <div>Billing Zip Code:<input type="number" id="billingzip"/></div>
      <button id="form3NextButton" onClick={props.form3}>Next</button>
    </div>
  )
}

function Confirmation(props) {
  return (
    <div>
      <h1>Form Info:</h1>
      <button id="purchaseButton" onClick={props.purchase}>Purchase</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
