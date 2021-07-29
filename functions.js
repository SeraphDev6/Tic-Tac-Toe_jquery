var turns= ["red","blue"]
var turn= Math.round(Math.random())

function reset(){
    $("#reset-button").slideUp(0);
    $("body").css("background","linear-gradient(to right,red, blue)");
    $("#grid-div").html("");
    $("#message").html("It's <span id='turn-name'></span>'s turn!")
    $("#message").removeClass();
    for(var i=1;i<=9;i++){
        $("#grid-div").append(`<div class='square-div blank' id='${i}'></div>`);
    }
    $("#turn-name").text(turns[turn]);
    $(".square-div").click(function(){
        if($(this).hasClass("blank")){
            $(this).removeClass("blank");
            $(this).addClass(turns[turn]);
            turn=(turn+1)%2;
            $("#turn-name").text(turns[turn]);
            checkWin();
        }
    });
}
function checkWin(){
    if($("#1.red, #2.red, #3.red").length==3||
    $("#4.red, #5.red, #6.red").length==3||
    $("#7.red, #8.red, #9.red").length==3||
    $("#1.red, #4.red, #7.red").length==3||
    $("#2.red, #5.red, #8.red").length==3||
    $("#3.red, #6.red, #9.red").length==3||
    $("#1.red, #5.red, #9.red").length==3||
    $("#3.red, #5.red, #7.red").length==3){
        $(".square-div").removeClass("blank blue");
        $("#message").text("Red Wins!!!");
        $("#message").addClass("red");
        $("body").css("background","#800")
        $("#reset-button").slideDown("slow");
    }
    if($("#1.blue, #2.blue, #3.blue").length==3||
    $("#4.blue, #5.blue, #6.blue").length==3||
    $("#7.blue, #8.blue, #9.blue").length==3||
    $("#1.blue, #4.blue, #7.blue").length==3||
    $("#2.blue, #5.blue, #8.blue").length==3||
    $("#3.blue, #6.blue, #9.blue").length==3||
    $("#1.blue, #5.blue, #9.blue").length==3||
    $("#3.blue, #5.blue, #7.blue").length==3){
        $(".square-div").removeClass("blank red");
        $("#message").text("Blue Wins!!!");
        $("#message").addClass("blue");
        $("body").css("background","#008")
        $("#reset-button").slideDown("slow");
    }
}
$("#reset-button").click(reset)
reset();