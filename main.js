
const caixaPrincipal =  document.querySelector(".caixa-principal");
 const caixaPergunta =  document.querySelector(".caixa-pergunta");
 const caixaAlternativas =  document.querySelector(".caixa-alternativas");
 const caixaResultado =  document.querySelector(".caixa-resultado");
 const textoResultado =  document.querySelector(".texto-resultado");

 const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: "afirmação"
            },
            {
                 
            texto: "Alternativa 2",
            afirmacao: "afirmação"
             }
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: "afirmação"
            },
            {
                 
            texto: "Alternativa 2",
            afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: "afirmação"
            },
            {
                 
            texto: "Alternativa 2",
            afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: "afirmação"
            },
            {
                 
            texto: "Alternativa 2",
            afirmacao: "afirmação"
            }
        ]
    },
 ];
 
 
 let atual = 0 ;
 let perguntaAtual;
 
 
 function mostraPergunta() {
 perguntaAtual = perguntas [atual];
 caixaPerguntas.textContent = perguntaAtual.enunciado;
 mostrarAlternativas();
 }
 
 function mostraAlternativas() {
 for (const alternativa of perguntaAtual.alternativas) {
 const botaoAlternativas = document. createElement("button");
 botaoAlternativas.textContent = alternativa.texto;
 botaoAlternativas.addEventListener ("click", function (){
    atual++;
    mostraPergunta();
 })
 caixaAlternativas.appendChild(botaoAlternativas);
 }
 }
 
 
 mostraPergunta ();
 
 
 