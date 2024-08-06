import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [response, setResponse] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email, password})
        .then((res) => {
            if(res.data == "ok"){
                navigate('/painel', { state: { email } });
            }
            else if(res.data == "nb"){
                setResponse("Email ou senha incorreto/a");
            }
        })
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary-subtle'>
            <div className='p-3 bg-white w-25 h-auto'>
                <center><i className='bi bi-person-fill h1' style={{ color: 'green' }}></i>
                <h1 className='mb-300'>Login</h1></center>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 d-flex align-items-center mb-100'>
                        <i className="bi bi-envelope-at-fill"></i>
                        <input type="email" placeholder='E-mail' className='form-control border-0' onChange={e => setEmail(e.target.value)} required></input>
                    </div>
                    <div className='mb-3 d-flex align-items-center mb-100'>
                        <i className="bi bi-lock-fill"></i>
                        <input type="password" placeholder='Senha' className='form-control border-0' onChange={e => setPasword(e.target.value)} required></input>
                    </div>
                    <center><a href='/register'>Cadastrar-se</a></center>
                    <center><a href='/register'>Esqueci a senha</a></center>
                    <p className='text-danger'>{response}</p>
                    <center><button className='btn btn-success w-100 rounded-0'>Entrar</button></center>
                </form>
            </div>
        </div>
    )
}

export default Login