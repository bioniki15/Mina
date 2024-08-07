import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation, useNavigate } from 'react-router-dom';
import './rankDecider.css'
import axios from 'axios';

function RankDecider() {
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state;

    const showRankCatador = () => {
        navigate("/ranking", {state : "catador"})
    }

    const showRankFornecedor = () => {
        navigate("/ranking", {state : "fornecedor"})
    }

    return (
        <div className='body'>
            <h1>Qual Ranking Você Gostaria de Ver?</h1>
            <div class="button-container">
                <button class="btn btn-success" onClick={showRankCatador}>Catador</button>
                <button class="btn btn-success" onClick={showRankFornecedor}>Fornecedor</button>
            </div>
        </div>
    )
}

export default RankDecider