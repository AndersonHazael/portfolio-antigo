function exibeNavbar(){

    if(itens.style.transform == 'translateX(100%)'){
    header.style.height = '100vh';    
    itens.style.transform = 'translateX(0)';
    itens.style.transition = '0.3s';
    }
    else{
        header.style.height = "10vh"
        itens.style.transform = 'translateX(100%)'
    }

}