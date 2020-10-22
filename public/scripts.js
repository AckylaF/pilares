const Mask = {
  getFeedbackDay() {
    let feedbackDay = location.pathname.replace(/[^0-9]+/, "");

    document.querySelector("#feedbackDay").setAttribute("value", feedbackDay);
  },
  // RESOLVER
  showConfirmationMessage(event) {
    document.querySelector(".form__confirmationMessage").classList.remove("form__confirmationMessage--hidden");
  }
}

const Menu = {
  toggleMenu() {
    document.querySelector(".header__menu").classList.toggle("header__menu--hidden");
    document.querySelector(".header__background").classList.toggle("header__background--hidden");
    Menu.changeIcon();
  },
  changeIcon() {
    document.querySelector(".line1").classList.toggle("line1--active");
    document.querySelector(".line2").classList.toggle("line2--active");
    document.querySelector(".line3").classList.toggle("line3--active");
  },
  toggleMobileMenu() {
    if(screen.width < 769){
      document.querySelector(".menu__dropdown").classList.toggle("menu__dropdown--open");
      document.querySelector(".menu__dropdown").classList.toggle("menu__dropdown--closed");
    }
  }
}