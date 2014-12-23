$(document).ready(function(){
    altura = $(window).height() - 20;
    $('#conteudo').css('height', altura);
    
    var page = window.location.hash;
    if(page == ""){
        $('#box').load('html/home.html');
    } else if(page == "#sobre"){
        $('#box').load('html/sobre.html');
    } else if(page == "#pessoal"){
        $('#box').load('html/pessoal.html');
    } else if(page == "#presidente"){
        $('#box').load('html/presidente.html');
    } else if(page == "#tesoureiro"){
        $('#box').load('html/tesoureiro.html');
    } else if(page == "#vogais"){
        $('#box').load('html/vogais.html');
    } else if(page == "#servicos"){
        $('#box').load('html/servicos.html');
    } else if(page == "#info"){
        $('#box').load('html/info.html');
    } else if(page == "#transportes"){
        $('#box').load('html/transportes.html');
    } else if(page == "#saude"){
        $('#box').load('html/saude.html');
    } else if(page == "#farmacias"){
        $('#box').load('html/farmacias.html');
    } else if(page == "#centro-de-saude"){
        $('#box').load('html/centro-de-saude.html');
    } else if(page == "#seguranca"){
        $('#box').load('html/seguranca.html');
    } else if(page == "#gnr"){
        $('#box').load('html/gnr.html');
    } else if(page == "#bombeiros"){
        $('#box').load('html/bombeiros.html');
    } else if(page == "#proteccao-civil"){
        $('#box').load('html/proteccao-civil.html');
    } else if(page == "#turismo"){
        $('#box').load('html/turismo.html');
    } else if(page == "#museu"){
        $('#box').load('html/museu.html');
    } else if(page == "#jardim-vila"){
        $('#box').load('html/jardim-vila.html');
    } else if(page == "#azulejos"){
        $('#box').load('html/azulejos.html');
    } else if(page == "#contactos"){
        $('#box').load('html/contactos.html');
    } else {
        $('#box').load('html/404.html');
    }
});

$(window).resize(function(){
    altura = $(window).height() - 20;
    $('#conteudo').css('height', altura);
});

//Paginas dinamicas Jquery + HTML 5

$(window).on('hashchange',function(){ 
    var page = window.location.hash;
    if(page == ""){
        $('#box').load('html/home.html');
    } else if(page == "#sobre"){
        $('#box').load('html/sobre.html');
    } else if(page == "#pessoal"){
        $('#box').load('html/pessoal.html');
    } else if(page == "#presidente"){
        $('#box').load('html/presidente.html');
    } else if(page == "#tesoureiro"){
        $('#box').load('html/tesoureiro.html');
    } else if(page == "#vogais"){
        $('#box').load('html/vogais.html');
    } else if(page == "#servicos"){
        $('#box').load('html/servicos.html');
    } else if(page == "#info"){
        $('#box').load('html/info.html');
    } else if(page == "#transportes"){
        $('#box').load('html/transportes.html');
    } else if(page == "#saude"){
        $('#box').load('html/saude.html');
    } else if(page == "#farmacias"){
        $('#box').load('html/farmacias.html');
    } else if(page == "#centro-de-saude"){
        $('#box').load('html/centro-de-saude.html');
    } else if(page == "#seguranca"){
        $('#box').load('html/seguranca.html');
    } else if(page == "#gnr"){
        $('#box').load('html/gnr.html');
    } else if(page == "#bombeiros"){
        $('#box').load('html/bombeiros.html');
    } else if(page == "#proteccao-civil"){
        $('#box').load('html/proteccao-civil.html');
    } else if(page == "#turismo"){
        $('#box').load('html/turismo.html');
    } else if(page == "#museu"){
        $('#box').load('html/museu.html');
    } else if(page == "#jardim-vila"){
        $('#box').load('html/jardim-vila.html');
    } else if(page == "#azulejos"){
        $('#box').load('html/azulejos.html');
    } else if(page == "#contactos"){
        $('#box').load('html/contactos.html');
    } else {
        $('#box').load('html/404.html');
    }
});