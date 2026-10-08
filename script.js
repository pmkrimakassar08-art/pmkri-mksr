* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --maroon-900: #5e0000;
  --maroon-800: #730000;
  --maroon-700: #8d0000;
  --gold-500: #f5c65b;
  --gold-400: #f6d77c;
  --cream-50: #fffaf2;
  --cream-100: #fff1d7;
  --neutral-900: #171717;
  --neutral-700: #3d3d3d;
  --neutral-400: #8a8a8a;
  --white: #ffffff;
  --shadow-soft: 0 18px 45px rgba(94, 0, 0, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Plus Jakarta Sans", Arial, sans-serif;
  background: var(--white);
  color: var(--neutral-900);
  line-height: 1.6;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(94, 0, 0, 0.92);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--white);
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 2px;
  background: var(--gold-500);
  transition: width 0.25s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--white);
}

.nav-links a:hover::after,
.nav-links a:focus-visible::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  background: transparent;
  color: var(--white);
  cursor: pointer;
}

.hero {
  position: relative;
  background:
    linear-gradient(rgba(44, 3, 3, 0.58), rgba(44, 3, 3, 0.62)),
    url("background.png.png") center/cover no-repeat;
  color: var(--white);
  min-height: 700px;
  display: flex;
  align-items: center;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  align-items: center;
  gap: 28px;
  padding: 90px 0 80px;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 18px;
  color: var(--gold-400);
}

.eyebrow-maroon {
  color: var(--maroon-700);
}

.eyebrow-gold {
  color: var(--gold-500);
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 10px;
}

.hero-copy h2 {
  font-size: clamp(1.5rem, 2vw, 2.3rem);
  color: var(--gold-400);
  margin-bottom: 18px;
}

.lead {
  max-width: 620px;
  font-size: 1.08rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover,
.btn:focus-visible,
.secondary-btn:hover,
.secondary-btn:focus-visible,
.whatsapp-btn:hover,
.whatsapp-btn:focus-visible {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--gold-500);
  color: var(--maroon-900);
  box-shadow: 0 12px 30px rgba(245, 198, 91, 0.35);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.12);
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, 0.28);
}

.hero-stat-card {
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  padding: 28px;
  box-shadow: var(--shadow-soft);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.stat-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.stat-item strong {
  font-size: 1.4rem;
  color: var(--gold-400);
}

.stat-item span {
  color: rgba(255, 255, 255, 0.88);
}

.section {
  padding: 100px 0;
}

.section-light {
  background: linear-gradient(180deg, #fffdfb 0%, #fff5dc 100%);
}

.section-maroon {
  background: linear-gradient(135deg, var(--maroon-800) 0%, var(--maroon-700) 100%);
  color: var(--white);
}

.section-cream {
  background: linear-gradient(180deg, #fffef9 0%, #fff1c9 100%);
}

.section-contact {
  background: linear-gradient(135deg, #4d0000 0%, #7d0000 60%, #b87b00 100%);
  color: var(--white);
}

.section-title {
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: 30px;
  letter-spacing: -0.04em;
  color: var(--maroon-700);
}

.white {
  color: var(--white);
}

.about-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(93, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.65);
  color: var(--maroon-700);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn.active {
  background: linear-gradient(135deg, var(--maroon-700), var(--maroon-900));
  border-color: transparent;
  color: var(--white);
  box-shadow: 0 12px 24px rgba(93, 0, 0, 0.18);
}

.tab-panel {
  display: none;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(93, 0, 0, 0.08);
  border-radius: 24px;
  padding: 34px 28px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.05);
}

.tab-panel.active {
  display: block;
}

.tab-panel h3 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: var(--maroon-700);
  margin-bottom: 16px;
}

.tab-panel p {
  margin-bottom: 18px;
  color: var(--neutral-700);
}

.feature-list {
  list-style: none;
  padding-left: 0;
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.feature-list li {
  position: relative;
  padding-left: 28px;
  color: var(--neutral-700);
}

.feature-list li::before {
  content: "\f00c";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  position: absolute;
  left: 0;
  top: 0;
  color: var(--maroon-700);
}

.vision-box {
  background: linear-gradient(135deg, rgba(93, 0, 0, 0.05), rgba(245, 198, 91, 0.22));
  border: 1px solid rgba(93, 0, 0, 0.08);
  border-radius: 18px;
  padding: 22px 24px;
  margin-bottom: 26px;
}

.vision-box p {
  margin: 0;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--maroon-700);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.value-card {
  background: linear-gradient(180deg, #fffaf0 0%, #fff 100%);
  border: 1px solid rgba(93, 0, 0, 0.08);
  border-radius: 20px;
  padding: 22px 18px;
  box-shadow: 0 12px 30px rgba(93, 0, 0, 0.05);
}

.value-card h4 {
  color: var(--maroon-700);
  margin-bottom: 10px;
}

.value-card p {
  margin: 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.info-card {
  background: rgba(255, 255, 255, 0.96);
  border-radius: 22px;
  padding: 28px 22px;
  text-align: center;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.info-card:hover,
.manager-card:hover,
.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.12);
}

.info-card i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  margin-bottom: 18px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--gold-500), var(--gold-400));
  color: var(--maroon-900);
  font-size: 1.6rem;
}

.info-card h3 {
  color: var(--maroon-700);
  margin-bottom: 10px;
}

.info-card p {
  color: var(--neutral-700);
}

.management-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.manager-card {
  background: linear-gradient(180deg, #fffdf7 0%, #fff3cf 100%);
  border: 1px solid rgba(93, 0, 0, 0.08);
  border-top: 4px solid var(--maroon-700);
  border-radius: 20px;
  padding: 22px 18px;
  box-shadow: 0 18px 30px rgba(93, 0, 0, 0.07);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.manager-card h3 {
  color: var(--maroon-700);
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.manager-card p {
  color: var(--neutral-700);
  font-weight: 600;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.contact-card {
  display: block;
  background: rgba(255, 255, 255, 0.1);
  padding: 26px 18px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: var(--white);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-card i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  margin-bottom: 12px;
  border-radius: 16px;
  font-size: 1.5rem;
}

.contact-card h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.contact-card p {
  color: rgba(255, 255, 255, 0.9);
}

.whatsapp i {
  background: rgba(37, 211, 102, 0.18);
  color: #7ef0a2;
}

.instagram i {
  background: rgba(194, 53, 132, 0.18);
  color: #ffc4de;
}

.email i {
  background: rgba(66, 133, 244, 0.18);
  color: #bfd7ff;
}

.address-box,
.message-box {
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 24px;
  padding: 24px 22px;
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
}

.address-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: 12px;
}

.address-box p {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--white);
  font-weight: 600;
}

.secondary-btn,
.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: none;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.secondary-btn {
  background: var(--white);
  color: var(--maroon-700);
}

.message-box {
  margin-top: 28px;
}

.message-box h3 {
  font-size: 1.5rem;
  margin-bottom: 18px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 14px;
}

.message-box input,
.message-box textarea {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
  padding: 14px 16px;
}

.message-box input::placeholder,
.message-box textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.message-box textarea {
  resize: vertical;
  min-height: 140px;
  margin-bottom: 18px;
}

.whatsapp-btn {
  background: linear-gradient(135deg, #25d366, #1ebd59);
  color: var(--white);
  box-shadow: 0 12px 25px rgba(37, 211, 102, 0.25);
}

.site-footer {
  background: #390000;
  color: rgba(255, 255, 255, 0.9);
  padding: 18px 0;
}

.footer-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media (max-width: 980px) {
  .hero-inner,
  .value-grid,
  .card-grid,
  .management-grid,
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-inner {
    grid-template-columns: 1fr;
  }

  .management-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 10px);
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(116, 0, 0, 0.98);
    border-radius: 18px;
    padding: 18px 20px;
    box-shadow: 0 20px 36px rgba(0, 0, 0, 0.18);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 6px 0;
  }

  .section {
    padding: 80px 0;
  }

  .card-grid,
  .management-grid,
  .contact-grid,
  .value-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .address-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero {
    min-height: 620px;
  }
}
