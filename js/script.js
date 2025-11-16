// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // 1. Dapatkan elemen formulir utama
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form dari pengiriman standar
            
            // Menggunakan 'username' dan ID yang sesuai dengan modifikasi HTML
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const keepLoggedIn = document.getElementById('keepLoggedIn') ? document.getElementById('keepLoggedIn').checked : false;
            
            // Validasi dasar
            if (username && password) {
                console.log('Login attempt:', { username, passwordLength: password.length, keepLoggedIn: keepLoggedIn });
               
                // Simulasi redirect setelah login berhasil
                window.location.href = 'dashboard.html';
            } else {
                alert('Silakan masukkan Username dan Password Anda.');
            }
        });
    }

    // --- Social Login Button Handlers ---
    
    // Perhatikan: Elemen ini TIDAK ADA dalam HTML yang saya sediakan 
    // di respons sebelumnya karena tidak ada di gambar. 
    // Kode ini berfungsi jika Anda MENGEMBALIKAN elemen social login ke HTML Anda.
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');

    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            console.log('Redirecting to Google Sign-In...');
            
            // Redirect ke halaman login Google
            window.location.href = 'https://accounts.google.com/v3/signin/identifier?flowName=GlifWebSignIn&flowEntry=AddSession';
            
        });
    }

    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            console.log('Redirecting to Facebook Login...');
            
            // Redirect ke halaman login Facebook
            window.location.href = 'https://www.facebook.com/login/';

        });
    }
});