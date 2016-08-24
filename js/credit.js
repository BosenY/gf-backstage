$(document).ready(function() {

    $('.btnAuthorization').click(function() {
        if ($('.authorization').is(":hidden")) {
            $('.authorization').removeClass("bounceOutLeft");
            $('.userManagement').addClass("bounceOutLeft");
            $('.userManagement').css("display", "none");
            $('.authorization').addClass("bounceInLeft");
            $('.authorization').css("display", "block");

        } else {

            $('.authorization').removeClass("bounceInLeft");
            $('.authorization').addClass("bounceOutLeft");
            setTimeout("$('.authorization').css('display', 'none')",900);
        }
    });
    $('.btnUserManagement').click(function() {
        if ($('.userManagement').is(":hidden")) {
            $('.userManagement').removeClass("bounceOutLeft");
            $('.authorization').addClass("bounceOutLeft");
              $('.authorization').css('display', 'none');
            $('.userManagement').addClass("bounceInLeft");
            $('.userManagement').css("display", "block");

        } else {

            $('.userManagement').removeClass("bounceInLeft");
            $('.userManagement').addClass("bounceOutLeft");
            setTimeout("$('.userManagement').css('display', 'none')",900);
        }
    });
});
