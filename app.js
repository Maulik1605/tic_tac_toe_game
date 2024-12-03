let box=document.querySelectorAll(".box");
let resetbtn =document.getElementById("reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");


console.dir(box);
console.log(resetbtn);

let turno=true; //playerx and playero.....

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame=() =>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}



box.forEach((boxs)=>
{
    boxs.addEventListener("click",()=>{

        
        // console.log("box was click");

        if(turno)
        {
            boxs.innerText="O";
            turno=false;
            // enableboxes();
            boxs.disabled=true;
        }
        else        //playerx
        {
        boxs.innerText="X";
        turno=true;
        boxs.disabled=true;
        }
       



        checkwinner();
    });
});

const disableboxes=() =>{
    for(let boxes of box)
    {
        boxes.disabled=true;
    }
}



const enableboxes=() =>{
    for(let boxes of box)
    {
        boxes.disabled=false;
        boxes.innerText="";
    }
}



const showwinner =(winner)=>{
    msg.innerText=`congratulation , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     disableboxes();
}

const checkwinner=() =>{
    for(pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        console.log(box[pattern[0]].innerText,
            box[pattern[1]].innerText,
            box[pattern[2]].innerText);


            let pos1val=box[pattern[0]].innerText;
            let pos2val=box[pattern[1]].innerText;
            let pos3val=box[pattern[2]].innerText;


            if(pos1val != "" && pos2val != "" && pos3val != "")
            {
                    if(pos1val === pos2val  && pos2val === pos3val)
                    {
                        console.log("winner",pos1val);
                        showwinner(pos1val);
                    }
            }
    }
};


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);