document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      tabButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
      tabPanels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === target);
      });
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }
});

function salinAlamat() {
  const alamat = document.getElementById("alamatPMKRI");
  if (!alamat) return;

  const nilai = alamat.innerText.trim();
  navigator.clipboard
    .writeText(nilai)
    .then(() => alert("Alamat berhasil disalin!"))
    .catch(() => alert("Alamat gagal disalin."));
}

function kirimWhatsApp() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama) {
    alert("Silakan masukkan nama.");
    return;
  }

  if (!email) {
    alert("Silakan masukkan email.");
    return;
  }

  if (!pesan) {
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

  window.open("https://wa.me/" + nomor + "?text=" + teks, "_blank");
}

