import React, { Component } from 'react';
import './Carta.css';
import ReactCardFlip from 'react-card-flip';

export default class Carta extends Component {
    constructor(){
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped }));
    }

    render(){
        return (
            <div className="carta" onClick={this.props.seleccionarCarta}>
                <ReactCardFlip isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada} flipDirection="vertical">
                    <div className="portada" onClick={this.handleClick}></div>
                    <div className="contenido" onClick={this.handleClick}><i className={`fa ${this.props.icono} fa-5x`}></i></div>
                </ReactCardFlip>
            </div>
        )
    }
}