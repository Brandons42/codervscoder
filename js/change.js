import about from "../html/about.html";
import caldendar from "../html/calendar.html";
import contact from "../html/contact.html";
import root2 from "../html/index2.html";

const menu = document.querySelector("aside");
const container = document.querySelector("#main-content div.columns");
const links = menu.querySelectorAll("a");
let name;
const files = {
  "about": about,
  "calendar": caldendar,
  "contact": contact,
  "": root2
};

for (var q = 0; q < 4; q++) {
  links[q].onclick = function(e) {
    e.preventDefault();
    if (!(this.className === "is-active")) {
      name = this.getAttribute("data-name");
      if (name == "root2") {
        name = "";
      }
      container.innerHTML = files[name];
    }
  };
}
