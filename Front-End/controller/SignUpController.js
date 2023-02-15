$('#customer_register_screen').css('display', 'block');

$("#driver_register_screen").css('display', 'none');

$("#btn_customer_register").click(function () {
    $('#customer_register_screen').css('display', 'block');

    $("#driver_register_screen").css('display', 'none');
});
$("#btn_driver_register").click(function () {
    $('#customer_register_screen').css('display', 'none');

    $("#driver_register_screen").css('display', 'block');
});