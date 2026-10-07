function kirimWhatsApp() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  if (nama.trim() === "") {
    alert("Silakan isi nama terlebih dahulu.");
    return;
  }

  if (pesan.trim() === "") {
    alert("Silakan isi pesan terlebih dahulu.");
    return;
  }

  const nomorWhatsApp = "6285185346006"; // Ganti dengan nomor WhatsApp tujuan

  const isiPesan =
`Halo PMKRI Cabang Makassar 👋

Nama: ${nama}
Email: ${email}

Pesan:
${pesan}`;

  const linkWhatsApp =
    "https://wa.me/" +
    nomorWhatsApp +
    "?text=" +
    encodeURIComponent(isiPesan);

  window.location.href = linkWhatsApp;
}
window.bukaTentang = function(id, tombol) {

  const semuaKonten =
    document.querySelectorAll(".tentang-content");

  semuaKonten.forEach(function(konten) {
    konten.classList.remove("active");
  });


  const semuaTombol =
    document.querySelectorAll(".tentang-btn");

  semuaTombol.forEach(function(btn) {
    btn.classList.remove("active");
  });


  const target =
    document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }

  tombol.classList.add("active");
};
/* =========================================
   ANIMASI TRANSISI PMKRI
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const cover = document.getElementById("transition-cover");

  if (!cover) return;

  const links = document.querySelectorAll(
    '.nav-links a, .hero .button'
  );

  links.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const target = this.getAttribute("href");

      // Hanya animasikan link menuju section website
      if (!target || !target.startsWith("#")) {
        return;
      }

      event.preventDefault();

      const section = document.querySelector(target);

      if (!section) return;

      // Mulai animasi
      document.body.classList.add("is-transitioning");

      cover.classList.remove("transition-out");
      cover.classList.add("transition-in");

      // Setelah layar tertutup
      setTimeout(function () {

        section.scrollIntoView({
          behavior: "instant",
          block: "start"
        });

        // Buka kembali layar
        setTimeout(function () {

          cover.classList.remove("transition-in");
          cover.classList.add("transition-out");

          // Bersihkan setelah animasi selesai
          setTimeout(function () {
            document.body.classList.remove("is-transitioning");
            cover.classList.remove("transition-out");
          }, 650);

        }, 150);

      }, 550);

    });

  });

});
