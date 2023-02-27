function loadReserveDetails() {
    $("#detailsTable").empty();
    $.ajax({
        url: baseURL + "reserve/approval",
        dataType: "json",
        success: function (resp) {
            for (let re of resp.data) {
                var row = '<tr><td>' + re.bookingId + '</td><td>' + re.customerName + '</td><td>' + re.customerNic + '</td><td>' + re.customerContact + '</td><td>'
                    + re.carNumber + '</td><td>' + re.pickupDate + '</td><td>' + re.pickupTime + '</td><td>' + re.returnDate + '</td><td>'
                    + re.returnTime + '</td><td>' + re.driverName + '</td><td>' + re.driverContact + '</td></tr>';
                $("#detailsTable").append(row);
            }
           //approvalBooking();
        }
    });
}
