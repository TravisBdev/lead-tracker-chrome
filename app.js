let myLeads = [];
const inputEl = document.querySelector("#input-el");
const saveBtn = document.querySelector("#input-btn");
const leadsList = document.querySelector("#leads-list");

saveBtn.addEventListener("click", saveLead);

function saveLead() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  for (const lead of myLeads) {
    let newLead = `<li>${lead}</li>`;
    leadsList.innerHTML += newLead;
  }
}
