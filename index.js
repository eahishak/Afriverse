const loginButton = document.querySelector('.login');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');

loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Task 8: Close the login form when clicking outside of it
loginModal.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});


