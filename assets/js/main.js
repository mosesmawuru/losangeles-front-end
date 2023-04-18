function onPageLoaded() {
  document.getElementById("tab-background").style.backgroundImage =
    "url('../assets/images/tab1.png')";

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
}

function onTabChange(id) {
  document.getElementById(
    "tab-background"
  ).style.backgroundImage = `url("../assets/images/tab${id}.png")`;
}
