import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth, db } from "../services/firebase";
import { setDoc, doc } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Register() {
  const [userType, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (userType == "") {
      setError("O usuário deve escolher uma opção!")
    }

    else if (password.length <= 5) {
      setError("senha deve conter 6 ou mais caracteres!")
    }
    else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        if (user) {
          if (userType == "empresa") {
            await setDoc(doc(db, "Empresa", user.uid), {
              email: user.email,
              username: username,
              password: password,
            });
          }
          else if (userType == "coletor") {
            await setDoc(doc(db, "Coletor", user.uid), {
              email: user.email,
              username: username,
              password: password,
            });
          }
          else if (userType == "fornecedor") {
            await setDoc(doc(db, "Fornecedor", user.uid), {
              email: user.email,
              username: username,
              password: password,
            });
          }

          window.location.href = "/login";
        }

        alert("Registrado com sucesso!")
      } catch (error) {
        setError(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister} autoComplete='off' className='form'>
        <fieldset className="form_fieldset">
          <legend className="form_title">Cadastre-se</legend>
          <p className='form_title cadastro'>Está se cadastrando como?</p>
          <div>
          <div className='radios'>
            <div className='radio mb-3' for='empresa'>
              <label for='empresa' title='Empresa'><div className='bi bi-building-fill'></div> <input id='empresa' type="radio" name="radio" value='empresa' onChange={(e) => setUser("empresa")}></input><p className='users'>Empresa</p></label>
              </div>
            <div className='radio'>
              <label for='coletor' title='Coletor'><div className='bi bi-recycle'></div> <input id='coletor' type="radio" name="radio" value='coletor' onChange={(e) => setUser("coletor")}></input><p className='users'>Coletor</p></label>
            </div>
            <div className='radio'>
              <label for='fornecedor' title='Fornecedor'><div className='bi bi-person-fill'></div> <input id='fornecedor' type="radio" name="radio" value='fornecedor' onChange={(e) => setUser("fornecedor")}></input><p className='users'>Fornecedor</p></label>
            </div>
          </div>
          </div>

          <label htmlFor="user" className="form__label">Usuário</label>
          <input
            type="text"
            id="user"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form__input"
            autoFocus
          />

          <label htmlFor="email" className="form__label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form__input"
          />

          <label htmlFor="pass" className="form__label">Senha</label>
          <input
            type="password"
            id="pass"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form__input"
          />

          

          <div className="form__action">
            <p className='text-danger text-center'>{err}</p>
            <input
              type="submit"
              value="Cadastrar"
              className="btn btn-primary"
            />
            <p className="form__action__aside">Já possui cadastro? <a href="login">Faça Login</a></p>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
