player1name= localStorage.getItem("player 1 name")
player1name= localStorage.getItem("player 2 name")
player1score= 0;
player2score= 0;

document.getElementById("player1name").innerHTML= player1name +": ";
document.getElementById("player2name").innerHTML=player2name +": ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question turn : "+ player1name;
document.getElementById("playeranswer").innerHTML="Answer turn : "+ player2name;


function sendnumber() {
    number1=document.getElementById("typeinput").value;
    number2=document.getElementById("typeinput2").value;
    realanswer=parseInt(number1) * parseInt(number2)

    questionnumber="<h4>" + number1 +" X " + number2+"</h4>";
    inputbox="<br> : <input type='text' id='inputcheckbox'>" ;
    checkbutton="<br><br><button class=btn btn-info onclick='check()'>Check</button>"
    row = questionnumber + inputbox + checkbutton;

    document.getElementById("output").innerHTML= row;
    document.getElementById("typeinput").value="";
    document.getElementById("typeinput2").value="";
    
     questionturn="player 1 name";
     answerturn="player 2 name";
    function check() {
        getanswer=document.getElementById("inputcheckbox").value;
        console.log(answer)
    
        if(answer==realanswer)
        {
            if(answerturn=="player 1 name")
            {
                player1score=player1score+1;
                document.getElementById("player1score").innerHTML=player1score
            }
            else{
                player2score=player2score+1;
                document.getElementById("player2score").innerHTML=player2score;
            }
    
        }
        if(questionturn=="player 1 name")
        {
            questionturn="player 2 name";
            document.getElementById("playerquestion").innerHTML="Question Turn-"+player2name;
    
        }
        else{
            questionturn="player 1 name";
            document.getElementById("playerquestion").innerHTML="Question Turn-"+player1name;
        }
        if(answerturn=="player 1 name")
        {
            answerturn="player 2 name";
            document.getElementById("playeranswer").innerHTML="Answer Turn-"+player2name;
    
        }
        else{
            answerturn="player 1 name";
            document.getElementById("playeranswer").innerHTML="Answer Turn-"+player1name;
        }
        
    }
    
                
}