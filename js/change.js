import about from "../html/about.html";
import caldendar from "../html/calendar.html";
import contact from "../html/contact.html";
import news from "../html/news.html";
import standings from "../html/standings.html"
import tournaments from "../html/tournaments.html";

const menu = document.querySelector("aside");
const container = document.getElementById("main-content");
const links = menu.getElementsByTagName("a");
let last = links[0];
let lastName = "news";
let name;
const files = {
  "about": about,
  "calendar": caldendar,
  "contact": contact,
  "news": news,
  "standings": standings,
  "tournaments": tournaments
};

for (var q = 0; q < links.length; q++) {
  links[q].onclick = function(e) {
    e.preventDefault();
    name = this.getAttribute("data-name");
    if (name != last) {
      container.innerHTML = files[name];
      this.className = " is-active";
      last.className = last;
      last = this;
      lastName = name;
    }
  };
}
