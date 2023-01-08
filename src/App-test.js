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

      setElevate(200);
      setAction(!action);
      console.log('btn4 click '+action);
      
      level2TO = setTimeout(() => {
        setStatus('dwn');

        console.log('btn1 '+status);
          if(status=='up'){
            
            console.log('btn1 in '+status);
            setElevate(0)
            setAction(!action)
          }
          else{
            setElevate(0);
          setAction(!action)
          console.log('ele dwn go '+ action)
          }

      }, 5000);

  };

  const btn3 =()=>{

    if(!action){
      setAction(!action);
      console.log('ele up stop level 2 '+action);
      clearTimeout(level1TO);
    }

    else if(!action){
      console.log('okkkkkk '+action)
          setElevate(400)
      }
    else  if(action){
        setElevate(400)
        // setAction(!action)
      }

  };

  const btn2 =()=>{

   if(action)
   {
    setAction(!action);
    console.log('ele dwn stop level 2 '+action);
    clearTimeout(level2TO);

   }
    else if(!action){
      console.log('okkkkkk '+action)
          setElevate(0)
      }
      else if(action){
        setElevate(0)
      }


  };

  const btn1 =()=>{

  
      setElevate(200);
      setAction(!action);
      console.log('btn1 click '+action);
      

      level1TO = setTimeout(() => {
        setStatus('up');

        console.log('btn1 '+status);

        if(status=='dwn'){
          console.log('btn1 in '+status);

          setAction(!action);
        }
        else{
          setElevate(400);
          setAction(!action);
          console.log('ele up go '+ action)
        }

          

      }, 5000);
    

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
                       <button onClick={btn1} className="icons" ><FaArrowUp/></button>
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
