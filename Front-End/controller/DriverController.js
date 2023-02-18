var regExDriverName = /^[A-Z|a-z\s]{3,20}$/;
var regExDriverNumber = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
var regExDriverAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
var regExDriverAddress = /^[A-Z|a-z\s]{3,20}$/;
var regExDriverPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;


$("#driverName").keyup(function (event) {
    let driverName = $("#driverName").val();
    if (regExDriverName.test(driverName)) {
        $('#driverName').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#driverAddress").focus();
        }
    } else {
        $('#driverName').css({"border-color": "red"});
    }
});
$("#driverAddress").keyup(function (event) {
    let driverAddress = $("#driverAddress").val();
    if (regExDriverAddress.test(driverAddress)) {
        $('#driverAddress').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#driverAge").focus();
        }
    } else {
        $('#driverAddress').css({"border-color": "red"});
    }
});

$("#driverAge").keyup(function (event) {
    let driverAge = $("#driverAge").val();
    if (regExDriverAge.test(driverAge)) {
        $('#driverAge').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#driverContact").focus();
        }
    } else {
        $('#driverAge').css({"border-color": "red"});
    }
});

$("#driverContact").keyup(function (event) {
    let driverContact = $("#driverContact").val();
    if (regExDriverNumber.test(driverContact)) {
        $('#driverContact').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#driverPassword").focus();
        }
    } else {
        $('#driverContact').css({"border-color": "red"});
    }
});

$("#driverPassword").keyup(function (event) {
    let driverPassword = $("#driverPassword").val();
    if (regExDriverPassword.test(driverPassword)) {
        $('#driverPassword').css({"border-color": "green"});
        if (event.key == "Enter") {
            $("#btnSaveDriver").focus();
        }
    } else {
        $('#driverPassword').css({"border-color": "red"});
    }
});


$("#btnSaveDriver").click(function () {

    let formData = $("#driverForm").serialize();

    console.log(formData)

    $.ajax({
        url: baseURL + "driver",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (res) {
            alert(res.message);
            loadAlllDriver();
        },
        error: function (error) {
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });


});
loadAlllDriver();

function loadAlllDriver() {
    $("#driverTable").empty();
    $.ajax({
        url: baseURL + "driver",
        dataType: "json",
        success: function (resp) {
            for (let dri of resp.data) {
                var row = '<tr><td>' + dri.id + '</td><td>' + dri.driverName + '</td><td>' + dri.driverAddress + '</td><td>' + dri.driverAge + '</td><td>' + dri.driverContact + '</td></tr>';
                $("#driverTable").append(row);
            }

            driverFormClear();

        }
    });

}


$("#btnClearDriver").click(function () {
    driverFormClear();
});

function driverFormClear() {
    $('#driverName').val("");
    $('#driverAddress').val("");
    $('#driverAge').val("");
    $('#driverContact').val("");
    $('#driverPassword').val("");
}