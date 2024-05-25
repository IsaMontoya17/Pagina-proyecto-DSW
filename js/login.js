document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form form');
    const registerForm = document.querySelector('.register-form form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.username === username && storedUser.password === password) {
               
                console.log('Inicio de sesión exitoso');
                alert('Inicio de sesión exitoso');
                // Limpiar campos
                document.getElementById('login-username').value = '';
                document.getElementById('login-password').value = '';
            } else {
                
                console.log('Usuario o contraseña incorrectos');
                alert('Usuario o contraseña incorrectos');
            }
        });

       
        const showPasswordCheckbox = document.getElementById('login-show-password');
        if (showPasswordCheckbox) {
            showPasswordCheckbox.addEventListener('change', function() {
                const loginPasswordInput = document.getElementById('login-password');
                if (loginPasswordInput) {
                    const type = this.checked ? 'text' : 'password';
                    loginPasswordInput.type = type;
                }
            });
        }
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
                return;
            }

            
            const newUser = { username, password };
            localStorage.setItem('user', JSON.stringify(newUser));

            alert("¡Registro exitoso!");
            // Limpiar campos
            document.getElementById('register-username').value = '';
            document.getElementById('register-password').value = '';
            document.getElementById('confirm-password').value = '';
        });

       
        const showPasswordCheckbox = document.getElementById('register-show-password');
        if (showPasswordCheckbox) {
            showPasswordCheckbox.addEventListener('change', function() {
                const registerPasswordInput = document.getElementById('register-password');
                const confirmPasswordInput = document.getElementById('confirm-password');
                if (registerPasswordInput) {
                    const type = this.checked ? 'text' : 'password';
                    registerPasswordInput.type = type;
                    confirmPasswordInput.type = type;
                }
            });
        }
    }
});
