import h from "./create-element";

function Counter() {
  const view = h("span", {}, "0");
  // const view = document.createElement("span");
  // view.append("0");
  const button = h("button", { onclick: inc }, "+");
  const inc = () => {
    view.textContent = parseInt(view.textContent) + 1;
  };

  const counter = h("div", {}, view, button);
  return counter;
}

// put the elements onto the page
const app = document.querySelector("#app");
app.append(Counter());
