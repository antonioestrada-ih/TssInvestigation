document.getElementById('formatBtn').addEventListener('click', () => {
    const inputBox = document.getElementById('inputBox');
    const statusText = document.getElementById('status');
    const btn = document.getElementById('formatBtn');

    // 1. Get text and replace literal \n with real line breaks
    const rawText = inputBox.value;
    if (!rawText) return; 
    
    const formattedText = rawText.replace(/\[BR\]/g, '\n');

    // 2. Write to clipboard
    navigator.clipboard.writeText(formattedText).then(() => {
        // 3. UI Feedback
        inputBox.value = ''; // Clear the box
        btn.style.display = 'none';
        statusText.style.display = 'block';

        // Reset after 1.5 seconds
        setTimeout(() => {
            btn.style.display = 'block';
            statusText.style.display = 'none';
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        statusText.innerText = "Failed to copy";
        statusText.style.color = "#ef4444";
        statusText.style.display = 'block';
    });
});