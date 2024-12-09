// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Modal Functionality
const modal = document.getElementById('feature-modal');
const closeButton = document.querySelector('.close-button');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Feature details (replace with actual feature content)
const featureDetails = {
    "Personalized Diet Plan": "Our AI-driven personalized diet plans are designed to match your goals, preferences, and nutritional needs. Get weekly meal suggestions and grocery lists tailored just for you!",
    "Personalized Workout Plan": "Achieve your fitness targets with custom workout routines created by Gym AI. Tailored to your fitness level, experience, and available equipment.",
    "Effortless Workout Logging": "Easily log your workouts with minimal input. Our system automatically categorizes and tracks your exercises for better insights.",
    "Accurate Rep Counting": "Never lose count again! Our advanced AI uses motion tracking to count your reps with precision.",
    "Calorie Calculation Made Easy": "Stay on top of your calorie game. Our app calculates calorie burn and intake, providing detailed insights and recommendations."
};

// Open modal when 'Learn More' is clicked
document.querySelectorAll('.learn-more').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const featureName = e.target.closest('.feature-card').querySelector('h3').innerText;
        modalTitle.innerText = featureName;
        modalBody.innerHTML = `<p>${featureDetails[featureName]}</p>`;
        modal.style.display = 'block';
    });
});

// Close modal when 'X' is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
