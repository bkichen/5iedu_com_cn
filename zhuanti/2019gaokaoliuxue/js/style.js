// JavaScript Document

$(function(){
    //money 样式
    $(function () {
        $('.money li').click(function(){
            $('.money li').removeAttr('class') && $(this).attr('class', 'checked');
            $('.money li input[type=radio]').removeAttr('checked')
            $(this).find('input').attr('checked','checked');
        });
    })
    //average value 弹窗
    $('.pg_btn').click(function () {
        $('.popup_box').css({'display':'block'})
        var wHeight=$(window).height(),boxHeight=$('.popup').height(),topHeight=(wHeight-boxHeight)/2, wWidth=$(window).width(),boxWidth=$('.popup').width(),leftWidth=(wWidth-boxWidth)/2;
        $('.popup').css({'left':leftWidth,'top':topHeight});
    })
    $('.popup i').click(function () {
        $('.popup_box').css({'display':'none'})
    });

    /*返回顶部定位*/
    var  oScreenWidth=$(window).width();
    var w=(oScreenWidth-1200)/2;
    if(w>0 ){
        $("#toTop").css({
            'right' :w-60
        });
    }else{
        $("#toTop").css({
            'right' :10
        });
    }

    /*返回顶部*/
    $(window).scroll(function() {
        if ($(this).scrollTop()> 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    })

    if(oScreenWidth<=1024){
        $('.breadcrumbs ').after($('.lead'))
        $('.lead').css({'position':'inherit','bottom':'inherit'})
    }

    if(oScreenWidth<=767){
        $('.lead_img img').hide()
        $('.lead_img').html('<span>导语</span><p style="height: auto">FOREWORD</p>')
    }
})

