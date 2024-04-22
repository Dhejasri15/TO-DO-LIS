document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const clearCompletedBtn = document.getElementById('clear-completed-btn');

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display tasks from local storage
    tasks.forEach(task => {
        addTodoItem(task.text, task.completed);
    });

    // Add task
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            input.value = '';
        }
    });

    // Add a task to the list
    function addTodoItem(todoText, completed = false) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="todo-text ${completed ? 'completed' : ''}">${todoText}</span>
            <span class="edit-btn">✏️</span>
            <span class="delete-btn">❌</span>
        `;
        todoList.appendChild(li);
        
        // Toggle completed status
        li.addEventListener('click', function() {
            li.querySelector('.todo-text').classList.toggle('completed');
            updateTasks();
        });
        
        // Edit task
        li.querySelector('.edit-btn').addEventListener('click', function(event) {
            const newText = prompt('Edit task:', todoText);
            if (newText !== null) {
                li.querySelector('.todo-text').textContent = newText;
                updateTasks();
            }
            event.stopPropagation();
        });

        // Delete task
        li.querySelector('.delete-btn').addEventListener('click', function(event) {
            li.remove();
            updateTasks();
            event.stopPropagation();
        });

        if (completed) {
            li.querySelector('.todo-text').classList.add('completed');
        }
        updateTasks();
    }

    // Clear completed tasks
    clearCompletedBtn.addEventListener('click', function() {
        const completedTasks = document.querySelectorAll('.todo-text.completed');
        completedTasks.forEach(task => task.parentElement.remove());
        updateTasks();
    });

    // Update tasks in local storage
    function updateTasks() {
        tasks = [];
        document.querySelectorAll('.todo-text').forEach(todo => {
            tasks.push({
                text: todo.textContent,
                completed: todo.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const clearCompletedBtn = document.getElementById('clear-completed-btn');

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display tasks from local storage
    tasks.forEach(task => {
        addTodoItem(task.text, task.completed);
    });

    // Add task
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            input.value = '';
        }
    });

    // Add a task to the list
    function addTodoItem(todoText, completed = false) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="todo-text ${completed ? 'completed' : ''}">${todoText}</span>
            <span class="edit-btn">✏️</span>
            <span class="delete-btn">❌</span>
        `;
        todoList.appendChild(li);
        
        // Toggle completed status
        li.addEventListener('click', function() {
            li.querySelector('.todo-text').classList.toggle('completed');
            updateTasks();
        });
        
        // Edit task
        li.querySelector('.edit-btn').addEventListener('click', function(event) {
            const newText = prompt('Edit task:', todoText);
            if (newText !== null) {
                li.querySelector('.todo-text').textContent = newText;
                updateTasks();
            }
            event.stopPropagation();
        });

        // Delete task
        li.querySelector('.delete-btn').addEventListener('click', function(event) {
            li.remove();
            updateTasks();
            event.stopPropagation();
        });

        if (completed) {
            li.querySelector('.todo-text').classList.add('completed');
        }
        updateTasks();
    }

    // Clear completed tasks
    clearCompletedBtn.addEventListener('click', function() {
        const completedTasks = document.querySelectorAll('.todo-text.completed');
        completedTasks.forEach(task => task.parentElement.remove());
        updateTasks();
    });

    // Update tasks in local storage
    function updateTasks() {
        tasks = [];
        document.querySelectorAll('.todo-text').forEach(todo => {
            tasks.push({
                text: todo.textContent,
                completed: todo.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
