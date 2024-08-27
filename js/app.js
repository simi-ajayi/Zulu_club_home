// Get ready to become a Fashion Brand overnight

// const Retailers = document.querySelector(".brand-subtext span:nth-child(1)");
// const Wholesalers = document.querySelector(".brand-subtext span:nth-child(2)");
// const Manufacturers = document.querySelector(
//   ".brand-subtext span:nth-child(3)"
// );
// const Brands = document.querySelector(".brand-subtext span:nth-child(4)");
// const Partners = document.querySelector(".brand-subtext span:nth-child(5)");
// const DefaultFAQ = document.querySelector("#Default-FAQ");
// const FAQ1 = document.querySelector("#FAQ1");
// const FAQ2 = document.querySelector("#FAQ2");
// const FAQ3 = document.querySelector("#FAQ3");
// const FAQ4 = document.querySelector("#FAQ4");
// const FAQ5 = document.querySelector("#FAQ5");

// Retailers.addEventListener("click", () => {
//   Retailers.classList.add("active");
//   Wholesalers.classList.remove("active");
//   Manufacturers.classList.remove("active");
//   Brands.classList.remove("active");
//   Partners.classList.remove("active");
//   FAQ1.classList.remove("d-none");
//   FAQ2.classList.add("d-none");
//   FAQ3.classList.add("d-none");
//   FAQ4.classList.add("d-none");
//   FAQ5.classList.add("d-none");
//   DefaultFAQ.classList.add("d-none");
// });

// Wholesalers.addEventListener("click", () => {
//   Wholesalers.classList.add("active");
//   Retailers.classList.remove("active");
//   Manufacturers.classList.remove("active");
//   Brands.classList.remove("active");
//   Partners.classList.remove("active");
//   FAQ1.classList.add("d-none");
//   FAQ2.classList.remove("d-none");
//   FAQ3.classList.add("d-none");
//   FAQ4.classList.add("d-none");
//   FAQ5.classList.add("d-none");
//   DefaultFAQ.classList.add("d-none");
// });

// Manufacturers.addEventListener("click", () => {
//   Wholesalers.classList.remove("active");
//   Retailers.classList.remove("active");
//   Manufacturers.classList.add("active");
//   Brands.classList.remove("active");
//   Partners.classList.remove("active");
//   FAQ1.classList.add("d-none");
//   FAQ2.classList.add("d-none");
//   FAQ3.classList.remove("d-none");
//   FAQ4.classList.add("d-none");
//   FAQ5.classList.add("d-none");
//   DefaultFAQ.classList.add("d-none");
// });
// Brands.addEventListener("click", () => {
//   Wholesalers.classList.remove("active");
//   Retailers.classList.remove("active");
//   Manufacturers.classList.remove("active");
//   Brands.classList.add("active");
//   Partners.classList.remove("active");
//   FAQ1.classList.add("d-none");
//   FAQ2.classList.add("d-none");
//   FAQ3.classList.add("d-none");
//   FAQ4.classList.remove("d-none");
//   FAQ5.classList.add("d-none");
//   DefaultFAQ.classList.add("d-none");
// });
// Partners.addEventListener("click", () => {
//   Wholesalers.classList.remove("active");
//   Retailers.classList.remove("active");
//   Manufacturers.classList.remove("active");
//   Brands.classList.remove("active");
//   Partners.classList.add("active");
//   FAQ1.classList.add("d-none");
//   FAQ2.classList.add("d-none");
//   FAQ3.classList.add("d-none");
//   FAQ4.classList.add("d-none");
//   FAQ5.classList.remove("d-none");
//   DefaultFAQ.classList.add("d-none");
// });

const elements = {
  Retailers: document.querySelector(".brand-subtext span:nth-child(1)"),
  Wholesalers: document.querySelector(".brand-subtext span:nth-child(2)"),
  Manufacturers: document.querySelector(".brand-subtext span:nth-child(3)"),
  Brands: document.querySelector(".brand-subtext span:nth-child(4)"),
  Partners: document.querySelector(".brand-subtext span:nth-child(5)"),
};

const faqs = {
  Retailers: document.querySelector("#FAQ1"),
  Wholesalers: document.querySelector("#FAQ2"),
  Manufacturers: document.querySelector("#FAQ3"),
  Brands: document.querySelector("#FAQ4"),
  Partners: document.querySelector("#FAQ5"),
  Default: document.querySelector("#Default-FAQ"),
};

const handleClick = (activeKey) => {
  Object.keys(elements).forEach((key) => {
    elements[key].classList.toggle("active", key === activeKey);
    faqs[key].classList.toggle("d-none", key !== activeKey);
  });
  faqs.Default.classList.add("d-none");
};

Object.keys(elements).forEach((key) => {
  elements[key].addEventListener("click", () => handleClick(key));
});

//  onclick div scale decrease
function scaleDiv(element) {
  element.style.transform = "scale(0.9)";
  element.style.transition="all .2s"

  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 150); 
}

// On submit button App is downloade

document.getElementById("Popup").addEventListener("submit", function (event) {
  event.preventDefault();
  // window.location.href = 'https://zulushop.in/seller/login';
  // window.open("https://zulushop.in/seller/login", "_blank");
  document.getElementById("downloadApkLink").click();
  closeForm();
});

function openForm() {
  document.getElementById("Popup").style.display = "block";
}

function closeForm() {
  document.getElementById("Popup").style.display = "none";
}
