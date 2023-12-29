window.addEventListener("load", solve);

function solve() {

    const publishButton = document.querySelector("#publish-btn");
    
    publishButton.addEventListener('click', (e) => {
     
    const taskTitle = document.querySelector("#task-title");
    const taskCategory = document.querySelector("#task-category");
    const taskContent = document.querySelector("#task-content");

    const title = taskTitle.value;
    const category = taskCategory.value;
    const content = taskContent.value;

    if(!title || !category || !content){
        return;
    }    
        const reviewList = document.querySelector("#review-list");
    
        const listItem = document.createElement('li');
    
        listItem.className = "rpost";
    
        const articleItem = document.createElement("article");
    
        const headerElement = document.createElement("h4");
    
        headerElement.textContent = title;
    
        articleItem.appendChild(headerElement);
    
        const categoryParagraph = document.createElement('p');
        categoryParagraph.textContent = `Category: ${category}`;
        articleItem.appendChild(categoryParagraph);

        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = `Content: ${content}`;
        articleItem.appendChild(contentParagraph);

        listItem.appendChild(articleItem);

        const editButton = document.createElement("button");
        editButton.className = "action-btn edit";
        editButton.textContent = 'Edit';
        listItem.appendChild(editButton);

        const postButton = document.createElement('button');
        postButton.className = "action-btn post";
        postButton.textContent = 'Post';
        listItem.appendChild(postButton);

        reviewList.appendChild(listItem);

        
        taskTitle.value = "";
    
        taskContent.value = "";
    
        taskCategory.value = "";

        editButton.addEventListener('click', () => {
            taskTitle.value = title;
            taskContent.value = content;
            taskCategory.value = category;

            listItem.remove();
        })

        postButton.addEventListener('click', () => {
            const publishedList = document.querySelector('#published-list');
            publishedList.appendChild(listItem);
            listItem.removeChild(editButton);
            listItem.removeChild(postButton);
        })
    })
}