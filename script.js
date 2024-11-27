// Hitung mundur
const weddingDate = new Date("October 26, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update elemen HTML (asumsikan Anda memiliki elemen dengan id yang sesuai)
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Hentikan countdown jika sudah mencapai tanggal
    if (distance < 0) {
        clearInterval(countdownFunction);
        // Tampilkan pesan ketika countdown selesai
        document.getElementById("countdown").innerHTML = "Acara telah dimulai!";
    }
}, 1000);
