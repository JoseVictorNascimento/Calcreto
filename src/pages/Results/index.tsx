import React from 'react';

import PageHeader from '../../components/PageHeader';

import strecherImg from '../../assests/icons/strecher.svg'

import './styles.css'

import { cement, sand, gravel, water, cement_bag, sand_bag, gravel_bag, water_bag, cement_mixed, sand_mixed, gravel_mixed, water_mixed, gravel_barrow, sand_barrow, water_barrow, number_gravel_barrow, number_sand_barrow } from "../Calculate";

function Results() {
    return (

        <div id="page-results" className="continer">
            <PageHeader 
                title="Esses são os traços do seu concreto"
            />
            <main>
                
                <div id="trace" className="box-results">
                    <h3>Traço</h3>
                    <span>{(cement).toFixed(3)} : {sand.toFixed(3)} : {gravel.toFixed(3)} : {water.toFixed(3)}</span>
                </div>

                
                <div id="mixed-trait" className="box-results">
                    <h3>Traço para 1 saco de cimento</h3>
                    <span>{cement_bag.toFixed(3)} : {sand_bag.toFixed(3)}  :  {gravel_bag.toFixed(3)}  :  {water_bag.toFixed(3)}</span>
                    <span className="info_mixed">Traço dosado em massa para um saco de cimento de 50 kg.</span>
                </div>

                <div id="dash-bag-cement" className="box-results">
                    <h3>Traço misto</h3>
                    <span>{cement_mixed.toFixed(3)}  :  {sand_mixed.toFixed(3)}  :  {gravel_mixed.toFixed(3)}  :  {water_mixed.toFixed(3)}</span>
                    <span className="info_mixed">Cimento dosado em massa e agregados dosados em volume.</span>
                </div>
                

                <div className="box-results">
                    <h3>Padiola</h3>
                    <div id="strecher">
                        <div id="box-strecher">
                            <div className="strecher">
                                <h4>Padiola de areia</h4>
                                <span>{number_sand_barrow} com X = {sand_barrow.toFixed(2)} cm</span>
                            </div>

                            <div className="strecher">
                                <h4>Padiola de brita</h4>
                                <span>{number_gravel_barrow} com X = {gravel_barrow.toFixed(2)} cm</span>
                            </div>

                            <div className="strecher">
                                <h4>Padiola de água</h4>
                                <span>{water_barrow.toFixed(2)} litros</span>
                            </div>
                        </div>
                        <img src={strecherImg} alt="Padiola"/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Results;