function exibeNavbar(){
    let ulItens = document.getElementById('itens');
    let hHeader = document.getElementById('header');
    if(ulItens.style.transform == 'translateX(100%)'){
    hHeader.style.height = '100vh';    
    ulItens.style.transform = 'translateX(0)';
    ulItens.style.transition = '0.3s';
    }
    else{
        hHeader.style.height = "10vh"
        ulItens.style.transform = 'translateX(100%)'
    }

}
