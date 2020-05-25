import "./module_scss/style.scss";
import "./fonts/Lucifer-Sans-SemiCnd-Bold.otf";
import "./fonts/Lucifer-Sans-SemiCnd-Medium.otf";
import movingFirstScreen from "./module_js/moving-first-section";
import movingSecondSection from "./module_js/mooving-second-section";

movingFirstScreen(18, 99);

function screenPosition() {
  if (document.querySelector("#second-section-quote-mark").getBoundingClientRect().top - 450 <= 0) {
    window.removeEventListener("scroll", screenPosition);
    window.removeEventListener("load", screenPosition);
    movingSecondSection();
  }
}

window.addEventListener("scroll", screenPosition);
window.addEventListener("load", screenPosition);
