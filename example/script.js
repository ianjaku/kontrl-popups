import kontrlPopups, { GenericPopup, InputItem } from "kontrl-popups";
import "kontrl-popups/style/dist/style.css";
import ImageItem from "../dist/generic_popup/ImageItem";

const buttonEl = document.getElementById("button");

const myPopup = new GenericPopup({ title: "Create a project" });
myPopup.addItem(new InputItem({ name: "test", label: "Testttt" }))
myPopup.addItem(new InputItem({ name: "test2", label: "Test2" }))
myPopup.addItem(new ImageItem({ name: "img", label: "My Image", value: "https://picsum.photos/200/300" }));

buttonEl.addEventListener("click", () => {
  kontrlPopups.showPopup(myPopup).then((data) => {
    console.log("Finished with:", data)
  })
});
