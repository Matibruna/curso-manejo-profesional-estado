import React from "react";
import '../styles/styles.css';

function UseState({name}){

    const SECURITY_CODE = 'paradigma';

    const [state, setState] = React.useState({
        value: '',
        loading: false,
        error: false,
        confirmed: false,
        deleted: false,
    })

    React.useEffect(()=>{
        if(state.loading){
            setTimeout(()=>{
                if(state.value !== SECURITY_CODE){
                    setState({
                        ...state,
                        loading: false,
                        error: true,
                    });    
                }else{
                    setState({
                        ...state,
                        loading: false,
                        error: false,
                        confirmed: true
                    });                
                }

            }, 2000)
        }
    }, [state.loading]);

    if(!state.confirmed){

        return(
            <div className="box">
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad.</p>
    
            {state.error && !state.loading && (
                <p>El código es incorrecto</p>
            )}
    
            {state.loading && (
                <p>Cargando...</p>
            )}
    
            {/*!loading && !error && (
                <p>El codigo de seguridad es correcto!</p>
            )*/}
    
            <input value={state.value} onChange={(e)=>setState({...state, value: e.target.value})} type="text" placeholder="Código de seguridad"/>
            <button onClick={()=>{setState({...state, loading: true, error: false});}}>Comprobar</button>
        </div>
        )

    } else if (!state.deleted && state.confirmed) {

        return(
            <div className="box">
                <h3>¿Seguro que quieres eliminar UseState?</h3>
                <button className="btn" onClick={e=>setState({...state, deleted: true})}>Confirmar</button>
                <button className="btn" onClick={e=>setState({...state, confirmed: false})}>Cancelar</button>
            </div>
        )

    } else {

        return(
            <div className="box">
                <h3>El codigo fue eliminado con exito.</h3>
                <button className="btn" onClick={e=>setState({value: '', loading: false, error: false, confirmed: false, deleted: false})}>Volver atras</button>
            </div>
        )
    }

}

export { UseState };