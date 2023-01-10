import React from "react";
import '../styles/styles.css';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component{

    constructor(props)
    {
        super(props);
    
        this.state = {
            value: "",
            error: false,
            loading: false,
        }
    }

    componentDidUpdate(){
        if(this.state.loading){
            setTimeout(()=>{
                if(this.state.value !== SECURITY_CODE){
                    this.setState({loading: false, error: true});
                }else{
                    this.setState({loading: false, error: false});
                }
            }, 2000)
        }
    }

    render(){
        return (
            <div className="box">
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad.</p>

                {this.state.error && (
                    <p>El código es incorrecto</p>
                )}

                {this.state.loading && (
                    <p>Cargando...</p>
                )}

                <input value={this.state.value} onChange={e=>this.setState({value: e.target.value})} type="text" placeholder="Código de seguridad"/>
                <button onClick={()=>this.setState({loading: true, error: false})}>Comprobar</button>
            </div>
        )
    }
}

export { ClassState }