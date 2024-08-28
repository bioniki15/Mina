import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import "./contato.css";



function Contato() {
    return (

<section>
      <h2>Contato</h2>
      <form action="https://api.staticforms.xyz/submit" method="post">
        <label>Nome</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          autocomplete="off"
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          autocomplete="off"
          required
        />
        <label>Mensagem</label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem"
          required
        ></textarea>
        <button type="submit">Enviar</button>

        <input
          type="hidden"
          name="accessKey"
          value="1fca455f-1025-462d-bf83-d2b9a5173277"
        />
        <input
          type="hidden"
          name="redirectTo"
          value="http://127.0.0.1:5502/index2.html"
        />
      </form>
    </section>
    )
  }
  
  export default Contato