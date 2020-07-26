import React from "react";
import "../styles/Titulo.css";


class Titulo extends React.Component{
    render(){
        return(
            <div className="row justify-content-center" id="pricing">
                <div className="col-5 text-center">
                    <h1 id="titulo">{this.props.Titulo}</h1>
                    <p id="descripcion">{this.props.Descripcion}</p>
                </div>
            </div>
        )
    }        
}
export default Titulo;