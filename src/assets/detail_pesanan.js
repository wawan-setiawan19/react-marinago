const btnAction = document.querySelectorAll('.view-btn');

btnAction.forEach(element => {
    element.addEventListener("click", () => {
        // Get the parent container of the clicked button
        const container = element.parentNode;

        // Loop through all buttons in the same container
        container.querySelectorAll('.view-btn').forEach(btn => {
            // Add 'disable' class to all buttons except the clicked one
            if (btn !== element) {
                btn.classList.add('disable');
            } else {
                // Remove 'disable' class from the clicked button
                btn.classList.remove('disable');
            }
        });
    });
});
