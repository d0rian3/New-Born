import { sample } from "./sample.js";

const OrderMini = document.querySelector("#OrderMini");
const OrderStandart = document.querySelector("#OrderStandart");
const OrderPremium = document.querySelector("#OrderPremium");

const attrInfo = (el) => el.getAttribute("data-service");
const stringify = (data) => JSON.stringify(data);

OrderMini.onclick = () => {
  const service = attrInfo(OrderMini);
  const data = stringify(sample[service]);
  localStorage.setItem("service", data);
  window.open("/pages/Contact.html", "_self");
};

OrderStandart.onclick = () => {
  const service = attrInfo(OrderStandart);
  const data = stringify(sample[service]);
  localStorage.setItem("service", data);
  window.open("/pages/Contact.html", "_self");
};

OrderPremium.onclick = () => {
  const service = attrInfo(OrderPremium);
  const data = stringify(sample[service]);
  localStorage.setItem("service", data);
  window.open("/pages/Contact.html", "_self");
};
