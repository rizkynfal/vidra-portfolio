function toggleMenu() {
  const menu = document.getElementById("menu");
  const navbar = document.getElementById("navbar");
  menu.classList.toggle("show");
  navbar.classList.toggle("open");
}
// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
