// 퀵메뉴 start
const sections = document.querySelectorAll("#container > section");
const quickMenus = document.querySelectorAll(".quick-list");

const sectionOffsets = [];
sections.forEach((section) => {
  sectionOffsets.push(section.offsetTop);
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  let activeIndex = 0;
  sectionOffsets.forEach((offset, idx) => {
    if (idx === 0) return;
    if (scrollY >= offset - 200) {
      activeIndex = idx;
    }
  });

  quickMenus.forEach((menu) => {
    menu.classList.remove("active");
  });

  if (activeIndex > 0) {
    quickMenus[activeIndex].classList.add("active");
  }
};
window.addEventListener("scroll", handleScroll);
// 퀵메뉴 end

// tab-section 스와이퍼 start
const tabItems = document.querySelectorAll(".tab-item");
const slideBanners = document.querySelectorAll(".slide-banner-title");
const tabSwiper = new Swiper(".tab-section__panel-con", {
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
