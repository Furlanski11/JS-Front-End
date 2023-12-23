function toggle() {
   const button = document.querySelector("span.button");
   const extraText = document.querySelector("#extra"); 
   if(button.textContent == "Less"){
        button.textContent = "More";
        extraText.style.display = "none";
        return;
    }
    button.textContent = "Less";
    extraText.style.display = "block";

}