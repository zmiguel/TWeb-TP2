$(document).ready(function(){
    altura = $(window).height() - 240;
    $('#conteudo').css('height', altura);
    
    var page = window.location.hash;
    if(page == ""){
        $('#box').load('html/home.html');
    } else if(page == "#sobre"){
        $('#box').load('html/sobre.html');
    } else if(page == "#pessoal"){
        $('#box').load('html/pessoal.html');
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
    } else if(page == "#1"){
        $('#box').load('html/1.html');
    } else if(page == "#2"){
        $('#box').load('html/2.html');
    } else if(page == "#3"){
        $('#box').load('html/3.html');
    } else if(page == "#4"){
        $('#box').load('html/4.html');
    } else if(page == "#5"){
        $('#box').load('html/5.html');
    } else if(page == "#6"){
        $('#box').load('html/6.html');
    } else if(page == "#7"){
        $('#box').load('html/7.html');
    } else if(page == "#8"){
        $('#box').load('html/8.html');
    } else if(page == "#9"){
        $('#box').load('html/9.html');
    } else if(page == "#10"){
        $('#box').load('html/10.html');
    } else if(page == "#11"){
        $('#box').load('html/11.html');
    } else if(page == "#12"){
        $('#box').load('html/12.html');
    } else if(page == "#13"){
        $('#box').load('html/13.html');
    } else if(page == "#14"){
        $('#box').load('html/14.html');
    } else if(page == "#15"){
        $('#box').load('html/15.html');
    } else if(page == "#16"){
        $('#box').load('html/16.html');
    } else {
        $('#box').load('html/404.html');
    }
});

$(window).resize(function(){
    altura = $(window).height() - 240;
    $('#conteudo').css('height', altura);
    
     if($("#motivo").val() == "Outro"){
        $('.ifoutro').css('visibility', 'visible');
    }else{
        $('.ifoutro').css('visibility', 'hidden');
    }
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
    } else if(page == "#1"){
        $('#box').load('html/1.html');
    } else if(page == "#2"){
        $('#box').load('html/2.html');
    } else if(page == "#3"){
        $('#box').load('html/3.html');
    } else if(page == "#4"){
        $('#box').load('html/4.html');
    } else if(page == "#5"){
        $('#box').load('html/5.html');
    } else if(page == "#6"){
        $('#box').load('html/6.html');
    } else if(page == "#7"){
        $('#box').load('html/7.html');
    } else if(page == "#8"){
        $('#box').load('html/8.html');
    } else if(page == "#9"){
        $('#box').load('html/9.html');
    } else if(page == "#10"){
        $('#box').load('html/10.html');
    } else if(page == "#11"){
        $('#box').load('html/11.html');
    } else if(page == "#12"){
        $('#box').load('html/12.html');
    } else if(page == "#13"){
        $('#box').load('html/13.html');
    } else if(page == "#14"){
        $('#box').load('html/14.html');
    } else if(page == "#15"){
        $('#box').load('html/15.html');
    } else if(page == "#16"){
        $('#box').load('html/16.html');
    } else {
        $('#box').load('html/404.html');
    }
});