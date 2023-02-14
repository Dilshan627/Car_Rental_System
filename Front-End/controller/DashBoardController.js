$("#login_screen").css('display', 'none');
$("#admin_screen").css('display', 'none');
$("#driver_screen").css('display', 'none');
$("#customer_screen").css('display', 'none');

$("#back_home").click(function () {
    $('#loading_page').css('display', 'block');

    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');
});

$("#btn-login").click(function () {
    $("#login_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
});









