
$('#admin_dashboard').css('display', 'block');
$("#car_dashboard").css('display', 'none');
$("#driver_dashboard").css('display', 'none');
$("#customer_dashboard").css('display', 'none');
$("#reservation_dashboard").css('display', 'none');
$("#payment_dashboard").css('display', 'none');
$("#income_dashboard").css('display', 'none');


$("#admin_logout").click(function () {
    $('#loading_page').css('display', 'block');
    $('#nav-bar').css('display', 'block');

    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');
});

$("#btn_dashboard").click(function () {
    $('#admin_dashboard').css('display', 'block');

    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_car").click(function () {
    $("#car_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_driver").click(function () {
    $("#driver_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_customer").click(function () {
    $("#customer_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_reservation").click(function () {
    $("#reservation_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_payment").click(function () {
    $("#payment_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_income").click(function () {
    $("#income_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
});



