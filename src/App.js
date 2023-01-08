import React, { useState } from 'react';
import { FaArrowUp,FaArrowDown, FaSistrix } from 'react-icons/fa';
import './App.css';

import sound from "./assests/elevator-bell.mp3";


var level1TO;
var level2TO;

function App() {

  const [elevate, setElevate] = useState(0);
  const [action, setAction] = useState(true);
  const [status, setStatus] = useState('');

  const [dis1, setDis1] =useState(null);
  const [dis2, setDis2] =useState(true);
  const [dis3, setDis3] =useState(true);
  const [dis4, setDis4] =useState(true);

    const bell = () => {
      new Audio(sound).play();
      console.log('bell');
    }



  const elevator ={
    transform: `translate(0, -${elevate}px)`,
    transition: `all 5s linear`
  }


 // button 1 - up -> down

  const btn4 =()=>{

    if(status=='up'){
      setElevate(200);
      setAction(true);
      setStatus('up');

      setDis4(true)
      setDis3(true)
      setDis2(false)
      setDis1(true)

      setTimeout(() => {
        setDis4(action)
      }, 5000);

      level2TO = setTimeout(()=>{
        setAction(true);
        setElevate(0);
        setStatus('');

        setDis2(true);
        setTimeout(() => {
          setDis1(false)
          bell();
        }, 5000);

      },5000)
    }
    else{


      
    setDis4(true)
    setDis3(true)
    setDis2(false)
    setDis1(true)

   

    setElevate(200);
    setAction(!action);
    setStatus('up')
  
    level2TO = setTimeout(()=>{
      setAction(!action);
      setElevate(0);
      setStatus('');

      setDis2(true);
        setTimeout(() => {
          setDis1(false)
          bell()
        }, 5000);

    },5000)
  }

    console.log('btn 4 value '+action)

  };

  // button 3 - Mid - up

  const btn3 =()=>{


    
    console.log('btn3-'+status);

    if(status=='up'){

      setDis4(true)
      setDis3(true)
      setDis2(true)
      setDis1(true)

      setTimeout(() => {
        setDis4(false);
        bell()
      }, 5000);

      setAction(!action)
      setElevate(400)
    }

    else if(!action){
      setAction(!action);
      clearTimeout(level1TO);
      
      setDis4(true)
      setDis3(false)
      setDis2(false)
      setDis1(true)

      setTimeout(() => {
        bell();
      }, 3000);

   
    }
    else if(status=='dwn'){
      setElevate(400);
      setAction(!action)
      
      setDis4(true)
      setDis3(true)
      setDis2(true)
      setDis1(true)

      setTimeout(() => {
        setDis4(false)
        bell()
      }, 5000);

    
    }
    

    console.log('btn 3 value '+action)

  };

    // button 2 - Mid - down

  const btn2 =()=>{
    

    
    
    console.log('btn2-'+status)

    if(status=='dwn'){
      setAction(!action)
      setElevate(0);
      setDis4(true)
      setDis3(true)
      setDis2(true)
      setDis1(true)

      setTimeout(() => {
        setDis1(false)
        bell()
      }, 5000);

      
    }

    else if(action){
      clearTimeout(level2TO);
      setAction(!action);
      setDis4(true)
      setDis3(false)
      setDis2(false)
      setDis1(true)

      setTimeout(() => {
        bell();
      }, 3000);

    }
    else if(status=='up'){
      setElevate(0)
      setAction(!action)
      
      setDis4(true)
      setDis3(true)
      setDis2(true)
      setDis1(true)

      setTimeout(() => {
        setDis1(false)
        bell()
      }, 5000);

   
    }
    

    console.log('btn 2 value '+action)
  };

    // button 1 - down -> up

  const btn1 =()=>{

  
    if(status=='dwn'){
      setElevate(200);
      setAction(false);
      setStatus('dwn');

      setDis4(true)
      setDis3(false)
      setDis2(true)
      setDis1(true)

      level1TO = setTimeout(()=>{
        setAction(false);
        setElevate(400);
        setStatus('');

        setDis3(true);
        setTimeout(() => {
          setDis4(false);
          bell()
        }, 5000);

      },5000)
    }
    else{


      setDis4(true)
      setDis3(false)
      setDis2(true)
      setDis1(true)

      // setTimeout(() => {
      //   setDis4(false)
      // }, 10000);

      setElevate(200);
      setAction(!action);
      setStatus('dwn')

      level1TO = setTimeout(()=>{
        setAction(!action);
        setElevate(400);
        setStatus('');

        setDis3(true);
        setTimeout(() => {
          setDis4(false)
          bell();
        }, 5000);

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
                       <button onClick={btn4} 
                       disabled={dis4}
                         className="icons" > <FaArrowDown/> </button>
                    </div>
                </div>
                
                <div className="level level1">
                    <h4>Level 1</h4>
                    <div className="switch">
                       <button onClick={btn3} 
                       disabled={dis3}
                       className="icons" > <FaArrowUp/></button>
                       <button onClick={btn2}
                       disabled={dis2}
                       className="icons" > <FaArrowDown/> </button>
                    </div>
                </div>
                
                <div className="level grnd">
                    <h4>Ground Level</h4>
                    <div className="switch">
                       <button onClick={btn1} 
                       disabled={dis1}
                       className="icons" ><FaArrowUp/></button>
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
