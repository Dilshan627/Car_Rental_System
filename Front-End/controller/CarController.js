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
            $("#freeKmDay").focus();
        }
    } else {
        $('#monthlyRate').css({"border-color": "red"});
    }
});
$("#freeKmDay").keyup(function (event) {
    let rCustomerName = $("#freeKmDay").val();
    if (regExcKmForaDay.test(rCustomerName)) {
        $('#freeKmDay').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#freeKmMonth").focus();
        }
    } else {
        $('#freeKmDay').css({"border-color": "red"});
    }
});
$("#freeKmMonth").keyup(function (event) {
    let rCustomerName = $("#freeKmMonth").val();
    if (regExcKmForaMonth.test(rCustomerName)) {
        $('#freeKmMonth').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#extraKM").focus();
        }
    } else {
        $('#freeKmMonth').css({"border-color": "red"});
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
    let freeKmDay = $('#freeKmDay').val();
    let freeKmMonth = $('#freeKmMonth').val();
    let extraKM = $('#extraKM').val();
    let damage = $('#damage').val();
    let maintain = $('#maintain').val();
    let status = $('#status').val();
    let carFrontView = $('#carFrontView')[0].files[0].name;
    let carBackView = $('#carBackView')[0].files[0].name;
    let carSideView = $('#carSideView')[0].files[0].name;
    let carInteriorView = $('#carInteriorView')[0].files[0].name;


    var data = new FormData();
    let file = $("#carInteriorView")[0].files[0];
    let fileName = $("#carInteriorView")[0].files[0].name;
    data.append("myFile", file, fileName);

    $.ajax({
        url: baseURL + "api/v1/upload",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
        },
        error: function (err) {
            console.log(err);
        }
    });

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
        freeKmDay: freeKmDay,
        freeKmMonth: freeKmMonth,
        extraKM: extraKM,
        damage: damage,
        maintain: maintain,
        status: status,
        carFrontView: carFrontView,
        carBackView: carBackView,
        carSideView: carSideView,
        carInteriorView: carInteriorView
    }

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
            for (let car of resp.data) {
                var row = '<tr><td>' + car.registrationNO + '</td><td>' + car.carBrand + '</td><td>' + car.carType + '</td><td>' + car.carColor
                    + '</td><td>' + car.passengers + '</td><td>' + car.transmissionType + '</td><td>' + car.fuelType + '</td><td>' + car.dailyRate
                    + '</td><td>' + car.monthlyRate + '</td><td>' + car.freeKmDay + '</td><td>' + car.freeKmMonth + '</td><td>' + car.extraKM
                    + '</td><td>' + car.damage + '</td><td>' + car.maintain + '</td><td>' + car.status + '</td></tr>';
                $("#carTable").append(row);

            }
            carDelete();
        }
    });
}


function carDelete() {
    $("#carTable>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        f(id);
    });
}

function f(id) {
    $("#btnCarDelete").click(function () {
        $.ajax({
            url: baseURL + "car?id=" + id,
            method: "delete",
            dataType: "json",
            success: function (resp) {
                alert(resp.message);
                loadAllCar();
            },
            error: function (error) {
                alert(JSON.parse(error.responseText).message);
            }
        });

    });
}


function carRegisterFormClear() {
    $('#carRegistrationNO').val("");
    $('#carBrand').val("");
    $('#carType').val("");
    $('#carColor').val("");
    $('#passengers').val("");
    $('#transmissionType').val("");
    $('#fuelType').val("");
    $('#dailyRate').val("");
    $('#monthlyRate').val("");
    $('#freeKmDay').val("");
    $('#freeKmMonth').val("");
    $('#extraKM').val("");
    $('#damage').val("");
    $('#maintain').val("");
    $('#status').val("");
    $('#carFrontView').val("");
    $('#carBackView').val("");
    $('#carSideView').val("");
    $('#carInteriorView').val("");
}