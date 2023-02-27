incomeLoad();

function incomeLoad() {
    $("#incomeTable").empty();

    $.ajax({
        url: baseURL + "payment",
        dataType: "json",
        success: function (resp) {
            for (let pay of resp.data) {
                var row = '<tr><td>' + pay.paymentId + '</td><td>' + pay.bookingId + '</td><td>' + pay.paymentDate + '</td><td>' + pay.rentFee
                    + '</td><td>' + pay.driverFee + '</td><td>' + pay.lossPayment + '</td><td>' + pay.fullPayment + '</td></tr>';
                $("#incomeTable").append(row);

            }
            paymentID();

        }
    });
}

// lbl_income