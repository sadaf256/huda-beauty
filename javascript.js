document.addEventListener('DOMContentLoaded', function() {
    // Product Filter
    const filterButtons = document.querySelectorAll('.product-filter button');
    const products = document.querySelectorAll('.product');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            products.forEach(product => {
                if (filter === 'all' || product.dataset.category === filter) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.createElement('p');
    const emailError = document.createElement('p');
    const messageError = document.createElement('p');

    nameError.classList.add('error-message');
    emailError.classList.add('error-message');
    messageError.classList.add('error-message');

    nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
    emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);
    messageInput.parentNode.insertBefore(messageError, messageInput.nextSibling);

    contactForm.addEventListener('submit', function(event) {
        let isValid = true;

        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (!messageInput.value.trim()) {
            messageError.textContent = 'Message is required.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });

    // Self-Correcting Quiz
    const quizSection = document.getElementById('quiz'); // Assuming you add a quiz section to the HTML
    if (quizSection) {
        const quizForm = document.getElementById('quizForm');
        const resultsDiv = document.createElement('div');
        resultsDiv.id = 'quizResults';
        quizSection.appendChild(resultsDiv);

        quizForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const q1Answer = document.querySelector('input[name="q1"]:checked');
            const q2Answer = document.querySelector('input[name="q2"]:checked');

            let score = 0;
            if (q1Answer && q1Answer.value === 'a') score++;
            if (q2Answer && q2Answer.value === 'b') score++;

            resultsDiv.textContent = `You scored ${score} out of 2.`;
        });
    }

    //Video and audio control.
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');

    if (video) {
        video.addEventListener('ended', function() {
            console.log("video ended");
        });
    }

    if (audio) {
        audio.addEventListener('play', function() {
            console.log("audio playing");
        });
    }
});