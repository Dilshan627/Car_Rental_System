function loadReserve() {
    $("#reservationsTable").empty();
    $.ajax({
        url: baseURL + "reserve/pending",
        dataType: "json",
        success: function (resp) {
            for (let re of resp.data) {
                var row = '<tr><td>' + re.bookingId + '</td><td>' + re.customerName + '</td><td>' + re.customerNic + '</td><td>' + re.customerContact + '</td><td>'
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
        $("#aId").val(id);

    });
}

$("#btn_approval").click(function () {
    let id = $("#aId").val();
    $.ajax({
        url: baseURL + "reserve/" + id,
        dataType: "json",
        success: function (resp) {
            let reserve = {
                bookingId: id,
                customerName: resp.data.customerName,
                customerContact: resp.data.customerContact,
                customerNic: resp.data.customerNic,
                carNumber: resp.data.carNumber,
                pickupDate: resp.data.pickupDate,
                pickupTime: resp.data.pickupTime,
                returnDate: resp.data.returnDate,
                returnTime: resp.data.returnTime,
                driverName: resp.data.driverName,
                driverContact: resp.data.driverContact,
                payment:resp.data.payment,
                status: true,
                fullPayment:false
            }
            approval(reserve);
        }
    });

});

function approval(reserve) {
    console.log(reserve);
    $.ajax({
        url: baseURL + 'reserve',
        method: 'put',
        contentType: "application/json",
        data: JSON.stringify(reserve),
        success: function (res) {
            console.log(res.message);
        },
        error: function (error) {
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });
    loadReserve();
}