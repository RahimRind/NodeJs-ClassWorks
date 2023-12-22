import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  // let text ='moye moye'
  // const[text, setText] = useState('Khan Baba')
  
  //   function change (){
  //     setText('Oye Oye')
  //   }
  //   function rev(){
  // const reverse = text.split('').reverse().join('')
  // setText(reverse)
  
  //   }
  //   function empty(){
  //     setText('')
  //   }  
  
  
  // const name = "Hello World";
  // const obj = {name: "Hello World Object"}
  // const data = ['We', 'are', 'United'] //Show these in seperate tags
    // const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
    // const complex = [{company: 'XYZ', jobs: ['Javascript ,' , ' React']}, {company: 'ABC', jobs: ['AngularJs ,' ,' Ionic']}] //Show these in a Table

    
  const[show, setShow] = useState(true)
  
  
//   function hide(){
//     setShow(false)
// }
// function shows(){
//   setShow(true)

// }
function showadd(){
  setShow(!show)
}

  return (
    <div className="App">
      <header className="App-header">
        {/* {show && <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9nps4auGmL5xFiLG5dyr2KM5FNhpChKggA&usqp=CAU' className="logo" alt="logo" /> || <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9nps4auGmL5xFiLG5dyr2KM5FNhpChKggA&usqp=CAU' className="App-logo" alt="logo" />
       } */}
       {show && <img src='https://motionarray.imgix.net/preview-366781-SucOpqoSyhMdoEq8-large.jpg?w=660&q=60&fit=max&auto=format' className="logo" alt="logo" /> || <img src='https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505_640.jpg' className="logo" alt="logo" />
       }
        
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <button onClick={hide}>Chup Jaye!</button>
        <button onClick={shows}>AA jaye!</button> */}
        <button onClick={showadd}>add!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <h1>{text}</h1>
        <button onClick={change} >change Me</button>
        <button onClick={rev} >Reverse</button>
        <button onClick={empty}>Empty Me</button>
         */}
        {/* <ol>
          <li>{name}</li>
          <li>{obj.name}</li>
      </ol>
      <ol>
        {data.map(function(items){
          return <li>{items}</li>
        })}
      </ol>
      
      <ol>
        {list.map(function(items){
          return <li>{items.name}</li>
        })}
        </ol>
        <ol>
          {complex.map(function(items){
            return <li>{items.company}</li>,<li>{items.jobs}</li>
          })}
        </ol>
      <ol>
        {complex.map(function(items){
          return <li>{items.jobs}</li>
        })}
      </ol>
      <table border='2'>
         <tr>
          <th>company</th>
          <th>jobs</th>
         </tr>
      <tr>
          {complex.map(function(items){
            return <tr>
            <td>{items.company}</td>
            <td>{items.jobs}</td>
            </tr>
          })}
        </tr>
        </table> */}

      
      </header>
    </div>
  );
}

export default App;
