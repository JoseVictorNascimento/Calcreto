import React from 'react';
import { Link } from "react-router-dom";

import logoImg from '../../assests/logo.svg';
import backIcon from '../../assests/icons/back-left.png'


import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps>= (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>

                <img src={logoImg} alt="Calcreto"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>

                <span>{ props.description && <p>{ props.description }</p>}</span>

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;