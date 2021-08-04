import { Header, Nav, Main, Footer } from "./components";
import * as state from "/Store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": (params) => render(state[capitalize(params.page)]),
    "/": () => render(state.Home),
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();
}

render(state.Home);

function addEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // populating gallery with pictures
  const gallerySection = document.querySelector("#gallery");
  // using modules to populate gallery with pictures
  AddPicturesToGallery(GalleryPictures, gallerySection);

  // handle form submission with PrintFormOnSubmit module
  const form = document.querySelector("form");
  PrintFormOnSubmit(form);
}
