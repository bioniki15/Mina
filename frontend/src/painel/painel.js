import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../images/logo.jpg';
import Navbar from '../navbar.js';

function Painel() {
    return (
        <div className='painel_body'>
            <Navbar />

            <div className='painel_grafico'>
                <div className='header'>
                    <h1>Total Gasto</h1>
                    <p>R$682,00</p>
                </div>
                <div className='grafico'>
                    <div className='colunas'>
                        <div className='linha'>
                            <p>Jan</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>

                        </div>
                        <div className='linha'>
                            <p>Fev</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Mar</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Abr</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Mai</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Jun</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Jul</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Ago</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Set</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Out</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Nov</p>
                            <div className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                        <div className='linha'>
                            <p>Dez</p>
                            <div title='R$150,00' className='mes'>
                                <div class="tooltip">
                                    <span class="tooltiptext">R$150,00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='painel_balanco'>
                <div className='header'>
                    <h1>Balanço</h1>
                    <select name='tipoBalanco' id='tipoBalanco'>
                        <option value="anual">Anual</option>
                        <option value="mensal">Mensal</option>
                        <option value="semanal">Semanal</option>
                    </select>
                </div>
                <div className='balanco'>
                    <div className='box'>
                        <h3 style={{ color: 'rgb(227, 26, 26)' }}>Gastos</h3>
                        <p>R$350,00</p>
                    </div>
                    <div className='box'>
                        <h3 style={{ color: 'rgb(5, 205, 153)' }}>Ganhos</h3>
                        <p>R$500,00</p>
                    </div>
                    <div className='box'>
                        <h3 style={{ color: 'rgb(50, 50, 50)' }}>Balanço</h3>
                        <p>+R$150,00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Painel