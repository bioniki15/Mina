import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../services/firebase";
import {toast} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in Successfully");
        window.location.href = "/home";
        toast.success("User logged in Successfully", {
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
        <form onSubmit={handleSubmit} autoComplete='off' className='form'>
            <fieldset class="form_fieldset">
                <legend class="form_title">Entrar</legend>


                <p className='form_title cadastro'>Está tentando entrar como?</p>
                <div className='radios'>
                    <div className='radio mb-3' for='empresa'>
                        <label for='empresa' title='Empresa'><div className='bi bi-building-fill'></div> <input id='empresa' type="radio" name="radio" value='empresa' required></input><p className='users'>Empresa</p></label>

                    </div>
                    <div className='radio'>
                        <label for='coletor' title='Coletor'><div className='bi bi-recycle'></div> <input id='coletor' type="radio" name="radio" value='coletor' required></input><p className='users'>Coletor</p></label>
                    </div>
                    <div className='radio'>
                        <label for='fornecedor' title='Fornecedor'><div className='bi bi-person-fill'></div> <input id='fornecedor' type="radio" name="radio" value='fornecedor'required></input><p className='users'>Fornecedor</p></label>
                    </div>
                </div>

                <label for="email" class="form__label">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required class="form__input" ></input>

                <label for="pass" class="form__label">Senha</label>
                <input type="password" id="pass" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required class="form__input"></input>

                <div class="form__action">
                    
                    <p className='text-danger text-center'></p>
                    <input type="submit" value="Entrar" class="btn btn-primary"></input>
                    <p class="form__action__aside">Não possui cadastro? <a href="register">Cadastrar-se</a> </p>
                </div>
            </fieldset>
            
        </form>
    </div >
)
}

export default Login