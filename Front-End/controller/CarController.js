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
            $("#FreeKmDay").focus();
        }
    } else {
        $('#monthlyRate').css({"border-color": "red"});
    }
});
$("#FreeKmDay").keyup(function (event) {
    let rCustomerName = $("#FreeKmDay").val();
    if (regExcKmForaDay.test(rCustomerName)) {
        $('#FreeKmDay').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#FreeKmMonth").focus();
        }
    } else {
        $('#FreeKmDay').css({"border-color": "red"});
    }
});
$("#FreeKmMonth").keyup(function (event) {
    let rCustomerName = $("#FreeKmMonth").val();
    if (regExcKmForaMonth.test(rCustomerName)) {
        $('#FreeKmMonth').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#extraKM").focus();
        }
    } else {
        $('#FreeKmMonth').css({"border-color": "red"});
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

$("#btnCarAdd").click(function () {
    if ($("#carRegistrationNO").val() == "" || $("#carBrand").val() == "" || $("#carType").val() == "" || $("#carColor").val() == "" ||
        $("#passengers").val() == "" || $("#transmissionType").val() == "" || $("#fuelType").val() == "" || $("#dailyRate").val() == "" ||
        $("#monthlyRate").val() == "" || $("#FreeKmDay").val() == "" || $("#FreeKmMonth").val() == "" || $("#extraKM").val() == "" ||
        $("#damage").val() == "" || $("#maintain").val() == "" || $("#status").val() == "" ||
        $('#carFrontView').get(0).files.length === 0 || $('#carBackView').get(0).files.length === 0 ||
        $('#carSideView').get(0).files.length === 0 || $('#carInteriorView').get(0).files.length === 0) {
        alert("All Fields Are Required !");
    } else {
        carSave();
    }
});


function carSave() {
    let registrationNO = $('#carRegistrationNO').val();
    let carBrand = $('#carBrand').val();
    let carType = $('#carType').val();
    let carColor = $('#carColor').val();
    let passengers = $('#passengers').val();
    let transmissionType = $('#transmissionType').val();
    let fuelType = $('#fuelType').val();
    let dailyRate = $('#dailyRate').val();
    let monthlyRate = $('#monthlyRate').val();
    let FreeKmDay = $('#FreeKmDay').val();
    let FreeKmMonth = $('#FreeKmMonth').val();
    let extraKM = $('#extraKM').val();
    let damage = $('#damage').val();
    let maintain = $('#maintain').val();
    let status = $('#status').val();
    let carFrontView = $('#carFrontView')[0].files[0].name;
    let carBackView = $('#carBackView')[0].files[0].name;
    let carSideView = $('#carSideView')[0].files[0].name;
    let carInteriorView = $('#carInteriorView')[0].files[0].name;

    var car = {
        registrationNO: registrationNO,
        carBrand: carBrand,
        carType: carType,
        carColor: carColor,
        passengers: passengers,
        transmissionType: transmissionType,
        fuelType: fuelType,
        dailyRate: dailyRate,
        monthlyRate: monthlyRate,
        FreeKmDay: FreeKmDay,
        FreeKmMonth: FreeKmMonth,
        extraKM: extraKM,
        damage: damage,
        maintain: maintain,
        status: status,
        carFrontView: carFrontView,
        carBackView: carBackView,
        carSideView: carSideView,
        carInteriorView: carInteriorView
    }


    console.log(car);

    $.ajax({
        url: baseURL + 'car',
        method: 'post',
        contentType: "application/json",
        data: JSON.stringify(car),
        success: function (res) {
            alert(res.message);
            carRegisterFormClear();
            loadAllCar();
        },
        error: function (error) {
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });
}

loadAllCar();

function loadAllCar() {
    $("#carTable").empty();

    $.ajax({
        url: baseURL + "car",
        dataType: "json",
        success: function (resp) {
            for (let cus of resp.data) {
                var row = '<tr><td>' + cus.registrationNO + '</td><td>' + cus.carBrand + '</td><td>' + cus.carType + '</td><td>' + cus.carColor
                    + '</td><td>' + cus.passengers + '</td><td>' + cus.transmissionType + '</td><td>' + cus.fuelType + '</td><td>' + cus.dailyRate
                    + '</td><td>' + cus.monthlyRate + '</td><td>' + cus.FreeKmDay + '</td><td>' + cus.FreeKmMonth + '</td><td>' + cus.extraKM
                    + '</td><td>' + cus.damage + '</td><td>' + cus.maintain + '</td><td>' + cus.status + '</td></tr>';
                $("#carTable").append(row);

            }
        }
    });
}

function carRegisterFormClear() {
    $('#carRegistrationNO').val();
    $('#carBrand').val("");
    $('#carType').val("");
    $('#carColor').val("");
    $('#passengers').val("");
    $('#transmissionType').val("");
    $('#fuelType').val("");
    $('#dailyRate').val("");
    $('#monthlyRate').val("");
    $('#FreKmDay').val("");
    $('#FreKmMonth').val("");
    $('#extraKM').val("");
    $('#damage').val("");
    $('#maintain').val("");
    $('#status').val("");
    $('#carFrontView').val("");
    $('#carBackView').val("");
    $('#carSideView').val("");
    $('#carInteriorView').val("");
}