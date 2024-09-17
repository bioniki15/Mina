import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import "./contato.css";


>>>>>>> de0c24f67e9bca1cc20736dc3277ad98fdd4ad10

function Contato() {
    return (

<<<<<<< HEAD
<section className='section-contato'>
      <h2 className='h2-contato'>Contato</h2>
      <form action="https://api.staticforms.xyz/submit" className='form-contato' method="post">
        <label className='label-contato'>Nome</label>
=======
<section>
      <h2>Contato</h2>
      <form action="https://api.staticforms.xyz/submit" method="post">
        <label>Nome</label>
>>>>>>> de0c24f67e9bca1cc20736dc3277ad98fdd4ad10
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          autocomplete="off"
<<<<<<< HEAD
          className='input-contato'
=======
>>>>>>> de0c24f67e9bca1cc20736dc3277ad98fdd4ad10
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          autocomplete="off"
<<<<<<< HEAD
          className='input-contato'
          required
        />
        <label className='label-contato'>Mensagem</label>
=======
          required
        />
        <label>Mensagem</label>
>>>>>>> de0c24f67e9bca1cc20736dc3277ad98fdd4ad10
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem"
<<<<<<< HEAD
          className='textarea-contato'
          required
        ></textarea>
        <button type="submit" className='button-contato'>Enviar</button>
=======
          required
        ></textarea>
        <button type="submit">Enviar</button>
>>>>>>> de0c24f67e9bca1cc20736dc3277ad98fdd4ad10

        <input
          type="hidden"
          name="accessKey"
<<<<<<< HEAD
          className='input-contato'
=======
>>>>>>> de0c24f67e9bca1cc20736dc3277ad98fdd4ad10
          value="1fca455f-1025-462d-bf83-d2b9a5173277"
        />
        <input
          type="hidden"
          name="redirectTo"
<<<<<<< HEAD
          className='input-contato'
=======
          value="http://127.0.0.1:5502/index2.html"
>>>>>>> de0c24f67e9bca1cc20736dc3277ad98fdd4ad10
        />
      </form>
    </section>
    )
  }
  
  export default Contato