const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com as olimpíadas de Paris 2024  tema ficou muito popular, muitos jogos, muitas modalidades, e por trás detudo isso tem uma história muito legal.",
        alternativas: [
            {
                texto: "Quero saber mais!",
                afirmacao: " "
            },
            {
                texto: "Que incrível!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Mas antes de te mostrar a história toda, sabia que...",
        alternativas: [
            {
                texto: "Em Paris 2024 o breaking foi adicionado como mais um esporte olímpico!",
                afirmacao: ""
            },
            {
                texto: "Foi a olimpída com mias participação de mulheres!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No geral sabemos algumas coisas como, que a olimpíadas surgiu na Grécia, mas você sabia que...",
        alternativas: [
            {
                texto: "A primeira edição dos Jogos Olímpicos modernos foi realizada na cidade de Atenas, em 1896. Participaram 14 países e 241 atletas homens, pois as mulheres eram proibidas de competir. ",
                afirmacao: "As Olimpíadas são o maior evento esportivo do mundo, no qual países dos cinco continentes se reúnem para competir em diversas modalidades. Acontecem a cada quatro anos e são divididos entre as edições de verão e de inverno. Atletas com deficiência disputam as chamadas Paralimpíadas."
            },
            {
                texto: "Atletismo, ciclismo, esgrima, ginástica, halterofilismo, luta, natação e tênis foram as modalidades participantes.",
                afirmacao: "As Olimpíadas são o maior evento esportivo do mundo, no qual países dos cinco continentes se reúnem para competir em diversas modalidades. Acontecem a cada quatro anos e são divididos entre as edições de verão e de inverno. Atletas com deficiência disputam as chamadas Paralimpíadas."
            }
        ]
    },
    {
        enunciado: "Vamos conhecendo ainda mais sobre essa competição maravilhosa!",
        alternativas: [
            {
                texto: "Desde seu início, as Olimpíadas só não foram realizadas nos anos de 1916, por causa da Primeira Guerra Mundial, e em 1940 e 1944, devido à Segunda Guerra Mundial.",
                afirmacao: ""
            },
            {
                texto: "Em 2016 na olimpíada do Rio de Janeiro, mais de 10 mil atletas competiram em modalidades esportivas, com golf e rúgbi voltando aos jogos.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Vamos conhecer algumas curiosidades!",
        alternativas: [
            {
                texto: "Maria Lenk foi a primeira mulher brasileira a competir em uma Olimpíada, no ano de de 1932, na cidade estadunidense de Los Angeles.",
                afirmacao: ""
            },
            {
                texto: "A primeira vez que o evento foi transmitido via satélite pela televisão foi nos jogos de Roma, em 1960. Na ocasião, mais de 200 milhões de pessoas assistiram às competições em 18 países europeus.",
                afirmacao: " "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Por fim...";
}

mostraPergunta();
