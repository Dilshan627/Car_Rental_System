function rollDice() {
    return "B-" + (Math.floor(Math.random() * 100000) + 5);
}

var bid = rollDice();

$("#bId").val(bid);

$("#cName").val("nimal");   ///////////////////////

$("#bCar").click(function () {
    //console.log("hbhjgh");

});


function carNameLoad() {
    if ($("#cName").val() == "") {}else {
       /* $.ajax({
            url: baseURL + "car",
            dataType: "json",
            success: function (resp) {
                for (let c of resp.data) {
                    console.log(c.carBrand);
                }

            }
        });*/
    }
}






