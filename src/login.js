export const LoginPage = `
  <div id="root">
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="loginForm">
          <div class="mb-4">
            <input type="text" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  </div>`;

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Get email and password input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("email", email, password);
    // Basic example of checking credentials (you can improve this with real logic)
    // if (email && password) {
    //   sessionStorage.setItem("isLoggedIn", true); // Set logged in flag
    //   alert("Login successful!");
    //   router.navigateTo("/"); // Redirect to home page after login
    // } else {
    //   alert("Invalid email or password. Please try again.");
    // }
  });
});
