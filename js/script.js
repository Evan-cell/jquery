$("document").ready(function(){

    $("#fade-in").on("click", function(){
        $("#textbox").fadeIn(3000, function(){
            alert("already finished  fading")
        });
    })
    $("#fade-out").on("click", function(){
        $("#textbox").fadeOut(3000, function(){
            alert("finished fading out")
        })
    })

    $(".textcopy").hover(highLightCopy)
    function highLightCopy(){
        $(this).toggleClass("highlight")
    }

    $("#show").on("click", function(){
        $("#textbox").show();
    })
    $("#hide").on("click", function(){
        $("#textbox").hide();
    })
});
