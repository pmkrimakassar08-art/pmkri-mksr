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
   NAVIGASI 1 SECTION + ANIMASI TRANSISI PMKRI
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const cover = document.getElementById("transition-cover");

  const sectionIds = [
    "beranda",
    "tentang",
    "kegiatan",
    "pengurus",
    "kontak"
  ];

  const sections = sectionIds
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  const navLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  function tampilkanSection(id) {

    sections.forEach(function (section) {
      section.style.display = "none";
    });

    const target = document.getElementById(id);

    if (target) {
      target.style.display = "block";
      window.scrollTo(0, 0);
    }
  }

  function jalankanTransisi(id) {

    const target = document.getElementById(id);

    if (!target) return;

    // Jika tidak ada cover, langsung pindah
    if (!cover) {
      tampilkanSection(id);
      return;
    }

    document.body.classList.add("is-transitioning");

    // Tutup layar dengan animasi
    cover.classList.remove("transition-out");
    cover.classList.add("transition-in");

    setTimeout(function () {

      // Ganti section ketika layar tertutup
      tampilkanSection(id);

      setTimeout(function () {

        // Buka kembali layar
        cover.classList.remove("transition-in");
        cover.classList.add("transition-out");

        setTimeout(function () {

          document.body.classList.remove("is-transitioning");
          cover.classList.remove("transition-out");

        }, 650);

      }, 150);

    }, 550);
  }

  // Tampilan pertama: BERANDA
  tampilkanSection("beranda");

  // Klik menu navigasi
  navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      event.preventDefault();

      const targetId = this.getAttribute("href").replace("#", "");

      if (!sectionIds.includes(targetId)) {
        return;
      }

      // Ubah alamat URL menjadi #tentang, #kegiatan, dll.
      history.pushState(null, "", "#" + targetId);

      jalankanTransisi(targetId);

    });

  });

  // Tombol hero yang menuju section
  const heroLinks = document.querySelectorAll(
    '.hero .button[href^="#"]'
  );

  heroLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      event.preventDefault();

      const targetId = this.getAttribute("href").replace("#", "");

      if (!sectionIds.includes(targetId)) {
        return;
      }

      history.pushState(null, "", "#" + targetId);

      jalankanTransisi(targetId);

    });

  });

  // Tombol Back / Forward browser
  window.addEventListener("popstate", function () {

    const hash = window.location.hash.replace("#", "");

    if (sectionIds.includes(hash)) {
      tampilkanSection(hash);
    } else {
      tampilkanSection("beranda");
    }

  });

});
function salinAlamat() {

  const alamat = document.getElementById("alamatPMKRI");

  if (!alamat) {
    alert("Alamat tidak ditemukan.");
    return;
  }

  /* =========================================
   SALIN ALAMAT PMKRI
   ========================================= */

window.salinAlamat = function () {

  const alamatElement = document.getElementById("alamatPMKRI");

  if (!alamatElement) {
    alert("Alamat PMKRI tidak ditemukan.");
    return;
  }

  const alamat = alamatElement.innerText
    .replace(/\s+/g, " ")
    .trim();

  // Cara utama
  if (navigator.clipboard && window.isSecureContext) {

    navigator.clipboard.writeText(alamat)
      .then(function () {
        alert("Alamat berhasil disalin!");
      })
      .catch(function () {
        salinDenganCaraLama(alamat);
      });

  } else {

    salinDenganCaraLama(alamat);

  }
};


function salinDenganCaraLama(teks) {

  const textarea = document.createElement("textarea");

  textarea.value = teks;

  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";

  document.body.appendChild(textarea);

  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  try {

    const berhasil = document.execCommand("copy");

    if (berhasil) {
      alert("Alamat berhasil disalin!");
    } else {
      alert("Alamat belum berhasil disalin. Silakan coba lagi.");
    }

  } catch (error) {

    alert("Alamat belum berhasil disalin. Silakan coba lagi.");

  }

  document.body.removeChild(textarea);
}
