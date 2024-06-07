// dropdown menu code
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// crousel
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carouselItems = document.querySelector(".crousel-items");
  const carouselItem = document.querySelector(".crousel-item");
  const indicators = document.querySelectorAll(".indicator");


  let activeIndex = 0; 
  prevButton.addEventListener("click", () => {
    carouselItems.scrollBy({ left: -itemWidth, behavior: "smooth" });
    updateCarouselClasses(-1);
    updateIndicators();
  });

  nextButton.addEventListener("click", () => {
    carouselItems.scrollBy({ left: itemWidth, behavior: "smooth" });
    updateCarouselClasses(1);
    updateIndicators();
  });

  function updateCarouselClasses(direction) {
    const items = document.querySelectorAll(".crousel-item");
    items[activeIndex].classList.remove("center-crousel");
    items[activeIndex].querySelector(".crousel-icons").classList.add("hidden");
    items[activeIndex]
      .querySelector(".crousel-text")
      .classList.remove("center-crousel-text");

    activeIndex = (activeIndex + direction + items.length) % items.length;

    items.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add("center-crousel");
        item.querySelector(".crousel-icons").classList.remove("hidden");
        item
          .querySelector(".crousel-text")
          .classList.add("center-crousel-text");
      } else {
        item.classList.remove("center-crousel");
        item.querySelector(".crousel-icons").classList.add("hidden");
        item
          .querySelector(".crousel-text")
          .classList.remove("center-crousel-text");
      }
    });
  }

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === activeIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      const items = document.querySelectorAll(".crousel-item");
      carouselItems.scrollBy({
        left: (index - activeIndex) * itemWidth,
        behavior: "smooth",
      });
      updateCarouselClasses(index - activeIndex);
      updateIndicators();
    });
  });

  updateIndicators();
});
