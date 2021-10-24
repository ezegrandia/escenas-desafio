import { insertHeaderComponent } from "./components/header/header";

function main() {
  const headerContainerEl = document.querySelector(".header-comp-container");
  insertHeaderComponent(headerContainerEl);
}

main();
