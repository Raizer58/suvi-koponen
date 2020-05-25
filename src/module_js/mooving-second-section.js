const circle = document.querySelector("#circle");
const winter = document.querySelector("#winter");
const secondSectionWint = document.querySelector("#second-section-wint");
const secondSectionE = document.querySelector("#second-section-e");
const secondSectionR = document.querySelector("#second-section-r");
const windowVogue = document.querySelector("#window-vogue");
const modelingCareer = document.querySelector("#window-modeling-career");
const modelingCareerBackside = document.querySelector("#window-modeling-career-backside");

function addStartingOn(firstText, secondText, time) {
  const arrayFirstText = firstText.split("");
  const arraySecondText = secondText.split("");
  const startingOn = document.querySelector("#startingOn");
  let letter = 0;

  arrayFirstText.forEach((element) => {
    letter += 1;
    if (letter === 13 || letter === 23 || letter === 34) {
      setTimeout(() => {
        startingOn.innerHTML += `<br> ${element}`;
      }, time * letter);
    } else {
      setTimeout(() => {
        startingOn.innerHTML += element;
      }, time * letter);
    }
  });

  const span = document.createElement("span");
  setTimeout(() => startingOn.append(span), time * letter);

  arraySecondText.forEach((element) => {
    letter += 1;
    if (letter === 48) {
      setTimeout(() => {
        const startingOnSpan = startingOn.querySelector("span");
        startingOnSpan.innerHTML += `<br> ${element}`;
      }, time * letter);
    } else {
      setTimeout(() => {
        const startingOnSpan = startingOn.querySelector("span");
        startingOnSpan.innerHTML += element;
      }, time * letter);
    }
  });
}

function reverseModelingCareer() {
  setTimeout(() => {
    modelingCareer.classList.toggle("display-none");
    modelingCareerBackside.classList.toggle("display-none");
  }, 750);

  if (modelingCareer.classList.contains("display-none")) {
    modelingCareerBackside.classList.add("main__window-modeling-career_close");
    modelingCareer.classList.add("main__window-modeling-career_open");
  } else {
    modelingCareer.classList.add("main__window-modeling-career_close");
    modelingCareerBackside.classList.add("main__window-modeling-career_open");
  }

  setTimeout(() => {
    modelingCareer.classList
      .remove("main__window-modeling-career_close", "main__window-modeling-career_open");
    modelingCareerBackside.classList
      .remove("main__window-modeling-career_close", "main__window-modeling-career_open");
  }, 1500);
}

function moovingSecondSection() {
  addStartingOn("Starting on a Finnish television series ", "called Model School", 15);
  circle.classList.add("second-section__circle_change-size");
  winter.classList.remove("display-none");
  modelingCareer.classList.remove("display-none");
  secondSectionWint.classList.add("second-section__winter-wint_move");
  secondSectionE.classList.add("second-section__winter-e_move");
  secondSectionR.classList.add("second-section__winter-r_move");
  windowVogue.classList.add("main__window-vogue_move");
  modelingCareer.classList.add("main__window-modeling-career_move");
  setTimeout(() => modelingCareer.classList
    .remove("main__window-modeling-career_move"), 2000);

  modelingCareer.querySelector("img")
    .addEventListener("click", reverseModelingCareer);
  modelingCareerBackside.querySelector("img:last-child")
    .addEventListener("click", reverseModelingCareer);
}

export default moovingSecondSection;
