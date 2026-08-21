// 퀵메뉴 start
const sections = document.querySelectorAll("section:not(.hero-section)");
const quickMenus = document.querySelectorAll(".quick-list:not(.top-btn)");

const sectionOffsets = [];
sections.forEach((section) => {
  sectionOffsets.push(section.offsetTop);
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  let activeIndex = -1;
  sectionOffsets.forEach((offset, idx) => {
    if (scrollY >= offset - 200) {
      activeIndex = idx;
    }
  });

  console.log("scrollY:", scrollY, "activeIndex:", activeIndex);

  quickMenus.forEach((menu) => {
    menu.classList.remove("active");
  });

  if (activeIndex >= 0) {
    quickMenus[activeIndex].classList.add("active");
  }
};

window.addEventListener("scroll", handleScroll);
// 퀵메뉴 end

// TOP 버튼 start
const topBtn = document.querySelector(".top-btn");

topBtn.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
  });
});
// TOP 버튼 end

// form-section 모션 start
const formSection = document.querySelector(".form-section");
const motionImgs = document.querySelectorAll(".motion-img");

const handleFormMotion = () => {
  const scrollY = window.scrollY;
  const triggerPoint = formSection.offsetTop;

  if (scrollY >= triggerPoint) {
    motionImgs.forEach((img) => {
      img.classList.add("visible");
    });
  }
};

window.addEventListener("scroll", handleFormMotion);
// form-section 모션 end

// promo-section 비디오 재생 start
const video = document.querySelector(".video video");
const playBtn = document.querySelector(".video .btn-play");

playBtn.addEventListener("click", () => {
  video.play();
  video.setAttribute("controls", "");
  playBtn.classList.add("hide");
});

video.addEventListener("play", () => {
  playBtn.classList.add("hide");
});

video.addEventListener("pause", () => {
  playBtn.classList.remove("hide");
});

video.addEventListener("ended", () => {
  playBtn.classList.remove("hide");
});
// promo-section 비디오 재생 end

// tab-section 스와이퍼 start
const tabItems = document.querySelectorAll(".tab-item");
const slideBanners = document.querySelectorAll(".slide-banner-title");
const tabSwiper = new Swiper(".panel-con", {
  slidesPerView: "auto",
  navigation: {
    prevEl: ".swiper-arrow.prev",
    nextEl: ".swiper-arrow.next",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      tabItems.forEach((el) => el.classList.remove("active"));
      tabItems[this.realIndex].classList.add("active");

      slideBanners.forEach((el) => el.classList.remove("active"));
      slideBanners[this.realIndex].classList.add("active");
    },
  },
});

// 페이지 진입, 새로고침 시 랜덤 active
const randomIndex = Math.floor(Math.random() * tabItems.length);
tabItems[randomIndex].classList.add("active");
slideBanners[randomIndex].classList.add("active");
tabSwiper.slideToLoop(randomIndex);

// tab버튼 클릭 시
tabItems.forEach((item, idx) => {
  const btn = item.querySelector(".tab-btn");
  btn.addEventListener("click", () => {
    tabSwiper.slideToLoop(idx);
  });
});
// tab-section 스와이퍼 end
