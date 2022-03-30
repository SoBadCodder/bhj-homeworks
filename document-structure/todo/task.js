const tasksList = document.querySelector('#tasks__list');
const tasksForm = document.querySelector('.tasks__control');

tasksForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (tasksForm.children[0].value != '') {
        tasksList.insertAdjacentHTML('beforeend',
            `<div class="task">
            <div class="task__title">
            ${tasksForm.children[0].value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
        tasksForm.children[0].value = '';
    }
    tasksList.lastChild.addEventListener("click", function (event) {
        this.closest(".task").remove();
    });
});