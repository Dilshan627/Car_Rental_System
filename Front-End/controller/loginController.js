let baseURL = "http://localhost:8080/Back_End_war/";
$("#userName").keyup(function (event) {
    if (event.key == "Enter") {
        $("#password").focus();
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
                loginCustomerDetails(cName,cContact,cNic);
                carNameLoad();
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
    $("#admin_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
    $('#nav-bar').css('display', 'none');
    $("#login_screen").css('display', 'none');
    $("#driver_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');

});

$("#log-dash-board-driver").click(function () {
    $("#driver_screen").css('display', 'block');

    $('#loading_page').css('display', 'none');
    $("#login_screen").css('display', 'none');
    $("#admin_screen").css('display', 'none');
    $("#customer_screen").css('display', 'none');

});


