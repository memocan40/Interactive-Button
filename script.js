const one =document.getElementById("one");
const question =document.querySelector(".question");
const body=document.body;
const house=document.querySelector(".house");
const pic=document.querySelector(".input")
const answers=document.querySelector(".answers")

//event delegation

body.addEventListener("click",event=>{
    
    if(event.target.id==="one")
    {
      
    one.id="two"
    question.innerHTML="I said Dont push the button";
    scale=setInterval(() => {
        question.animate({"transform":"scale(1.3)"},1000)
    }, 1000);

    
     
    }

   
else if(event.target.id==="two"){
    clearInterval(scale)
    question.innerHTML="Are you kidding me?";
    document.getElementById("two").id="three";
}

else if(event.target.id==="three"){
    question.innerHTML="Oh you want to play a game?"
    body.style.backgroundImage="url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1171373.jpg)";
    
    document.getElementById("three").id="four";
}
    else if(event.target.id==="four"){
        question.innerHTML="Catch me if you can";
        rotate=setInterval(() => {
            house.animate({"transform":"rotate(360deg)"},2000)
            
        }, 2000);
        document.getElementById("four").id="five";
    }

    else if(event.target.id==="five"){
        clearInterval(rotate);
        question.innerHTML="So youre a tough one?"
        house.style.backgroundColor="gray";
        var butto=document.createElement("button");
        butto.innerHTML="no";
        butto.classList.add("no");
        answers.appendChild(butto)
        event.target.innerHTML="yes"
        document.getElementById("five").id="six"
    }
    else if(event.target.className==="no"){
        question.innerHTML="Muhahahah"
    }
    else if(event.target.id==="six"){
        let x=document.querySelector(".no")
        answers.removeChild(x);
        question.innerHTML="Say Hello to My Little Friend!!"
        body.style.backgroundImage="url(https://www.petplace.com/static/b3becca0bc19bc8b09366ad9bf62a8fe/c23ac/shutterstock_796071583.jpg)"
        body.style.backgroundSize="cover";
        house.style.marginRight="900px"

    }
})

