$(document).ready(function () {
    var view_port = $(document).width();
    $('.m_ham_icon').click(function(){
        scroll_block();
        $('.mobile_tab, .tab_overlay').addClass('on');
    })
    $('.close_tab, .tab_overlay').click(function(){
        scroll_on();
        $('.mobile_tab, .tab_overlay').removeClass('on');
    })

    $(window).resize(function(){
        var view_port = $(document).width();
        //리사이즈시 pc버전에서 모바일탭 끄기
       if(view_port > 801){
            $('.mobile_tab, .tab_overlay').removeClass('on');
            scroll_on();
        }
        //켜진채 타블렛 이하일 때
        else if($('.mobile_tab, .tab_overlay').hasClass('on') === true
        && view_port < 801){
            scroll_block();
            $('.mobile_tab, .tab_overlay').addClass('on');
        }
        else{
            // 꺼진채 801 미만일때
            $('.mobile_tab, .tab_overlay').removeClass('on');
            scroll_on();
        }
    })
    
});

function scroll_block(){
    $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
};
function scroll_on(){
    $('body').off('scroll touchmove mousewheel');
};

