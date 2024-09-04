import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
    return (
        <footer>
        <div class="container-footer">
            <div class="row-footer">
                <div class="footer-col">
                    <h4>Mina De Aço</h4>
                    <ul>
                        <li><a href="#"> Quem somos </a></li>
                        <li><a href=""> nossos serviços </a></li>
                        <li><a href=""> Sobre O Projeto </a></li>
                    </ul>
                </div>
              
                <div class="footer-col">
                    <h4>Localização</h4>
                    <ul>
                        <li><a href="#">Taquaritinga - SP</a></li>
                        <li><a href="https://maps.app.goo.gl/KcX8NCWPfGW7CruD7">Fatec - Taquaritinga</a></li>                        
                    </ul>
                </div>
               
                <div class="footer-col">
                    <h4>Apoiar</h4>
                    <ul>
                        <li><a href="#">Atendimento ao cliente</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Atenção</h4>

                    <div class="medias-socias">
                        <a href="#"> <i class="fa fa-newspaper-o"></i> </a>
                        <a href="#"> <i class="fa fa-truck"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer