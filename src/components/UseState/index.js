import React from "react";

function UseState({name}){

    const SECURITY_CODE = 'paradigma';

    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    React.useEffect(()=>{
        if(loading){
            setTimeout(()=>{
                if(value !== SECURITY_CODE){
                    setError(true);
                }
                setLoading(false);
            }, 2000)
        }
    }, [loading]);

    React.useEffect(()=>{
        if(false){

        }
    }, [error])

    return(
        <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>

        {error && !loading && (
            <p>El código es incorrecto</p>
        )}

        {loading && (
            <p>Cargando...</p>
        )}

        {/*!loading && !error && (
            <p>El codigo de seguridad es correcto!</p>
        )*/}

        <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Código de seguridad"/>
        <button onClick={()=>{setLoading(true);setError(false);}}>Comprobar</button>
    </div>
    )
}

export { UseState };