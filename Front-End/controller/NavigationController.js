$('#admin_dashboard').css('display', 'block');
$("#car_dashboard").css('display', 'none');
$("#driver_dashboard").css('display', 'none');
$("#customer_dashboard").css('display', 'none');
$("#reservation_dashboard").css('display', 'none');
$("#details_dashboard").css('display', 'none');
$("#payment_dashboard").css('display', 'none');
$("#income_dashboard").css('display', 'none');

$('#customer_register_screen').css('display', 'block');

$("#driver_register_screen").css('display', 'none');
$("#login_screen").css('display', 'none');
$("#admin_screen").css('display', 'none');
$("#driver_screen").css('display', 'none');
$("#customer_screen").css('display', 'none');
$("#signUp_screen").css('display', 'none');

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
    $("#details_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');

    customerCount();
    bookingCount();
    carCount();
    activeBookingCount();
    driverCount();
    maintainCarCount();
});
$("#btn_car").click(function () {
    $("#car_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#details_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_driver").click(function () {
    $("#driver_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#details_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_customer").click(function () {
    $("#customer_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#details_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
});
$("#btn_reservation").click(function () {
    $("#reservation_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#details_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');

    loadReserve();
});
$("#btn_details").click(function () {
    $("#details_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');

    loadReserveDetails();
});
$("#btn_payment").click(function () {
    $("#payment_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#details_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');

    paymentID();
    paymentLoad();
    idLoad();
});
$("#btn_income").click(function () {
    $("#income_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#details_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');

    incomeLoad();
    totalIncome();
});







$("#back_home").click(function () {
    $('#loading_page').css('display', 'block');

    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');
    $("#signUp_screen").css('display', 'none');
});

$("#btn-login").click(function () {
    $("#login_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');

    $('#userName').val("");
    $('#password').val("");
});

$("#btn-signUp").click(function () {
    $("#signUp_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');

});

/*
$("#back-dash-board").click(function () {
    $('#loading_page').css('display', 'block');

    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');
});
*/



