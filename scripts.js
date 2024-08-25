const tela = document.querySelector('.tela');
const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.textContent === 'C') {
            tela.value = '';
        } else if (botao.textContent === '=') {
            try {
                tela.value = eval(tela.value);
            } catch {
                tela.value = 'Erro';
            }
        } else {
            tela.value += botao.textContent;
        }
    });
});
