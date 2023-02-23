function loadReserve() {
    $("#reservationsTable").empty();
    $.ajax({
        url: baseURL + "reserve/pending",
        dataType: "json",
        success: function (resp) {
            for (let re of resp.data) {
                var row = '<tr><td>' + re.bookingId + '</td><td>' + re.customerName + '</td><td>' + re.customerContact + '</td><td>' + re.customerNic + '</td><td>'
                    + re.carNumber + '</td><td>' + re.pickupDate + '</td><td>' + re.pickupTime + '</td><td>' + re.returnDate + '</td><td>'
                    + re.returnTime + '</td><td>' + re.driverName + '</td><td>' + re.driverContact + '</td><td>' + "pending" + '</td></tr>';
                $("#reservationsTable").append(row);
            }


        }
    });
}


$("#btn_approval").click(function () {

});