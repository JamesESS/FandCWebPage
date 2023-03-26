const splashContainer = document.getElementById("splashcontainer");
const splashNavigation = document.getElementsByClassName("shape");
const body = document.getElementById("body");
const myPortfolio = document.getElementById("splashtextcontainer");
const mainContent = document.getElementById("maincontent");
const projectButton = document.getElementsByClassName("projectbutton");
const contactMe = document.getElementById("contactmeform");
const contactForm = document.getElementsByClassName("form");
const mobileCheck = document.getElementById("mobilecheck");
const myAge = document.getElementById("myage");

let age = Math.floor((new Date()- new Date(1993,02,24)) / 31536000000);   //turn my birthday in to milliseconds and compare to today in milliseconds. new Date() month starts at 0!!
myAge.innerText = age;
/* variable to track state of different buttons */
let previousNavID = "";
let previousProjectID = "";
let splashAnimation = true;

/* variables needed for contact form and contact form event listener */
let contactObject = {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    about: "",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

let mouseHover = false;  //variable to track if mouse hovering over splash element
let mobileDeviceStatus = false;  //variable to check device width
/* Checks if user is on mobile device every second*/
setInterval(mobileDevice, 600)
function mobileDevice() {
    if (getComputedStyle(mobileCheck).display == "none") {    //checks display style of an element in css mobile device media query
        for (i=0; i < splashNavigation.length; i++) {
            splashNavigation[i].firstElementChild.classList.remove("hidden");
            mobileDeviceStatus = true;
        }
    }
    else if (getComputedStyle(mobileCheck).display == "block" && body.dataset.navbar == "false" && !mouseHover){  //hides splashscreen text when not on mobile and not currently hovering over an element
        for (i=0; i < splashNavigation.length; i++) {
            splashNavigation[i].firstElementChild.classList.add("hidden");
            mobileDeviceStatus = false;
        }
    }
}
let contactArray = Object.keys(contactObject);
contactMe.addEventListener("submit", contactMeSubmit, false);

/* Make each splash screen shape display text on hover and move past splashscreen on click */
for (i=0; i < splashNavigation.length; i++) {
    splashNavigation[i].addEventListener("mouseenter", splashMouseEnter);
    splashNavigation[i].addEventListener("mouseleave", splashMouseLeave);
    splashNavigation[i].addEventListener("click", navBarClick);  
    /* splashNavigation[i].style.animation = "splashshapehover 1000ms";
    splashNavigation[i].style.animationDelay = 200*i+"ms"; */
}

function splashMouseEnter() {
   /*  if (mobileDeviceStatus){
        return;
    } */
    splashAnimation = false;
    mouseHover = true;
    let splashNavHover = this.firstElementChild;
    if (getComputedStyle(splashNavHover).display == "none" && !mobileDeviceStatus){
    splashNavHover.classList.toggle("hidden");
    }
}
function splashMouseLeave() {
    splashAnimation = true;
    mouseHover = false;
    let splashNavHover = this.firstElementChild;
    console.log(getComputedStyle(splashNavHover).display);
    if (getComputedStyle(splashNavHover).display == "block" && !mobileDeviceStatus){
        splashNavHover.classList.toggle("hidden");
    }
}

function navBarClick() {
    /* if splash screen showing then swap to mainpage */
    if(this.id === "splashscreen" && body.dataset.navbar == "false"){
        //exit out of function of splashscreen button is pressed whilst on splashscreen
        return;
    }
    else if (body.dataset.navbar == "false") {       //checks if splashscreen is showing
        splashContainer.dataset.navbar = "true";
        body.dataset.navbar = "true";
    
        myPortfolio.classList.toggle("hidden");
        mainContent.classList.remove("hidden");
        //mainContent.classList.toggle("hidden");
        for (i=0; i < splashNavigation.length; i++) {
            /* remove splashscreen events and initialise navbar events */
            document.getElementById(String("splashnav" + (i))).removeAttribute("class", "hidden"); //cant get this to work with classlist so have to do weird string instead
            splashNavigation[i].removeEventListener("mouseenter", splashMouseEnter, false);
            splashNavigation[i].removeEventListener("mouseleave", splashMouseLeave, false);
        }
    } 
    if(this.id === "splashscreen"){
        location.reload();  //refreshes page to reset back to splashscreen seems much easier than manually resetting
        return;
    }
    
    /* Reset content before showing new tab */
    else if (previousNavID !== "") {
        document.getElementById(String(previousNavID+"content")).dataset.visible = "false";
        body.classList.toggle(String("bodytest"+previousNavID)); 
        document.getElementById(previousNavID).style.borderStyle = "none";
    }
    /* show current navbar selections content */
    let contentHandler = document.getElementById(String(this.id + "content"));
    contentHandler.dataset.visible = "true";
    body.classList.toggle(String("bodytest"+this.id));
    this.style.borderStyle = "solid";
    console.log(contentHandler.id);
    previousNavID = this.id;
    if(this.id == "projects" && previousProjectID == "") {
        document.getElementById("project1img").classList.remove("hidden");
        document.getElementById("project1text").classList.remove("hidden");
    } 
}
/* initialise hover and click functionality for project buttons */
for (i=0; i < projectButton.length; i++) {
    projectButton[i].addEventListener("mouseenter", projectButtonMouseEnter);
    projectButton[i].addEventListener("click", projectButtonMouseEnter); 
}
/* project button hover function */
function projectButtonMouseEnter() {
    /* exits out of function if project that's already displayed is hovered over or clciked on */
    if (previousProjectID == "" && this.id == "project1" || previousProjectID == this.id){
        console.log("exit func")
        return;
    }
    /* hides previous project */
    if (previousProjectID == "") {
        document.getElementById("project1img").classList.toggle("hidden");
        document.getElementById("project1text").classList.toggle("hidden");
        document.getElementById("project1").style.opacity = 0.5;
    }
    else if (previousProjectID !== "") {
        console.log("previous = this");
        document.getElementById(String(previousProjectID + "img")).classList.toggle("hidden");
        document.getElementById(String(previousProjectID + "text")).classList.toggle("hidden");
        document.getElementById(previousProjectID).style.opacity = 0.5;
    }
    /* shows project mouse is hovering over or clicked on */
    console.log("mouse enter" + this.id);
    document.getElementById(String(this.id + "img")).classList.toggle("hidden");
    document.getElementById(String(this.id + "text")).classList.toggle("hidden");
    this.style.opacity = 1;  //make it clear which button is active
    console.log("this id " + this.id + "previous id " + previousProjectID);
    previousProjectID = this.id; 
}
function projectButtonClick() {
    
}
function contactMeSubmit(Event) {
    Event.preventDefault();
    console.log(contactForm[1].value);
    for (i=0; i < contactArray.length - 1; i++) {
        contactObject[contactArray[i]] = contactForm[i].value;
    }
    alert("Thanks " + contactObject.fullName() + " for getting in touch.\nI'll get back to you shortly!");
}
/* Shift splash page between preset configurations on three second intervals*/
setInterval((event) => {
    if (splashAnimation) {
        let random = Math.floor(Math.random() * 5);
        splashContainer.dataset.positioning = random; //asign preset configuration
    }
  }, 3500);