let baseURL = "http://localhost:8080/Back_End_war/";
$("#userName").keyup(function (event) {
    if (event.key == "Enter") {
        $("#password").focus();
    }
});
$("#password").keyup(function (event) {
    if (event.key == "Enter") {
        $("#log-dash-board-customer").focus();
    }
});
$("#log-dash-board-customer").click(function () {
    let userName = $("#userName").val();
    let password = $("#password").val();

    if (userName == "" || password == "") {
        alert("All Fields Are Required !");
    } else {

        $.ajax({
            url: baseURL + "customer/" + userName + "/" + password,
            dataType: "json",
            success: function (resp) {
                let cName = resp.data.customerUserName;
                let cContact = resp.data.customerContact;
                let cNic = resp.data.customerNicNo;
                let id = resp.data.id;
                loginCustomer();
                loginCustomerDetails(cName, cContact, cNic);
                carNameLoad();
                clearBookingDashboard();
            },
            error: function (error) {
                var jsObject = JSON.parse(error.responseText);
                alert(jsObject.message);
            }
        });

    }

});


function loginCustomer() {
    $("#customer_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');

}

$("#log-dash-board-admin").click(function () {
    let userName = $("#userName").val();
    let password = $("#password").val();

    if (userName == "" || password == "") {
        alert("All Fields Are Required !");
    } else {

        $.ajax({
            url: baseURL + "admin/" + userName + "/" + password,
            dataType: "json",
            success: function (resp) {
                console.log(resp.data);
                loginAdmin();
            },
            error: function (error) {
                var jsObject = JSON.parse(error.responseText);
                alert(jsObject.message);
            }
        });

    }

});


function loginAdmin() {
    $("#admin_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
    $('#nav-bar').css('display', 'none');
    $("#login_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');
}

$("#log-dash-board-driver").click(function () {
    let userName = $("#userName").val();
    let password = $("#password").val();

    if (userName == "" || password == "") {
        alert("All Fields Are Required !");
    } else {

        $.ajax({
            url: baseURL + "driver/" + userName + "/" + password,
            dataType: "json",
            success: function (resp) {
                console.log(resp.data);
                loginDriver();
                driverSchedule(resp.data.driverName);
            },
            error: function (error) {
                var jsObject = JSON.parse(error.responseText);
                alert(jsObject.message);
            }
        });

    }

});


function loginDriver() {
    $("#driver_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');
}

function driverSchedule(name) {
    $("#driverScheduleTable").empty();
    $.ajax({
        url: baseURL + "reserve/schedule/" + name,
        dataType: "json",
        success: function (resp) {
            for (let dir of resp.data) {
                var row = '<tr><td>' + dir.bookingId + '</td><td>' + dir.customerName + '</td><td>' + dir.customerContact + '</td><td>' + dir.pickupDate
                    + '</td><td>' + dir.pickupTime + '</td><td>' + dir.returnDate + '</td><td>' + dir.returnTime + '</td></tr>';
                $("#driverScheduleTable").append(row);

            }
        }
    });
}