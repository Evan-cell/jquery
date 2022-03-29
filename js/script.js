$("document").ready(function(){
    var newText = $("<p>");
    newText.append("<h1>i replaced the lorem</h1>");

    $("#textbox").html(newText)
});
