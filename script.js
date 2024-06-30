let currentPage = 1;

function nextPage() {
    if (currentPage < 4) {
        document.getElementById(`page-${currentPage}`).style.display = 'none';
        currentPage++;
        document.getElementById(`page-${currentPage}`).style.display = 'block';
        updateProgressBar();
    }
}

function prevPage() {
    if (currentPage > 1) {
        document.getElementById(`page-${currentPage}`).style.display = 'none';
        currentPage--;
        document.getElementById(`page-${currentPage}`).style.display = 'block';
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progress = (currentPage - 1) * 25; // Assuming 4 pages
    document.querySelector('.progress-bar-inner').style.width = `${progress}%`;
}

// Add event listeners for option buttons
document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
    });
});

// Initialize the first page
document.getElementById('page-1').style.display = 'block';
updateProgressBar();

// Add event listener for form submission
document.getElementById('about-you-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
