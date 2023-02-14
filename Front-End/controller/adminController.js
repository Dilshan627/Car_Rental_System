

$("#admin_logout").click(function () {
    $('#loading_page').css('display', 'block');
    $('#nav-bar').css('display', 'block');

    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');
});