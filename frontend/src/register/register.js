import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import { auth, db } from "../services/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    //const [coletor, setColetor] = useState("");
    //const [empresa, setEmpresa] = useState("");
    //const [fornecedor, setFornecedor] = useState("");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cfpassword, setCfpassword] = useState("");
  
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, username, email, password);
        const user = auth.currentUser;
        console.log(user);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            username: username,
            photo:""
          });
        }
        console.log("User Registered Successfully!!");
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, {
          position: "bottom-center",
        });
      }
    };

    return (        
        <div>
            <form onSubmit={handleRegister} autoComplete='off' className='form'>
                <fieldset class="form_fieldset">
                    <legend class="form_title">Cadastre-se</legend>


                    <p className='form_title cadastro'>Está se cadastrando como?</p>
                    <div className='radios'>
                        <div className='radio mb-3' for='empresa'>
                            <label for='empresa' title='Empresa'><div className='bi bi-building-fill'></div> <input id='empresa' type="radio" name="radio" value='empresa' checked={user === 'empresa'} onChange={e => setEmpresa(e.target.value)} required></input><p className='users'>Empresa</p></label>

                        </div>
                        <div className='radio'>
                            <label for='coletor' title='Coletor'><div className='bi bi-recycle'></div> <input id='coletor' type="radio" name="radio" value='coletor' checked={user === 'coletor'} onChange={e => setColetor(e.target.value)} required></input><p className='users'>Coletor</p></label>
                        </div>
                        <div className='radio'>
                            <label for='fornecedor' title='Fornecedor'><div className='bi bi-person-fill'></div> <input id='fornecedor' type="radio" name="radio" value='fornecedor' checked={user === 'fornecedor'} onChange={e => setFornecedor(e.target.value)} required></input><p className='users'>Fornecedor</p></label>
                        </div>
                    </div>

                    <label for="user" class="form__label">Usuário</label>
                    <input type="text" id="user" name="username" onChange={(e) => setUsername(e.target.value)} required class="form__input" autofocus></input>

                    <label for="email" class="form__label">Email</label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required class="form__input"></input>

                    <label for="pass" class="form__label">Senha</label>
                    <input type="password" id="pass" name="password" required class="form__input" onChange={e => setPassword(e.target.value)}></input>

                    <label for="pass" class="form__label">Confirmar Senha</label>
                    <input type="password" id="pass" name="cfpassword" required class="form__input" onChange={e => setCfPassword(e.target.value)}></input>

                    <div class="form__action">
                        <p className='text-danger text-center'>{response}</p>
                        <input type="submit" value="Cadastrar" class="btn btn-primary"></input>
                        <p class="form__action__aside">Já possui cadastro? <a href="login">Faça Login</a> </p>
                    </div>
                </fieldset>
            </form>
        </div >
    )
}

export default Register;