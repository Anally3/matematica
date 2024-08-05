const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [  {
    enunciado: "Vpcê vai a casa de um amigo e se depara com placas no telhado de sua casa,logo, fica curioso para saber o que são. Qual seria o seu primeiro pensamento?",
    alternativas: [
        {
            texto: "eu não faço idea doque seja!",
            afirmacao: "afirmação"
        },
        {
            texto: "eu conheço, é algo muito bom!",
            afirmacao: "afirmação"
        }
    ]
},
{
    enunciado: "Ao ver seu amigo, pergunta a ele sobre as placas que viu.",
    alternativas: [
        {
            texto: "é um equipamento robusto cuja função é realizar a captura dos raios de sol e transformar em energia elétrica! ",
            afirmacao: "afirmação"
        },
        {
            texto: "é possível fazer o abastecimento de eletricidade em uma casa, estabelecimentos comerciais e ambientes fabris!",
            afirmacao: "afirmação"
        }
    ]
},
{
    enunciado: "Nossa isso parece ser muito legal mesmo! Então é uma tecnologia que ajuda o meio ambiente não é?",
    alternativas: [
        {
            texto: "Sim! Elas ajudam na redução de poluição por fontes contaminadoras, e de gases do efeito estufa, diminuição do desmatamento e elevação do uso de recursos naturais.",
            afirmacao: "afirmação"
        },
        {
            texto: " Por serem energias renováveis, a energia solar é sustentável, trazendo diversos benefícios para o meio ambiente!",
            afirmacao: "afirmação"
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
    historiaFinal  += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = "você aprendeu sobre uma das novas tecnologias que estão ajudando o mundo!"
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
