function rollDice() {
    return "B-" + (Math.floor(Math.random() * 100000) + 5);
}


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
    var select = document.getElementById("bCar");
    select.innerHTML = "";

    if ($("#cName").val() == "") {
    } else {
        $.ajax({
            url: baseURL + "car",
            dataType: "json",
            success: function (resp) {
                for (let c of resp.data) {
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
    let driver = $("#bDriver").val();

    if ($("#bAvailable").val() == "") {
        alert('select car')
    } else {
        if ($("#bCarNumber").val() == "" || $("#bPickupTime").val() == "" || $("#bReturnDate").val() == "" || $("#bReturnTime").val() == "") {
            alert("All Fields Are Required !");
        } else {
            if (driver == "Yes") {
                assignDriver();
                // clearBookingDashboard();
            } else {
                booking("NO", "NO");
                // clearBookingDashboard();
            }
        }
    }
});

function assignDriver() {
    $.ajax({
        url: baseURL + "driver/available",
        dataType: "json",
        success: function (resp) {
            const randomIndex = Math.floor(Math.random() * resp.data.length);
            let driverName = resp.data[randomIndex].driverName;
            let driverContact = resp.data[randomIndex].driverContact;


            booking(driverName, driverContact);
        }
    });
}

function booking(driverName, driverContact) {
    let id = $("#bId").val();
    let name = $("#cName").val();
    let contact = $("#cContact").val();
    let nic = $("#cNic").val();
    let carNumber = $("#bCarNumber").val();
    let pickupDate = $("#bPickupDate").val();
    let pickupTime = $("#bPickupTime").val();
    let returnDate = $("#bReturnDate").val();
    let returnTime = $("#bReturnTime").val();

    let reserve = {
        bookingId: id,
        customerName: name,
        customerContact: contact,
        customerNic: nic,
        carNumber: carNumber,
        pickupDate: pickupDate,
        pickupTime: pickupTime,
        returnDate: returnDate,
        returnTime: returnTime,
        driverName: driverName,
        driverContact: driverContact
    }
    $.ajax({
        url: baseURL + 'reserve',
        method: 'post',
        contentType: "application/json",
        data: JSON.stringify(reserve),
        success: function (res) {
            alert(res.message);
        },
        error: function (error) {
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });


   // carAvalability(carNumber);
}


function carAvalability(id) {
    $.ajax({
        url: baseURL + "car/booking/" + id,
        method: "put",
        dataType: "json",
        success: function (resp) {
            alert(resp.message);
            loadAllCar();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function clearBookingDashboard() {
    var bid = rollDice();
    $("#bId").val(bid);
    $("#bCarNumber").val("");
    $("#bCarType").val("");
    $("#bCarColor").val("");
    $("#bPassengers").val("");
    $("#bTransmissionType").val("");
    $("#bFuelType").val("");
    $("#bDailyRate").val("");
    $("#bMonthlyRate").val("");
    $("#bExtraKM").val("");
    $("#bAvailable").val("");
    $("#bPickupDate").val("");
    $("#bPickupTime").val("");
    $("#bReturnDate").val("");
    $("#bReturnTime").val("");

    $("#selectCarFrontView").attr("src", "assets/4-slide.png");
}