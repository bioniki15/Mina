import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import background from '../images/background.jpg';
import Navbar from '../navbar.js';

function Servicos() {
    return (
        <div>
            <Navbar/>
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className='sobreProjeto'>Sobre o Projeto <span>Mina de Aço</span></h1>
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
                    <a href="#" class="btn">Contato</a>
                </div>
            </section>
        </div >
    )
}

export default Servicos 