let output = "";
$("body").keypress(function (e) {
    output += e.key
    if (e.key == "Enter") {
        $("h1").text(output.slice(0, -5));
        output = "";
    }
});
$("h1").css("text-align", "center");
$("h1").css("margin-top", "45vh");
$("p").css("text-align", "center");
$("p").css("margin-top", "45vh");