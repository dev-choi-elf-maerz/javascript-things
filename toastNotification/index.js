const toastBox = document.getElementById('toastBox');
const successmessage = '<i class="fa-solid fa-circle-check"></i> Successfully submittd';
const errorMessage = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
const invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!';

function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = message;
    toastBox.appendChild(toast);

    if (message.includes('error')) {
        toast.classList.add('error');
    }
    if (message.includes('invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}