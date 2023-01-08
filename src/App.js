import React, { useState } from 'react';
import { FaArrowUp,FaArrowDown, FaSistrix } from 'react-icons/fa';
import './App.css';

var level1TO;
var level2TO;

function App() {

  const [elevate, setElevate] = useState(0);
  const [action, setAction] = useState(true);
  const [status, setStatus] = useState('');





  const elevator ={
    transform: `translate(0, -${elevate}px)`,
    transition: `all 5s linear`
  }




  const btn4 =()=>{

    if(status=='up'){
      setElevate(200);
      setAction(true);
      setStatus('up')

      level2TO = setTimeout(()=>{
        setAction(true);
        setElevate(0);
        setStatus('');
      },5000)
    }
    else{

    setElevate(200);
    setAction(!action);
    setStatus('up')
  
    level2TO = setTimeout(()=>{
      setAction(!action);
      setElevate(0);
      setStatus('');
    },5000)
  }

    console.log('btn 4 value '+action)

  };

  const btn3 =()=>{

    
    console.log('btn3-'+status)

    if(status=='up'){
      setAction(!action)
      setElevate(400)

    }

    if(!action){
      setAction(!action);
      clearTimeout(level1TO);
    }
    else if(status=='dwn'){
      setElevate(400);
      setAction(!action)
    }
    

    console.log('btn 3 value '+action)

  };

  const btn2 =()=>{

    
    console.log('btn2-'+status)

    if(status=='dwn'){
      setAction(!action)
      setElevate(0)
    }

    if(action){
      clearTimeout(level2TO);
      setAction(!action);
    }
    else if(status=='up'){
      setElevate(0)
      setAction(!action)
    }
    

    console.log('btn 2 value '+action)
  };

  const btn1 =()=>{

    if(status=='dwn'){
      setElevate(200);
      setAction(false);
      setStatus('dwn')

      level1TO = setTimeout(()=>{
        setAction(false);
        setElevate(400);
        setStatus('');
      },5000)
    }
    else{
      setElevate(200);
      setAction(!action);
      setStatus('dwn')

      level1TO = setTimeout(()=>{
        setAction(!action);
        setElevate(400);
        setStatus('');
      },5000)
    }

    console.log('btn 1 value '+action)
  };
  
  console.log(action)


  return (

    <>
      <div className="mainDiv">
        <header>
            <h1>Elevator</h1>
        </header>
        <main className="mainSection">
            <div className="elevatorPath">

                <div className="level level2">
                    <h4>Level 2</h4>
                    <div className="switch">
                       <button onClick={btn4}  className="icons" > <FaArrowDown/> </button>
                    </div>
                </div>
                
                <div className="level level1">
                    <h4>Level 1</h4>
                    <div className="switch">
                       <button onClick={btn3}  className="icons" > <FaArrowUp/></button>
                       <button onClick={btn2}  className="icons" > <FaArrowDown/> </button>
                    </div>
                </div>
                
                <div className="level grnd">
                    <h4>Ground Level</h4>
                    <div className="switch">
                       <button onClick={btn1} disabled={!action} className="icons" ><FaArrowUp/></button>
                    </div>
                </div>
            </div>
            {/* Elevator Part */}
            <div id="elevatorSection" style={elevator}>
                <div className="elevator">
                    <p>Elevator</p>
                </div>
            </div>
        </main>
    </div>
    </>
  );
}

export default App;
