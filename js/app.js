const cardProfileShare = () => {
  const button = document.querySelector(".Card-profileShare");

  button.addEventListener("click", () => {
    button.classList.toggle("Card-profileShare--active");
  });
};

cardProfileShare();
