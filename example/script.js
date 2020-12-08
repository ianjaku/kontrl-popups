import kontrlPopups, { GenericPopup } from "kontrl-popups";
import "kontrl-popups/style/dist/style.css";

const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", () => {
  const myPopup = new GenericPopup("TestPopup");
  kontrlPopups.showPopup(myPopup)
});
