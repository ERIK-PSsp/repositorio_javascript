// esse código serve para monitorar o tamanho da tela, e quando chegar em determinado ponto, vai exibir o menu hamburguer(menu de opções)
function identificaTamanho() {
    if  (window.innerWidth <= 768) {
        itens.style.display = 'block'
    } else {
        intens.style.display = 'none'
    }
}

function clickOpçoes() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
    itens.style.display = 'block'
    }
}