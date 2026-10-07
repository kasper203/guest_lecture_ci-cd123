import "./styles.css";
import { site } from "./content";
import { escape } from "./lib/escape";
import { totalPrice } from "./lib/price";

const app = document.querySelector<HTMLElement>("#app")!;

app.innerHTML = `
  <header>
    <img src="/logo.svg" width="64" height="64" alt="" />
    <p class="host">${escape(site.name)} presents</p>
  </header>
  <h1>${escape(site.event)}</h1>
  <p class="date">${escape(site.date)} ${site.year}</p>
  <form id="order">
    <label>Tickets <input name="quantity" type="number" min="0" max="50" value="1" /></label>
    <label><input name="student" type="checkbox" /> I'm a student</label>
    <p class="total">Total: <output name="total"></output> DKK</p>
  </form>
`;

const form = app.querySelector<HTMLFormElement>("#order")!;
const output = form.querySelector("output")!;

function update() {
  const quantity = Number(form.quantity.value) || 0;
  const student = form.student.checked;
  output.textContent = String(
    totalPrice(site.ticketPrice, { quantity, student }),
  );
}

form.addEventListener("input", update);
update();
