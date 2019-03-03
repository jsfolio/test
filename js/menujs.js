$(document).ready(function () {
        
    $(window).scroll(function(){
        var sctop = $(document).scrollTop();
        var view_port = $(document).width();


        if( sctop > 200 && view_port > 800 ) {

            $('.scroll_menu').css({
                top:0,
                transition: 'all .4s'
            })
        }   
        else if(sctop < 200 && view_port > 801){
        
            $('.scroll_menu').css({
                top:'-58px'
            })

        }

        if(sctop > 500){
            $('#top_btn').fadeIn();
        }else{
            $('#top_btn').fadeOut();
        }

        var newPosition = sctop - 500 + "px";

        if(sctop > $('#sec2').offset().top){

        $(".fixed_promo_l, .fixed_promo_r").stop().animate({
            "top" : newPosition
        }, 300);
        }else{
            $(".fixed_promo_l, .fixed_promo_r").stop().animate({
                "top" : 0
            }, 300);
        }
    })


    $('#top_btn').click(function(){
        $('html, body').animate({
            scrollTop : 0
        },400);
        return false;
    });
});

    
