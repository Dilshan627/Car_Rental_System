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

    if ($("#driverName").val() == "" || $("#driverAddress").val() == "" || $("#driverAge").val() == "" || $("#driverContact").val() == "" ||
        $("#driverPassword").val() == "") {
        alert("All Fields Are Required !");
    } else {
        driverRegister();
    }

});


function driverRegister() {
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
}


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
            bindRowClickEvents();
            driverFormClear();
        }
    });

}

function bindRowClickEvents() {
    $("#driverTable>tr").click(function () {
        let id = $(this).children(":eq(0)").text();

        $.ajax({
            url: baseURL + "driver/" + id,
            dataType: "json",
            success: function (resp) {
                console.log(resp.data);
                $('#driverName').val(resp.data.driverName);
                $('#driverAddress').val(resp.data.driverAddress);
                $('#driverAge').val(resp.data.driverAge);
                $('#driverContact').val(resp.data.driverContact);
                $('#driverPassword').val(resp.data.driverPassword);
            }
        });


        $("#btnUpdateDriver").click(function () {
            let name = $('#driverName').val();
            let address = $('#driverAddress').val();
            let age = $('#driverAge').val();
            let contact = $('#driverContact').val();
            let password = $('#driverPassword').val();

            var driver = {
                id: id,
                driverName: name,
                driverAddress: address,
                driverAge: age,
                driverContact: contact,
                driverPassword: password
            }
            $.ajax({
                url: baseURL + 'driver',
                method: 'put',
                contentType: "application/json",
                data: JSON.stringify(driver),
                success: function (res) {
                    alert(res.message);
                    loadAlllDriver();
                },
                error: function (error) {
                    let cause = JSON.parse(error.responseText).message;
                    alert(cause);
                }
            });

        });


        //clickId(id);

        $("#driverName").prop("disabled", true);
        $("#driverAge").prop("disabled", true);
        $("#driverPassword").prop("disabled", true);
        $("#btnSaveDriver").prop("disabled", true);

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

    $("#btnSaveDriver").prop("disabled", false);
    $("#driverName").prop("disabled", false);
    $("#driverAge").prop("disabled", false);
    $("#driverPassword").prop("disabled", false);

}


const searchInputDriver = document.getElementById('searchInputDriver');
const dTable = document.getElementById('driverTable');

searchInputDriver.addEventListener('input', () => {
    const searchValue = searchInputDriver.value.toLowerCase();
    const rows = dTable.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        const contact = row.querySelector('td:nth-child(5)').textContent.toLowerCase();

        if (name.includes(searchValue) || contact.includes(searchValue)) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
});

