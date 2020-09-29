import React, { useState } from 'react';
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({setGasto,guardarCrearGasto}) => {

    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const agregarGasto = e =>{
        e.preventDefault()

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
            setError(true)
            return;
        }

        setError(false)

        const gasto ={
            nombre,
            cantidad,
            id: shortid.generate()
        }

        setGasto(gasto)
        guardarCrearGasto(true)

        setNombre('')
        setCantidad(0)

    }

    return (  
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o el presupuesto no es válido"/> 
            : null}
            <div className="campo">
                <label>Agrega tu Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value = {nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
            </div>
            
            <div className="campo">
                <label>Cantidad de Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="100"
                    value={cantidad}
                    onChange={e=>setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto            "
            />
        </form>


    );
}
 
export default Formulario;