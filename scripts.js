document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector('.scrolling-image-container img');
    const targetSection = document.querySelector('#work'); // Change to your target section

    function handleScroll() {
        const rect = targetSection.getBoundingClientRect();
        const imageHeight = window.innerHeight;

        if (rect.top < imageHeight && rect.bottom > 0) {
            image.style.animationPlayState = 'paused';
        } else {
            image.style.animationPlayState = 'running';
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});
