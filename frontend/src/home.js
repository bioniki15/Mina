import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    const registerAccount = () => {
        navigate("/register");
    };

    const loginAccount = () => {
        navigate("/login");
    }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={registerAccount}>Register</button>
            <button onClick={loginAccount}>Login</button>
        </div>  
    )
}

export default Home