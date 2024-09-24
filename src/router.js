import { MainPage } from "./mainPage.js";
import { LoginPage } from "./login.js";
import { ProfilePage } from "./profile.js";

export class Router {
  constructor() {
    this.routes = {};
    window.addEventListener("popstate", this.handlePopState.bind(this));
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigateTo(path) {
    history.pushState(null, "", path);
    this.handleRoute(path);
  }

  handlePopState() {
    this.handleRoute(window.location.pathname);
  }

  handleRoute(path) {
    const handler = this.routes[path];
    if (handler) {
      handler();
    } else {
      console.log("404 Not Found");
    }
  }
}

const router = new Router();

// Add routes
router.addRoute("/", () => {
  document.querySelector("#root").innerHTML = MainPage;
});

router.addRoute("/login", () => {
  document.querySelector("#root").innerHTML = LoginPage;
  // Add other route handlers as needed
});

router.addRoute("/profile", () => {
  document.querySelector("#root").innerHTML = ProfilePage;
  // Add other route handlers as needed
});

// Ensure the main page loads on initial load
document.addEventListener("DOMContentLoaded", () => {
  router.handleRoute(window.location.pathname);
});
