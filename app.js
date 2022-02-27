//firebase configuration
// const config = {
//   apiKey: "AIzaSyAk8Ta3Hzl-MmHEhvB-LgHmJ_ueHL7IsL4",
//   authDomain: "cakaprumahsg-amir.firebaseapp.com",
//   databaseURL: "https://cakaprumahsg-amir-default-rtdb.firebaseio.com",
//   projectId: "cakaprumahsg-amir",
//   storageBucket: "cakaprumahsg-amir.appspot.com",
//   messagingSenderId: "271026251179",
//   appId: "1:271026251179:web:c08a567b194ae6ead89eee",
//   measurementId: "G-8XN8C70GYK",
// };

// firebase.initializeApp(config);

// const firestore = firebase.firestore();

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

// function database() {
//   console.log("DATABASE TESTING");
//   //get all stories
//   // db.collection("stories")
//   //   .get()
//   //   .then((querySnapshot) => {
//   //     querySnapshot.forEach((doc) => {
//   //       console.log(doc.data());
//   //     });
//   //   });
//   const firebaseConfig = {
//     apiKey: "AIzaSyAk8Ta3Hzl-MmHEhvB-LgHmJ_ueHL7IsL4",
//     authDomain: "cakaprumahsg-amir.firebaseapp.com",
//     projectId: "cakaprumahsg-amir",
//     storageBucket: "cakaprumahsg-amir.appspot.com",
//     messagingSenderId: "271026251179",
//     appId: "1:271026251179:web:c08a567b194ae6ead89eee",
//     measurementId: "G-8XN8C70GYK",
//   };
//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
//   const booksRef = firebase.firestore().collection("stories");
//   console.log(booksRef);
// }

function submitForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/OmtpOUGctBuFj8IM/",
    type: "post",
    data: $("#enquiryForm").serializeArray(),
    success: function () {
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}

const app = () => {
  navSlide();
  scrollToTop();
};

app();

// //Check if the DOM is full loaded
// document.addEventListener("DOMContentLoaded", (e) => {
//   if (location.href.includes("property-stories.html")) {
//     getStories();
//   }
// });

// //RETRIEVE PROPERTY STORIES - property-stories.html
// const getStories = async () => {
//   let postsArray = [];
//   let docs = await firebase
//     .firestore()
//     .collection("stories")
//     .get()
//     .catch((err) => console.log(err));

//   docs.forEach((doc) => {
//     postsArray.push({ id: doc.id, data: doc.data() });
//   });

//   createChildren(postsArray);
// };

// const createChildren = async (arr) => {
//   //check if the post element is in the current HTML
//   if (posts != null) {
//     arr.map((post) => {
//       let div = document.createElement("div");
//       let cover = document.createElement("div");
//       let anchor = document.createElement("a");
//       let anchorNode = document.createTextNode(post.data.title);
//       anchor.setAttribute("href", "post.html#/" + post.id);
//       anchor.appendChild(anchorNode);
//       let content = document.createElement("p");
//       content.innerText = post.data.content;

//       cover.style.backgroundImage = "url(" + post.data.postImage + ")";
//       div.classList.add("post");
//       div.appendChild(cover);
//       div.appendChild(anchor);
//       div.appendChild(content);
//       posts.appendChild(div);
//     });
//   }
// };
