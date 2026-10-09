const nomes = { carpa: "CARPA", pombo: "POMBO", pavao: "PAVÃO" };
const chave = "ecoescola-votos-pelucia-v1";
const votacao = document.getElementById("votacao");
const agradecimento = document.getElementById("agradecimento");
const erro = document.getElementById("erro");
const botoes = document.querySelectorAll("[data-animal]");
let votou = false;

function votar(animal) {
  if (votou || !Object.hasOwn(nomes, animal)) return;
  votou = true; // Evita dois votos por toque duplo.
  botoes.forEach(botao => { botao.disabled = true; });
  erro.hidden = true;

  try {
    // Os votos são guardados somente neste navegador/aparelho.
    const salvo = localStorage.getItem(chave);
    const votos = salvo === null ? { carpa: 0, pombo: 0, pavao: 0 } : JSON.parse(salvo);
    if (!votos || !Object.keys(nomes).every(nome => Number.isSafeInteger(votos[nome]) && votos[nome] >= 0)) {
      throw new Error("Contagem inválida");
    }
    votos[animal] += 1;
    if (!Number.isSafeInteger(votos[animal])) throw new Error("Limite de votos");
    localStorage.setItem(chave, JSON.stringify(votos));

    agradecimento.className = animal;
    document.getElementById("confirmacao").textContent =
      `VOCÊ VOTOU ${animal === "carpa" ? "NA" : "NO"} ${nomes[animal]}`;
    votacao.hidden = true;
    agradecimento.hidden = false;
    document.getElementById("titulo-obrigado").focus();
    window.scrollTo(0, 0);
  } catch {
    votou = false;
    botoes.forEach(botao => { botao.disabled = false; });
    erro.textContent = "NÃO FOI POSSÍVEL GUARDAR SEU VOTO NESTE NAVEGADOR. PEÇA AJUDA A UM ADULTO PARA TENTAR NOVAMENTE.";
    erro.hidden = false;
  }
}

botoes.forEach(botao => {
  botao.addEventListener("click", () => votar(botao.dataset.animal));
});

document.getElementById("proxima").addEventListener("click", () => {
  votou = false;
  agradecimento.hidden = true;
  votacao.hidden = false;
  botoes.forEach(botao => { botao.disabled = false; });
  botoes[0].focus();
  window.scrollTo(0, 0);
});
