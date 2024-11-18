const from_firstName = document.querySelector("#from_firstName");
const from_lastName = document.querySelector("#from_lastName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const message = document.querySelector("#message");
const SubmitButton = document.querySelector("#SubmitButton");

const PUBLIC_KEY = "DXvnL86MuPHHeGE8G";
const TEMPLATE_ID = "template_hjg3eqo";
const SERVICE_ID = "service_ytx6zwf";

const messageUser = ({ price, service, name, duration }) =>
  `Name: ${name} \nPrice: ${price} kc \nService: ${service} \nDuration: ${duration} hours`;

const service = JSON.parse(localStorage.getItem("service")) || null;

message.value = service && messageUser(service);

SubmitButton.onclick = (event) => {
  event.preventDefault();
  const data = {
    message: message.value,
    from_firstName: from_firstName.value,
    email: email.value,
    reply_to: email.value,
  };
  emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
};
