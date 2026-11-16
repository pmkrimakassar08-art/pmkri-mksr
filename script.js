"use strict";

const hero = document.querySelector(".hero");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (hero) {
  // Replace the hero group photo with a lightweight PMKRI-themed vector illustration.
  // The YouTube video background below remains enabled.
  const heroImage = hero.querySelector(".hero-photo img");
  if (heroImage) {
    const heroIllustration = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1460 808" role="img" aria-labelledby="title desc">
      <title id="title">Ilustrasi PMKRI Makassar</title>
      <desc id="desc">Lambang ilustratif buku, obor, dan tiga nilai PMKRI: Intelektualitas, Kristianitas, Fraternitas.</desc>
      <defs>
        <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffaf0"/><stop offset="1" stop-color="#ead9bd"/></linearGradient>
        <linearGradient id="wine" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#773247"/><stop offset="1" stop-color="#351720"/></linearGradient>
        <radialGradient id="glow"><stop stop-color="#f3d9a1" stop-opacity=".8"/><stop offset="1" stop-color="#f3d9a1" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1460" height="808" fill="url(#paper)"/>
      <circle cx="730" cy="355" r="330" fill="url(#glow)"/>
      <circle cx="730" cy="355" r="258" fill="none" stroke="#b9955d" stroke-opacity=".28" stroke-width="2"/>
      <circle cx="730" cy="355" r="226" fill="url(#wine)"/>
      <circle cx="730" cy="355" r="205" fill="none" stroke="#e2c293" stroke-opacity=".7" stroke-width="2"/>
      <path d="M730 210v117m0-93 40-35m-40 56-36-35" fill="none" stroke="#f3d9a1" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"/>
      <path d="M730 198c-39-45-24-77 2-107 8 34 44 43 26 86-5 12-15 19-28 21Z" fill="#e2c293"/>
      <path d="M730 354c-51-44-110-51-166-26v132c56-25 115-18 166 26 51-44 110-51 166-26V328c-56-25-115-18-166 26Z" fill="#fffaf0" stroke="#e2c293" stroke-linejoin="round" stroke-width="8"/>
      <path d="M730 354v132m-132-120v61m43-71v66m221-56v61m-43-71v66" fill="none" stroke="#a97839" stroke-linecap="round" stroke-width="6"/>
      <path d="M518 255c-35-23-61-54-77-94m35 8c-28-1-51-13-68-35m94 90c-8-30-4-57 12-82m-66 141c-39-12-71-34-96-67m47-1c-28-8-47-25-59-51m132 155c-40-3-76-18-107-44m47-12c-29-1-52-13-69-35" fill="none" stroke="#b9955d" stroke-linecap="round" stroke-width="7"/>
      <path d="M942 255c35-23 61-54 77-94m-35 8c28-1 51-13 68-35m-94 90c8-30 4-57-12-82m66 141c39-12 71-34 96-67m-47-1c28-8 47-25 59-51m-132 155c40-3 76-18 107-44m-47-12c29-1 52-13 69-35" fill="none" stroke="#b9955d" stroke-linecap="round" stroke-width="7"/>
      <text x="730" y="644" fill="#3b1721" font-family="Georgia,serif" font-size="42" text-anchor="middle" letter-spacing="7">PMKRI MAKASSAR</text>
      <text x="730" y="704" fill="#755322" font-family="Arial,sans-serif" font-size="22" text-anchor="middle" letter-spacing="3">INTELEKTUALITAS · KRISTIANITAS · FRATERNITAS</text>
      <path d="M555 736h350" stroke="#b9955d" stroke-width="2"/>
    </svg>`;
    heroImage.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(heroIllustration)}`;
    heroImage.alt = "Ilustrasi PMKRI Makassar dengan simbol buku, obor, dan nilai Intelektualitas, Kristianitas, Fraternitas";
  }

  const heroBackgroundStyles = document.createElement("style");
  heroBackgroundStyles.textContent = `
    .hero {
      position: relative;
      isolation: isolate;
      overflow: hidden;
    }
    .hero::before {
      position: absolute;
      z-index: 1;
      inset: 0;
      background: linear-gradient(90deg, rgba(249, 246, 239, .76), rgba(249, 246, 239, .60));
      content: "";
      pointer-events: none;
    }
    .hero-video-background {
      position: absolute;
      z-index: 0;
      inset: 0;
      overflow: hidden;
      background: #70404a url("pmkri-makassar.webp") center / cover no-repeat;
      pointer-events: none;
      filter: saturate(1.08) contrast(1.06);
    }
    .hero-video-background iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      width: max(100%, 177.78vh);
      height: max(100%, 56.25vw);
      border: 0;
      transform: translate(-50%, -50%) scale(1.08);
      filter: contrast(1.08) saturate(1.06) brightness(1.04);
      pointer-events: none;
    }
    .hero-layout,
    .hero > .identity-bar {
      position: relative;
      z-index: 2;
    }
    @media (max-width: 840px) {
      .hero::before { background: rgba(249, 246, 239, .84); }
    }
    @media (prefers-reduced-motion: reduce) {
      .hero::before { background: rgba(249, 246, 239, .9); }
    }
  `;
  document.head.append(heroBackgroundStyles);

  if (!prefersReducedMotion.matches) {
    const videoBackground = document.createElement("div");
    videoBackground.className = "hero-video-background";
    videoBackground.setAttribute("aria-hidden", "true");

    const videoFrame = document.createElement("iframe");
    videoFrame.id = "hero-background-video";
    const videoUrl = new URL("https://www.youtube-nocookie.com/embed/gI_9En-h5qs");
    videoUrl.search = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      controls: "0",
      loop: "1",
      playlist: "gI_9En-h5qs",
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
      vq: "hd1080",
      enablejsapi: "1",
      origin: window.location.origin,
    }).toString();
    videoFrame.src = videoUrl.toString();
    videoFrame.title = "Video latar PMKRI Makassar";
    videoFrame.tabIndex = -1;
    videoFrame.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
    videoFrame.setAttribute("loading", "eager");
    videoFrame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    videoBackground.append(videoFrame);
    hero.prepend(videoBackground);

    // Autoplay muted immediately, then use a slightly faster pace for a lively but comfortable background.
    const previousYouTubeReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousYouTubeReady === "function") previousYouTubeReady();
      if (window.YT?.Player) {
        new window.YT.Player(videoFrame, {
          events: {
            onReady: (event) => event.target.setPlaybackRate(1.25),
          },
        });
      }
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const youtubeApi = document.createElement("script");
      youtubeApi.src = "https://www.youtube.com/iframe_api";
      youtubeApi.async = true;
      document.head.append(youtubeApi);
    }
  }
}

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".nav-toggle");
const mobile = window.matchMedia("(max-width: 840px)");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = new Map(
  navLinks.map((link) => [link.hash, document.querySelector(link.hash)]),
);
const tabList = document.querySelector("[data-about-tabs]");
const tabs = [...tabList.querySelectorAll("button")];
const panels = tabs.map((tab) => document.getElementById(tab.dataset.panel));

function setMenuOpen(open) {
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobile.matches && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

function selectTab(selected) {
  tabs.forEach((tab, index) => {
    const active = selected === index;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    panels[index].hidden = !active;
  });
}

function changeTab(index) {
  selectTab(index);
  const hash = "#" + panels[index].id;
  if (location.hash !== hash) history.replaceState(null, "", hash);
}

function updateResponsiveControls() {
  setMenuOpen(false);
  tabList.setAttribute("aria-orientation", mobile.matches ? "horizontal" : "vertical");
}

tabList.setAttribute("role", "tablist");
updateResponsiveControls();
mobile.addEventListener("change", updateResponsiveControls);

tabs.forEach((tab, index) => {
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-controls", panels[index].id);
  panels[index].setAttribute("role", "tabpanel");
  panels[index].setAttribute("aria-labelledby", tab.id);
  panels[index].tabIndex = 0;
  tab.addEventListener("click", () => changeTab(index));
});

tabList.addEventListener("keydown", (event) => {
  const current = tabs.indexOf(event.target);
  if (current < 0) return;

  const previous = mobile.matches ? "ArrowLeft" : "ArrowUp";
  const next = mobile.matches ? "ArrowRight" : "ArrowDown";
  let selected;
  switch (event.key) {
    case previous: selected = (current - 1 + tabs.length) % tabs.length; break;
    case next: selected = (current + 1) % tabs.length; break;
    case "Home": selected = 0; break;
    case "End": selected = tabs.length - 1; break;
    default: return;
  }

  event.preventDefault();
  changeTab(selected);
  tabs[selected].focus();
});

function renderPage(focusHeading = false) {
  const panelIndex = panels.findIndex((panel) => "#" + panel.id === location.hash);
  const requested = panelIndex >= 0 ? "#tentang" : location.hash;
  const active = sections.has(requested) ? requested : "#beranda";

  sections.forEach((section, hash) => { section.hidden = hash !== active; });
  navLinks.forEach((link) => {
    if (link.hash === active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (active === "#tentang") selectTab(Math.max(0, panelIndex));
  setMenuOpen(false);
  window.scrollTo(0, 0);

  if (focusHeading) {
    const heading = sections.get(active).querySelector("h1, h2");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setMenuOpen(false);
  if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const destination = link.hash;
  if (destination === "#konten") {
    event.preventDefault();
    document.getElementById("konten").focus();
    return;
  }
  if (!sections.has(destination) && !panels.some((panel) => "#" + panel.id === destination)) return;

  event.preventDefault();
  if (location.hash !== destination) history.pushState(null, "", destination);
  renderPage(true);
});

document.documentElement.classList.add("has-js");
menuButton.hidden = false;
tabList.hidden = false;
renderPage();
window.addEventListener("hashchange", () => renderPage(true));

const boardSearch = document.getElementById("cari-pengurus");
const boardCards = [...document.querySelectorAll(".board-card")].map((card) => ({
  card,
  text: [...card.querySelectorAll("h3, p")].map((element) => element.textContent).join(" ").toLocaleLowerCase("id"),
}));
const emptyBoard = document.querySelector("[data-board-empty]");
const boardStatus = document.querySelector("[data-board-status]");

document.querySelector("[data-board-filter]").hidden = false;
boardSearch.addEventListener("input", () => {
  const search = boardSearch.value.trim().toLocaleLowerCase("id");
  const words = search.split(/\s+/).filter(Boolean);
  let matches = 0;
  boardCards.forEach(({ card, text }) => {
    const visible = words.every((word) => text.includes(word));
    card.hidden = !visible;
    if (visible) matches += 1;
  });
  emptyBoard.hidden = matches > 0;
  boardStatus.textContent = search ? matches + " pengurus ditemukan." : "";
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
  const fields = new FormData(messageForm);
  const name = fields.get("nama").trim();
  const email = fields.get("email").trim();
  const message = fields.get("pesan").trim();

  if (!name || !message) {
    const field = messageForm.elements.namedItem(name ? "pesan" : "nama");
    field.setCustomValidity(name ? "Tulis pesan yang ingin dikirim." : "Isi nama Anda.");
    field.reportValidity();
    return;
  }

  const url = new URL(whatsappLink.href);
  url.searchParams.set("text", [
    "Halo PMKRI Makassar,",
    "",
    "Nama: " + name,
    "Email: " + email,
    "",
    "Pesan:",
    message,
  ].join("\n"));

  followupLink.href = url.href;
  followupLink.hidden = false;
  messageStatus.textContent = "Pesan siap. Lanjutkan pengiriman di WhatsApp.";
  window.open(url.href, "_blank", "noopener,noreferrer");
});
