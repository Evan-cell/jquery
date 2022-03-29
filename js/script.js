$("document").ready(function(){
    $("#textbox").on("click", whenMouseIsClicked);
    $("#textbox").on("mouseleave", whenMouseLeaves);

    function whenMouseIsClicked(){
        $("#textbox").html("<h1>you clicked me</h1>")
    }
    function whenMouseLeaves(){
        $("#textbox").html("<h1>you LEFT ME</h1>")
    }
});
