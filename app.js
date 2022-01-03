// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// import { initializeApp } from "firebase/app";

// import firebase from "firebase";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

const scrollToTop = () => {
  const btnScrollToTop = document.querySelector(".btnScrollToTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction(btnScrollToTop);
  };

  btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

function scrollFunction() {
  const btnScrollToTop = document.querySelector(".btnScrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

const app = () => {
  // initializeApp(firebaseConfig);
  navSlide();
  scrollToTop();
};

app();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBYKE9QiAcp6Sx_IYdVza0iANgubTIBN-U",
//   authDomain: "cakaprumahsg.firebaseapp.com",
//   projectId: "cakaprumahsg",
//   storageBucket: "cakaprumahsg.appspot.com",
//   messagingSenderId: "170006368863",
//   appId: "1:170006368863:web:dc59deea3d8feb931501ea",
// };
