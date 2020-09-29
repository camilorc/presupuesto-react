import React,{useState,useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'


function App() {

  const [presupuesto, agregarPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrar, setMostrar] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto,setGasto] = useState({})
  const [creargasto, guardarCrearGasto] = useState(false) //Creada para no ejecutar al inicio

  
  useEffect(()=>{

    if(creargasto){

      //Agregamos nuevo gasto a la lista gastos
      setGastos([
        ...gastos,
        gasto
      ])

      //Restamos del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)

      //Volvemos a false
      guardarCrearGasto(false)
    }
    

  },[gasto,creargasto,gastos,restante])
  

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrar ? 
          (
            <Pregunta 
              agregarPresupuesto ={agregarPresupuesto}
              setRestante = {setRestante}
              setMostrar = {setMostrar}
            />
          )
          :
          (
            <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
            </div>
          )
          }

        </div>
      </header>
    </div>
    
  );
}

export default App;
