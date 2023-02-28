
function customerCount() {
    $.ajax({
        url: baseURL + "customer/count",
        dataType: "json",
        success: function (resp) {
            console.log(resp.data)
            $("#registerUser").text(resp.data)
        }
    });
}

function bookingCount() {
    // bookings
    $.ajax({
        url: baseURL + "reserve/count",
        dataType: "json",
        success: function (resp) {
            console.log(resp.data)
            $("#bookings").text(resp.data)
        }
    });
}

function carCount() {
    // availableCarCount
    $.ajax({
        url: baseURL + "car/count",
        dataType: "json",
        success: function (resp) {
            console.log(resp.data)
            $("#availableCarCount").text(resp.data)
        }
    });

}

function activeBookingCount() {
    // bookingCount
    $.ajax({
        url: baseURL + "reserve/active",
        dataType: "json",
        success: function (resp) {
            console.log(resp.data)
            $("#bookingCount").text(resp.data)
        }
    });
}

function driverCount() {
    // availableDriverCount
    $.ajax({
        url: baseURL + "driver/count",
        dataType: "json",
        success: function (resp) {
            console.log(resp.data)
            $("#availableDriverCount").text(resp.data)
        }
    });
}

function maintainCarCount() {
    // maintainCarCount
    $.ajax({
        url: baseURL + "car/count/maintain",
        dataType: "json",
        success: function (resp) {
            console.log(resp.data)
            $("#maintainCarCount").text(resp.data)
        }
    });
}