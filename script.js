function loadImage(event) {
    var image = document.getElementById('image');
    var reader = new FileReader();
    reader.onload = function () {
        image.style.backgroundImage = 'url(' + reader.result + ')';
    }
    reader.readAsDataURL(event.target.files[0]);
}

function download() {
    domtoimage.toBlob(document.getElementsByClassName("card")[0])
        .then(function (blob) {
            window.saveAs(blob, 'card.png');
        });
}