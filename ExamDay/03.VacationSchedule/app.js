window.addEventListener("load", () => {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    const domInputs = { name: document.getElementById("name"), days: document.getElementById("num-days"), date: document.getElementById("from-date") };
    const otherDomElements = { loadVacationsBtn: document.getElementById("load-vacations"), vacationList: document.getElementById("list"), editVacationBtn: document.getElementById("edit-vacation"), addVacationBtn: document.getElementById("add-vacation") };
    let currentId = null;
   
    otherDomElements.loadVacationsBtn.addEventListener("click", loadVacationsHandler);
    otherDomElements.addVacationBtn.addEventListener("click", addVacationHandler);
    otherDomElements.editVacationBtn.addEventListener("click", editVacationHandler);
   
    async function addVacationHandler(e) {
      e.preventDefault();
      if (!fieldsAreFilled(domInputs)) return;
      const res = await fetch(BASE_URL, { method: "POST", body: JSON.stringify({ name: domInputs.name.value, days: domInputs.days.value, date: domInputs.date.value }), headers: { "Content-type": "application/json; charset=UTF-8" } });
      clearInputs(domInputs);
      loadVacationsHandler(e);
    }
   
    async function loadVacationsHandler(e) {
      e.preventDefault();
      const res = await fetch(BASE_URL);
      const data = await res.json();
      renderVacations(data);
    }
   
    function renderVacations(data) {
      otherDomElements.vacationList.innerHTML = "";
      otherDomElements.editVacationBtn.disabled = true;
      for (const vacation of Object.values(data)) {
        const containerDiv = createDomElement("div", otherDomElements.vacationList, null, vacation._id, ["container"]);
        createDomElement("h2", containerDiv, vacation.name);
        createDomElement("h3", containerDiv, vacation.date);
        createDomElement("h3", containerDiv, vacation.days);
        const changeBtn = createDomElement("button", containerDiv, "Change", null, ["change-btn"]);
        const doneBtn = createDomElement("button", containerDiv, "Done", null, ["done-btn"]);
        changeBtn.addEventListener("click", changeVacationHandler);
        doneBtn.addEventListener("click", doneHandler);
      }
    }
   
    function changeVacationHandler(e) {
      const parent = this.parentNode;
      const [name, date, days] = [...parent.children].map(el => el.textContent);
      [domInputs.name.value, domInputs.days.value, domInputs.date.value] = [name, days, date];
      currentId = parent.id;
      parent.remove();
      otherDomElements.addVacationBtn.disabled = true;
      otherDomElements.editVacationBtn.disabled = false;
    }
   
    async function editVacationHandler(e) {
      e.preventDefault();
      const res = await fetch(`${BASE_URL}${currentId}`, { method: "PUT", body: JSON.stringify({ name: domInputs.name.value, days: domInputs.days.value, date: domInputs.date.value, _id: currentId }), headers: { "Content-type": "application/json; charset=UTF-8" } });
      otherDomElements.editVacationBtn.disabled = true;
      otherDomElements.addVacationBtn.disabled = false;
      clearInputs(domInputs);
      loadVacationsHandler(e);
    }
   
    async function doneHandler(e) {
      e.preventDefault();
      const id = this.parentNode.id;
      const res = await fetch(`${BASE_URL}${id}`, { method: "DELETE" });
      loadVacationsHandler(e);
    }
   
    function createDomElement(type, parentNode, content, id, classes) {
      const htmlElement = document.createElement(type);
      if (content) htmlElement.textContent = content;
      if (classes) htmlElement.classList.add(...classes);
      if (id) htmlElement.id = id;
      if (parentNode) parentNode.appendChild(htmlElement);
      return htmlElement;
    }
   
    function clearInputs(inputs) {
      Object.values(inputs).forEach(element => element.value = "");
    }
   
    function fieldsAreFilled(inputArray) {
      return Object.values(inputArray).every(x => x.value !== "");
    }
  });