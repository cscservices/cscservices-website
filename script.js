// ---- Edit these with your real details ----
const CONFIG = {
  web3formsKey: "c5995a27-c43f-45cc-8422-6438d99ce654",   // Web3Forms access key (public, safe to keep here)
  whatsappNumber: "60146263499",  // digits only with country code
  instagramUrl: "https://www.instagram.com/cscservices.cc/",  // your Instagram profile
  facebookUrl: "https://www.facebook.com/share/1J852jc5MG/",  // your Facebook page
};
document.querySelectorAll("[data-ig]").forEach((a) => { a.href = CONFIG.instagramUrl; });
document.querySelectorAll("[data-fb]").forEach((a) => { a.href = CONFIG.facebookUrl; });
// -------------------------------------------

document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

// ---- Mobile menu (slide-in panel) and phone action bar ----
const toggle = document.querySelector(".toggle");
const menu = document.getElementById("menu");
const PHONE = "+60146263499";   // main line (014), used by the Call buttons
const ICON_CALL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z"/></svg>';
const ICON_WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v12H10l-5 4v-4H3z"/><path d="M7 9h10M7 12h6"/></svg>';
const ICON_QUOTE = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18"/><path d="M8.5 8h7M8.5 11.5h7M8.5 15h4"/></svg>';
let scrim = null;
if (menu) {
  // extra contact buttons at the bottom of the phone menu (hidden on desktop)
  menu.insertAdjacentHTML("beforeend", `
    <div class="menu-foot">
      <a href="tel:${PHONE}">${ICON_CALL}Call us</a>
      <a href="#" data-wa>${ICON_WA}WhatsApp</a>
      <p>014-626-3499 &middot; 016-396-9585<br>cscservices1@yahoo.com</p>
    </div>`);
  scrim = document.createElement("div");
  scrim.className = "menu-scrim";
  document.body.appendChild(scrim);
}
function setMenu(open) {
  if (!menu || !toggle) return;
  menu.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  scrim?.classList.toggle("is-on", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Menu");
}
toggle?.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
scrim?.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu?.classList.contains("open")) { setMenu(false); toggle.focus(); } });
matchMedia("(min-width: 901px)").addEventListener?.("change", (e) => { if (e.matches) setMenu(false); });

// sticky Call / Quote bar (shown on phones only, see styles.css); WhatsApp has its own floating button
document.body.insertAdjacentHTML("beforeend", `
  <nav class="mbar" aria-label="Quick contact">
    <a href="tel:${PHONE}">${ICON_CALL}<span>Call us</span></a>
    <a href="contact.html" class="mbar-quote">${ICON_QUOTE}<span>Get a free quote</span></a>
  </nav>`);

// ---- Floating contact dock (all screen sizes) ----
// Big green WhatsApp button (one tap to chat) plus a small "+" that opens Call / Instagram / Facebook.
const WA_LOGO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.06c-.24.68-1.42 1.3-1.95 1.34-.5.05-.97.23-3.26-.68-2.75-1.08-4.49-3.9-4.62-4.08-.13-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.99.95-2.26.24-.27.53-.34.71-.34l.51.01c.16.01.38-.06.6.46.23.54.77 1.87.84 2 .07.14.11.3.02.48-.09.18-.13.29-.27.45-.13.16-.28.35-.4.47-.13.13-.27.28-.12.55.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.18.68-.8.86-1.07.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.88.27.13.45.2.52.31.07.11.07.65-.17 1.33z"/></svg>';
const ICON_IG = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>';
const ICON_FB = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8.5V6.8c0-.8.5-1 1-1h2.5V2.2L14.3 2C11 2 10 4.3 10 6.3v2.2H7.5V12H10v10h4V12h3l.5-3.5z"/></svg>';
document.body.insertAdjacentHTML("beforeend", `
  <div class="dock" id="dock">
    <div class="dock-tray" id="dock-tray">
      <a href="tel:${PHONE}" class="dock-call">${ICON_CALL}<span>Call us</span></a>
      <a href="${CONFIG.instagramUrl}" target="_blank" rel="noopener" class="dock-ig">${ICON_IG}<span>Instagram</span></a>
      <a href="${CONFIG.facebookUrl}" target="_blank" rel="noopener" class="dock-fb">${ICON_FB}<span>Facebook</span></a>
    </div>
    <button type="button" class="dock-more" aria-expanded="false" aria-controls="dock-tray" aria-label="More ways to reach us"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 4v12M4 10h12" fill="none" stroke="currentColor" stroke-width="2.2"/></svg></button>
    <a href="#" data-wa class="dock-wa" aria-label="Chat with us on WhatsApp">${WA_LOGO}<span class="dock-wa-label">Chat with us</span></a>
  </div>`);
// Instagram / Facebook in the phone menu too (the top strip is hidden on phones)
menu?.querySelector(".menu-foot p")?.insertAdjacentHTML("beforebegin", `
  <a href="${CONFIG.instagramUrl}" target="_blank" rel="noopener" class="menu-ig">${ICON_IG}Instagram</a>
  <a href="${CONFIG.facebookUrl}" target="_blank" rel="noopener" class="menu-fb">${ICON_FB}Facebook</a>`);
const dock = document.getElementById("dock");
const dockMore = dock.querySelector(".dock-more");
const setDock = (open) => { dock.classList.toggle("open", open); dockMore.setAttribute("aria-expanded", open); };
dockMore.addEventListener("click", (e) => { e.stopPropagation(); setDock(!dock.classList.contains("open")); });
document.addEventListener("click", (e) => { if (!dock.contains(e.target)) setDock(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && dock.classList.contains("open")) { setDock(false); dockMore.focus(); } });

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (data.botcheck) return; // spam trap
  if (CONFIG.web3formsKey === "YOUR_WEB3FORMS_KEY") {
    status.className = "status err";
    status.textContent = "Form not set up yet: add your Web3Forms key in script.js.";
    return;
  }
  const btn = form.querySelector("button");
  btn.disabled = true; status.className = "status"; status.textContent = "Sending...";
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, access_key: CONFIG.web3formsKey, subject: "New enquiry from CSC Services website", from_name: "CSC Services website" }),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    form.reset();
    status.className = "status ok";
    status.textContent = "Thanks! We got your message and will reply soon.";
  } catch {
    status.className = "status err";
    status.textContent = "Could not send. Please message us on WhatsApp instead.";
  } finally { btn.disabled = false; }
});

document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi CSC Services, I'd like a quote.")}`;
});

// Services dropdown (tap support) and closing the mobile menu after choosing a link
// Desktop only: the little arrow button next to "Our Services" lets you pin
// the dropdown open with a click instead of hover. The "Our Services" link
// itself is left alone - it just navigates normally, on every screen size.
document.querySelectorAll(".dd-btn").forEach((b) => {
  b.addEventListener("click", () => {
    const dd = b.closest(".dd");
    const open = dd.classList.toggle("open");
    b.setAttribute("aria-expanded", open);
  });
});
document.addEventListener("click", (e) => {
  document.querySelectorAll(".dd.open").forEach((dd) => {
    if (!dd.contains(e.target)) { dd.classList.remove("open"); dd.querySelector(".dd-btn").setAttribute("aria-expanded", "false"); }
  });
});
menu?.addEventListener("click", (e) => {
  if (e.target.closest("a") && menu.classList.contains("open")) setMenu(false);
});

// ---- Client list (Services page) ----
// One entry per client. Optional fields:
//   logo:    "images/clients/abc.png" (shown instead of the initials)
//   mono:    the initials to show when there is no logo (worked out from the name if left out)
//   service: what CSC does for them, e.g. "Factory cleaning" (adds a line at the bottom of the card)
const CLIENTS = [
  { name: "Cemkrete (M) Sdn Bhd", sector: "Manufacturing", location: "Puchong, Selangor", mono: "CK", details: "Manufacturer of construction chemicals and industrial flooring systems, serving Malaysia since 1983.", logo: "images/clients/cemkrete.webp" },
  { name: "KUKA Robot Automation (Malaysia) Sdn Bhd", sector: "Robotics & Automation", location: "Bandar Bukit Puchong, Selangor", mono: "KUKA", details: "The Malaysian arm of KUKA, the global maker of industrial robots and automation systems.", logo: "images/clients/kuka.png" },
  { name: "KR7 Residences", sector: "Residential", location: "Puchong, Selangor", mono: "KR7", details: "Serviced apartment development by Masteron, with two 34-storey towers in Puchong.", logo: "images/clients/kr7-residences.png" },
  { name: "Program Electronic Sdn Bhd", sector: "Manufacturing", location: "Taman Perindustrian Puchong, Selangor", mono: "PE", details: "Malaysian manufacturer of fire alarm systems, gas release control panels and fireman intercoms, since 1982.", logo: "images/clients/program-electronic.png" },
  { name: "Bee Same Trading Sdn Bhd", sector: "Trading & Distribution", mono: "BS", details: "Distributor of men's apparel and leather accessories, with more than four decades in the fashion trade.", logo: "images/clients/bee-same.webp" },
];

const clientCar = document.getElementById("client-car");
if (clientCar) {
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const initials = (c) => c.mono || c.name.replace(/\b(Sdn|Bhd)\b|\([^)]*\)/g, "").split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const stage = clientCar.querySelector(".team-stage");
  if (!CLIENTS.length) {
    clientCar.querySelector(".team-top").hidden = true;
    stage.outerHTML = '<p class="client-empty">Client list coming soon.</p>';
  } else {
    stage.innerHTML = CLIENTS.map((c, k) => `
      <article class="team-card" aria-roledescription="slide" aria-label="${k + 1} of ${CLIENTS.length}">
        <div class="client-logo">${c.logo ? `<img src="${esc(c.logo)}" alt="${esc(c.name)} logo">` : `<span class="mono" aria-hidden="true">${esc(initials(c))}</span>`}</div>
        <div class="team-info">
          <span class="team-tag">${esc(c.sector)}</span>
          <h3>${esc(c.name)}</h3>
          ${c.location ? `<span class="client-loc"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>${esc(c.location)}</span>` : ""}
          <span class="bar"></span>
          <p>${esc(c.details)}</p>
          ${c.service ? `<div class="team-meta"><span class="meta-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span><span><b>${esc(c.service)}</b><small>Service provided</small></span></div>` : ""}
        </div>
      </article>`).join("");
  }
}

// ---- Card carousels (About: team, Services: clients) ----
// Arrows, dots, keyboard (left/right when the carousel has focus), swipe on
// touch screens, and autoplay every 6s. Autoplay pauses on hover/focus, while
// the section is off screen, and is off for people who prefer reduced motion.
// The 6s timing lives in styles.css (the team-progress animation).
document.querySelectorAll(".team-car").forEach((car) => {
  const stage = car.querySelector(".team-stage");
  if (!stage) return;
  const cards = Array.from(stage.querySelectorAll(".team-card"));
  const dotsWrap = car.querySelector(".team-dots");
  const countEl = car.querySelector(".team-count");
  const item = car.dataset.item || "item";
  const n = cards.length;
  if (!n) return;
  let i = 0;

  const dots = cards.map((card, k) => {
    const d = document.createElement("button");
    d.type = "button";
    d.className = "dot";
    d.setAttribute("aria-label", `Show ${item} ${k + 1}`);
    d.addEventListener("click", () => go(k));
    dotsWrap.appendChild(d);
    const bar = document.createElement("span");
    bar.className = "team-progress";
    bar.setAttribute("aria-hidden", "true");
    bar.addEventListener("animationend", () => go(i + 1));
    card.querySelector(".team-info").appendChild(bar);
    card.addEventListener("click", () => { if (card.classList.contains("is-next")) go(i + 1); });
    return d;
  });

  function render() {
    cards.forEach((c, k) => {
      const off = (k - i + n) % n;
      c.classList.toggle("is-active", off === 0);
      c.classList.toggle("is-next", off === 1);
      c.classList.toggle("is-prev", off === n - 1 && n > 2);
      c.setAttribute("aria-hidden", off === 0 ? "false" : "true");
    });
    dots.forEach((d, k) => {
      d.classList.toggle("is-active", k === i);
      d.setAttribute("aria-current", k === i ? "true" : "false");
    });
    countEl.textContent = `${i + 1} / ${n}`;
  }
  function go(k) { i = (k + n) % n; render(); }

  car.querySelector(".team-arrow.prev").addEventListener("click", () => go(i - 1));
  car.querySelector(".team-arrow.next").addEventListener("click", () => go(i + 1));
  car.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
  });

  // Swipe (touch only; vertical scrolling still works because of touch-action: pan-y)
  let x0 = null, y0 = 0;
  stage.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
    x0 = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? i + 1 : i - 1);
  }, { passive: true });

  // Pause autoplay while hovered, focused, off screen, or the tab is hidden
  const why = new Set();
  const pause = (r, on) => { on ? why.add(r) : why.delete(r); car.classList.toggle("is-paused", why.size > 0); };
  car.addEventListener("mouseenter", () => pause("hover", true));
  car.addEventListener("mouseleave", () => pause("hover", false));
  car.addEventListener("focusin", () => pause("focus", true));
  car.addEventListener("focusout", (e) => { if (!car.contains(e.relatedTarget)) pause("focus", false); });
  document.addEventListener("visibilitychange", () => pause("hidden", document.hidden));
  if ("IntersectionObserver" in window) {
    pause("offscreen", true);
    new IntersectionObserver(([en]) => pause("offscreen", !en.isIntersecting), { threshold: 0.4 }).observe(car);
  }

  // Desktop: grow the stage to fit the tallest card so no text gets clipped
  const fit = () => {
    stage.style.height = "";
    if (!matchMedia("(min-width: 901px)").matches) return;
    const need = Math.max(...cards.map((c) => c.querySelector(".team-info").scrollHeight)) - 24;
    if (need > stage.clientHeight) stage.style.height = `${need}px`;
  };
  fit();
  window.addEventListener("resize", fit);
  window.addEventListener("load", fit);
  document.fonts?.ready.then(fit);

  render();
});

// ---- Gallery (gallery.html) ----
// Photos come from gallery-data.js. Filter tabs, "used in" links to the service pages,
// and a full-screen viewer with arrows, keyboard (left/right/Esc) and swipe.
const galGrid = document.getElementById("gallery-grid");
if (galGrid && typeof GALLERY !== "undefined") {
  const PAGE_NAMES = {
    "factory-industrial.html": "Factory Cleaning", "office-commercial.html": "Office Cleaning",
    "condo-apartment.html": "Contractual Cleaning", "house-cleaning.html": "House Cleaning",
    "tuition-centers.html": "Tuition Centers", "post-construction.html": "Post-Construction",
    "landscaping-contractual.html": "Contractual Landscaping", "landscaping-project.html": "Project Landscaping",
    "services.html": "All Services",
  };
  const CATS = { cleaning: "Cleaning", landscaping: "Landscaping", team: "Our Team", machines: "Machines", chemicals: "Chemicals" };
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const linkHtml = (links) => (links || []).map((href) => `<a href="${esc(href)}">${esc(PAGE_NAMES[href.split("#")[0]] || href)}</a>`).join("");

  // Work photos (cleaning, landscaping) are picture-only; machines and chemicals show a caption and links.
  const isKit = (g) => g.category === "machines" || g.category === "chemicals";
  const altOf = (g) => g.caption || g.alt || "CSC Services work photo";
  galGrid.innerHTML = GALLERY.map((g, k) => `
    <figure class="gal-item${g.fit === "contain" ? " is-product" : ""}${isKit(g) ? "" : " is-photo"}" data-cat="${esc(g.category)}" data-i="${k}">
      <button type="button" class="gal-open" aria-label="View larger: ${esc(altOf(g))}"><img src="${esc(g.src)}" alt="${esc(altOf(g))}" loading="lazy"></button>
      ${isKit(g) ? `<figcaption>
        <span class="gal-cat">${esc(CATS[g.category] || g.category)}</span>
        <b>${esc(g.caption)}</b>
        ${g.links && g.links.length ? `<span class="gal-links"><span>Used in:</span>${linkHtml(g.links)}</span>` : ""}
      </figcaption>` : ""}
    </figure>`).join("");

  const items = Array.from(galGrid.querySelectorAll(".gal-item"));
  const filterBtns = Array.from(document.querySelectorAll("#gallery-filters [data-filter]"));
  const emptyEl = document.getElementById("gallery-empty");
  let current = "all";

  filterBtns.forEach((b) => {
    const f = b.dataset.filter;
    const n = f === "all" ? GALLERY.length : GALLERY.filter((g) => g.category === f).length;
    b.insertAdjacentHTML("beforeend", ` <span class="gal-count">${n}</span>`);
    b.addEventListener("click", () => setFilter(f, true));
  });

  function setFilter(f, push) {
    if (!filterBtns.some((b) => b.dataset.filter === f)) f = "all";
    current = f;
    filterBtns.forEach((b) => { const on = b.dataset.filter === f; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on); });
    let shown = 0;
    items.forEach((it) => { const on = f === "all" || it.dataset.cat === f; it.hidden = !on; if (on) shown++; });
    emptyEl.hidden = shown > 0;
    if (!shown) emptyEl.textContent = f === "chemicals"
      ? "Photos of the chemicals we use are coming soon."
      : "No photos here yet.";
    if (push) history.replaceState(null, "", f === "all" ? location.pathname : `#${f}`);
  }
  setFilter(location.hash.slice(1) || "all", false);
  window.addEventListener("hashchange", () => setFilter(location.hash.slice(1) || "all", false));

  // full-screen viewer
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.hidden = true;
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Photo viewer");
  lb.innerHTML = `
    <button type="button" class="lb-close" aria-label="Close photo viewer"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4l12 12M16 4L4 16" fill="none" stroke="currentColor" stroke-width="2.2"/></svg></button>
    <button type="button" class="lb-nav lb-prev" aria-label="Previous photo"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
    <figure class="lb-figure"><div class="lb-img"><img alt=""></div><figcaption><span class="gal-cat"></span><b></b><span class="gal-links"></span><span class="lb-count"></span></figcaption></figure>
    <button type="button" class="lb-nav lb-next" aria-label="Next photo"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>`;
  document.body.appendChild(lb);
  const lbImg = lb.querySelector(".lb-img img");
  let order = [], pos = 0, lastFocus = null;

  function show(p) {
    pos = (p + order.length) % order.length;
    const g = GALLERY[order[pos]];
    lbImg.src = g.src; lbImg.alt = altOf(g);
    lb.classList.toggle("is-photo", !isKit(g));
    lb.querySelector(".lb-img").classList.toggle("is-product", g.fit === "contain");
    lb.querySelector(".gal-cat").textContent = CATS[g.category] || g.category;
    lb.querySelector("figcaption b").textContent = g.caption;
    lb.querySelector(".gal-links").innerHTML = g.links && g.links.length ? `<span>Used in:</span>${linkHtml(g.links)}` : "";
    lb.querySelector(".lb-count").textContent = `${pos + 1} / ${order.length}`;
  }
  function open(i) {
    order = items.filter((it) => !it.hidden).map((it) => Number(it.dataset.i));
    lastFocus = document.activeElement;
    lb.hidden = false;
    document.body.classList.add("lb-open");
    show(order.indexOf(i));
    lb.querySelector(".lb-close").focus();
  }
  function close() {
    lb.hidden = true;
    document.body.classList.remove("lb-open");
    lastFocus?.focus();
  }
  items.forEach((it) => it.querySelector(".gal-open").addEventListener("click", () => open(Number(it.dataset.i))));
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", () => show(pos - 1));
  lb.querySelector(".lb-next").addEventListener("click", () => show(pos + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(pos - 1);
    if (e.key === "ArrowRight") show(pos + 1);
    if (e.key === "Tab") { // keep focus inside the viewer
      const f = Array.from(lb.querySelectorAll("button, a"));
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  let sx = null;
  lb.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) show(dx < 0 ? pos + 1 : pos - 1);
  }, { passive: true });
}

// ---- Photo slideshows ([data-slides]): photos fade one into the next, no dots ----
// Pauses on hover, while the tab is hidden, and is off for people who prefer reduced motion.
document.querySelectorAll("[data-slides]").forEach((box) => {
  const slides = Array.from(box.querySelectorAll("img"));
  if (slides.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let i = 0, hover = false;
  box.addEventListener("mouseenter", () => { hover = true; });
  box.addEventListener("mouseleave", () => { hover = false; });
  setInterval(() => {
    if (hover || document.hidden) return;
    slides[i].classList.remove("is-on");
    i = (i + 1) % slides.length;
    slides[i].loading = "eager";
    slides[i].classList.add("is-on");
  }, 4500);
});

// ---- Scroll reveal ----
// Sections fade up as they scroll into view. Cards in the same row come in one
// after another. Skipped entirely for people who prefer reduced motion.
const revealSel = [
  ".block > .wrap > h2", ".sec-head", ".steps-head", ".steps-v2 > li", ".tiles > .tile",
  ".ab-hero .wrap > *", ".ab-value", ".team-intro", ".team-car", ".ab-who .wrap > *", ".ab-who-stats > li",
  ".page-title .wrap", ".cat", ".svc-hero .wrap > *", ".svc-jump a", ".svc-cat-head", ".svc-intro", ".svc-card", ".svc-why-item", ".scope-group", ".detail-photo",
  ".contact-info", ".panel", ".cta .wrap",
  ".dt-hero .wrap > *", ".dt-sec-head", ".dt-scope-card", ".dt-note", ".dt-highlight blockquote", ".dt-feature .wrap > *",
  ".dt-kit-head", ".dt-kit-cols > div", ".dt-point", ".dt-related .svc-card",
  ".gal-hero-text", ".gal-hero-photo", ".gal-filters", ".gal-item",
  ".ct-hero-text", ".ct-cards > a", ".ct-form-card", ".ct-side", ".wwd-card", ".founder-photo", ".founder-story > h2", ".founder-lead", ".founder-timeline > li", ".founder-quote",
].join(",");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const els = Array.from(document.querySelectorAll(revealSel)).filter((el) => !el.closest(".hero"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      io.unobserve(el);
      el.classList.add("is-in");
      // hand the element back to its own hover styles once it has arrived
      setTimeout(() => { el.classList.remove("reveal", "is-in"); el.style.transitionDelay = ""; }, 2000);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => {
    const sibs = Array.from(el.parentElement.children).filter((s) => els.includes(s));
    el.style.transitionDelay = `${Math.min(sibs.indexOf(el), 5) * 110}ms`;
    el.classList.add("reveal");
    io.observe(el);
  });
}

// ---- Back to top button ----
const toTop = document.createElement("button");
toTop.type = "button";
toTop.className = "to-top";
toTop.setAttribute("aria-label", "Back to top");
toTop.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 16V4M4.5 9.5L10 4l5.5 5.5" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>';
document.body.appendChild(toTop);
toTop.addEventListener("click", () => {
  const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  const from = window.scrollY;
  window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
  // safety net: if smooth scrolling hasn't started (some embedded browsers), jump instead
  setTimeout(() => { if (window.scrollY >= from - 5) window.scrollTo({ top: 0, behavior: "instant" }); }, 700);
  document.querySelector(".brand")?.focus({ preventScroll: true });
});
const updateToTop = () => toTop.classList.toggle("is-shown", window.scrollY > 600);
window.addEventListener("scroll", updateToTop, { passive: true });
updateToTop();