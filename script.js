function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const pfp = document.querySelector("#profile img");

  html.classList.contains("light")
    ? pfp.setAttribute("src", "./assets/avatar-light.png")
    : pfp.setAttribute("src", "./assets/avatar.png");
}
