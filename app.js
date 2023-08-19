
function CloneMaker( source, destination,count){ 
  
  for(let i =0;i<count;i++){ 
          var SourceTag = document.getElementById(source);
  var DestinationTag = document.getElementById(destination);
   var CloneTag = SourceTag.cloneNode(true);
  CloneTag.removeAttribute("id");
  DestinationTag.appendChild(CloneTag);
  
  }
}
  //start typing landing page
const typedTextSpan = document.querySelector("#introductiontxt");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Developer", "Gamer", "GameDesigner", "Student"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
//banner content typing 
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing"))
    cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
//end type function
//menu resonsive
var togglemenu = document.querySelector(".togglemenu");
var menu = document.querySelector("#nav");
togglemenu.addEventListener('click',function(){
    if(!menu.classList.contains("Open")){
   menu.classList.add("Open");
    }
    else{
        menu.classList.remove("Open");
    }
}) 
//about me typing
var aboutDesc = document.querySelector(".AboutDesc");
var aboutTxt = "Hello, I am Amir Mohammad, I am a programmer, game maker, gamer and lover of the world of technology and programming. I like to discover and learn new things." + 
"I was born in 2004 and I am currently a computer engineering student and I had experience working in web and back-end fields."
var Curser = document.querySelector("#Cursor");
var CharIndex = 0;
function typing(){
if(CharIndex<aboutTxt.length){
  if(!Curser.classList.contains("typing")) 
  Curser.classList.add("typing");
  aboutDesc.textContent += aboutTxt.charAt(CharIndex);
    CharIndex++;
    setTimeout(typing,100);
}
    else {
      Curser.classList.remove("typing");
      setTimeout(Erase, 2000);
    }

}
function Erase() {
	if (CharIndex > 0) {
    if(!Curser.classList.contains("typing")) Curser.classList.add("typing");
    aboutDesc.textContent = aboutTxt.substring(0, CharIndex-1);
    CharIndex--;
    setTimeout(Erase, 50);
  } 
  else {
    Curser.classList.remove("typing");

    setTimeout(typing, 2000);
  }
}
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(aboutTxt.length) setTimeout(typing, 2250);
});
//scroll effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add("Show");
    }
    else{
      entry.target.classList.remove('Show');
    }
  })
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));
/////////////////////////////////portfolio start
var Portfolio = [
  {
    imgLocation:'img/portfolio-1.jpg',
    title:'BlockBreaker',
    Description:'BlockBreaker is a game that you should break block with ball ,tho game is on autoplay mode'
  },
  {
    imgLocation:'img/portfolio-2.jpg',
    title:'Ballrun',
    Description:'you should run up on the wall and does not hit the shackle'
  },
  {
    imgLocation:'img/portfolio-1.jpg',
    title:'BlockBreaker',
    Description:'BlockBreaker is a game that you should break block with ball ,tho game is on autoplay mode'
  },
  {
    imgLocation:'img/portfolio-1.jpg',
    title:'BlockBreaker',
    Description:'BlockBreaker is a game that you should break block with ball ,tho game is on autoplay mode'
  },
  {
    imgLocation:'img/portfolio-2.jpg',
    title:'Ballrun',
    Description:'you should run up on the wall and does not hit the shackle'
  },
  {
    imgLocation:'img/portfolio-1.jpg',
    title:'BlockBreaker',
    Description:'BlockBreaker is a game that you should break block with ball ,tho game is on autoplay mode'
  }
];
 
//clone of portfolio cards
CloneMaker("card","contain",5);
var cardcover = document.querySelectorAll(".card-cover");
var title = document.querySelectorAll(".title");
var description = document.querySelectorAll("#description");
var tagindex = 0;
//assign content to cards
Portfolio.forEach((cd) => {
  var card = Portfolio[tagindex];
   cardcover[tagindex].style.backgroundImage = "url("+cd.imgLocation+")";
  title[tagindex].innerHTML = cd.title;
  description[tagindex].innerHTML = cd.Description;
  cardcover[tagindex].setAttribute("background",cd.imgLocation);
  tagindex++
 })
 //navigation of portfolio scroll
var leftnav = document.querySelector(".left-nav");
var rightnav = document.querySelector(".right-nav");
var cardContain = document.querySelector("#card-scroll");
leftnav.addEventListener('click',function(){
  cardContain.scrollLeft -= 40;
})
rightnav.addEventListener('click',function(){
  cardContain.scrollLeft += 40;
})
 
//MySkill Dropdown menu's 
var skills = [
  {
     title:"Unity",
     icon_1:"fa-brands",
     icon_2:"fa-unity",
     value:"50%",
  },
  {
    title:"Html",
    icon_1:"fa-brands",
    icon_2:"fa-html5",
    value:'90%',
 },
 {
  title:"Css",
  icon_1:"fa-brands",
  icon_2:"fa-css3-alt",
  value:'90%',
},
{
  title:"Javascript",
  icon_1:"fa-brands",
  icon_2:"fa-square-js",
  value:'40%',
},
{
  title:"Python",
  icon_1:"fa-brands",
  icon_2:"fa-python",
   value:'60%',
},
{
  title:"C++",
  icon_1:"fa-solid",
  icon_2:"fa-c",
  value:'55%',
},
{
  title:"php",
  icon_1:"fa-brands",
  icon_2:"fa-php",
  value:'40%',
},
 ];
 CloneMaker("skill","skill-containerMenu",6);
 var skill_title = document.querySelectorAll(".skill-title");//title of progbar
 var skill_icon = document.querySelectorAll(".skill-icon");//icon of progbar
 var value = document.querySelectorAll(".value");//value of progbar
 var prog = document.querySelectorAll(".prog");
 var skillIndex = 0;
 skills.forEach((el) => {
    skill_title[skillIndex].innerHTML = el.title;
    skill_icon[skillIndex].classList.add(el.icon_1);
    skill_icon[skillIndex].classList.add(el.icon_2);
    value[skillIndex].setAttribute("style","width:"+el.value);
    prog[skillIndex].setAttribute("title",el.value);
    skillIndex++;
 })


var dropdown = document.querySelectorAll(".skill");
dropdown.forEach((menu) => {
  menu.addEventListener('click',function(){
    if(!menu.classList.contains("show")){
        menu.classList.add("show");
    }else{
      menu.classList.remove("show");
    }
  
  })
})
 //services
 var Services = [
  {
    icon_1:"fa-solid",
    icon_2:"fa-code",
    title:"Team Working",
    p:"Teamwork experience has made teamwork one of my goals and services, and it also makes me proud to work in a professional team.",
  },
  {
    icon_1:"fa-solid",
    icon_2:"fa-user-group",
    title:"Web Developing",
    p:"Nowadays, having a good website is almost mandatory for any business, and you must have a good website, so I will be happy if I do this for you.",
  },
  {
    icon_1:"fa-solid",
    icon_2:"fa-puzzle-piece",
    title:"Game Design",
    p:"Computer games are an industry that has shaped not only children but all walks of life, so it's a fascinating and challenging industry and I enjoy this fascinating world.",
  },
 ]
 CloneMaker("service-body","services-container",2);
 var service_title = document.querySelectorAll(".service-title");
 var service_img = document.querySelectorAll(".service-img");
 var service_description = document.querySelectorAll(".service-description");
 let serviceIndex = 0;
 Services.forEach((el) => {
    service_title[serviceIndex].innerHTML = el.title;
    service_img[serviceIndex].classList.add(el.icon_1);
    service_img[serviceIndex].classList.add(el.icon_2);
    service_description[serviceIndex].innerHTML = el.p;
    serviceIndex++;
 })
//experience
var Experience = [
  {
    logo:"img/medric-logo.png",
    from_date:"1401/012/15",
    to_date:"1402/04/23",
    title:"Medric Game",
    description: "I work in medric game as unity designer and game designer i learn lots of things like team working and Unity and C# ...",
  },
  {
    logo:"img/SharifGame-Logo.png",
    title:"Sharifgame",
    from_date:"1401/09/15",
    to_date:"1402/10/23",
    description: "I join in sharif game competition with some of my friends to make mobile game our game was about boat that should save people ...",
  },
]
CloneMaker("experience","ex-container",1);
var extitle= document.querySelectorAll(".ex-title");
var exLogo= document.querySelectorAll(".logos");
var exDescription= document.querySelectorAll(".ex-description");
var exFromDate = document.querySelectorAll(".ex-fro-date");
var exToDate = document.querySelectorAll(".ex-to-date");
var exIndex = 0;
Experience.forEach((el) => {
   extitle[exIndex].innerHTML = el.title;
   exDescription[exIndex].innerHTML = el.description;
   exLogo[exIndex].setAttribute("style","background-image:url(" + el.logo +");");
   exFromDate[exIndex].innerHTML += el.from_date;
   exToDate[exIndex].innerHTML += el.to_date;
   exIndex++;
});
CloneMaker("videos-cover","videos",4);
var videos = [
  {
    video_source:"video/MyRecord_20230726180641.mp4",
    video_title:"website",
    video_des:"story land project",
    video_poster:"img/Capture.png",
  },
  {
    video_source:"video/game.mp4",
    video_title:"game",
    video_des:"destroy block",
    video_poster:"img/Portfolio-1.jpg",
  },
  {
    video_source:"video/MyRecord_20230726180641.mp4",
    video_title:"websites",
    video_des:"story land project",
    video_poster:"img/Capture.png",
  },
  {
    video_source:"video/game.mp4",
    video_title:"gamemaker",
    video_des:"destroy block",
    video_poster:"img/Portfolio-1.jpg",
  },
]
function setvideo(id)
{
//var source = video_cover.on
videosource.setAttribute("src",el.video_source);
video_title.innerHTML = el.video_title;
descrip_video.innerHTML = ;
}
var video_cover = document.querySelectorAll(".video-cover");
var video_title = document.querySelector(".video-title");
var descrip_video = document.querySelector(".descrip-video");
var videosource = document.querySelector(".video-source");
var videoIndex = 0;
videos.forEach((el) => {
  video_cover[videoIndex].setAttribute("poster",el.video_poster);
  video_cover[videoIndex].setAttribute("id","id" + videoIndex);
  video_cover[videoIndex].setAttribute("src",el.video_source);
  video_cover[videoIndex].addEventListener("click",function(){
    
  })
  videoIndex++;
})
