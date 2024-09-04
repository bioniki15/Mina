import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [response, setResponse] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { user, name, email, password })
            .then((res) => {
                if (res.data == "ok") {
                    navigate('/painel', { state: { email } });
                }
                else if (res.data == "nb") {
                    setResponse("Dados não conferem. Favor Tentar Novamente.");
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete='off' className='form'>
                <fieldset class="form_fieldset">
                    <legend class="form_title">Entrar</legend>


                    <p className='form_title cadastro'>Está tentando entrar como?</p>
                    <div className='radios'>
                        <div className='radio mb-3' for='empresa'>
                            <label for='empresa' title='Empresa'><div className='bi bi-building-fill'></div> <input id='empresa' type="radio" name="radio" value='empresa' checked={user === 'empresa'} onChange={e => setUser(e.target.value)} required></input><p className='users'>Empresa</p></label>

                        </div>
                        <div className='radio'>
                            <label for='coletor' title='Coletor'><div className='bi bi-recycle'></div> <input id='coletor' type="radio" name="radio" value='coletor' checked={user === 'coletor'} onChange={e => setUser(e.target.value)} required></input><p className='users'>Coletor</p></label>
                        </div>
                        <div className='radio'>
                            <label for='fornecedor' title='Fornecedor'><div className='bi bi-person-fill'></div> <input id='fornecedor' type="radio" name="radio" value='fornecedor' checked={user === 'fornecedor'} onChange={e => setUser(e.target.value)} required></input><p className='users'>Fornecedor</p></label>
                        </div>
                    </div>

                    <label for="user" class="form__label">Usuário</label>
                    <input type="text" id="user" name="user" required class="form__input" autofocus onChange={e => setName(e.target.value)}></input>

                    <label for="email" class="form__label">Email</label>
                    <input type="email" id="email" name="email" required class="form__input" onChange={e => setEmail(e.target.value)}></input>

                    <label for="pass" class="form__label">Senha</label>
                    <input type="password" id="pass" name="pass" required class="form__input" onChange={e => setPasword(e.target.value)}></input>

                    <div class="form__action">
                        <p className='text-danger text-center'>{response}</p>
                        <input type="submit" value="Entrar" class="btn btn-primary"></input>
                        <p class="form__action__aside">Não possui cadastro? <a href="register">Cadastrar-se</a> </p>
                    </div>
                </fieldset>
            </form>
        </div >
    )
}

export default Login