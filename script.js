function escolherAtividade(atividade) {
    const mensagem = document.getElementById("mensagem-escolhida");
    mensagem.textContent = `Você escolheu: ${atividade}`;
}

function naoFazerNada() {
    const mensagem = document.getElementById("mensagem-escolhida");
    mensagem.textContent = "Para de ser chata, não existe essa opção. Escolha algo para fazer com o ale!";
}

