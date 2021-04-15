currentDate = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").text(currentDate);

$("#textDiv9am").on("click", function () {

    var text = $(".text9am")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText")
        .val(text);

    $(".text9am").replaceWith(textInput);
})

$("#btn9am").on("click", function () {

    var text = $(".changeText")
        .val();

    var textInput = $("<p>")
        .addClass("text9am")
        .text(text);

    $(".changeText").replaceWith(textInput);

    $("#textDiv9am").html($("#textDiv9am").html().trim())
    localStorage.setItem("time-9am", textInput.text())
});

function load() {
    var stored = localStorage.getItem("time-9am");
    $(".text9am").text(stored.trim());
    $("#textDiv9am").html($("#textDiv9am").html().trim())
}

load();