function paymentID() {
    var table = document.getElementById("paymentTable");
    var rowCount = table.rows.length;
    console.log(rowCount)
    $("#paymentId").val("P00-" + rowCount);
}

$("#harmOrNot").click(function () {
    let status = $("#harmOrNot").val();
    if (status == "Yes") {
        $("#lossPayment").prop('disabled', false);
    } else {
        $("#lossPayment").prop('disabled', true);
        $("#lossPayment").val("0.00");
    }

});

$("#btn_pay").click(function () {
    let pId = $("#paymentId").val();
    let bId = $("#bookId").val();
    let pDate = $("#paymentDate").val();
    let rentFee = $("#rentFee").val();
    let lossPayment = $("#lossPayment").val();
    let eKm = $("#eKm").val();
    let eKmPrice = $("#eKmPrice").val();
    let driverPrice = $("#driverFee").val();
    let fullPayment = $("#fullPayment").val();


    let payment = {
        paymentId: pId,
        bookingId: bId,
        rentFee: rentFee,
        lossPayment: lossPayment,
        extraKm: eKm,
        extraKmPrice: eKmPrice,
        driverFee: driverPrice,
        fullPayment: fullPayment,
        paymentDate: pDate,
    }

    $.ajax({
        url: baseURL + 'payment',
        method: 'post',
        contentType: "application/json",
        data: JSON.stringify(payment),
        success: function (res) {
            alert(res.message);
        },
        error: function (error) {
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });

    paymentID();
    paymentLoad();
});

paymentLoad();

function paymentLoad() {
    $("#paymentTable").empty();

    $.ajax({
        url: baseURL + "payment",
        dataType: "json",
        success: function (resp) {
            for (let pay of resp.data) {
                var row = '<tr><td>' + pay.paymentId + '</td><td>' + pay.bookingId + '</td><td>' + pay.rentFee + '</td><td>' + pay.lossPayment
                    + '</td><td>' + pay.extraKm + '</td><td>' + pay.extraKmPrice + '</td><td>' + pay.driverFee + '</td><td>' + pay.fullPayment + '</td><td>' + pay.paymentDate + '</td></tr>';
                $("#paymentTable").append(row);

            }
            paymentID();

        }
    });
}