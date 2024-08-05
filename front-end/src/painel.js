import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';


function Painel() {
    const navigate = useNavigate();


    return (
        <div>
            <h1>Painel</h1>
            <button>Register</button>
            <button>Login</button>
        </div>  
    )
}

export default Painel