import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import background from '../images/background.jpg';
import Navbar from '../navbar.js';

function Sobre() {
    return (
        <section class="home-sobre">
            <img src={background} className="background" />
            <Navbar />
            <div class="home-content-sobre">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Sobre o Projeto <span>Mina de Aço</span></h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>O con<span>ceito</span></h1>
                <p>O projeto Mina de Aço é uma iniciativa inovadora dedicada à coleta e gestão de materiais recicláveis,
                    com o objetivo de transformar a forma como vemos e tratamos os resíduos.
                    Inspirado pela metáfora de uma mina, onde cada resíduo é uma "preciosa mina de material"
                    que pode ser reaproveitada, o projeto visa não apenas a redução do impacto ambiental,
                    mas também a promoção de uma economia circular sustentável.</p>


                <br></br>

                <h1><span>Nossa</span> Missão </h1>

                <p>A missão da Mina de Aço é criar um ciclo virtuoso de reciclagem,
                    onde resíduos descartados são recuperados e reintegrados ao ciclo produtivo,
                    diminuindo a necessidade de novos recursos naturais e reduzindo a poluição.
                    Acreditamos que, ao adotar práticas eficientes e inovadoras na coleta e gestão de recicláveis,
                    podemos contribuir significativamente para um planeta mais limpo e saudável.</p>

                <br></br>

                <h1>Como <span>Funciona</span></h1>
                <p>O projeto opera através de uma rede de pontos de coleta estrategicamente localizados e
                    um sistema eficiente de triagem e processamento dos materiais recicláveis.
                    Utilizamos tecnologia avançada para garantir a separação correta dos materiais e sua destinação
                    adequada.
                    Além disso, promovemos parcerias com empresas e comunidades para maximizar o alcance e
                    impacto da nossa iniciativa.</p>
                <br></br>

                <h1><span>Nossos</span> Valores </h1>

                <p>Sustentabilidade: Trabalhamos para minimizar o impacto ambiental e promover a reutilização de materiais.
                </p>

                <br></br>

                <p>Educação: Comprometidos com a educação e conscientização sobre a importância da reciclagem e a gestão
                    responsável dos resíduos.</p>

                <br></br>

                <p>Inovação: Investimos em tecnologias e processos que melhoram a eficiência e a eficácia da coleta e
                    reciclagem.</p>
                <br></br>
                <p>Comunidade: Buscamos envolver a comunidade local em nossas ações e projetos, incentivando práticas
                    sustentáveis e colaborativas.</p>
                <br></br>
                <a href="#" class="btn-sobre">Contato</a>
            </div>
        </section>
    )
}

export default Sobre