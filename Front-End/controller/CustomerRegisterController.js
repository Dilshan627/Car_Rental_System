var regExrCustomerName = /^[A-Z|a-z\s]{3,20}$/;
var regExFullCustomerName = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
var regExCustomerNumber = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
var regExCustomerAddress = /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
var regExCustomerEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var regExCustomerPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExCustomerNic = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
var regExCustomerLicense = /^([x|X|B|B][0-9]{7}[x|X|D|D])$/;

$("#rCustomerName").keyup(function (event) {
    let rCustomerName = $("#rCustomerName").val();
    if (regExrCustomerName.test(rCustomerName)) {
        $('#rCustomerName').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#rCustomerFName").focus();
        }
    } else {
        $('#rCustomerName').css({"border-color": "red"});
    }
});

$("#rCustomerFName").keyup(function (event) {
    let rCustomerName = $("#rCustomerFName").val();
    if (regExFullCustomerName.test(rCustomerName)) {
        $('#rCustomerFName').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#rCustomerNumber").focus();
        }
    } else {
        $('#rCustomerFName').css({"border-color": "red"});
    }
});

$("#rCustomerNumber").keyup(function (event) {
    let rCustomerName = $("#rCustomerNumber").val();
    if (regExCustomerNumber.test(rCustomerName)) {
        $('#rCustomerNumber').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#rCustomerAddress").focus();
        }
    } else {
        $('#rCustomerNumber').css({"border-color": "red"});
    }
});

$("#rCustomerAddress").keyup(function (event) {
    let rCustomerName = $("#rCustomerAddress").val();
    if (regExCustomerAddress.test(rCustomerName)) {
        $('#rCustomerAddress').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#rCustomerEmail").focus();
        }
    } else {
        $('#rCustomerAddress').css({"border-color": "red"});
    }
});

$("#rCustomerEmail").keyup(function (event) {
    let rCustomerName = $("#rCustomerEmail").val();
    if (regExCustomerEmail.test(rCustomerName)) {
        $('#rCustomerEmail').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#rCustomerPassword").focus();
        }
    } else {
        $('#rCustomerEmail').css({"border-color": "red"});
    }
});

$("#rCustomerPassword").keyup(function (event) {
    let rCustomerName = $("#rCustomerPassword").val();
    if (regExCustomerPassword.test(rCustomerName)) {
        $('#rCustomerPassword').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#rCustomerNic").focus();
        }
    } else {
        $('#rCustomerPassword').css({"border-color": "red"});
    }
});

$("#rCustomerNic").keyup(function (event) {
    let rCustomerName = $("#rCustomerNic").val();
    if (regExCustomerNic.test(rCustomerName)) {
        $('#rCustomerNic').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#rCustomerLicenseNumber").focus();
        }
    } else {
        $('#rCustomerNic').css({"border-color": "red"});
    }
});

$("#rCustomerLicenseNumber").keyup(function (event) {
    let rCustomerName = $("#rCustomerLicenseNumber").val();
    if (regExCustomerLicense.test(rCustomerName)) {
        $('#rCustomerLicenseNumber').css({"border-color": "green"});
    } else {
        $('#rCustomerLicenseNumber').css({"border-color": "red"});
    }
});