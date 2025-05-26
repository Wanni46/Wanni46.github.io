document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.cv-forum-form');
    const emailDisplay = document.getElementById('submitted-email');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        if (!name || !email) {
            alert('Please fill in all required fields.');
            return;
        }

        // Show the email address below the form
        emailDisplay.textContent = `pasinduwanninayake218@gmail.com: ${email}`;

        // Optionally, reset the form
        form.reset();
    });
});