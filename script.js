document.addEventListener('DOMContentLoaded', function(event) {
    var learnMoreButton = document.getElementById('learnMore');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            alert('Thank you for your interest! More information will be available soon.');
        });
    }
});