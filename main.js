$(document).ready(function(){
    altura = $(window).height() - 20;
    $('#conteudo').css('height', altura);
});

$(window).resize(function(){
    altura = $(window).height() - 20;
    $('#conteudo').css('height', altura);
});