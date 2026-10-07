document.addEventListener("DOMContentLoaded", function () {

    const cover = document.getElementById("transition-cover");

    if (!cover) {
        console.log("Transition cover tidak ditemukan.");
        return;
    }

    /* ===============================
       ANIMASI SAAT WEBSITE DIBUKA
       =============================== */
document.body.classList.add("is-transitioning");
document.body.classList.add("transition-lock");

cover.classList.add("transition-in");

setTimeout(function () {
    cover.classList.remove("transition-in");
    document.body.classList.remove("is-transitioning");
    document.body.classList.remove("transition-lock");
}, 1200);

    /* ===============================
       ANIMASI MENU NAVBAR
       =============================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = this.getAttribute("href");

            if (!target || !target.startsWith("#")) {
                return;
            }

            event.preventDefault();

            document.body.classList.add("is-transitioning");

            cover.classList.remove("transition-in");
            cover.classList.add("transition-out");


            setTimeout(function () {

                const section = document.querySelector(target);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

                cover.classList.remove("transition-out");

                setTimeout(function () {

                    document.body.classList.remove("is-transitioning");

                }, 300);

            }, 650);

        });

    });

});


/* ===============================
   TENTANG PMKRI
   =============================== */

function bukaTentang(id, tombol) {

    const contents =
        document.querySelectorAll(".tentang-content");

    contents.forEach(function (content) {
        content.classList.remove("active");
    });


    const buttons =
        document.querySelectorAll(".tentang-btn");

    buttons.forEach(function (button) {
        button.classList.remove("active");
    });


    const target =
        document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }


    if (tombol) {
        tombol.classList.add("active");
    }

}


/* ===============================
   SALIN ALAMAT
   =============================== */

function salinAlamat() {

    const alamat =
        document.getElementById("alamatPMKRI");

    if (!alamat) {
        return;
    }

    const teks = alamat.innerText.trim();

    navigator.clipboard.writeText(teks)
        .then(function () {

            alert("Alamat berhasil disalin!");

        })
        .catch(function () {

            alert("Alamat gagal disalin.");

        });

}


/* ===============================
   KIRIM KE WHATSAPP
   =============================== */

function kirimWhatsApp() {

    const nama =
        document.getElementById("nama").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const pesan =
        document.getElementById("pesan").value.trim();


    if (nama === "") {
        alert("Silakan masukkan nama.");
        return;
    }

    if (email === "") {
        alert("Silakan masukkan email.");
        return;
    }

    if (pesan === "") {
        alert("Silakan masukkan pesan.");
        return;
    }


    const nomor = "6285185346006";

    const teks =
        "Halo PMKRI Makassar,%0A%0A" +
        "Nama: " + encodeURIComponent(nama) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A%0A" +
        "Pesan:%0A" +
        encodeURIComponent(pesan);


    const url =
        "https://wa.me/" +
        nomor +
        "?text=" +
        teks;


    window.open(url, "_blank");

}
