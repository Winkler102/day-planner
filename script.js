currentDate = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").text(currentDate);

$(".row").on("click", ".col-10", function () {

    var text = $(".pad10px", this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText")
        .val(text);

    $(".pad10px", this).replaceWith(textInput);

})

$(".row").on("click", ".saveBtn", function () {

    var text = $(this)
        .closest(".row")
        .find(".col-10")
        .find(".changeText")
        .val();

    var textInput = $("<p>")
        .addClass("pad10px")
        .text(text);

    $(this)
        .closest(".row")
        .find(".col-10")
        .find(".changeText")
        .replaceWith(textInput);
    save();
});

function save() {
    for (i = 1; i < 10; i++) {
        saveTime = 'time-' + i;
        saveText = "#textDiv" + i;
        saveitem = $(saveText).find(".pad10px").text();
        if (saveitem === "") {
            continue;
        } else {
            localStorage.setItem(saveTime, saveitem)
        }
    }
};

function load() {
    for (i = 1; i < 10; i++) {
        textBoxEl = ".text" + i;
        textDivEl = "#textDiv" + i;
        getSave = 'time-' + i;

        var stored = localStorage.getItem(getSave);
        if (!stored) {
            stored = "";
        }
        $(textBoxEl).text(stored.trim());
        $(textDivEl).html($(textDivEl).html().trim())
    }
}

const timeDetect = function () {
    switch (moment().hour()) {
        case (9):
            $("#textDiv1").removeClass("future past present");
            $("#textDiv1").addClass("present");

            $("#textDiv2, #textDiv3 , #textDiv4, #textDiv5, #textDiv6, #textDiv7, #textDiv8, #textDiv9")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (10):
            $("#textDiv2").removeClass("future past present");
            $("#textDiv2").addClass("present");

            $("#textDiv1")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv3 , #textDiv4, #textDiv5, #textDiv6, #textDiv7, #textDiv8, #textDiv9")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (11):
            $("#textDiv3").removeClass("future past present");
            $("#textDiv3").addClass("present");

            $("#textDiv1, #textDiv2")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv4, #textDiv5, #textDiv6, #textDiv7, #textDiv8, #textDiv9")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (12):
            $("#textDiv4").removeClass("future past present");
            $("#textDiv4").addClass("present");

            $("#textDiv1, #textDiv2, #textDiv3")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv5, #textDiv6, #textDiv7, #textDiv8, #textDiv9")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (13):
            $("#textDiv5").removeClass("future past present");
            $("#textDiv5").addClass("present");

            $("#textDiv1, #textDiv2, #textDiv3, #textDiv4")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv6, #textDiv7, #textDiv8, #textDiv9")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (14):
            $("#textDiv6").removeClass("future past present");
            $("#textDiv6").addClass("present");

            $("#textDiv1, #textDiv2, #textDiv3, #textDiv4, #textDiv5")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv7, #textDiv8, #textDiv9")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (15):
            $("#textDiv7").removeClass("future past present");
            $("#textDiv7").addClass("present");

            $("#textDiv1, #textDiv2, #textDiv3, #textDiv4, #textDiv5, #textDiv6")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv8, #textDiv9")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (16):
            $("#textDiv8").removeClass("future past present");
            $("#textDiv8").addClass("present");

            $("#textDiv1, #textDiv2, #textDiv3, #textDiv4, #textDiv5, #textDiv6, #textDiv7")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv9")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (17):
            $("#textDiv9").removeClass("future past present");
            $("#textDiv9").addClass("present");

            $("#textDiv1, #textDiv2, #textDiv3, #textDiv4, #textDiv5, #textDiv6, #textDiv7, #textDiv8")
                .removeClass("future past present")
                .addClass("past");
            break;

        default:
            if (moment().hour() < 9) {
                $("#textDiv1, #textDiv2, #textDiv3 , #textDiv4, #textDiv5, #textDiv6, #textDiv7, #textDiv8, #textDiv9")
                    .removeClass("future past present")
                    .addClass("future");
            } else {
                $("#textDiv1, #textDiv2, #textDiv3 , #textDiv4, #textDiv5, #textDiv6, #textDiv7, #textDiv8, #textDiv9")
                    .removeClass("future past present")
                    .addClass("past");
            }
            break;
    }
}

timeDetect();
setInterval(timeDetect(), ((1000 * 60) * 15));
load();