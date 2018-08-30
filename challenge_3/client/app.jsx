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
      checkoutButton: false,
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
    console.log('checkout button clicked')
  }
  //function to go from form1 -> form2
  form1Next() {

  }
  //function to go from form2 -> form3
  form2Next() {

  }
  //function to go from form3 -> purchase
  form3Next() {

  }
  //function to go from purchase -> home
  purchase() {

  }

  render() {
    return (
      <div>
        <h1>Checkout App</h1>
        <Home />
        <Form1 />
        <Form2 />
        <Form3 />
        <Confirmation />
      </div>
    )
  }
}

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
      <div>Name:<input type="text" /></div>
      <div>Email:<input type="text" /></div>
      <div>Password:<input type="text" /></div>
      <button id="form1NextButton" onClick={props.form1Next}>Next</button>
    </div>
  )
}

function Form2(props) {
  return (
    <div>
      <div>Address Line 1:<input type="text" /></div>
      <div>Address Line 2:<input type="text" /></div>
      <div>City:<input type="text" /></div>
      <div>State:<input type="text" /></div>
      <div>Zip Code:<input type="text" /></div>
      <div>Phone Number:<input type="text" /></div>
      <button id="form2NextButton" onClick={props.form2Next}>Next</button>
    </div>
  )
}

function Form3(props) {
  return (
    <div>
      <div>Credit Card Number:<input type="text" /></div>
      <div>Expiry Date:<input type="text" /></div>
      <div>CVV:<input type="number" /></div>
      <div>Billing Zip Code:<input type="number" /></div>
      <button id="form3NextButton" onClick={props.form3Next}>Next</button>
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
