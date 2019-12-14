$(document).ready(function(){
    $('#btn-menu').click(function(){
        if ( $ ('.btn-menu span').attr('class') == 'fa fa-bars') {
            $ ('.btn-menu span').removeClass('fa fa-bars').addClass('fa fa-times-circle');
            $ ('.menu-link').css({'left': '0'});
        } else {
            $ ('.btn-menu span').removeClass('fa fa-times-circle').addClass('fa fa-bars');
            $ ('.menu-link').css({'left': '-100%'});
        }
    })
})