import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    return (
        <div>
             <header className="header">
                <a href="#" className="logo">Mina De Aço</a>

                <nav>
                    <a href="/">Home</a>
                    <a href="/servicos">Serviços</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                    <a href="/register">Iniciar Sessão</a>
                </nav>
            </header>
        </div>
    )
}

export default Navbar