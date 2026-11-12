"use strict";

document.documentElement.classList.add("has-js");

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navContent = document.getElementById("navigasi");
const navLinks = [...navContent.querySelectorAll(".nav-links a")];
const navSections = navLinks.map((link) => document.getElementById(link.hash.slice(1)));
const narrowScreen = window.matchMedia("(max-width: 790px)");

function setMenuOpen(open) {
  navToggle.setAttribute("aria-expanded", String(open));
}

navToggle.hidden = false;
navToggle.addEventListener("click", () => {
  setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
});
navLinks.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));
narrowScreen.addEventListener("change", () => setMenuOpen(false));

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && narrowScreen.matches && navToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    navToggle.focus();
  }
});

const tabList = document.querySelector("[data-about-tabs]");
const tabs = [...tabList.querySelectorAll("button")];
const panels = tabs.map((tab) => document.getElementById(tab.dataset.panel));

tabList.setAttribute("role", "tablist");
function updateTabOrientation() {
  tabList.setAttribute("aria-orientation", narrowScreen.matches ? "horizontal" : "vertical");
}
updateTabOrientation();
narrowScreen.addEventListener("change", updateTabOrientation);

tabs.forEach((tab, index) => {
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-controls", panels[index].id);
  panels[index].setAttribute("role", "tabpanel");
  panels[index].setAttribute("aria-labelledby", tab.id);
  panels[index].tabIndex = 0;
  tab.addEventListener("click", () => activateTab(index));
});

function activateTab(selected) {
  tabs.forEach((tab, index) => {
    const active = selected === index;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    panels[index].hidden = !active;
  });
}

tabList.addEventListener("keydown", (event) => {
  const current = tabs.indexOf(event.target);
  if (current < 0) return;
  let next;
  switch (event.key) {
    case "ArrowRight":
    case "ArrowDown": next = (current + 1) % tabs.length; break;
    case "ArrowLeft":
    case "ArrowUp": next = (current + tabs.length - 1) % tabs.length; break;
    case "Home": next = 0; break;
    case "End": next = tabs.length - 1; break;
    default: return;
  }
  event.preventDefault();
  activateTab(next);
  tabs[next].focus();
});

function showPage(moveFocus = false) {
  const requested = location.hash.slice(1) || "beranda";
  const panelIndex = panels.findIndex((panel) => panel.id === requested);
  const pageId = panelIndex >= 0 ? "tentang" : requested;
  const page = navSections.find((section) => section.id === pageId) || navSections[0];

  navSections.forEach((section) => { section.hidden = section !== page; });
  navLinks.forEach((link) => {
    if (link.hash === "#" + page.id) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (panelIndex >= 0) activateTab(panelIndex);
  setMenuOpen(false);
  window.scrollTo({ top: 0, behavior: "instant" });
  if (moveFocus) {
    const heading = page.querySelector("h1, h2");
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const destination = link.getAttribute("href");
  if (destination === "#konten") {
    event.preventDefault();
    document.getElementById("konten").focus();
    return;
  }
  if (!navSections.some((section) => destination === "#" + section.id) &&
      !panels.some((panel) => destination === "#" + panel.id)) return;
  event.preventDefault();
  if (location.hash !== destination) history.pushState(null, "", destination);
  showPage(true);
});

activateTab(0);
tabList.hidden = false;
showPage();
window.addEventListener("hashchange", () => showPage(true));
window.addEventListener("popstate", () => showPage(true));

const boardSearch = document.getElementById("cari-pengurus");
const boardCards = [...document.querySelectorAll(".board-card")].map((card) => ({
  card,
  text: card.querySelector("div").textContent.toLocaleLowerCase("id"),
}));
const emptyBoard = document.querySelector("[data-board-empty]");
const boardStatus = document.querySelector("[data-board-status]");
document.querySelector("[data-board-filter]").hidden = false;
boardSearch.addEventListener("input", () => {
  const search = boardSearch.value.trim().toLocaleLowerCase("id");
  const words = search ? search.split(/\s+/) : [];
  let count = 0;
  boardCards.forEach(({ card, text }) => {
    const visible = words.every((word) => text.includes(word));
    card.hidden = !visible;
    if (visible) count += 1;
  });
  emptyBoard.hidden = count > 0;
  boardStatus.textContent = search ? count + " pengurus ditemukan." : "";
});

const copyAddress = document.querySelector("[data-copy-address]");
const address = document.getElementById("alamatPMKRI");
const copyStatus = document.querySelector("[data-copy-status]");
copyAddress.hidden = false;
copyAddress.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(address.textContent.trim());
    copyStatus.textContent = "Alamat berhasil disalin.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(address);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "Alamat dipilih. Gunakan perintah Salin di perangkat Anda.";
  }
});

const messageForm = document.getElementById("form-pesan");
const messageStatus = document.querySelector("[data-message-status]");
const followupLink = document.querySelector("[data-whatsapp-followup]");
const whatsappLink = document.getElementById("whatsapp-pmkri");
messageForm.hidden = false;
messageForm.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  followupLink.hidden = true;
  followupLink.removeAttribute("href");
  messageStatus.textContent = "";
});
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(messageForm);
  const name = formData.get("nama").trim();
  const email = formData.get("email").trim();
  const message = formData.get("pesan").trim();
  if (!name || !message) {
    const field = messageForm.elements.namedItem(name ? "pesan" : "nama");
    field.setCustomValidity(name ? "Tulis pesan yang ingin dikirim." : "Isi nama Anda.");
    field.reportValidity();
    return;
  }
  const url = new URL(whatsappLink.href);
  url.searchParams.set("text", [
    "Halo PMKRI Makassar,", "", "Nama: " + name, "Email: " + email, "", "Pesan:", message,
  ].join("\n"));
  followupLink.href = url.href;
  followupLink.hidden = false;
  messageStatus.textContent = "Pesan siap. Lanjutkan pengiriman di WhatsApp.";
  window.open(url.href, "_blank", "noopener,noreferrer");
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.animate(
        [{ opacity: 0.4, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 360, easing: "ease-out" },
      );
      reveal.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll("[data-reveal]").forEach((element) => reveal.observe(element));
}
