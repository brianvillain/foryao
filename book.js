document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("open-book-btn");
  const cover = document.getElementById("cover-screen");
  const book = document.getElementById("book");

  const pages = document.querySelectorAll(".page");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  let currentPage = 0;

  openBtn.addEventListener("click", () => {
    cover.classList.add("hidden");
    book.classList.remove("hidden");
    pages[0].style.display = "block";
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      pages[currentPage].style.display = "none";
      currentPage++;
      pages[currentPage].style.display = "block";
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      pages[currentPage].style.display = "none";
      currentPage--;
      pages[currentPage].style.display = "block";
    }
  });
});
