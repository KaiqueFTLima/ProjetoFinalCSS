function alternarTema() {
    document.body.classList.toggle('escuro');

 // Verifica se o tema escuro está ativado
 const modoEscuroAtivo = document.body.classList.contains('escuro');

 // Salva no localStorage
 localStorage.setItem('tema', modoEscuroAtivo ? 'escuro' : 'claro');
}

// Quando a página carregar, verifica o localStorage
window.onload = function() {
 const temaSalvo = localStorage.getItem('tema');
 if (temaSalvo === 'escuro') {
   document.body.classList.add('escuro');
 }
};