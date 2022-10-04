/* function line(){
    document.getElementById("mobile").style.display="flex";
    document.getElementById("mobile").style.flexDirection="column";
    document.getElementById("mobile").style.justifyContent="center";
    document.getElementById("mobile").style.alignItems="center";
} 
function homeB(){
    document.getElementById("mobile").style.display="none";
} 
function aboutB(){
    document.getElementById("mobile").style.display="none";
}
function skillsB(){
    document.getElementById("mobile").style.display="none";
}
function contactB(){ 
    document.getElementById("mobile").style.display="none";
}

*/ 

function makeLineOriginal(){
    document.getElementById('rightGhum').style.transform="rotate(0deg) translateX(0px)";
    document.getElementById('leftGhum').style.transform="rotate(0deg) translateX(0px)";
    document.getElementById('gayabHo').style.display="block";
}

document.getElementById('line').addEventListener('click', function(){
    const mob = document.getElementById('mobile');
    mob.style.display="flex";
    mob.style.flexDirection="column";
    mob.style.justifyContent="center";
    mob.style.alignItems="center";
});

function homeB(){
    document.getElementById("mobile").style.display="none";
    makeLineOriginal();
} 
function aboutB(){
    document.getElementById("mobile").style.display="none";
    makeLineOriginal();
}
function skillsB(){
    document.getElementById("mobile").style.display="none";
    makeLineOriginal();
} 
function contactB(){ 
    document.getElementById("mobile").style.display="none";
    makeLineOriginal();
}


document.getElementById("submit").onclick = function(){ 
    let myName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subj = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    if(myName == null){
        console.log("Bhag bhadve")
    }
    console.log(`Name: ${name} || Email: ${email} || Subject: ${subj} || Message: ${message}`); 
    document.getElementById("temp").style.display="block";
    document.getElementById("temp").style.fontWeight="700";
    document.getElementById("temp").style.fontSize="24px";
    document.getElementById("temp").style.textShadow="1px 1px 20px #fff , -1px -1px 20px #fff";
}; 


function common(){
    document.getElementById('mob').style.display='none';
    document.getElementById('rightGhum').style.transform="rotate(0deg) translateX(0px)";
    document.getElementById('rightGhum').style.width="20px";
    document.getElementById('leftGhum').style.transform="rotate(0deg) translateX(0px)";
    document.getElementById('leftGhum').style.width="20px";
    document.getElementById('matDikh').style.display="block";
    document.getElementsByClassName('line1').style.width="20px"
}

document.getElementById('line').addEventListener('click',function(){

    const rightGhum = document.getElementById('rightGhum');
    rightGhum.style.transform="rotate(45deg) translateX(4px)"
    // rightGhum.style.width="25px";

    const leftGhum = document.getElementById('leftGhum');
    leftGhum.style.transform="rotate(-45deg) translateX(4px)" 
    // leftGhum.style.width="25px"; 
 
    const gayabHo = document.getElementById('gayabHo');
    gayabHo.style.display="none";
 
    document.getElementById('band').onclick = function(){  
        document.getElementById('mob').style.display='none';
        /* document.getElementById('rightGhum').style.transform="rotate(0deg) translateX(0px)";
        document.getElementById('rightGhum').style.width="20px";
        document.getElementById('leftGhum').style.transform="rotate(0deg) translateX(0px)";
        document.getElementById('leftGhum').style.width="20px";
        document.getElementById('matDikh').style.display="block";
        document.getElementsByClassName('line1').style.width="20px"
        */
       common(); 
    } 
    
}); 

const cardOne = document.querySelector('.card-one');
const cardTwo = document.querySelector('.card-two'); 
const cardThree = document.querySelector('.card-three');

// cardOne.style.display="none";
cardOne.addEventListener('mouseover', function(){
    cardOne.style.transform="scale(1.2)";
    cardTwo.style.opacity = "0.15"; 
    cardThree.style.opacity = "0.15";
});
cardOne.addEventListener('mouseout', function(){
    cardOne.style.transform="scale(1)";
    cardTwo.style.opacity = "1";
    cardThree.style.opacity = "1"; 
});
cardTwo.addEventListener('mouseover', function(){
    cardOne.style.opacity = "0.15";
    cardTwo.style.transform="scale(1.2)";
    cardThree.style.opacity = "0.15";
});
cardTwo.addEventListener('mouseout', function(){
    cardOne.style.opacity = "1";
    cardTwo.style.transform="scale(1)";
    cardThree.style.opacity = "1";
});
cardThree.addEventListener('mouseover', function(){
    cardOne.style.opacity = "0.15";
    cardTwo.style.opacity = "0.15";
    cardThree.style.transform="scale(1.2)";
});
cardThree.addEventListener('mouseout', function(){
    cardOne.style.opacity = "1";
    cardTwo.style.opacity = "1";
    cardThree.style.transform="scale(1)";
});
