let baseURL = "http://localhost:8080/Back_End_war/";
$("#log-dash-board-customer").click(function () {

    $("#customer_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');

    /* let userName = $("#userName").val();
     let password = $("#password").val();*/

    carNameLoad();
});

$("#log-dash-board-admin").click(function () {
    $("#admin_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
    $('#nav-bar').css('display', 'none');
    $("#login_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');

});

$("#log-dash-board-driver").click(function () {
    $("#driver_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');

});