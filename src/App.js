import './App.css';
import binarycode from './imagenes/binarycode-logo.jpg';

function App() {
  return (
    <div className='aplicacion-tareas'>
       <div className='binarycode-logo-contedor'>
    <img 
      src={binarycode}
      className='binarycode-logo'
      alt='Logo Binario' 
      />
      </div>
    </div>
  );
}

export default App;
