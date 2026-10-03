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