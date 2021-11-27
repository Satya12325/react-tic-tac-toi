
import './App.css';

import { useState } from 'react'
import { useEffect } from 'react'
function App(props) {
 // const [positions, setPositions] = useState(new Array(9).fill(null))
  
  return (
    <div className="App App-header">
      <Box/>
    </div>
  );
}

function Box(){
  const [marks, setMarks] = useState([0,0,0,0,0,0,0,0,0])
  const [player,setPlayer] = useState(2)
  useEffect(() => {
    const matching = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[6,4,2]
    ]
    for(let c of matching) {
      if(marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1){
        
        alert("player 2 is Win")
      }
      if(marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2){
       
        alert("player 1 is Win")
      }
    }
  })
  const changeElm = (i) => {
    const m = [...marks];
    if(m[i]===0){
      m[i] = player;
      setMarks(m);
      setPlayer(player === 1 ? 2 : 1);
    }
   else{
     alert("Please cleack on Empty Box")
   }
  }
  return (
    <>
    <div className="box">
      <div>
        <Eliment prop={marks[0]} position={0} changeElm={changeElm}></Eliment>
        <Eliment prop={marks[1]} position={1} changeElm={changeElm}></Eliment>
        <Eliment prop={marks[2]} position={2} changeElm={changeElm}></Eliment>
      </div>
      <div>
        <Eliment prop={marks[3]} position={3} changeElm={changeElm}></Eliment>
        <Eliment prop={marks[4]} position={4} changeElm={changeElm}></Eliment>
        <Eliment prop={marks[5]} position={5} changeElm={changeElm}></Eliment>
      </div>
      <div>
        <Eliment prop={marks[6]} position={6} changeElm={changeElm}></Eliment>
        <Eliment prop={marks[7]} position={7} changeElm={changeElm}></Eliment>
        <Eliment prop={marks[8]} position={8} changeElm={changeElm}></Eliment>
      </div>
      
      
    </div>
    <h1></h1>
    </>
  )
}

function Eliment({prop, changeElm, position}){
  return <div  className={`block img${prop}`}
  onClick={e=>changeElm(position)}
  ></div>
}
export default App;
