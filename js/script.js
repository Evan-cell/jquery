$("document").ready(function(){
    
    $("#toggleme").click(function(){
        $("#togbox").toggle(2000, "swing")
    })

    $("#slide-up").click(function(){
        $("#textkim").slideUp("2000", "linear")
    });
    $("#slide-down").click(function(){
        $("#textkim").slideDown("2000", "linear")
    });
    $("#toggleSlide").click(function(){
        $("#textkim").slideToggle("2000", "linear")
    });

    $("#fade-in").on("click", function(){
        $("#textbox").fadeIn(3000, function(){
            alert("already finished  fading")
        });
    });
    $("#fade-out").on("click", function(){
        $("#textbox").fadeOut(3000, function(){
            alert("finished fading out")
        });
    });

    $(".textcopy").hover(highLightCopy)
    function highLightCopy(){
        $(this).toggleClass("highlight")
    }

    $("#show").on("click", function(){
        $("#textbox").show();
    });
    $("#hide").on("click", function(){
        $("#textbox").hide();
    });
});
