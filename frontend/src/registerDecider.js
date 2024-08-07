import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import './loginDecider.css'

function RankDecider() {
    const navigate = useNavigate();

    const catadorRegister = () => {
        navigate("/register", { state: "catador" })
    }
    const empresaRegister = () => {
        navigate("/register", { state: 'company' })
    }
    const fornecedorRegister = () => {
        navigate("/register", { state: 'fornecedor' })
    }

    return (
        <div className='body'>
            <h1>Qual função exerce?</h1>
            <div class="button-container">
                <button class="btn btn-success" onClick={catadorRegister}>Catador</button>
                <button class="btn btn-success" onClick={empresaRegister}>Empresa</button>
                <button class="btn btn-success" onClick={fornecedorRegister}>Fornecedor</button>
            </div>
        </div>
    )
}

export default RankDecider