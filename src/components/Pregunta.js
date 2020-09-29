import React, {Fragment,useState} from 'react'
import Error from './Error'

            
const Pregunta = ({agregarPresupuesto,setRestante,setMostrar}) => {

    const [presupuesto,setPresupuesto] = useState(0)
    const [error,setError] = useState(false)

    const handleChange = e => {
        setPresupuesto(parseInt(e.target.value))
    }

    const guardarPresupuesto = e => {
        e.preventDefault()

        if(presupuesto < 1 || isNaN(presupuesto)){
            setError(true)
            return;
        }

        setError(false)

        agregarPresupuesto(presupuesto)
        setRestante(presupuesto)
        setMostrar(false)

    }

    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es incorrecto"/>: null}
            <form onSubmit={guardarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleChange}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;