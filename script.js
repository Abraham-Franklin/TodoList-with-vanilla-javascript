// let todoitems = document.querySelector('.todo-items');
let search = document.querySelector('#search');
let addBtn = document.querySelector('.addBtn');
let todoItems = document.querySelector('.todo-items');
let item = document.querySelector('.item');
let inputValue;


window.addEventListener('load', function(e){
    let pen = document.querySelectorAll('.pen');
    let allitems = document.querySelectorAll('.item')

    function AddItem(e) {
        let parent = document.createElement('div')
        parent.classList.add("item", "d-flex");
        let details = document.createElement('div')
        details.classList.add("details", "d-flex");
        let checkbox = document.createElement('input')
        checkbox.setAttribute("type", "checkbox")
        checkbox.classList.add("checkbox");
        let detailsItem = document.createElement('p')
        detailsItem.classList.add("list-item");
        let options = document.createElement('div')
        options.classList.add("optionIcons");
        let grandchild1 = document.createElement('span')
        grandchild1.classList.add("fa", "fa-pen", "text-danger", "pen");
        let grandchild2 = document.createElement('span')
        grandchild2.classList.add("fa", "fa-trash", "text-danger", "trash");
        detailsItem.innerHTML = inputValue;
        options.appendChild(grandchild1);
        options.appendChild(grandchild2);
        details.appendChild(checkbox);
        details.appendChild(detailsItem)
        parent.appendChild(details);
        parent.appendChild(options);
        todoItems.appendChild(parent);
    }

    search.addEventListener('input', function(e){
        inputValue = e.target.value;
    })

    addBtn.addEventListener('click', function(e){
        AddItem()
        inputValue = "";
        console.log(inputValue)
    })
    
    todoItems.addEventListener('click', function(e) {
        if (e.target.classList.contains('trash')) {
            let parentTrash = e.target.parentElement.parentElement;
            if (window.confirm("Are you sure you would like to remove this item?")) {
                todoItems.removeChild(parentTrash);
            }
        }
        else if (e.target.classList.contains('pen')) {
            let editElement = e.target.parentElement.parentElement.querySelector('.list-item');
            editElement.setAttribute('contenteditable', 'true');
            let editedlist = editElement.innerHTML;
            window.addEventListener('keydown', function(e){
                if (e.key == 'Enter'){
                    editElement.setAttribute('contenteditable', 'false');
                }
            })
        }
        else if(e.target.classList.contains('checkbox')) {
            if(e.target.value == 'on'){
                e.target.nextElementSibling.style.textDecoration = 'line-through';
                e.target.nextElementSibling.classList.add('text-muted');
                e.target.value = 'off'
            }
            else{
                e.target.nextElementSibling.style.textDecoration = 'none';
                e.target.nextElementSibling.classList.remove('text-muted');
                e.target.value = 'on';
            }
        }
    });
    todoItems.addEventListener('click', function(e) {
    });


})