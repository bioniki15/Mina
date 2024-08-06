import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import natureImage from './images/nature.png';

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [response, setResponse] = useState(null);

    const gotoLogin = () => {
        navigate("/login");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/register', { name, email, password, confPassword })
            .then((res) => {
                if (res.data == "jc") {
                    setResponse("Email já cadastrado.");
                }
                else if (res.data == "si") {
                    setResponse("Senhas não batem.");
                }
                else if (res.data == "ok") {
                    gotoLogin();
                }
            })
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary-subtle'> 
            <div className='p-3 bg-white w-25 h-auto'>
                <center><i className='bi bi-person-fill h1' style={{ color: 'green' }}></i>
                    <h1 className='mb-300'>Cadastro</h1></center>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 d-flex align-items-center bg-white mb-100'>
                        <i className="bi bi-person-fill fill-primary"></i>
                        <input type="text" placeholder='Nome' className='form-control border-0' onChange={e => setName(e.target.value)} required></input>
                    </div>
                    <div className='mb-3 d-flex align-items-center mb-100'>
                        <i className="bi bi-envelope-at-fill"></i>
                        <input type="email" placeholder='E-mail' className='form-control border-0' onChange={e => setEmail(e.target.value)} required></input>
                    </div>
                    <div className='mb-3 d-flex align-items-center mb-100'>
                        <i className="bi bi-lock-fill"></i>
                        <input type="password" placeholder='Senha' className='form-control border-0' onChange={e => setPasword(e.target.value)} required></input>
                    </div>
                    <div className='mb-3 d-flex align-items-center mb-100'>
                        <i className="bi bi-lock-fill"></i>
                        <input type="password" placeholder='Confirmar Senha' className='form-control border-0' onChange={e => setConfPassword(e.target.value)} required></input>
                    </div>
                    <center><a href='/login'>Já possui uma conta?</a></center>
                    <p className='text-danger'>{response}</p>
                    <center><button className='btn btn-success btn-gradient w-100 rounded-0'>Confirmar</button></center>
                </form>
            </div>
        </div>

    )
}

export default Register