import { MainPage } from "./mainPage.js";
import { LoginPage } from "./login.js";
import { ProfilePage } from "./profile.js";
import { Error } from "./error.js";

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
      document.querySelector("#root").innerHTML = Error;

      console.log("404 Not Found");
    }
  }
}

const router = new Router();

// Add routes
router.addRoute("/", () => {
  document.querySelector("#root").innerHTML = MainPage;
  document.getElementById("logoutButton").addEventListener("click", (e) => {
    sessionStorage.clear(); // 세션 스토리지 비우기
    alert("로그아웃 되었습니다.");
  });
});

router.addRoute("/login", () => {
  document.querySelector("#root").innerHTML = LoginPage;

  const loginForm = document.getElementById("loginForm");
  console.log("loginForm", loginForm);

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
      sessionStorage.setItem("email", email);
      router.navigateTo("/");
    }
  });
});

router.addRoute("/profile", () => {
  const isLoggedIn = sessionStorage.getItem("email");
  if (isLoggedIn) {
    document.querySelector("#root").innerHTML = ProfilePage;
    document.getElementById("username").value = isLoggedIn;
  } else {
    alert("You must be logged in to access the profile page.");
    router.navigateTo("/login");
  }
  document.getElementById("logoutButton").addEventListener("click", (e) => {
    sessionStorage.clear(); // 세션 스토리지 비우기
    alert("로그아웃 되었습니다.");
  });
  //   document.querySelector("#root").innerHTML = ProfilePage;
});

// Ensure the main page loads on initial load
document.addEventListener("DOMContentLoaded", () => {
  router.handleRoute(window.location.pathname);
});
