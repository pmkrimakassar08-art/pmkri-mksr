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

    /* =========================================
   TRANSISI NAVBAR PMKRI
   ========================================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = this.getAttribute("href");

        // Hanya untuk link menuju section dalam halaman
        if (!target || !target.startsWith("#")) {
            return;
        }

        event.preventDefault();

        const section = document.querySelector(target);

        if (!section) {
            return;
        }

        // Kunci halaman
        document.body.classList.add("is-transitioning");
        document.body.classList.add("transition-lock");

        // Tutup layar dengan animasi
        cover.classList.remove("transition-out");
        cover.classList.add("transition-in");


        /*
         * TUNGGU SAMPAI LAYAR BENAR-BENAR
         * MENUTUP HALAMAN
         */
        setTimeout(function () {

            // Pindahkan halaman SAAT masih tertutup
            section.scrollIntoView({
                behavior: "auto",
                block: "start"
            });

            // Pastikan posisi sudah berpindah
            window.scrollTo({
                top: section.offsetTop,
                behavior: "auto"
            });


            /*
             * Setelah halaman berpindah,
             * baru buka layar transisi.
             */
            setTimeout(function () {

                cover.classList.remove("transition-in");
                cover.classList.add("transition-out");


                // Tunggu animasi membuka selesai
                setTimeout(function () {

                    cover.classList.remove("transition-out");

                    document.body.classList.remove(
                        "is-transitioning"
                    );

                    document.body.classList.remove(
                        "transition-lock"
                    );

                }, 650);

            }, 150);

        }, 550);

    });

});
        link.addEventListener("click", function (event) {

            const target = this.getAttribute("href");

            if (!target || !target.startsWith("#")) {
                return;
            }

            event.preventDefault();
document.body.classList.add("is-transitioning");
document.body.classList.add("transition-lock");

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
document.body.classList.remove("transition-lock");
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

/* =========================================
   KUNCI TOTAL SCROLL SAAT TRANSISI
   ========================================= */

let posisiScroll = 0;

function kunciHalaman() {
    posisiScroll = window.scrollY;

    document.documentElement.classList.add("transition-lock");
    document.body.classList.add("transition-lock");

    document.body.style.top = `-${posisiScroll}px`;
}

function bukaHalaman() {
    document.documentElement.classList.remove("transition-lock");
    document.body.classList.remove("transition-lock");

    document.body.style.top = "";

    window.scrollTo(0, posisiScroll);
}


/* BLOKIR SCROLL MOUSE */
window.addEventListener("wheel", function (event) {

    if (document.body.classList.contains("transition-lock")) {
        event.preventDefault();
    }

}, { passive: false });


/* BLOKIR TOUCH / SWIPE */
window.addEventListener("touchmove", function (event) {

    if (document.body.classList.contains("transition-lock")) {
        event.preventDefault();
    }

}, { passive: false });


/* BLOKIR TOMBOL KEYBOARD UNTUK SCROLL */
window.addEventListener("keydown", function (event) {

    if (!document.body.classList.contains("transition-lock")) {
        return;
    }

    const tombolScroll = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
        "Spacebar"
    ];

    if (tombolScroll.includes(event.key)) {
        event.preventDefault();
    }

});
