$(document).ready(() => {
    $('.main-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // nextArrow: $('#my-next-Arrow'),
        // prevArrow: $('#my-prev-Arrow'),
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(function () {
        $("#tabs").tabs();
    });

    $(function () {
        $("#accordion").accordion({
            collapsible: true,
            active:false
        });
    });


    $('.logo').html('<img src="images/logo.png" alt="">')
})
