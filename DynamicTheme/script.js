const theme = document.documentElement;
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.classList;
    console.log("color", color, color.contains("btn"));
    console.log("theme", theme.html);
    if (color.contains("btn1")) {
      theme.style.setProperty("--theme-color", "rgb(9, 161, 195)");
    } else if (color.contains("btn2")) {
      theme.style.setProperty("--theme-color", "rgb(93, 225, 16)");
    } else if (color.contains("btn3")) {
      theme.style.setProperty("--theme-color", "rgb(241, 9, 9)");
    } else if (color.contains("btn4")) {
      theme.style.setProperty("--theme-color", "rgb(184, 9, 232)");
    } else {
      theme.style.setProperty("--theme-color", "#000");
    }
  });
});
