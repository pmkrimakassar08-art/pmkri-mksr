document.addEventListener("DOMContentLoaded", function () {

    const cover = document.getElementById("transition-cover");

    if (!cover) {
        console.log("Transition cover tidak ditemukan.");
        return;
    }

    /* =========================================
       SECTION WEBSITE
    ========================================= */

    const sections = [
        document.getElementById("beranda"),
        document.getElementById("tentang"),
        document.getElementById("kegiatan"),
        document.getElementById("pengurus"),
        document.getElementById("kontak")
    ].filter(Boolean);


    let sectionAktif = 0;
    let sedangTransisi = false;


    /* =========================================
       TENTUKAN SECTION YANG SEDANG AKTIF
    ========================================= */

    function updateSectionAktif() {

        const posisi = window.scrollY + 100;

        sections.forEach(function (section, index) {

            if (
                posisi >= section.offsetTop &&
                posisi < section.offsetTop + section.offsetHeight
            ) {
                sectionAktif = index;
            }

        });

    }


    /* =========================================
       CEK BATAS SECTION
    ========================================= */

    function batasAtas() {

        return sections[sectionAktif].offsetTop;

    }


    function batasBawah() {

        const section = sections[sectionAktif];

        return Math.max(
            section.offsetTop,
            section.offsetTop +
            section.offsetHeight -
            window.innerHeight
        );

    }


    /* =========================================
       BLOKIR SCROLL KELUAR SECTION
    ========================================= */

    window.addEventListener("wheel", function (event) {

        if (sedangTransisi) {
            event.preventDefault();
            return;
        }

        updateSectionAktif();

        const posisi = window.scrollY;

        const atas = batasAtas();
        const bawah = batasBawah();


        /* Scroll ke bawah tetapi sudah di ujung section */
        if (event.deltaY > 0 && posisi >= bawah - 2) {

            window.scrollTo(0, bawah);
            event.preventDefault();
            return;

        }


        /* Scroll ke atas tetapi sudah di ujung atas section */
        if (event.deltaY < 0 && posisi <= atas + 2) {

            window.scrollTo(0, atas);
            event.preventDefault();
            return;

        }

    }, { passive: false });


    /* =========================================
       BLOKIR TOUCH / SWIPE KELUAR SECTION
    ========================================= */

    let posisiTouchAwal = 0;


    window.addEventListener("touchstart", function (event) {

        if (event.touches.length > 0) {
            posisiTouchAwal = event.touches[0].clientY;
        }

    }, { passive: true });


    window.addEventListener("touchmove", function (event) {

        if (sedangTransisi) {
            event.preventDefault();
            return;
        }

        if (event.touches.length === 0) {
            return;
        }

        updateSectionAktif();

        const posisiSekarang =
            event.touches[0].clientY;

        const gerak =
            posisiTouchAwal - posisiSekarang;


        const posisi = window.scrollY;

        const atas = batasAtas();
        const bawah = batasBawah();


        /* Swipe ke atas = scroll ke bawah */
        if (gerak > 0 && posisi >= bawah - 2) {

            event.preventDefault();
            window.scrollTo(0, bawah);
            return;

        }


        /* Swipe ke bawah = scroll ke atas */
        if (gerak < 0 && posisi <= atas + 2) {

            event.preventDefault();
            window.scrollTo(0, atas);
            return;

        }

    }, { passive: false });


    /* =========================================
       BLOKIR KEYBOARD SAAT DI UJUNG SECTION
    ========================================= */

    window.addEventListener("keydown", function (event) {

        if (sedangTransisi) {
            event.preventDefault();
            return;
        }

        updateSectionAktif();

        const posisi = window.scrollY;

        const atas = batasAtas();
        const bawah = batasBawah();


        if (
            event.key === "ArrowDown" ||
            event.key === "PageDown" ||
            event.key === "End" ||
            event.key === " "
        ) {

            if (posisi >= bawah - 2) {
                event.preventDefault();
                window.scrollTo(0, bawah);
            }

        }


        if (
            event.key === "ArrowUp" ||
            event.key === "PageUp" ||
            event.key === "Home"
        ) {

            if (posisi <= atas + 2) {
                event.preventDefault();
                window.scrollTo(0, atas);
            }

        }

    });


    /* =========================================
       PINDAH SECTION MELALUI NAVBAR
    ========================================= */

    const navLinks =
        document.querySelectorAll(".nav-links a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target =
                this.getAttribute("href");


            if (
                !target ||
                !target.startsWith("#")
            ) {
                return;
            }


            const section =
                document.querySelector(target);


            if (!section) {
                return;
            }


            event.preventDefault();


            if (sedangTransisi) {
                return;
            }


            const indexTujuan =
                sections.indexOf(section);


            if (indexTujuan === -1) {
                return;
            }


            sedangTransisi = true;


            /* =================================
               TUTUP LAYAR
            ================================= */

            document.body.classList.add(
                "is-transitioning"
            );


            cover.classList.remove(
                "transition-out"
            );


            cover.classList.add(
                "transition-in"
            );


            /*
             * Tunggu sampai layar merah
             * menutup seluruh halaman.
             */

            setTimeout(function () {

                /*
                 * Pindahkan section
                 * ketika layar sedang tertutup.
                 */

                window.scrollTo({
                    top: section.offsetTop,
                    behavior: "auto"
                });


                sectionAktif =
                    indexTujuan;


                /*
                 * Tunggu sebentar agar posisi
                 * halaman benar-benar berpindah.
                 */

                setTimeout(function () {

                    cover.classList.remove(
                        "transition-in"
                    );


                    cover.classList.add(
                        "transition-out"
                    );


                    /*
                     * Setelah animasi selesai,
                     * scroll kembali normal.
                     */

                    setTimeout(function () {

                        cover.classList.remove(
                            "transition-out"
                        );


                        document.body.classList.remove(
                            "is-transitioning"
                        );


                        sedangTransisi = false;


                    }, 650);


                }, 100);


            }, 600);

        });

    });


    /* =========================================
       ANIMASI SAAT WEBSITE DIBUKA
    ========================================= */

    sectionAktif = 0;

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });


    document.body.classList.add(
        "is-transitioning"
    );


    cover.classList.add(
        "transition-in"
    );


    setTimeout(function () {

        cover.classList.remove(
            "transition-in"
        );


        cover.classList.add(
            "transition-out"
        );


        setTimeout(function () {

            cover.classList.remove(
                "transition-out"
            );


            document.body.classList.remove(
                "is-transitioning"
            );


        }, 650);


    }, 1000);


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
