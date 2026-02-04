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

  let currentPage = -1; // -1 = cover

  function showCover() {
    pages.forEach(p => p.style.display = "none");
    book.classList.add("hidden");
    cover.classList.remove("hidden");
    currentPage = -1;
  }

  function showPage(index) {
    pages.forEach(p => p.style.display = "none");
    pages[index].style.display = "block";
    cover.classList.add("hidden");
    book.classList.remove("hidden");
    currentPage = index;
  }

openBtn.addEventListener("click", () => {
  showPage(0);
  document.getElementById("cover-screen").style.display = "none"; // 👈 hides the cover after click
});

  nextBtn.addEventListener("click", () => {
    if (currentPage === pages.length - 1) {
      showCover(); // loop back to cover
    } else {
      showPage(currentPage + 1);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage === 0) {
      showCover(); // back from first page
    } else {
      showPage(currentPage - 1);
    }
  });
});
