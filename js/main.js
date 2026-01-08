$(function(){
    $('.firstimg').mouseenter(function(){
        $('.firstimg').css({
            'background' : `url('image/title-img.png') no-repeat center/cover`
        })
        $('.imginner').addClass('on')
    })



    $('.question').click(function(){
        $(this).next().slideToggle().siblings('.answer').slideUp()
    })
    $('.answer').click(function(){
        $(this).slideUp()
    })
    $('.answer').trigger('slideUp')


    $(window).scroll(function(){
        if($(window).scrollTop() >= 1200){
            $('.gotop').fadeIn()
        }else{
            $('.gotop').fadeOut()
        }
    })

    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        },500)

    })

    



})