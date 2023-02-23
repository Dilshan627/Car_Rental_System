function rollDice() {
    return "B-" + (Math.floor(Math.random() * 100000) + 5);
}

var bid = rollDice();

$("#bId").val(bid);

function loginCustomerDetails(cName, cContact, cNic) {
    $("#cName").val(cName);
    $("#cContact").val(cContact);
    $("#cNic").val(cNic);
}

$("#bCar").click(function () {
    let carName = $("#bCar").val();

    carDetails(carName);
});

function carDetails(carName) {

    $.ajax({
        url: baseURL + "car/search/" + carName,
        success: function (resp) {
            $("#bCarNumber").val(resp.data.registrationNO)
            $("#bCarType").val(resp.data.carType)
            $("#bCarColor").val(resp.data.carColor)
            $("#bPassengers").val(resp.data.passengers)
            $("#bTransmissionType").val(resp.data.transmissionType)
            $("#bFuelType").val(resp.data.fuelType)
            $("#bDailyRate").val(resp.data.dailyRate)
            $("#bMonthlyRate").val(resp.data.monthlyRate)
            $("#bExtraKM").val(resp.data.extraKM)
            $("#bAvailable").val(resp.data.status)
            $("#selectCarFrontView").attr("src", "assets/" + resp.data.carFrontView);
            bookingActive();
        }
    });
}


function carNameLoad() {
    if ($("#cName").val() == "") {
    } else {
        $.ajax({
            url: baseURL + "car",
            dataType: "json",
            success: function (resp) {
                for (let c of resp.data) {
                    $("#bCar").clear;
                    $("#bCar").append(`<option value="${c.carBrand}">${c.carBrand}</option>`);
                }

            }
        });
    }
}

function bookingActive() {
    let val = $("#bAvailable").val();
    if (val == "Available") {
        $("#btnBooking").prop('disabled', false);
    } else {
        $("#btnBooking").prop('disabled', true);
    }
}

$("#btnBooking").click(function () {
    alert("booking")
});


