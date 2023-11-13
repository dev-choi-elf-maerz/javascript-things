const isEmpty = (input) => {
    if (
         typeof input === "undefined" ||
         input === null ||
         input === "" ||
         input === "null" ||
         input.length === 0 ||
         (typeof input === "object" && !Object.keys(input).length)
        )
    {
        return true;
    }
    else return false;
}

const qrImage = document.getElementById('qrImage');
const qrText = document.getElementById('qrText');
const imageBox = document.getElementById('imageBox');

function generator() {

    if (!isEmpty(qrText.value)) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imageBox.classList.add("show-img");
        return;
    }

    qrText.classList.add('error');
    setTimeout(() => {
        qrText.classList.remove('error');
    }, 1000);

}         