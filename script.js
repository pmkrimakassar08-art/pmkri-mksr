document.addEventListener("DOMContentLoaded", function () {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const buttons = document.querySelectorAll(".about-btn");
  const panels = document.querySelectorAll(".about-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);

      buttons.forEach((item) => item.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");
      if (target) target.classList.add("active");
    });
  });
});

function salinAlamat() {
  const alamat = document.getElementById("alamatPMKRI");

  if (!alamat) {
    return;
  }

  const text = alamat.innerText.trim();

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Alamat berhasil disalin!"))
      .catch(() => alert("Alamat gagal disalin. Silakan salin secara manual."));
    return;
  }

  alert("Alamat: " + text);
}

function kirimWhatsApp() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !pesan) {
    alert("Silakan isi nama, email, dan pesan terlebih dahulu.");
    return;
  }

  const nomor = "6285185346006";
  const text =
    "Halo PMKRI Makassar,%0A%0A" +
    "Nama: " + encodeURIComponent(nama) + "%0A" +
    "Email: " + encodeURIComponent(email) + "%0A%0A" +
    "Pesan:%0A" +
    encodeURIComponent(pesan);

  window.open("https://wa.me/" + nomor + "?text=" + text, "_blank");
}
