let arr=["rock","paper","scissors"];
let you=document.querySelector(".you");
let opt=document.querySelector(".opt");
let comp=document.querySelector(".comp");
let your_score=document.querySelector(".yous");
let comp_score=document.querySelector(".comps");
let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");
let msg=document.querySelector(".msg");
let msg_container=document.querySelector(".msg_container");
let count1=0;
let count2=0;

function random_select(){
    comp=arr[Math.floor(Math.random()*2.9999)];
    
}

rock.addEventListener("click",()=>{
    you="rock";
    scoring();
})
paper.addEventListener("click",()=>{
    you="paper";
    scoring();
})
scissors.addEventListener("click",()=>{
    you="scissors";
    scoring();

})


function scoring(){
    random_select();
    if(you==="rock"&&comp==="rock"){
        msg.innerText="Draw Game. Choose Again";
        msg.style.backgroundColor="black";
    }
    else if(you==="rock"&&comp==="paper"){
        count2+=1;
        comp_score.innerText=count2;
        msg.innerText="You lost!.paper beats your rock";
        msg.style.backgroundColor="red";
    }
    else if(you==="rock"&&comp==="scissors"){
        count1+=1;
        your_score.innerText=count1;
        msg.innerText="You Won!.Your rock beats scissors";
        msg.style.backgroundColor="green";
    }
    else if(you==="paper"&&comp==="paper"){
        msg.innerText="Draw Game.Choose Again";
        msg.style.backgroundColor="black";
    }
    else if(you==="paper"&&comp==="scissors"){
        count2+=1;
        comp_score.innerText=count2;
        msg.innerText="You lost!.scissors beats your paper";
        msg.style.backgroundColor="red";
    }
    else if(you==="paper"&&comp==="rock"){
        count1+=1;
        your_score.innerText=count1;
        msg.innerText="You Won!.Your paper beats rock";
        msg.style.backgroundColor="green";
    }
    else if(you==="scissors"&&comp==="scissors"){
        msg.innerText="Draw Game. choose Again";
        msg.style.backgroundColor="black";
    }
    else if(you==="scissors"&&comp==="rock"){
        count2+=1;
        comp_score.innerText=count2;
        msg.innerText="You lost!.rock beats your scissors";
        msg.style.backgroundColor="red";
    }
    else {
        count1+=1;
        your_score.innerText=count1;
        msg.innerText="You Won!.Your scissors beats paper";
        msg.style.backgroundColor="green";
    }

}


