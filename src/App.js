// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import html2canvas from 'html2canvas';

function App() {

//Aca se puede escribir cualquier funcion en javascript para poder utilizarla luego.
//declararemos un nombre

// const nombre="Gregory Galicio";

// //tambien se puede colocar codigo html
// var saludo= <p>
//               Hola Mundo soy {nombre}<br/> 
//               Edit <code>src/App.js</code> and save to reload.
//             </p>

const[linea1,setLinea1]=useState('');
const[linea2,setLinea2]=useState('');
const[imagen,setImagen]=useState('');

const onChangeLinea1 = function(evento){ //el onChange devuelve un evento y la ruta es e.target.value
setLinea1(evento.target.value)
}

const onChangeLinea2 = function(event){
setLinea2(event.target.value)
}

const onChangeImagen = function(event){
  setImagen(event.target.value)
  }
const onClickExportar = function(event){
  // alert("EXPORTAR");
  html2canvas(document.querySelector("#meme")).then(canvas => {
    // document.body.appendChild(canvas)
    // var canvas = document.getElementById("mycanvas");
    var img    = canvas.toDataURL("image/png");    
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img
    link.click();



});
  }

  return (
    <div className="App">
     {/* select picker de memes */}
     <select onChange={onChangeImagen} >
       <option value="fire">Casa en llamas</option>
       <option value="futurama">Futurama</option>
       <option value="history">History Channel</option>
       <option value="matrix">Matrix</option>
       <option value="philosoraptor">Philosoraptor</option>
       <option value="smart">Smart Guy</option>
     </select><br/>
     {/* input text-primera linea  y segunda linea*/}
     <input onChange={onChangeLinea1} type="text" placeholder="Linea1"/><br/> 
     <input onChange={onChangeLinea2}type="text" placeholder="Linea2"/><br/>
     {/* boton exportar imagen */}
     <button onClick={onClickExportar}>Exportar</button>
     <div className="meme" id="meme">
       <span>{linea1}</span><br/>
       <span className="abajo">{linea2}</span> 
       <img alt={imagen} src={`/img/${imagen}.jpg`}/>
     </div>


    </div>
  );
}

export default App;
