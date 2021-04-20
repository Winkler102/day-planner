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
    let hour = moment().hour();
    for (i = 1; i < 10; i++) {
        let timeDiv = "#textDiv" + i;
        let currentHour = i + 8;
        if (currentHour < hour) {
            $(timeDiv).removeClass("future past present");
            $(timeDiv).addClass("past");
        } else if (currentHour > hour) {
            $(timeDiv).removeClass("future past present");
            $(timeDiv).addClass("future");
        } else {
            $(timeDiv).removeClass("future past present");
            $(timeDiv).addClass("present");
        }
    }
}

timeDetect();
setInterval(timeDetect(), ((1000 * 60) * 15));
load();