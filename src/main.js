import { defineCustomElement, defineCustomElement2 } from "./utils";
import "./style.css";
import App from "./App.ce.vue";
import App2 from "./App2.ce.vue";

const app = defineCustomElement(App, { plugins: [] });
const app2 = defineCustomElement2(App2);

customElements.define("wc-app1", app);
customElements.define("wc-app2", app2);
