//dom setting box element
let settingicon = document.querySelector(".fa-gear");
let settingbox = document.querySelector(".setting-box");
let icon = document.querySelector(".icon");

let maincolor = localStorage.getItem("color-option");
if(maincolor !== null){
    //set color on root
    document.documentElement.style.setProperty('--main-color', maincolor);
    //check for active class
    document.querySelectorAll(".color-list li").forEach(element=>{
        element.classList.remove("active-color");
        if(element.dataset.color === maincolor){
            element.classList.add("active-color");
        }

    });

}



//click on icon
icon.addEventListener("click",()=>{
    //add spin in class fa-gear
    settingicon.classList.toggle("fa-spin");
    //add open in class setting box
    settingbox.classList.toggle("open");
})

//switch color
const colorli = document.querySelectorAll(".setting-content ul li");
    // loop on li
colorli.forEach(li=>{
    //click on li
li.addEventListener("click", (e)=>{
    //set color on root
document.documentElement.style.setProperty('--main-color',e.target.dataset.color); 
    //save color in local storage
localStorage.setItem("color-option" , e.target.dataset.color );
    //remove active class
e.target.parentElement.querySelectorAll(".active-color").forEach(element=>{
    element.classList.remove("active-color");

e.target.classList.toggle("active-color");

})
})



})



//select landing page element
let landingpage = document.querySelector(".landing-page");

//get array of images
let imgofarray = ["images.jpeg","images (1).jpeg","images (2).jpeg","images (3).jpeg","images (5).jpeg"];
let backgroundoption; 
let randomImages;
    
function randombackground(){
    if(backgroundoption === true){
    randomImages = setInterval(()=>{
    //get random number betwen 0 - 4
let randomnumber = Math.floor(Math.random()*imgofarray.length);


//change background image url
landingpage.style.backgroundImage = 'url("images/'+imgofarray[randomnumber]+'")';

},4000)
}
};



// active color 
   let displayclassactive = document.querySelectorAll(".links li a");
        // function tnhi la class li smha active fi a ta3 link 
         function removeclassactive(){ 
                //dor 3la les element 
                for(let i=0 ; i<displayclassactive.length;i++){
                                // jibli a li 3ndo class="a active"
                    if(displayclassactive[i].getAttribute("class") == "a active"){
                                // nhilu la class li smha active
                        displayclassactive[i].classList.remove("active");
                    } 
                }
        };

     // function tzid class active
        function addclassactive(iddea){
              iddea.classList.toggle("active");
        };


let first = document.getElementById("1");
let second = document.getElementById("2");
let third = document.getElementById("3");
let fourth = document.getElementById("4");


first.addEventListener("click", ()=>{
removeclassactive();
addclassactive(first);
})
 
second.addEventListener("click", ()=>{
removeclassactive();
addclassactive(second);
})

third.addEventListener("click", ()=>{
  removeclassactive();
  addclassactive(third);
  })

  fourth.addEventListener("click", ()=>{
removeclassactive();
addclassactive(fourth);
})

//nzido class active yes no 

let addYesOrNo = document.querySelector(".background-content");
let checkyesno = document.querySelectorAll(".background-content span");

function randombackegroundimage(){
for(let i=0; i<checkyesno.length; i++){
    if(checkyesno[i].getAttribute("class") == "yes active-yesno"){
        
        backgroundoption = true;
        randombackground();
     

    }else if(checkyesno[i].getAttribute("class") == "no active-yesno"){
        backgroundoption = false ; 
        clearInterval(randomImages);
        

    }
};
};
randombackegroundimage();
//for remive class active from no
function deletclassactiveno(){
for(let i = 0 ; i< checkyesno.length ; i++){
    if(checkyesno[i].getAttribute("class") == "no active-yesno"){
        checkyesno[i].classList.remove("active-yesno");
        }
    }
};
//for remove class active from yes
function deletclassactiveyes(){
    for(let i = 0 ; i< checkyesno.length ; i++){
        if(checkyesno[i].getAttribute("class") == "yes active-yesno"){
            checkyesno[i].classList.remove("active-yesno");
            }
        }
    };

addYesOrNo.addEventListener("click", (e)=>{

  if(e.target.className == "yes"){
   deletclassactiveno();
    e.target.classList.toggle("active-yesno");
    backgroundoption = true;
    randombackground();
  localStorage.setItem("background-option",true);
  localStorage.setItem("active-class","yes")
}
else if(e.target.className == "no"){
    deletclassactiveyes();
    e.target.classList.toggle("active-yesno");
    backgroundoption = false ; 
    clearInterval(randomImages);
    localStorage.setItem("background-option", false);
    localStorage.setItem("active-class","no");
}
});

//------------------------------------------------------about us---------------------------------------------------

let ourSkills  = document.querySelector(".skills");

window.onscroll = function (){

let skillsOffsetTop = ourSkills.offsetTop;

let skillsOuterHeight = ourSkills.offsetHeight;

let windowHeight = this.innerHeight ; 

let windowScrollTop = this.pageYOffset ; 


if(windowScrollTop>(skillsOffsetTop+skillsOuterHeight-windowHeight)){
console.log("dkhel lel if condition")
let allskills = document.querySelectorAll(".skill-progress span");

allskills.forEach((skill) =>{

    skill.style.width = skill.dataset.progress;
})

}else{
    let progressbar = document.querySelectorAll(".skill-progress span");
    progressbar.style.width = 0;
}



}