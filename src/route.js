import {
  templateLogin
} from "./assets/views/templateLogin.js";
import {
  templateRegister
} from "./assets/views/templateRegister.js";
import {
  templatePosts
} from "./assets/views/templatePosts.js";
import {
  template404
} from "./assets/views/template404.js";

const changeRouter = h => {
  if (h === "#/login") {
    return showTemplate(h);
  }
  if (h === "#/register") {
    return showTemplate(h);
  }
  if (h === "#/posts") {
    return showTemplate(h);
  }
  if (h === "#/signOut") {
    return showTemplate(h);
  }
};

const showTemplate = h => {
  const router = h.substring(2);
  const containerDinamic = document.getElementById("dinamic");
  containerDinamic.innerHTML = "";

  switch (router) {
    case "login":
      containerDinamic.appendChild(templateLogin());
      break;
    case "register":
      containerDinamic.appendChild(templateRegister());
      break;
    case "posts":
      containerDinamic.appendChild(templatePosts());
      break;
    case "signOut":
      containerDinamic.appendChild(templateLogin());
      break;
    default:
      containerDinamic.appendChild(template404());
  }
};

export const initRouter = () => {
  window.addEventListener("load", changeRouter(window.location.hash));
  if ("onhashchange" in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    };
  }
};