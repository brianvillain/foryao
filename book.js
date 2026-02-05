const allowed = prompt("This page is protected. Enter the password to continue:") === "Yaoyao830";
if (!allowed) {
  document.body.innerHTML = "<h2 style='text-align:center; color: red; margin-top: 20%; font-family: sans-serif;'>Access Denied</h2>";
  throw new Error("Unauthorized access");
}

document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover-screen");
  const book = document.getElementById("book");
  const openBtn = document.getElementById("open-book-btn");

  const pages = document.querySelectorAll(".page");
  const navButtons = document.querySelector('.nav-buttons');
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  let currentPage = -1; // -1 = cover

  function hideAllPages() {
    pages.forEach(p => p.classList.add("hidden"));
  }

  function showCover() {
    hideAllPages();
    book.classList.add("hidden");
    cover.classList.remove("hidden");
    currentPage = -1;
    navButtons.classList.add("hidden");
  }

  function showPage(index) {
    hideAllPages();
    pages[index].classList.remove("hidden");
    cover.classList.add("hidden");
    book.classList.remove("hidden");
    currentPage = index;
    navButtons.classList.remove("hidden");
  }

  openBtn.addEventListener("click", () => {
    showPage(0);
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage === pages.length - 1) {
      showCover();
    } else {
      showPage(currentPage + 1);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage === 0) {
      showCover();
    } else {
      showPage(currentPage - 1);
    }
  });
});
