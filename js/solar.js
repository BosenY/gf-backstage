$(document).ready(function() {

    $('.addComponent').click(function() {
        if ($('.component').is(":hidden")) {
            $('.component').removeClass("bounceOutLeft");
            $('.inverter').addClass("bounceOutLeft");
            $('.inverter').css("display", "none");
            $('.component').addClass("bounceInLeft");
            $('.component').css("display", "block");

        } else {

            $('.component').removeClass("bounceInLeft");
            $('.component').addClass("bounceOutLeft");
            setTimeout("$('.component').css('display', 'none')",900);
        }
    });
    $('.addInverter').click(function() {
        if ($('.inverter').is(":hidden")) {
            $('.inverter').removeClass("bounceOutLeft");
            $('.component').addClass("bounceOutLeft");
              $('.component').css('display', 'none');
            $('.inverter').addClass("bounceInLeft");
            $('.inverter').css("display", "block");

        } else {

            $('.inverter').removeClass("bounceInLeft");
            $('.inverter').addClass("bounceOutLeft");
            setTimeout("$('.inverter').css('display', 'none')",900);
        }
    });
});
