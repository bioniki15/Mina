import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css'

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [response, setResponse] = useState(null);

    const gotoLogin = () => {
        navigate("/login", { state: 'catador' });
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
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='p-3 bg-white w-auto  h-auto' style={{ boxShadow: '0px 0px 10px', background: 'black' }}>
                <center><i className='bi bi-person-fill h1' style={{ color: 'green' }}></i>
                    <h2 className='mb-300'>Cadastro</h2></center>
                <form onSubmit={handleSubmit}>
                    <div className='radios'>
                        <div className='radio' for='empresa'>
                            <label for='empresa'>Empresa <input id='empresa' type="radio" name="radio" value='empresa' required></input></label>
                        </div>
                        <div className='radio'>
                            <label for='coletor'>Coletor <input id='coletor' type="radio" name="radio" value='coletor' required></input></label>
                        </div>
                        <div className='radio'>
                            <label for='fornecedor'>Fornecedor <input id='fornecedor' type="radio" name="radio" value='fornecedor' required></input></label>
                        </div>
                    </div>
                    <div className='formulario'>
                        <div className='inputs'>
                            <div className='mb-3 d-flex align-items-center mb-100 input'>
                                <i className="bi bi-person-fill fill-primary" style={{ paddingLeft: '10px', paddingRight: '10px', borderRight: '1px solid black' }}></i>
                                <input type="text" placeholder='Nome' className='form-control border-0' onChange={e => setName(e.target.value)} required></input>
                            </div>
                            <div className='mb-3 d-flex align-items-center input'>
                                <i className="bi bi-envelope-at-fill" style={{ paddingLeft: '10px', paddingRight: '10px', borderRight: '1px solid black' }}></i>
                                <input type="email" placeholder='E-mail' className='form-control border-0' onChange={e => setEmail(e.target.value)} required></input>
                            </div>
                            <div className='mb-3 d-flex align-items-center input'>
                                <i className="bi bi-lock-fill" style={{ paddingLeft: '10px', paddingRight: '10px', borderRight: '1px solid black' }}></i>
                                <input type="password" placeholder='Senha' className='form-control border-0' onChange={e => setPasword(e.target.value)} required></input>
                            </div>
                            <div className='mb-3 d-flex align-items-center input'>
                                <i className="bi bi-lock-fill" style={{ paddingLeft: '10px', paddingRight: '10px', borderRight: '1px solid black' }}></i>
                                <input type="password" placeholder='Confirmar Senha' className='form-control border-0' onChange={e => setConfPassword(e.target.value)} required></input>
                            </div>
                        </div>
                        <center><a href='/login'>Já possui uma conta?</a></center>
                        <p className='text-danger'>{response}</p>
                        <center><button className='btn btn-success btn-gradient w-100 rounded-0'>Confirmar</button></center>
                    </div>
                </form>
            </div >
        </div >

    )
}

export default Register