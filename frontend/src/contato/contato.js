import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function Contato() {
    return (

<section className='section-contato'>
      <h2 className='h2-contato'>Contato</h2>
      <form action="https://api.staticforms.xyz/submit" className='form-contato' method="post">
        <label className='label-contato'>Nome</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          autocomplete="off"
          className='input-contato'
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          autocomplete="off"
          className='input-contato'
          required
        />
        <label className='label-contato'>Mensagem</label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem"
          className='textarea-contato'
          required
        ></textarea>
        <button type="submit" className='button-contato'>Enviar</button>

        <input
          type="hidden"
          name="accessKey"
          className='input-contato'
          value="1fca455f-1025-462d-bf83-d2b9a5173277"
        />
        <input
          type="hidden"
          name="redirectTo"
          className='input-contato'
        />
      </form>
    </section>
    )
  }
  
  export default Contato