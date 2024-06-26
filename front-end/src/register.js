import React, { useCallback, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';


function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/register', { name, email, password })
        .then()
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25 h-auto'>
                <center><i className='bi bi-person h1'></i>
                    <h1 className='mb-300'>Cadastro</h1></center>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 d-flex align-items-center bg-white mb-100'>
                        <i className="bi bi-person-fill"></i>
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
                        <input type="password" placeholder='Confirmar Senha' className='form-control border-0' required></input>
                    </div>
                    <center><button className='btn btn-success w-100 rounded-0'>Cadastrar-se</button></center>
                </form>
            </div>
        </div>
    )
}

export default Register