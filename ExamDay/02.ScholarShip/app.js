window.addEventListener("load", solve);

function solve() {
    const buttonNextElement = document.getElementById("next-btn");
    buttonNextElement.addEventListener("click", () => {
      const nameElement = document.getElementById("student");
      let name = nameElement.value;
      const universityElement = document.getElementById("university");
      let university = universityElement.value;
      const scoreElement = document.getElementById("score");
      let score = scoreElement.value;
      if(!name || !university || !score){
        return;
      }

      const previewList = document.getElementById("preview-list");
      buttonNextElement.disabled = "true";

      const listElement = document.createElement("li");
      listElement.className = "application";
      const articleElement = document.createElement("article");

      const h4Element = document.createElement('h4');
      h4Element.textContent = name;

      const uniPara = document.createElement('p');
      uniPara.textContent = `University: ${university}`;

      const scorePara = document.createElement('p');
      scorePara.textContent = `Score: ${score}`;

      const editButton = document.createElement('button');
      editButton.className = "action-btn edit";
      editButton.textContent = "edit";

      const applyButton = document.createElement('button');
      applyButton.className = "action-btn apply";
      applyButton.textContent = "apply";

      articleElement.appendChild(h4Element);
      articleElement.appendChild(uniPara);
      articleElement.appendChild(scorePara);

      listElement.appendChild(articleElement);
      listElement.appendChild(editButton);
      listElement.appendChild(applyButton);

      previewList.appendChild(listElement);
      nameElement.value = "";
      universityElement.value = "";
      scoreElement.value = "";

      editButton.addEventListener('click', () => {
        buttonNextElement.disabled = "";
        nameElement.value = name;
        universityElement.value = university;
        scoreElement.value = score;
        listElement.remove();
      })

      applyButton.addEventListener("click", () => {
        const candidatesList = document.getElementById("candidates-list");
        candidatesList.appendChild(listElement);
        listElement.removeChild(applyButton);
        listElement.removeChild(editButton);
        buttonNextElement.disabled = "";
      })

    })
  }
  