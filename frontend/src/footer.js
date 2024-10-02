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
                            <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                            </svg> </a>
                            <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg> </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer