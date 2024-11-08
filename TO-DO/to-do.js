// Secure state management
const todoState = {
    todos: [],
    nextId: 1
};

// Input validation function
function validateInput(input) {
    // Remove any HTML tags and trim whitespace
    const sanitized = input.replace(/<[^>]*>/g, '').trim();
    
    // Check for empty or too long input
    if (sanitized.length === 0) return { valid: false, message: "Task cannot be empty" };
    if (sanitized.length > 100) return { valid: false, message: "Task is too long (max 100 characters)" };
    
    return { valid: true, sanitized };
}

// Error handling function
function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.className = 'error';
    setTimeout(() => {
        errorDiv.textContent = '';
        errorDiv.className = '';
    }, 3000);
}

// Render function
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear current list

    for (let todo of todoState.todos) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => handleAction('toggle', todo.id);
        
        // Create text span
        const span = document.createElement('span');
        span.textContent = todo.text;
        if (todo.completed) span.className = 'completed';
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.onclick = () => handleAction('delete', todo.id);
        
        // Append elements
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
}

// Main action handler
function handleAction(action, id) {
    switch (action) {
        case 'add':
            const input = document.getElementById('todo-input');
            const validation = validateInput(input.value);
            
            if (!validation.valid) {
                showError(validation.message);
                return;
            }
            
            todoState.todos.push({
                id: todoState.nextId++,
                text: validation.sanitized,
                completed: false
            });
            input.value = ''; // Clear input
            break;
            
        case 'delete':
            todoState.todos = todoState.todos.filter(todo => todo.id !== id);
            break;
            
        case 'toggle':
            for (let todo of todoState.todos) {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    break;
                }
            }
            break;
            
        default:
            console.error('Invalid action');
            return;
    }
    
    // After any action, re-render the list
    renderTodos();
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Add enter key listener
    document.getElementById('todo-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAction('add');
        }
    });
    
    // Initial render
    renderTodos();
});
