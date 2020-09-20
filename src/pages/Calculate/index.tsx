import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assests/icons/warning.svg';

import './styles.css'

export let cement = 0;
export let sand = 0;
export let gravel = 0;
export let water = 0;

export let cement_bag = 0;
export let sand_bag = 0;
export let gravel_bag = 0;
export let water_bag = 0;

export let cement_mixed = 0;
export let sand_mixed = 0;
export let gravel_mixed = 0;
export let water_mixed = 0;

export let water_barrow = 0;
export let number_sand_barrow = 0;
export let sand_barrow = 0;
export let number_gravel_barrow = 0;
export let gravel_barrow = 0;

function Calculate() {
    const history = useHistory();
    const [ammf, setAmMF] = useState('');
    const [amme, setAmME] = useState('');
    const [ammu, setAmMU] = useState('');
    const [amuc, setAmUC] = useState('');
    const [amci, setAmCI] = useState('');
    
    const [agme, setAgME] = useState('');
    const [agmuc, setAgMUC] = useState('');
    const [agdm, setAgDM] = useState('');

    const [cme, setCME] = useState('');
    const [type, setType] = useState('');

    const [abat, setAbat] = useState('');
    const [fck, setFck] = useState('');

    const [sd, setSd] = useState('');


    function handleCalculate(e: FormEvent) {
        e.preventDefault();

        let SD = 0;

        if(sd === "SDa") {
            SD = 4.0
        } else if(sd === "SDb") {
            SD = 5.5
        } else if(sd === "SDc") {
            SD = 7.0
        };

        let fc28 = parseFloat(fck) + 1.65 * SD;

        let ac = 0;

        if(type === "CP-26") {
            ac = ((Math.log10(102.0632836/fc28))/(Math.log10(14.92693259)))
        } else if(type === "CP-29") {
            ac = ((Math.log10(111.7316856/fc28))/(Math.log10(14.98570735)))
        } else if(type === "CP-32") {
            ac = ((Math.log10(122.3064518/fc28))/(Math.log10(14.9732631)))
        } else if(type === "CP-35") {
            ac = ((Math.log10(129.9643831/fc28))/(Math.log10(14.60338865)))
        } else if(type === "CP-38") {
            ac = ((Math.log10(140.4315132/fc28))/(Math.log10(14.92572643)))
        };

        let ca = 0;

        if(agdm === "9.5") {
            if (abat === "40 a 60") {
                ca = 220;
            } else if (abat === "60 a 80") {
                ca = 225;
            } else if (abat === "80 a 100") {
                ca = 230;
            }
        } else if (agdm === "19"){
            if (abat === "40 a 60" ) {
                ca = 195;
            } else if (abat === "60 a 80") {
                ca = 200;
            } else if (abat === "80 a 100") {
                ca = 205;
            }
        } else if (agdm === "25"){
            if (abat === "40 a 60") {
                ca = 190;
            } else if ( abat === "60 a 80") {
                ca = 195;
            } else if (abat === "80 a 100") {
                ca = 200;
            }
        } else if (agdm === "32") {
            if (abat === "40 a 60") {
                ca = 185;
            } else if (abat === "60 a 80"){
                ca = 190;
            } else if (abat === "80 a 100"){
                ca = 195;
            }
        } else if (agdm === "38") {
            if (abat === "40 a 60") {
                ca = 180;
            } else if (abat === "60 a 80") {
                ca = 185;
            } else if (abat === "80 a 100") {
                ca = 190;
            }
        };

        let cc = (ca/ac);

        let vb = 0;

        if (agdm === "9.5") {
            if (ammf === "1.8") {
                vb = 0.645;
            } else if (ammf === "2.0") {
                vb = 0.625;
            } else if (ammf === "2.2") {
                vb = 0.605;
            } else if (ammf === "2.4") {
                vb = 0.585;
            } else if (ammf === "2.6") {
                vb = 0.565; 
            } else if (ammf === "2.8") {
                vb = 0.545;
            } else if (ammf === "3.0") {
                vb = 0.525;
            } else if (ammf === "3.2") {
                vb = 0.505;
            } else if (ammf === "3.4") {
                vb = 0.485;
            } else if (ammf === "3.6") {
                vb = 0.465;
            }
        } else if (agdm === "19") {
            if (ammf === "1.9") {
                vb = 0.770;
            } else if (ammf === "2.0") {
                vb = 0.750;
            } else if (ammf === "2.2") {
                vb = 0.730;
            } else if (ammf === "2.4") {
                vb = 0.710;
            } else if (ammf === "2.6") {
                vb = 0.690; 
            } else if (ammf === "2.8") {
                vb = 0.670;
            } else if (ammf === "3.0") {
                vb = 0.650;
            } else if (ammf === "3.2") {
                vb = 0.630;
            } else if (ammf === "3.4") {
                vb = 0.610;
            } else if (ammf === "3.6") {
                vb = 0.590;
            }
        } else if (agdm === "25") {
            if (ammf === "1.8") {
                vb = 0.795;
            } else if (ammf ==="2.0") {
                vb = 0.775;
            } else if (ammf === "2.2") {
                vb = 0.755;
            } else if (ammf === "2.4") {
                vb = 0.735;
            } else if (ammf === "2.6") {
                vb = 0.715; 
            } else if (ammf === "2.8") {
                vb = 0.695;
            } else if (ammf === "3.0") {
                vb = 0.675;
            } else if (ammf === "3.2") {
                vb = 0.655;
            } else if (ammf === "3.4") {
                vb = 0.635;
            } else if (ammf === "3.6") {
                vb = 0.615;
            }
        } else if (agdm === "32") {
            if (ammf === "1.8") {
                vb = 0.820;
            } else if (ammf === "2.0") {
                vb = 0.800;
            } else if (ammf === "2.2") {
                vb = 0.780;
            } else if (ammf === "2.4") {
                vb = 0.760;
            } else if (ammf === "2.6") {
                vb = 0.740; 
            } else if (ammf === "2.8") {
                vb = 0.720;
            } else if (ammf === "3.0") {
                vb = 0.700;
            } else if (ammf === "3.2") {
                vb = 0.680;
            } else if (ammf === "3.4") {
                vb = 0.660;
            } else if (ammf === "3.6") {
                vb = 0.640;
            }
        } else if (agdm === "38") {
            if (ammf === "1.8") {
                vb = 0.845;
            } else if (ammf === "2.0") {
                vb = 0.825;
            } else if (ammf === "2.2") {
                vb = 0.805;
            } else if (ammf === "2.4") {
                vb = 0.785;
            } else if (ammf === "2.6") {
                vb = 0.765; 
            } else if (ammf === "2.8") {
                vb = 0.745;
            } else if (ammf === "3.0") {
                vb = 0.725;
            } else if (ammf === "3.2") {
                vb = 0.705;
            } else if (ammf === "3.4") {
                vb = 0.685;
            } else if (ammf === "3.6") {
                vb = 0.665;
            }
        };

        let cb = (vb * parseFloat(agmuc));

        let vm = 1-((cc/parseFloat(cme)) + (cb/parseFloat(agme)) + (ca/1000));

        let cm = parseFloat(amme) * vm;

        cement = (cc/cc)
        sand = (cm/cc)
        gravel = (cb/cc)
        water = (ca/cc)

        cement_bag = cement * 50;
        sand_bag = sand * 50;
        gravel_bag = gravel * 50;
        water_bag = water * 50;


        cement_mixed = cement_bag;
        sand_mixed = sand_bag/parseFloat(ammu);
        gravel_mixed = gravel_bag/parseFloat(agmuc);
        water_mixed = water_bag/1;

        water_barrow = water_mixed - ((parseFloat(amuc)/100) * sand_bag);

        let vh_sand = parseFloat(amci) * sand_mixed;

        let h_sand = vh_sand/0.1575;

        let mp_sand = (0.35 * 0.45 * h_sand) * parseFloat(ammu);

        let number_float_sand_barrow = mp_sand/70;

        if (Number.isInteger(number_float_sand_barrow)) {
            number_sand_barrow = number_float_sand_barrow
        } else {
            number_float_sand_barrow > parseFloat(number_float_sand_barrow.toFixed(0)) ? number_sand_barrow = (number_float_sand_barrow - (number_float_sand_barrow - parseFloat(number_float_sand_barrow.toFixed(0)))) + 1 : number_sand_barrow = parseFloat(number_float_sand_barrow.toFixed(0));
        };

        sand_barrow = (h_sand * 100)/number_sand_barrow; 

        let h_gravel = gravel_mixed/0.1575;

        let mp_gravel = (0.35 * 0.45 * h_gravel) * parseFloat(agmuc);

        let number_float_gravel_barrow = mp_gravel/70;

        if (Number.isInteger(number_float_gravel_barrow)) {
            number_gravel_barrow = number_float_gravel_barrow
        } else {
            number_float_gravel_barrow > parseFloat(number_float_gravel_barrow.toFixed(0)) ? number_gravel_barrow = (number_float_gravel_barrow - (number_float_gravel_barrow - parseFloat(number_float_gravel_barrow.toFixed(0)))) + 1 : number_gravel_barrow = parseFloat(number_float_gravel_barrow.toFixed(0));
        };

        gravel_barrow = (h_gravel * 100)/number_gravel_barrow;

        history.push('/results');
    }

    return (
        <div id="page-calculate-form" className="continer">
            <PageHeader 
            title="Preencha os campos para encontra os traços do concreto"
            description="Basta preencher todo o formulário, clicar no botão e aguardar os resultados"
            />

            <main>
                <form onSubmit={handleCalculate}>
                    <fieldset>
                        <div className="field-group">
                            <div className="field">
                                <legend>Agregados</legend>

                                <label htmlFor="amMF">Módulo de finura</label>
                                <select 
                                    name="ammf"
                                    value={ammf}
                                    onChange={(e) => {setAmMF(e.target.value)} }
                                    required
                                >
                                    <option value="" disabled hidden>Selecione...</option>
                                    <option value={1.8}>1,8</option>
                                    <option value={2.0}>2,0</option>
                                    <option value={2.2}>2,2</option>
                                    <option value={2.4}>2,4</option>
                                    <option value={2.6}>2,6</option>
                                    <option value={2.8}>2,8</option>
                                    <option value={3.0}>3,0</option>
                                    <option value={3.2}>3,2</option>
                                    <option value={3.4}>3,4</option>
                                    <option value={3.6}>3,6</option>
                                </select>

                                <label htmlFor="amME">Massa específica</label>
                                <input 
                                    type="number" 
                                    name="amME"
                                    placeholder="Kg/m³"
                                    required
                                    value={amme}
                                    onChange={(e) => {setAmME(e.target.value)} }
                                />

                                <label htmlFor="amMU">Massa unitária</label>
                                <input 
                                    type="number" 
                                    name="amMU"
                                    placeholder="Kg/m³"
                                    required
                                    value={ammu}
                                    onChange={(e) => {setAmMU(e.target.value)}}
                                />

                                <label htmlFor="amUC">Umidade crítica</label>
                                <input  
                                    type="number" 
                                    name="amUC"
                                    placeholder="%"
                                    required
                                    value={amuc}
                                    onChange={(e) => {setAmUC(e.target.value)}}
                                />

                                <label htmlFor="amCI">Coeficiente de inchamento</label>
                                <input 
                                    type="number" 
                                    name="amCI"
                                    required
                                    value={amci}
                                    onChange={(e) => {setAmCI(e.target.value)}}
                                />

                                <legend>Cimento</legend>

                                <label htmlFor="cME">Massa específica</label>
                                <input 
                                    type="number" 
                                    name="cME"
                                    placeholder="Kg/m³"
                                    required
                                    value={cme}
                                    onChange={(e) => {setCME(e.target.value)}}
                                    />

                                <label htmlFor="ciment-type">Tipo do cimento</label>
                                <select 
                                    name="ciment-type"
                                    value={type}
                                    onChange={(e) => {setType(e.target.value)} }
                                    required
                                >
                                    <option value="" disabled hidden >Selecione...</option>
                                    <option value="CP-26">CP-26</option>
                                    <option value="CP-29">CP-29</option>
                                    <option value="CP-32">CP-32</option>
                                    <option value="CP-35">CP-35</option>
                                    <option value="CP-38">CP-38</option>
                                </select>
                            </div>

                            <div className="field">
                                <legend>Agregados graúdos</legend>

                                <label htmlFor="agME">Massa específica</label>
                                <input 
                                    type="number" 
                                    name="agME"
                                    placeholder="Kg/m³"
                                    required
                                    value={agme}
                                    onChange={(e) => {setAgME(e.target.value)}}
                                />

                                <label htmlFor="agMUC">Massa unitária compactada</label>
                                <input  
                                    type="number" 
                                    name="agMUC" 
                                    placeholder="Kg/m³"
                                    required
                                    value={agmuc}
                                    onChange={(e) => {setAgMUC(e.target.value)}}
                                />

                                <label htmlFor="agDM">Diâmetro máximo</label>
                                <select 
                                    name="agDM"
                                    value={agdm}
                                    onChange={(e) => {setAgDM(e.target.value)} }
                                    required
                                >
                                    <option value="" disabled hidden >Selecione...</option>
                                    <option value={9.5}>9,5</option>
                                    <option value={19.0}>19,0</option>
                                    <option value={25.0}>25,0</option>
                                    <option value={32.0}>32,0</option>
                                    <option value={38.0}>38,0</option>
                                </select>

                                <legend>Concreto</legend>

                                <label htmlFor="abat">Diâmetro máximo</label>
                                <select 
                                    name="abat"
                                    value={abat}
                                    onChange={(e) => {setAbat(e.target.value)} }
                                    required
                                >
                                    <option value="" disabled hidden >Selecione...</option>
                                    <option value="40 a 60">40 a 60</option>
                                    <option value="60 a 80">60 a 80</option>
                                    <option value="80 a 100">80 a 100</option>
                                </select>

                                <label htmlFor="fck">Fck</label>
                                <input 
                                    type="number" 
                                    name="fck" 
                                    placeholder="Mpa"
                                    required
                                    value={fck}
                                    onChange={(e) => {setFck(e.target.value)}}
                                />

                                <legend>Desvio padrão</legend>

                                <div className="input-radius">
                                    <input 
                                        type="radio" 
                                        name="SD" 
                                        id="SDa"
                                        value="SDa"
                                        checked={sd === "SDa"}
                                        onChange={(e) => {setSd(e.target.value)} }
                                        required
                                    />
                                    <label htmlFor="SDa">SD = 4,0 MPa</label>
                                </div>
                                <div className="input-radius">
                                    <input 
                                        type="radio" 
                                        name="SD" 
                                        id="SDb"
                                        value="SDb"
                                        checked={sd === "SDb"}
                                        onChange={(e) => {setSd(e.target.value)} }
                                    />
                                    <label htmlFor="SDb">SD = 5,5 MPa</label>
                                </div>
                                <div className="input-radius">
                                    <input 
                                        type="radio" 
                                        name="SD" 
                                        id="SDc"
                                        value="SDc"
                                        checked={sd === "SDc"}
                                        onChange={(e) => {setSd(e.target.value)} }
                                    />
                                    <label htmlFor="SDc">SD = 7,0 MPa</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso de alerta"/>
                            Utilize os valores com as devidas unidades de medidas indicadas
                        </p>
                        <button type="submit">
                            Calcular
                        </button>
                    </footer>
                </form>
            </main>

            <section>
                <div className="standard-deviation">
                    <h3>Condições de preparo em função do desvio padrão (Sd)</h3>

                    <h4>SD = 4,0 Mpa</h4>
                    <p>O cimento e os agregados são medidos em massa, a água de amassamento é medida em massa ou volume com dispositivo dosador e corrigida em função da umidade dos agregados.</p>

                    <h4>SD = 5,5 Mpa</h4>
                    <p>Cimento dosado em massa, agregados dosados em massa combinada com volume, a umidade do agregado miúdo é determinada e o volume do agregado miúdo é corrigido através da curva de inchamento.</p>

                    <h4>SD = 7,0 Mpa</h4>
                    <p>O cimento é medido em massa, os agregados são medidos em volume, a água de amassamento é medida em volume e sua quantidade é corrigida em função da estimativa da umidade dos agregados e da determinação da consistência do concreto.</p>
                </div>
            </section>

        </div>
    )
}

export default Calculate;