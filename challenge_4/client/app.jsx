import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   player1: true,
    //   player2: false
    // }
  //this.pieceInColumn = this.pieceInColumn.bind(this);
  }

  //functions:
  pieceInColumn() {
    console.log('clicked')
  }

  render() {
    return (
      <div>
        <div id="board">
          <div className="row">
            <Box coords="a1" dropPiece={this.pieceInColumn}/>
            <Box coords="a2" dropPiece={this.pieceInColumn}/>
            <Box coords="a3" dropPiece={this.pieceInColumn}/>
            <Box coords="a4" dropPiece={this.pieceInColumn}/>
            <Box coords="a5" dropPiece={this.pieceInColumn}/>
            <Box coords="a6" dropPiece={this.pieceInColumn}/>
            <Box coords="a7" dropPiece={this.pieceInColumn}/>
            <Box coords="a8" dropPiece={this.pieceInColumn}/>
          </div>
          <div className="row">
            <Box coords="b1" dropPiece={this.pieceInColumn}/>
            <Box coords="b2" dropPiece={this.pieceInColumn}/>
            <Box coords="b3" dropPiece={this.pieceInColumn}/>
            <Box coords="b4" dropPiece={this.pieceInColumn}/>
            <Box coords="b5" dropPiece={this.pieceInColumn}/>
            <Box coords="b6" dropPiece={this.pieceInColumn}/>
            <Box coords="b7" dropPiece={this.pieceInColumn}/>
            <Box coords="b8" dropPiece={this.pieceInColumn}/>
          </div>
          <div className="row">
            <Box coords="c1" dropPiece={this.pieceInColumn}/>
            <Box coords="c2" dropPiece={this.pieceInColumn}/>
            <Box coords="c3" dropPiece={this.pieceInColumn}/>
            <Box coords="c4" dropPiece={this.pieceInColumn}/>
            <Box coords="c5" dropPiece={this.pieceInColumn}/>
            <Box coords="c6" dropPiece={this.pieceInColumn}/>
            <Box coords="c7" dropPiece={this.pieceInColumn}/>
            <Box coords="c8" dropPiece={this.pieceInColumn}/>
          </div>
          <div className="row">
            <Box coords="d1" dropPiece={this.pieceInColumn}/>
            <Box coords="d2" dropPiece={this.pieceInColumn}/>
            <Box coords="d3" dropPiece={this.pieceInColumn}/>
            <Box coords="d4" dropPiece={this.pieceInColumn}/>
            <Box coords="d5" dropPiece={this.pieceInColumn}/>
            <Box coords="d6" dropPiece={this.pieceInColumn}/>
            <Box coords="d7" dropPiece={this.pieceInColumn}/>
            <Box coords="d8" dropPiece={this.pieceInColumn}/>
          </div>
          <div className="row">
            <Box coords="e1" dropPiece={this.pieceInColumn}/>
            <Box coords="e2" dropPiece={this.pieceInColumn}/>
            <Box coords="e3" dropPiece={this.pieceInColumn}/>
            <Box coords="e4" dropPiece={this.pieceInColumn}/>
            <Box coords="e5" dropPiece={this.pieceInColumn}/>
            <Box coords="e6" dropPiece={this.pieceInColumn}/>
            <Box coords="e7" dropPiece={this.pieceInColumn}/>
            <Box coords="e8" dropPiece={this.pieceInColumn}/>
          </div>
          <div className="row">
            <Box coords="f1" dropPiece={this.pieceInColumn}/>
            <Box coords="f2" dropPiece={this.pieceInColumn}/>
            <Box coords="f3" dropPiece={this.pieceInColumn}/>
            <Box coords="f4" dropPiece={this.pieceInColumn}/>
            <Box coords="f5" dropPiece={this.pieceInColumn}/>
            <Box coords="f6" dropPiece={this.pieceInColumn}/>
            <Box coords="f7" dropPiece={this.pieceInColumn}/>
            <Box coords="f8" dropPiece={this.pieceInColumn}/>
          </div>
          <div className="row">
            <Box coords="g1" dropPiece={this.pieceInColumn}/>
            <Box coords="g2" dropPiece={this.pieceInColumn}/>
            <Box coords="g3" dropPiece={this.pieceInColumn}/>
            <Box coords="g4" dropPiece={this.pieceInColumn}/>
            <Box coords="g5" dropPiece={this.pieceInColumn}/>
            <Box coords="g6" dropPiece={this.pieceInColumn}/>
            <Box coords="g7" dropPiece={this.pieceInColumn}/>
            <Box coords="g8" dropPiece={this.pieceInColumn}/>
          </div>
          <div className="row">
            <Box coords="f1" dropPiece={this.pieceInColumn}/>
            <Box coords="f2" dropPiece={this.pieceInColumn}/>
            <Box coords="f3" dropPiece={this.pieceInColumn}/>
            <Box coords="f4" dropPiece={this.pieceInColumn}/>
            <Box coords="f5" dropPiece={this.pieceInColumn}/>
            <Box coords="f6" dropPiece={this.pieceInColumn}/>
            <Box coords="f7" dropPiece={this.pieceInColumn}/>
            <Box coords="f8" dropPiece={this.pieceInColumn}/>
          </div>
        </div>
      </div>
    )
  }
}


//Components:
function Box(props) {
  return <div className="box" id={props.coords} onClick={props.dropPiece}></div>;
}

ReactDOM.render(<App />, document.getElementById('app'));
