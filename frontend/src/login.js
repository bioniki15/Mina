import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './register.css';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [response, setResponse] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then((res) => {
                if (res.data == "ok") {
                    navigate('/painel', { state: { email } });
                }
                else if (res.data == "nb") {
                    setResponse("Email ou senha incorreto/a");
                }
            })
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-success-subtle'>
            <div className='p-3 bg-white w-25 h-auto mt-300' style={{ boxShadow: '0px 0px 10px' }}>
                <center><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="green" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                    <h2 className='mb-500'>Login</h2></center>
                <form onSubmit={handleSubmit}>
                    <div className='radios'>
                        <div className='radio' for='empresa'>
                            <label for='empresa' title='Empresa'><div className='bi bi-building-fill'></div> <input id='empresa' type="radio" name="radio" value='empresa' required></input></label>
                        </div>
                        <div className='radio'>
                            <label for='coletor' title='Coletor'><div className='bi bi-recycle'></div> <input id='coletor' type="radio" name="radio" value='coletor' required></input></label>
                        </div>
                        <div className='radio'>
                            <label for='fornecedor' title='Fornecedor'><div className='bi bi-person-fill'></div> <input id='fornecedor' type="radio" name="radio" value='fornecedor' required></input></label>
                        </div>
                    </div>
                    <div className='inputs'>
                        <div className='mb-3 d-flex align-items-center mb-100' style={{ borderBottom: '1px solid black' }}>
                            <i className="bi bi-envelope-at-fill" style={{ paddingRight: '10px', borderRight: '1px solid black' }}></i>
                            <input type="email" placeholder='E-mail' className='form-control border-0' onChange={e => setEmail(e.target.value)} required></input>
                        </div>
                        <div className='mb-3 d-flex align-items-center mb-100' style={{ borderBottom: '1px solid black' }}>
                            <i className="bi bi-lock-fill" style={{ paddingRight: '10px', borderRight: '1px solid black' }}></i>
                            <input type="password" placeholder='Senha' className='form-control border-0' onChange={e => setPasword(e.target.value)} required></input>
                        </div>
                        <center><a href='/register'>Cadastrar-se</a></center>
                        <center><a href='/register'>Esqueci a senha</a></center>
                        <p className='text-danger'>{response}</p>
                        <center><button className='btn btn-success w-100 rounded-0'>Entrar</button></center>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login