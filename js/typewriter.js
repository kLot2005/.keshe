document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.title');
    const originalText = titleElement.textContent.trim();
    titleElement.textContent = '';

    // Create cursor element
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|';
    titleElement.appendChild(cursor);

    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 150; // ms per char typing
    const deleteSpeed = 100; // ms per char deleting
    const delayAfterType = 2000; // wait before deleting
    const delayAfterDelete = 500; // wait before re-typing

    function type() {
        // Current text content based on index
        const currentText = originalText.substring(0, charIndex);

        // Clear and rebuild content to safely handle text + cursor
        titleElement.innerHTML = '';
        titleElement.textContent = currentText;
        titleElement.appendChild(cursor);

        if (!isDeleting && charIndex < originalText.length) {
            // Typing
            charIndex++;
            setTimeout(type, typeSpeed);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            charIndex--;
            setTimeout(type, deleteSpeed);
        } else if (!isDeleting && charIndex === originalText.length) {
            // Finished typing, wait then delete
            isDeleting = true;
            setTimeout(type, delayAfterType);
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, wait then type
            isDeleting = false;
            setTimeout(type, delayAfterDelete);
        }
    }

    setTimeout(type, 500);
});
