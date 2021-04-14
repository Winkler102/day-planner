currentDate = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").text(currentDate);

$("#textDiv9am").on("click", function () {
    var text = $(".text9am")
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText border-0")
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

    localStorage.setItem("time-9am", textInput.text())
});

function load() {
    var stored = localStorage.getItem("time-9am");
    $(".text9am").text(stored);
}

load();