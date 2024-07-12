document.addEventListener("DOMContentLoaded", function() {
        var audio = document.getElementById("myAudio");
        var playButton = document.getElementById("playButton");
        var seekBar = document.getElementById("seekBar");
    
playButton.addEventListener("click", function() {
        if (audio.paused) {
        audio.play();
        playButton.textContent = "Duraklat";
        } else {
        audio.pause();
        playButton.textContent = "Oynat";
        }
});

audio.addEventListener("timeupdate", function() {
        seekBar.value = audio.currentTime / audio.duration * 100;
});

seekBar.addEventListener("input", function() {
        var seekTo = audio.duration * (seekBar.value / 100);
        audio.currentTime = seekTo;
        });
});

document.addEventListener("DOMContentLoaded", function() {
        var showImageButton = document.getElementById("showImageButton");
        var imageContainer = document.getElementById("imageContainer");
    
        showImageButton.addEventListener("click", function() {
            // Yeni bir resim elementi oluşturun
            var image = document.createElement("img");
            
            // Resmin yolunu ve diğer özelliklerini ayarlayın
            image.src = "LOREMPSUM.png";
            image.alt = "Gösterilen Resim";
            image.style.maxWidth = "55%";
    
            // Resmi container'a ekleyin
            imageContainer.innerHTML = ""; // Önceki içeriği temizle
            imageContainer.appendChild(image);
        });
});