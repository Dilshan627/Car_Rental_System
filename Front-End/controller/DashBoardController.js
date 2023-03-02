
function customerCount() {
    $.ajax({
        url: baseURL + "customer/count",
        dataType: "json",
        success: function (resp) {
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
            $("#maintainCarCount").text(resp.data)
        }
    });
}