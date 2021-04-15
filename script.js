currentDate = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").text(currentDate);

$("#textDiv9am").on("click", function () {

    var text = $(".text9am")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText9am")
        .val(text);

    $(".text9am").replaceWith(textInput);
})

$("#btn9am").on("click", function () {

    var text = $(".changeText9am")
        .val();

    var textInput = $("<p>")
        .addClass("text9am pad10px")
        .text(text);

    $(".changeText9am").replaceWith(textInput);

    $("#textDiv9am").html($("#textDiv9am").html().trim())
    localStorage.setItem("time-9am", textInput.text())
});

$("#textDiv10am").on("click", function () {

    var text = $(".text10am")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText10am")
        .val(text);

    $(".text10am").replaceWith(textInput);
})

$("#btn10am").on("click", function () {

    var text = $(".changeText10am")
        .val();

    var textInput = $("<p>")
        .addClass("text10am pad10px")
        .text(text);

    $(".changeText10am").replaceWith(textInput);

    $("#textDiv10am").html($("#textDiv10am").html().trim())
    localStorage.setItem("time-10am", textInput.text())
});

$("#textDiv11am").on("click", function () {

    var text = $(".text11am")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText11am")
        .val(text);

    $(".text11am").replaceWith(textInput);
})

$("#btn11am").on("click", function () {

    var text = $(".changeText11am")
        .val();

    var textInput = $("<p>")
        .addClass("text11am pad10px")
        .text(text);

    $(".changeText11am").replaceWith(textInput);

    $("#textDiv11am").html($("#textDiv11am").html().trim())
    localStorage.setItem("time-11am", textInput.text())
});

$("#textDiv12pm").on("click", function () {

    var text = $(".text12pm")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText12pm")
        .val(text);

    $(".text12pm").replaceWith(textInput);
})

$("#btn12pm").on("click", function () {

    var text = $(".changeText12pm")
        .val();

    var textInput = $("<p>")
        .addClass("text12pm pad10px")
        .text(text);

    $(".changeText12pm").replaceWith(textInput);

    $("#textDiv12pm").html($("#textDiv12pm").html().trim())
    localStorage.setItem("time-12pm", textInput.text())
});

$("#textDiv1pm").on("click", function () {

    var text = $(".text1pm")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText1pm")
        .val(text);

    $(".text1pm").replaceWith(textInput);
})

$("#btn1pm").on("click", function () {

    var text = $(".changeText1pm")
        .val();

    var textInput = $("<p>")
        .addClass("text1pm pad10px")
        .text(text);

    $(".changeText1pm").replaceWith(textInput);

    $("#textDiv1pm").html($("#textDiv1pm").html().trim())
    localStorage.setItem("time-1pm", textInput.text())
});

$("#textDiv2pm").on("click", function () {

    var text = $(".text2pm")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText2pm")
        .val(text);

    $(".text2pm").replaceWith(textInput);
})

$("#btn2pm").on("click", function () {

    var text = $(".changeText2pm")
        .val();

    var textInput = $("<p>")
        .addClass("text2pm pad10px")
        .text(text);

    $(".changeText2pm").replaceWith(textInput);

    $("#textDiv2pm").html($("#textDiv2pm").html().trim())
    localStorage.setItem("time-2pm", textInput.text())
});

$("#textDiv3pm").on("click", function () {

    var text = $(".text3pm")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText3pm")
        .val(text);

    $(".text3pm").replaceWith(textInput);
})

$("#btn3pm").on("click", function () {

    var text = $(".changeText3pm")
        .val();

    var textInput = $("<p>")
        .addClass("text3pm pad10px")
        .text(text);

    $(".changeText3pm").replaceWith(textInput);

    $("#textDiv3pm").html($("#textDiv3pm").html().trim())
    localStorage.setItem("time-3pm", textInput.text())
});

$("#textDiv4pm").on("click", function () {

    var text = $(".text4pm")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText4pm")
        .val(text);

    $(".text4pm").replaceWith(textInput);
})

$("#btn4pm").on("click", function () {

    var text = $(".changeText4pm")
        .val();

    var textInput = $("<p>")
        .addClass("text4pm pad10px")
        .text(text);

    $(".changeText4pm").replaceWith(textInput);

    $("#textDiv4pm").html($("#textDiv4pm").html().trim())
    localStorage.setItem("time-4pm", textInput.text())
});

$("#textDiv5pm").on("click", function () {

    var text = $(".text5pm")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText5pm")
        .val(text);

    $(".text5pm").replaceWith(textInput);
})

$("#btn5pm").on("click", function () {

    var text = $(".changeText5pm")
        .val();

    var textInput = $("<p>")
        .addClass("text5pm pad10px")
        .text(text);

    $(".changeText5pm").replaceWith(textInput);

    $("#textDiv5pm").html($("#textDiv5pm").html().trim())
    localStorage.setItem("time-5pm", textInput.text())
});



function load() {
    var stored9am = localStorage.getItem("time-9am");
    if (!stored9am) {
        stored9am = "";
    }
    $(".text9am").text(stored9am.trim());
    $("#textDiv9am").html($("#textDiv9am").html().trim())

    var stored10am = localStorage.getItem("time-10am");
    if (!stored10am) {
        stored10am = "";
    }
    $(".text10am").text(stored10am.trim());
    $("#textDiv10am").html($("#textDiv10am").html().trim())

    var stored11am = localStorage.getItem("time-11am");
    if (!stored11am) {
        stored11am = "";
    }
    $(".text11am").text(stored11am.trim());
    $("#textDiv11am").html($("#textDiv11am").html().trim())

    var stored12pm = localStorage.getItem("time-12pm");
    if (!stored12pm) {
        stored12pm = "";
    }
    $(".text12pm").text(stored12pm.trim());
    $("#textDiv12pm").html($("#textDiv12pm").html().trim())

    var stored1pm = localStorage.getItem("time-1pm");
    if (!stored1pm) {
        stored1pm = "";
    }
    $(".text1pm").text(stored1pm.trim());
    $("#textDiv1pm").html($("#textDiv1pm").html().trim())

    var stored2pm = localStorage.getItem("time-2pm");
    if (!stored2pm) {
        stored2pm = "";
    }
    $(".text2pm").text(stored2pm.trim());
    $("#textDiv2pm").html($("#textDiv2pm").html().trim())

    var stored3pm = localStorage.getItem("time-3pm");
    if (!stored3pm) {
        stored3pm = "";
    }
    $(".text3pm").text(stored3pm.trim());
    $("#textDiv3pm").html($("#textDiv3pm").html().trim())

    var stored4pm = localStorage.getItem("time-4pm");
    if (!stored4pm) {
        stored4pm = "";
    }
    $(".text4pm").text(stored4pm.trim());
    $("#textDiv4pm").html($("#textDiv4pm").html().trim())

    var stored5pm = localStorage.getItem("time-5pm");
    if (!stored5pm) {
        stored5pm = "";
    }
    $(".text5pm").text(stored5pm.trim());
    $("#textDiv5pm").html($("#textDiv5pm").html().trim())
}

const timeDetect = function () {
    switch (moment().hour()) {
        case (9):
            $("#textDiv9am").removeClass("future past present");
            $("#textDiv9am").addClass("present");

            $("#textDiv10am, #textDiv11am , #textDiv12pm, #textDiv1pm, #textDiv2pm, #textDiv3pm, #textDiv4pm, #textDiv5pm")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (10):
            $("#textDiv10am").removeClass("future past present");
            $("#textDiv10am").addClass("present");

            $("#textDiv9am")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv11am , #textDiv12pm, #textDiv1pm, #textDiv2pm, #textDiv3pm, #textDiv4pm, #textDiv5pm")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (11):
            $("#textDiv11am").removeClass("future past present");
            $("#textDiv11am").addClass("present");

            $("#textDiv9am, #textDiv10am")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv12pm, #textDiv1pm, #textDiv2pm, #textDiv3pm, #textDiv4pm, #textDiv5pm")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (12):
            $("#textDiv12pm").removeClass("future past present");
            $("#textDiv12pm").addClass("present");

            $("#textDiv9am, #textDiv10am, #textDiv11am")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv1pm, #textDiv2pm, #textDiv3pm, #textDiv4pm, #textDiv5pm")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (13):
            $("#textDiv1pm").removeClass("future past present");
            $("#textDiv1pm").addClass("present");

            $("#textDiv9am, #textDiv10am, #textDiv11am, #textDiv12pm")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv2pm, #textDiv3pm, #textDiv4pm, #textDiv5pm")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (14):
            $("#textDiv2pm").removeClass("future past present");
            $("#textDiv2pm").addClass("present");

            $("#textDiv9am, #textDiv10am, #textDiv11am, #textDiv12pm, #textDiv1pm")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv3pm, #textDiv4pm, #textDiv5pm")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (15):
            $("#textDiv3pm").removeClass("future past present");
            $("#textDiv3pm").addClass("present");

            $("#textDiv9am, #textDiv10am, #textDiv11am, #textDiv12pm, #textDiv1pm, #textDiv2pm")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv4pm, #textDiv5pm")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (16):
            $("#textDiv4pm").removeClass("future past present");
            $("#textDiv4pm").addClass("present");

            $("#textDiv9am, #textDiv10am, #textDiv11am, #textDiv12pm, #textDiv1pm, #textDiv2pm, #textDiv3pm")
                .removeClass("future past present")
                .addClass("past");

            $("#textDiv5pm")
                .removeClass("future past present")
                .addClass("future");
            break;
        case (17):
            $("#textDiv5pm").removeClass("future past present");
            $("#textDiv5pm").addClass("present");

            $("#textDiv9am, #textDiv10am, #textDiv11am, #textDiv12pm, #textDiv1pm, #textDiv2pm, #textDiv3pm, #textDiv4pm")
                .removeClass("future past present")
                .addClass("past");
            break;

        default:
            if (moment().hour() < 9) {
                $("#textDiv9am, #textDiv10am, #textDiv11am , #textDiv12pm, #textDiv1pm, #textDiv2pm, #textDiv3pm, #textDiv4pm, #textDiv5pm")
                    .removeClass("future past present")
                    .addClass("future");
            } else {
                $("#textDiv9am, #textDiv10am, #textDiv11am , #textDiv12pm, #textDiv1pm, #textDiv2pm, #textDiv3pm, #textDiv4pm, #textDiv5pm")
                    .removeClass("future past present")
                    .addClass("past");
            }
            break;
    }
}

timeDetect();
setInterval(timeDetect(), ((1000 * 60) * 15));
load();