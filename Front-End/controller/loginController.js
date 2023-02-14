

$("#log-dash-board-admin").click(function () {
    $('#login_page_container').css('display', 'none');
    $('#nav-bar').css('display', 'none');
    $("#login_screen").css('display', 'none');

    $("#admin_screen").css('display', 'block');
});

$("#back-dash-board").click(function () {
    $('#login_page_container').css('display', 'block');

    $("#login_screen").css('display', 'none');
});