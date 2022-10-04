let myLeads = [];
const inputEl = document.querySelector("#input-el");
const saveBtn = document.querySelector("#input-btn");
const leadsList = document.querySelector("#leads-list");

saveBtn.addEventListener("click", saveLead);

function saveLead() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  let listItems = "";
  for (let lead of myLeads) {
    let newLead = `<li><a target = '_blank' href='${lead}'>${lead}</a></li>`;
    listItems += newLead;
  }
  leadsList.innerHTML = listItems;
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  console.log(localStorage.getItem("myLeads"));
}
