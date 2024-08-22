import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Ranking() {
    const location = useLocation();
    const { user } = location.state;

    const showRank = () => {
        axios.post("http://localhost:8081/ranking")
            .then((res) => {

            })
    }

    return (
        <div className='body'>
            <div class="ranking-container">
                <div class="ranking-item">
                    <p>1º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p>2º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p>3º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p>4º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p>5º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p>6º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p>7º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p>8º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p>9º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>
                <div class="ranking-item">
                    <p style={{ position : 'relative', left : ' vh', textAlign: 'center', paddingRight : '1.5vh', paddingLeft: '1.5vh' }}>10º</p>
                    <div class="ranking-item2">
                        <p>Nome</p>
                        <p>Pontos</p>
                        <p>Coletas</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ranking