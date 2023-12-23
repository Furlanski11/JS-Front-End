function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const items = Array.from(document.querySelectorAll('tbody td'));
      const searchQuery = document.querySelector("#searchField").value;
      const activeRows = Array.from(document.querySelectorAll("tbody tr.select"));

      activeRows.forEach((row) => {
         row.classList.remove("select");
      });

      items.forEach((item) => {
         if(item.textContent.includes(searchQuery)){
            item.parentElement.classList.add("select");
         }
      })
   }
}