import kontrlPopups, { GenericPopup, InputItem } from "kontrl-popups";
import "kontrl-popups/style/dist/style.css";

const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", () => {
  const myPopup = new GenericPopup({ title: "Create a project" });
  myPopup.addItem(new InputItem({ name: "test", label: "Testttt" }))
  myPopup.addItem(new InputItem({ name: "test2", label: "Test2" }))
  kontrlPopups.showPopup(myPopup).then((data) => {
    console.log("Finished with:", data)
  })
});
