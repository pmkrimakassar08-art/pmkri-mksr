document.addEventListener("DOMContentLoaded", function () {

    const cover = document.getElementById("transition-cover");

    if (!cover) {
        console.log("Transition cover tidak ditemukan.");
        return;
    }

    let posisiScroll = 0;
    let sedangTransisi = false;

    /* =========================================
       KUNCI HALAMAN
    ========================================= */

    function kunciHalaman(posisi) {

        posisiScroll = posisi !== undefined
            ? posisi
            : window.scrollY;

        document.documentElement.classList.add("transition-lock");
        document.body.classList.add("transition-lock");

        document.body.style.top = `-${posisiScroll}px`;
    }


    /* =========================================
       BUKA KUNCI HALAMAN
    ========================================= */

    function bukaHalaman() {

        document.documentElement.classList.remove("transition-lock");
        document.body.classList.remove("transition-lock");

        document.body.style.top = "";

        window.scrollTo(0, posisiScroll);
    }


    /* =========================================
       ANIMASI SAAT WEBSITE DIBUKA
    ========================================= */

    kunciHalaman(0);
    document.body.classList.add("is-transitioning");
    cover.classList.add("transition-in");

    setTimeout(function () {

        cover.classList.remove("transition-in");

        bukaHalaman();

    }, 1200);


    /* =========================================
       NAVBAR - SATU EVENT SAJA
    ========================================= */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = this.getAttribute("href");

            if (!target || !target.startsWith("#")) {
                return;
            }

            const section = document.querySelector(target);

            if (!section) {
                return;
            }

            event.preventDefault();

            /* Jangan jalankan dua transisi sekaligus */
            if (sedangTransisi) {
                return;
            }

            sedangTransisi = true;
            document.body.classList.add("is-transitioning");


            /* Posisi tujuan */
            const targetY =
                section.getBoundingClientRect().top +
                window.scrollY;


            /* Kunci halaman sekarang */
            kunciHalaman(window.scrollY);


            /* Tutup layar */
            cover.classList.remove("transition-out");
            cover.classList.add("transition-in");


            /*
             * Tunggu sampai layar tertutup penuh.
             * Selama ini halaman TIDAK bergerak.
             */
            setTimeout(function () {

                /*
                 * Buka kunci sebentar,
                 * pindahkan posisi halaman,
                 * lalu kunci lagi di posisi baru.
                 */
                document.documentElement.classList.remove(
                    "transition-lock"
                );

                document.body.classList.remove(
                    "transition-lock"
                );

                document.body.style.top = "";


                /* Matikan smooth scroll sementara */
                const scrollBehavior =
                    document.documentElement.style.scrollBehavior;

                document.documentElement.style.scrollBehavior = "auto";


                /* Pindahkan halaman TANPA animasi */
                window.scrollTo(0, targetY);


                /* Kunci lagi di posisi tujuan */
                kunciHalaman(targetY);


                /* Kembalikan pengaturan scroll */
                document.documentElement.style.scrollBehavior =
                    scrollBehavior;


                /*
                 * Sekarang buka layar
                 */
                setTimeout(function () {

                    cover.classList.remove("transition-in");
                    cover.classList.add("transition-out");


                    /*
                     * Tunggu animasi keluar selesai
                     */
                    setTimeout(function () {

                        cover.classList.remove("transition-out");

                        bukaHalaman();

                        sedangTransisi = false;
                        document.body.classList.remove("is-transitioning");

                    }, 650);

                }, 100);

            }, 600);

        });

    });

    /* =========================================
   PAKSA POSISI SCROLL SAAT TRANSISI
   ========================================= */

window.addEventListener("scroll", function () {

    if (sedangTransisi) {
        window.scrollTo(0, posisiScroll);
    }

});


    /* =========================================
       BLOKIR SCROLL MOUSE
    ========================================= */

    window.addEventListener("wheel", function (event) {

        if (
            document.body.classList.contains(
                "transition-lock"
            )
        ) {
            event.preventDefault();
        }

    }, { passive: false });


    /* =========================================
       BLOKIR TOUCH / SWIPE
    ========================================= */

    window.addEventListener("touchmove", function (event) {

        if (
            document.body.classList.contains(
                "transition-lock"
            )
        ) {
            event.preventDefault();
        }

    }, { passive: false });


    /* =========================================
       BLOKIR KEYBOARD SCROLL
    ========================================= */

    window.addEventListener("keydown", function (event) {

        if (
            !document.body.classList.contains(
                "transition-lock"
            )
        ) {
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

});


/* =========================================
   TENTANG PMKRI
========================================= */

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


/* =========================================
   SALIN ALAMAT
========================================= */

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


/* =========================================
   KIRIM KE WHATSAPP
========================================= */

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
