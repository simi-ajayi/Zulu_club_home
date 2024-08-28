// Get ready to become a Fashion Brand overnight

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
  console.log(activeKey);
  Object.keys(elements).forEach((key) => {
    console.log("5656",key)
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
