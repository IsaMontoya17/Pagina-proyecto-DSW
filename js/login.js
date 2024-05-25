document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form form');
    const registerForm = document.querySelector('.register-form form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            // Comprobar si el usuario está registrado en el localStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.username === username && storedUser.password === password) {
                // Usuario autenticado
                console.log('Inicio de sesión exitoso');
                alert('Inicio de sesión exitoso');
                // Limpiar campos
                document.getElementById('login-username').value = '';
                document.getElementById('login-password').value = '';
            } else {
                // Usuario no autenticado
                console.log('Usuario o contraseña incorrectos');
                alert('Usuario o contraseña incorrectos');
            }
        });

        // Manejar el evento del botón "Mostrar contraseña" para inicio de sesión
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

            // Verificar si las contraseñas coinciden
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
                return;
            }

            // Guardar el usuario en el localStorage
            const newUser = { username, password };
            localStorage.setItem('user', JSON.stringify(newUser));

            alert("¡Registro exitoso!");
            // Limpiar campos
            document.getElementById('register-username').value = '';
            document.getElementById('register-password').value = '';
            document.getElementById('confirm-password').value = '';
        });

        // Manejar el evento del botón "Mostrar contraseña" para registro
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
