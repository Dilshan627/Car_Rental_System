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
            approvalBooking();
        }
    });
}


function approvalBooking() {
    $("#reservationsTable>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        bookingId(id);
    });
}

function bookingId(id) {
    $("#btn_approval").click(function () {
        $.ajax({
            url: baseURL + "reserve/approval/" + id,
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

    });
}