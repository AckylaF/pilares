const Mask = {
  toggleFeedback() {
    const feedbackDays = [6, 11, 16, 21, 26];
    
    feedbackDays.map(day => {
      if(location.pathname === `/discipulado/${day}`) {
        document.querySelector(".feedback").classList.remove("feedback");
      }
    })
  },
  getFeedbackDay() {
    let feedbackDay = location.pathname.replace(/[^0-9]+/, "");

    document.querySelector("#feedbackDay").setAttribute("value", feedbackDay);
  },
  // RESOLVER
  showConfirmationMessage(event) {
    document.querySelector(".form__confirmationMessage").classList.remove("form__confirmationMessage--hidden");
  }
}
document.onload = Mask.toggleFeedback();

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
  }
}

const Home = {
  turnCards() {
    const profile = document.querySelectorAll(".slider__profile:not(:nth-child(3))");
    
    setInterval(() => {
      profile.forEach(card => {
        card.classList.toggle("slider__profile--rotation");
      });
    }, 5000);
  }
}
document.onload = Home.turnCards();