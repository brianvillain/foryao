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
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const navButtons = document.querySelector(".nav-buttons");

  let currentPage = -1; // -1 = cover

  // Make sure all pages are hidden
  function hideAllPages() {
    pages.forEach(p => p.style.display = "none");
  }

  function showCover() {
    hideAllPages();
    cover.style.display = "block";
    book.style.display = "none";
    navButtons.style.display = "none";
    currentPage = -1;
  }

  function showPage(index) {
    hideAllPages();
    cover.style.display = "none";
    book.style.display = "block";
    pages[index].style.display = "block";
    navButtons.style.display = "flex";
    currentPage = index;
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

  // Initial state
  showCover();
});

