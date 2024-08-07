import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import './loginDecider.css'

function RankDecider() {
    const navigate = useNavigate();

    const goToLogin = (cometogether) => {
        navigate("/login", {state : cometogether})
    }

    return (
        <div className='body'>
            <h1>Qual função exerce?</h1>
            <div class="button-container">
                <button class="btn btn-success" onClick={goToLogin("catador")}>Catador</button>
                <button class="btn btn-success" onClick={goToLogin("empresa")}>Empresa</button>
                <button class="btn btn-success" onClick={goToLogin("fornecedor")}>Fornecedor</button>
            </div>
        </div>
    )
}

export default RankDecider