document.addEventListener('DOMContentLoaded', (event) => {
    const textArea = document.getElementById('form-text-area');
    const resetButton = document.getElementById('form-text-area-reset-button');
    const mailInput = document.getElementById('form-email-input');

    textArea.addEventListener('input', (event) => charCounter(event));
    textArea.addEventListener('drop', (event) => event.preventDefault());
    textArea.addEventListener('paste', (event) => event.preventDefault());


    mailInput.addEventListener('input', (event) => {
        const resetButton = document.getElementById('form-text-area-reset-button');

        if (event.target.value != '') {
            resetButton.disabled = false;
        }
    });

    resetButton.addEventListener('click', (event) => {
        document.getElementById('form-text-area-char-counter').innerText = '0/200';
        document.getElementById('form-text-area').value = '';
        document.getElementById('form-email-input').value = '';
        event.target.disabled = true;
    });
});


const charCounter = (event) => {

    if (!event) return;

    const limit = event.target.getAttribute("maxlength");

    const resetbtn = document.getElementById('form-text-area-reset-button');
    resetbtn.disabled = false;

    resetbtn.classList.remove('disabled')

    if (event.target.value.length <= limit) {
        if (event.target.value.length === 0) {
            resetbtn.disabled = true;
            resetbtn.classList.add('disabled')
        }

        const charCounterTextHelper = document.getElementById('form-text-area-char-counter');
        charCounterTextHelper.innerText = `${event.target.value.length}/200`;
    }
    else {
        event.target.value = event.target.value.slice(0, limit);
    }
}