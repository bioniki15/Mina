import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth, db } from "../services/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            username: username,
            password: password,
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
                <fieldset className="form_fieldset">
                    <legend className="form_title">Cadastre-se</legend>

                    <p className='form_title cadastro'>Está se cadastrando como?</p>
                    <div className='radios'>
                        <div className='radio mb-3'>
                            {/* Outros campos podem ser adicionados aqui */}
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
                        <p className='text-danger text-center'></p>
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
