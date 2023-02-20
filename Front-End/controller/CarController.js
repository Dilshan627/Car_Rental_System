var regExcRegistrationNo = /^([A-Z]{1,2})\s([A-Z]{1,3})\s([0-9]{4}(?<!0{4}))/;
var regExcColor = /^[A-Z|a-z\s]{3,20}$/;
var regExcPassengers = /^[0-9]+$/;
var regExcDailyRate = /^[0-9]+$/;
var regExcMonthlyRate = /^[0-9]+$/;
var regExcKmForaDay = /^[0-9]+$/;
var regExcKmForaMonth = /^[0-9]+$/;
var regExcPriceExtraKM = /^[0-9]+$/;

$("#carRegistrationNO").keyup(function (event) {
    let rCustomerName = $("#carRegistrationNO").val();
    if (regExcRegistrationNo.test(rCustomerName)) {
        $('#carRegistrationNO').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#carBrand").focus();
        }
    } else {
        $('#carRegistrationNO').css({"border-color": "red"});
    }
});

$("#carBrand").keyup(function (event) {
    if (event.key == "Enter") {
        $("#carType").focus();
    }
});

$("#carType").keyup(function (event) {
    if (event.key == "Enter") {
        $("#carColor").focus();
    }
});

$("#carColor").keyup(function (event) {
    let rCustomerName = $("#carColor").val();
    if (regExcColor.test(rCustomerName)) {
        $('#carColor').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#passengers").focus();
        }
    } else {
        $('#carColor').css({"border-color": "red"});
    }
});

$("#passengers").keyup(function (event) {
    let rCustomerName = $("#passengers").val();
    if (regExcPassengers.test(rCustomerName)) {
        $('#passengers').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#transmissionType").focus();
        }
    } else {
        $('#passengers').css({"border-color": "red"});
    }
});

$("#transmissionType").keyup(function (event) {
    if (event.key == "Enter") {
        $("#fuelType").focus();
    }
});
$("#fuelType").keyup(function (event) {
    if (event.key == "Enter") {
        $("#dailyRate").focus();
    }
});
$("#dailyRate").keyup(function (event) {
    let rCustomerName = $("#dailyRate").val();
    if (regExcDailyRate.test(rCustomerName)) {
        $('#dailyRate').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#monthlyRate").focus();
        }
    } else {
        $('#dailyRate').css({"border-color": "red"});
    }
});
$("#monthlyRate").keyup(function (event) {
    let rCustomerName = $("#monthlyRate").val();
    if (regExcMonthlyRate.test(rCustomerName)) {
        $('#monthlyRate').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#FreKmDay").focus();
        }
    } else {
        $('#monthlyRate').css({"border-color": "red"});
    }
});
$("#FreKmDay").keyup(function (event) {
    let rCustomerName = $("#FreKmDay").val();
    if (regExcKmForaDay.test(rCustomerName)) {
        $('#FreKmDay').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#FreKmMonth").focus();
        }
    } else {
        $('#FreKmDay').css({"border-color": "red"});
    }
});
$("#FreKmMonth").keyup(function (event) {
    let rCustomerName = $("#FreKmMonth").val();
    if (regExcKmForaMonth.test(rCustomerName)) {
        $('#FreKmMonth').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#extraKM").focus();
        }
    } else {
        $('#FreKmMonth').css({"border-color": "red"});
    }
});
$("#extraKM").keyup(function (event) {
    let rCustomerName = $("#extraKM").val();
    if (regExcPriceExtraKM.test(rCustomerName)) {
        $('#extraKM').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#damage").focus();
        }
    } else {
        $('#extraKM').css({"border-color": "red"});
    }
});

$("#damage").keyup(function (event) {
    if (event.key == "Enter") {
        $("#maintain").focus();
    }
});
$("#maintain").keyup(function (event) {
    if (event.key == "Enter") {
        $("#status").focus();
    }
});


