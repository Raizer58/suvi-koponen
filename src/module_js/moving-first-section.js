function moveText() {
  const fashion = document.querySelector("#fashion").classList;
  const design = document.querySelector("#design").classList;
  const campaign = document.querySelector("#campaign").classList;
  const jobDone = document.querySelector("#job-done").classList;
  const paris = document.querySelector("#paris").classList;
  const suvi = document.querySelector("#suvi").classList;
  const koponen = document.querySelector("#koponen").classList;
  const koponenKopon = document.querySelector("#koponen-kopon").classList;
  const koponenFE = document.querySelector("#koponen-f-e").classList;
  const koponenSN = document.querySelector("#koponen-s-n").classList;
  const window6Step = document.querySelector("#window-6-step").classList;

  fashion.remove("display-none");
  design.remove("display-none");
  campaign.remove("display-none");
  jobDone.remove("display-none");
  paris.remove("display-none");
  suvi.remove("display-none");
  koponen.remove("display-none");
  window6Step.remove("display-none");
  fashion.add("main__fashion-design_move");
  design.add("main__fashion-design_move");
  campaign.add("main__campaign_move");
  jobDone.add("main__job-done_move");
  paris.add("main__paris_move");
  suvi.add("suvi-koponen__suvi_move");
  koponenKopon.add("suvi-koponen__koponen-kopon_move");
  koponenFE.add("suvi-koponen__koponen-f-e_move");
  koponenSN.add("suvi-koponen__koponen-s-n_move");
  window6Step.add("main__window-6-step_move");
}

function loadScreen() {
  document.querySelector("body header")
    .classList.remove("display-none");
  setTimeout(() => {
    document.querySelector("body header")
      .classList.add("header_active");
  }, 1);
  document.querySelector("body main .main__first-section p").remove();
}

function changeSizingImg() {
  const firstThirdImg = document.createElement("img");
  firstThirdImg.src = "./dist/img/first-third.png";
  firstThirdImg.id = "first-third";
  firstThirdImg.className = "main__first-third_change-size";

  document.querySelector("body main .main__first-section")
    .append(firstThirdImg);
  document.querySelector("#first-first").classList
    .add("main__first-first_change-size");
  document.querySelector("#first-second").classList
    .add("main__first-second_change-size");
}

function movingFirstScreen(time, count) {
  const layoutFirst = document.querySelector("#layout-first")
    .classList;
  const layoutSecond = document.querySelector("#layout-second")
    .classList;

  for (let cycle = 0; cycle <= count; cycle += 1) {
    setTimeout(() => {
      const firstImg = document.querySelector("#first-first");
      const secondImg = document.querySelector("#first-second");
      document.querySelector("body #timer")
        .innerHTML = cycle;
      switch (cycle) {
        case 0:
          layoutFirst.add("screen__white-layout_move-down");
          layoutSecond.add("screen__white-layout_move-top");
          break;
        case 33:
          layoutFirst.remove("screen__white-layout_move-down");
          layoutSecond.remove("screen__white-layout_move-top");
          firstImg.src = "./dist/img/fifth-first.png";
          secondImg.src = "./dist/img/fourth-first.png";
          layoutFirst.add("screen__white-layout_move-right");
          layoutSecond.add("screen__white-layout_move-left");
          break;
        case 66:
          layoutFirst.remove("screen__white-layout_move-right");
          layoutSecond.remove("screen__white-layout_move-left");
          firstImg.src = "./dist/img/first-first.png";
          secondImg.src = "./dist/img/first-second.png";
          layoutFirst.add("screen__white-layout_move-top");
          layoutSecond.add("screen__white-layout_move-down");
          break;
        case 99:
          document.querySelector("#layout-first").remove();
          document.querySelector("#layout-second").remove();
          changeSizingImg();
          loadScreen();
          moveText();
          break;
        default:
          break;
      }
    }, time * cycle);
  }
}

export default movingFirstScreen;
