const splashContainer = document.getElementById("splashcontainer");


/* Shift splash page between preset configurations on three second intervals*/
setInterval((event) => {
    let random = Math.floor(Math.random() * 5);
    splashContainer.dataset.positioning = random; //asign preset configuration
    console.log(random);
  }, 3000);
