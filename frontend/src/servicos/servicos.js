import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import background from '../images/background.jpg';
import "./servicos.css";

function Servicos() {
    return (
        <div>
            <img src={background} className="background" />
            <header>
                <a href="/" class="logo">Mina De Aço</a>

                <nav>
                    <a href="/"> Home</a>
                    <a href="#" class="active">Serviços</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                    <a href="/register">Iniciar Sessão</a>
                </nav>
            </header>
            <section class="home">
                <div class="home-content">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1> Facilitando a Sustentabi<span>lidade em Sua Casa</span></h1>
                    <p>Em um mundo cada vez mais consciente da importância da preservação ambiental,
                        a reciclagem de materiais é uma ação fundamental para garantir um futuro sustentável.
                        Pensando nisso, apresentamos o nosso inovador projeto de coleta de recicláveis,
                        especializado em metais como ferro, cobre e outros materiais semelhantes. </p>


                    <br></br>
                    <p>O processo é simples e eficiente: você só precisa informar o local de sua residência no nosso sistema,
                        e nós nos encarregaremos de realizar a coleta diretamente na sua casa. Não importa a quantidade ou
                        o tipo de metal que você possui; estamos preparados para receber todos os tipos de metais recicláveis,
                        desde pequenas quantidades até grandes volumes.</p>
                    <br></br>
                    <p>Para fazer parte do nosso projeto de reciclagem de metais, basta acessar nosso sistema online,
                        preencher as informações necessárias sobre o seu endereço e os materiais que deseja reciclar,
                        e agendar a coleta. Nossa equipe entrará em contato para confirmar os detalhes e
                        realizar a coleta na data e horário combinados.</p>
                    <br></br>
                    <p> Juntos, podemos fazer a diferença. Convidamos você a se unir a nós neste esforço vital para proteger
                        o meio ambiente e promover um futuro mais verde para todos.</p>
                    <br></br>
                    <p>Entre em contato conosco e comece a reciclar hoje mesmo!</p>
                    <br></br>
                    <a href="#" class="btn">Sobre</a>
                </div>
            </section>
        </div >
    )
}

export default Servicos