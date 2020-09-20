import React from 'react';
import { Link } from 'react-router-dom';


import landingImg from '../../assests/landing.svg';

import aggregatesIcon from '../../assests/Agregados.svg'
import calculateIcon from '../../assests/icons/mathematic.png';
import checkIcon from '../../assests/icons/check_0.svg';
import cementIcon from '../../assests/Cimento.svg';
import concreteIcon from '../../assests/Concreto.svg'

import './styles.css';

function Landing() {
    return(
        <div id="page-landing">
            <div id="page-landing-hero">
                <div id="page-landing-content" className="container">
                    <div className="logo-container">
                        <h1>Calcreto</h1>
                        <h2>A ferramenta que vai mudar a dinâmica de dosar concretos</h2>
                    </div>

                    <img 
                        src={landingImg} 
                        alt="Ilustração página inicial"
                        className="hero-image"
                    />

                    <div className="buttons-container">
                        
                        <Link to="/calculate" className="calculate">
                                <img src={calculateIcon} alt="Calcular"/>
                                Calcular
                        </Link>
                    </div>

                </div>
            </div>

            <div id="page-landing-request">
                <h2>Requisitos exigidos pelo sistema</h2>
                <p>Para seu pleno funcionamento a ferramenta exige alguns dados dos materiais utilizados</p>
                
                <div className="container-request">
                    <header>
                        <img src={aggregatesIcon} alt="Agregados"/>
                        <div>
                            <h3>Agregados</h3>
                            <span>Agregados graúdos e miúdos</span>
                        </div>
                    </header>
                    <div className="request-items">
                        <img src={checkIcon} alt="Icone de checagem"/>
                        <span>Módulo de finura do agregado miúdo</span>
                    </div>
                    <div className="request-items">
                        <img src={checkIcon} alt="Icone de checagem"/>
                        <span>Dimensão máxima do agregado miúdo</span>
                    </div>
                    <div className="request-items">
                        <img src={checkIcon} alt="Icone de checagem"/>
                        <span>Massa específica (agregados graúdos e miúdos)</span>
                    </div>
                    <div className="request-items">
                        <img src={checkIcon} alt="Icone de checagem"/>
                        <span>Massa unitária compactada (agregados graúdos e miúdos)</span>
                    </div>
                    <div className="request-items">
                        <img src={checkIcon} alt="Icone de checagem"/>
                        <span>Umidade crítica</span>
                    </div>                 
                </div>

                <div className="container-request">
                        <header>
                            <img src={cementIcon} alt="Agregados"/>
                            <div>
                                <h3>Cimento</h3>
                            </div>
                        </header>
                        <div className="request-items">
                            <img src={checkIcon} alt="Icone de checagem"/>
                            <span>Tipo do cimento</span>
                        </div>
                        <div className="request-items">
                            <img src={checkIcon} alt="Icone de checagem"/>
                            <span>Massa específica</span>
                        </div>
                        <div className="request-items">
                            <img src={checkIcon} alt="Icone de checagem"/>
                            <span>Resistência do cimento aos 28 dias</span>
                        </div>                 
                    </div>

                    <div className="container-request">
                        <header>
                            <img src={concreteIcon} alt="Agregados"/>
                            <div>
                                <h3>Concreto</h3>
                            </div>
                        </header>
                        <div className="request-items">
                            <img src={checkIcon} alt="Icone de checagem"/>
                            <span>Consistência desejada no estado fresco</span>
                        </div>
                        <div className="request-items">
                            <img src={checkIcon} alt="Icone de checagem"/>
                            <span>Condição de exposição</span>
                        </div>
                        <div className="request-items">
                            <img src={checkIcon} alt="Icone de checagem"/>
                            <span>Resistência de dosagem</span>
                        </div>                 
                    </div>
            </div>
        </div> 
    )
}

export default Landing;
