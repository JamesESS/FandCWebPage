const splashContainer = document.getElementById("splashcontainer");
const splashNavigation = document.getElementsByClassName("shape");
const body = document.getElementById("body");
const myPortfolio = document.getElementById("splashtextcontainer");
const mainContent = document.getElementById("maincontent");
let previousNavID = ""
/* Make each splash screen shape display text on hover and move past splashscreen on click */
for (i=0; i < splashNavigation.length; i++) {
    splashNavigation[i].addEventListener("mouseenter", splashMouseEnter);
    splashNavigation[i].addEventListener("mouseleave", splashMouseLeave);
    splashNavigation[i].addEventListener("click", splashClick);
}
function splashMouseEnter() {
    let splashNavHover = this.firstElementChild;
    splashNavHover.classList.toggle("hidden");
}
function splashMouseLeave() {
    let splashNavHover = this.firstElementChild;
    splashNavHover.classList.toggle("hidden");
}
function splashClick() {
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
        splashNavigation[i].removeEventListener("click", splashClick, false);
        splashNavigation[i].addEventListener("click", navBarClick);
    }
} 
function navBarClick() {
    if(this.id === "splashscreen"){
        location.reload();  //refreshes page to reset back to splashscreen seems much easier than manually resetting
        return;
    }
    /* Reset content before showing new tab */
    else if (previousNavID !== "") {
        document.getElementById(String(previousNavID+"content")).classList.toggle("hidden");
        body.classList.toggle(String("bodytest"+previousNavID)); 
        document.getElementById(previousNavID).style.borderStyle = "none";
    }
    /* show current navbar selections content */
    let contentHandler = document.getElementById(String(this.id + "content"));
    contentHandler.classList.toggle("hidden");
    body.classList.toggle(String("bodytest"+this.id));
    this.style.borderStyle = "solid";
    console.log(contentHandler.id);
    previousNavID = this.id;
}
/* Shift splash page between preset configurations on three second intervals*/
setInterval((event) => {
    let random = Math.floor(Math.random() * 5);
    splashContainer.dataset.positioning = random; //asign preset configuration
  }, 3500);
