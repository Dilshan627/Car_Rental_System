function incomeLoad() {
    $("#incomeTable").empty();
    let total = 0;
    $.ajax({
        url: baseURL + "payment",
        dataType: "json",
        success: function (resp) {
            for (let pay of resp.data) {
                var row = '<tr><td>' + pay.paymentId + '</td><td>' + pay.bookingId + '</td><td>' + pay.rentFee
                    + '</td><td>' + pay.driverFee + '</td><td>' + pay.lossPayment + '</td><td>' + pay.fullPayment + '</td></tr>';
                $("#incomeTable").append(row);
                total = total + pay.fullPayment;
                $("#lbl_income").val(total.toFixed(2));
            }
        }
    });
}

$("#btn_day").click(function () {
    $("#incomeTable").empty();
    let total = 0;
    $.ajax({
        url: baseURL + "payment/daily",
        dataType: "json",
        success: function (resp) {
            $("#lbl_income").val("0.00");
            for (let pay of resp.data) {
                var row = '<tr><td>' + pay.paymentId + '</td><td>' + pay.bookingId + '</td><td>' + pay.rentFee
                    + '</td><td>' + pay.driverFee + '</td><td>' + pay.lossPayment + '</td><td>' + pay.fullPayment + '</td></tr>';
                $("#incomeTable").append(row);
                total = total + pay.fullPayment;
                $("#lbl_income").val(total.toFixed(2));
            }
        }
    });
});
$("#btn_week").click(function () {
    $("#incomeTable").empty();
    let total = 0;
    $.ajax({
        url: baseURL + "payment/weekly",
        dataType: "json",
        success: function (resp) {
            for (let pay of resp.data) {
                var row = '<tr><td>' + pay.paymentId + '</td><td>' + pay.bookingId + '</td><td>' + pay.rentFee
                    + '</td><td>' + pay.driverFee + '</td><td>' + pay.lossPayment + '</td><td>' + pay.fullPayment + '</td></tr>';
                $("#incomeTable").append(row);
                total = total + pay.fullPayment;
                $("#lbl_income").val(total.toFixed(2));
            }
        }
    });
});
$("#btn_monthly").click(function () {
    $("#incomeTable").empty();
    let total = 0;
    $.ajax({
        url: baseURL + "payment/monthly",
        dataType: "json",
        success: function (resp) {
            for (let pay of resp.data) {
                var row = '<tr><td>' + pay.paymentId + '</td><td>' + pay.bookingId + '</td><td>' + pay.rentFee
                    + '</td><td>' + pay.driverFee + '</td><td>' + pay.lossPayment + '</td><td>' + pay.fullPayment + '</td></tr>';
                $("#incomeTable").append(row);
                total = total + pay.fullPayment;
                $("#lbl_income").val(total.toFixed(2));
            }
        }
    });
});
$("#btn_annual").click(function () {
    $("#incomeTable").empty();
    let total = 0;
    $.ajax({
        url: baseURL + "payment/annual",
        dataType: "json",
        success: function (resp) {
            for (let pay of resp.data) {
                var row = '<tr><td>' + pay.paymentId + '</td><td>' + pay.bookingId + '</td><td>' + pay.rentFee
                    + '</td><td>' + pay.driverFee + '</td><td>' + pay.lossPayment + '</td><td>' + pay.fullPayment + '</td></tr>';
                $("#incomeTable").append(row);
                total = total + pay.fullPayment;
                $("#lbl_income").val(total.toFixed(2));
            }
        }
    });

});
