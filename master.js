// Check If There IS Local Storage Color Option

let minColor = localStorage.getItem("color_option");

if (minColor !== null) {
  // console.log("Local Storage Is Not Empty You Can Set It On Root Now");
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty("--min--color", minColor);

  // Remove Class Active From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active On Element With Data Color === Local Storage Gettem
    if (element.dataset.color === minColor) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

//#########################################################################################################

// Toggle Spin Class On Icon
let faGear = document.querySelector(".toggle-settings .fa-gear");
let settingsBox = document.querySelector(".settings-box");

// Click On Toggle Settings Gear
faGear.onclick = function () {
  // Toggle Class Fa-spin For Rotation On Self
  faGear.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  settingsBox.classList.toggle("open");
};

//###############################################################################################################

//Switch Colors
let colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--min--color",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);
  });
});

//###################################################################################################################

// Random Background Option
let backgroundOption = true;

// Variable To Controle The Interval
let backInterval;

let urlImageRandom;

//Switch Random Background Option
let randomBackEl = document.querySelectorAll(".random-background span");

// Loop On All spans
randomBackEl.forEach((span) => {
  // Click On Every span
  span.addEventListener("click", (e) => {
    // Set Random background On Local Storage
    localStorage.setItem("background_option", e.target.dataset.background);

    handleActive(e);

    if (e.target.dataset.background === "yes") {
      randomizeImage();
    } else {
      clearInterval(backInterval);
    }
  });
});

// ############################################################################################
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Image
let imagesArray = ["12.jpg", "13.jpg", "14.jpg"];

// Function to Randomize Image
function randomizeImage() {
  if (backgroundOption === true) {
    backInterval = setInterval(() => {
      //Get Random Number
      let randomNumber = Math.floor(Math.random() * imagesArray.length);
      // Change BackGround Image Url
      landingPage.style.backgroundImage = urlImageRandom;
      urlImageRandom = 'url("images/' + imagesArray[randomNumber] + '")';
    }, 5000);
  }
}
randomizeImage();

// ########################################################################################################
// Check If There IS Local Storage Random background Item
let minbackground = localStorage.getItem("background_option");

if (minbackground !== null) {
  // console.log("Local Storage Is Not Empty You Can Set It On Root Now");
  // console.log(localStorage.getItem("background_optin"));

  // Remove Class Active From All random-background List Item
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");

    // Add Active On Element With Data background === Local Storage Gettem
    if (element.dataset.background === minbackground) {
      // Add Active Class
      element.classList.add("active");

      if (minbackground === "no") {
        clearInterval(backInterval);
      }
    }
  });
}

//####################################################################################################
// document.documentElement.style.setProperty(
//   "--background-image",
//   urlImageRandom
// );

// let urlImageRandom;

// // Set Random background  Value On Local Storage
// localStorage.setItem("backgroundVal", urlImageRandom);
//########################################################################################################

// Select Skills Selectors

let ourSkills = document.querySelector(".skills");
console.log(ourSkills);
window.onscroll = function () {
  // Skills Of Set Top
  let SkillsOfSetTop = ourSkills.offsetTop;
  this.console.log(SkillsOfSetTop);

  // Skills Outer Hieght
  let skillsOuterHeight = ourSkills.offsetHeight;
  // this.console.log(skillsOuterHeight);

  // Windo Height
  let windowHeight = this.innerHeight;
  // this.console.log(windoHeight);

  // Windo ScrollTop
  let windowScrollTop = this.pageYOffset;
  // this.console.log(windoScrollTop);

  if (
    windowScrollTop >
    skillsOuterHeight + SkillsOfSetTop - windowHeight - 350
  ) {
    let allSkills = document.querySelectorAll(
      ".skills-box .skills-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
//#######################################################################################################

// Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Creat Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = "popup-overlay";

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Creat The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Creat Heading
      let imgHeading = document.createElement("h3");

      // Creat Text For Heading
      let textImage = document.createTextNode(img.alt);

      //Append The Text To The Heading
      imgHeading.appendChild(textImage);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);
    }

    //Creat The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Add The Popuop Box To Body
    document.body.appendChild(popupBox);

    // Creat The Close Span
    let closeButton = document.createElement("span");

    // Creat The Close Buttun Text
    let closeButtunText = document.createTextNode("X");

    // Append Text To Close Buttun
    closeButton.appendChild(closeButtunText);

    // Add Class To Close Buttun

    closeButton.className = "close-button";

    // Add Close Buttun To The Popup Box

    popupBox.appendChild(closeButton);
  });
});

// Close Popup

document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
});

//############################################################################################################

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomeWhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

//#################################################################################

// Handle Active Class From All Childrens

function handleActive(ev) {
  // Remove Class Active From All Children
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // Add Active Class On target Self
  ev.target.classList.add("active");
}

//########################################################################################################

let bulletSpan = document.querySelectorAll(".bullets-option span");

let bulletContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {
  bulletSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletContainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletContainer.style.display = "block";

      localStorage.setItem("bullets-option", "block");
    } else {
      bulletContainer.style.display = "none";
      localStorage.setItem("bullets-option", "none");
    }
    handleActive(e);
  });
});

//########################################################################################################

// Reset Button

document.querySelector(".reset-options").onclick = function () {
  // localStorage.clear();
  localStorage.removeItem("bullets-option");
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");

  // Reload Window
  window.location.reload();
};

console.log(document.querySelector(".reset-options"));

//########################################################################################################

// Toggle Menu

let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  // Stop Propagation On Button
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");
};

// Stop Propagation On Links
tLinks.onclick = function (e) {
  e.stopPropagation();
};

// // Click Anywhere Outside Menu And Toggle Button
// document.addEventListener("click", (e) => {
//   if (e.target !== toggleBtn && e.target !== tLinks) {
//     if (
//       toggleBtn.className === "toggle-menu menu-active" &&
//       tLinks.className === "links open"
//     ) {
//       // console.log(toggleBtn.className === "toggle-menu menu-active");
//       // console.log(tLinks.className);
//       toggleBtn.classList.remove("menu-active");
//       tLinks.classList.remove("open");
//     }
//   }
// });

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    // Chek If Menu Is Open
    if (tLinks.classList.contains("open")) {
      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");
    }
  }
});

//########################################################################################################

let fixedOptionSpan = document.querySelectorAll(".fixed-option span");
let headerPage = document.querySelector(".landing-page .header-area");
let fixedHeadreLocal = localStorage.getItem("hearder-option");
fixedOptionSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.position === "fixed") {
      headerPage.style.position = "fixed";
      headerPage.style.width = "73%";

      localStorage.setItem("hearder-option", "fixed");
    } else {
      headerPage.style.position = "relative";
      headerPage.style.width = "";

      localStorage.setItem("hearder-option", "relative");
    }
    handleActive(e);
  });
});

if (fixedHeadreLocal !== null) {
  fixedOptionSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (fixedHeadreLocal === "fixed") {
    headerPage.style.position = "fixed";
    headerPage.style.width = "73%";

    document.querySelector(".fixed-option .yes").classList.add("active");
  } else {
    headerPage.style.position = "relative";
    headerPage.style.width = "";

    document.querySelector(".fixed-option .no").classList.add("active");
  }
}
