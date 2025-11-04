const PROFILES = {
  sid: {
    cover: "images/bg.png",
    avatar: "images/sid.png",
    name: "Sid",
    role: "Duelist / Top Frag",
    about: "Explosive entry, confident aim, heavy impact on pistol/bonus rounds.",
    exp: [
      {
        year: "2023",
        title: "Korvgubbarna — Duelist",
        desc: "Ace rounds and opener picks in officials.",
      },
      {
        year: "2024",
        title: "LAN Mix",
        desc: "Top 5 MVP runs; strong comms under pressure.",
      },
    ],
    phone: "(+46) 700-000000",
    email: "sid@example.com",
    address: "Stockholm, Sweden",
  },
  eliot: {
    cover: "images/bg.png",
    avatar: "images/Eliot.png",
    name: "Eliot",
    role: "Initiator / IGL",
    about: "Calls defaults, times execs, sets teammates up with utility.",
    exp: [
      {
        year: "2022",
        title: "IGL — Mix Teams",
        desc: "Mid-round calling & anti-tilt leadership.",
      },
      {
        year: "2025",
        title: "Korvgubbarna — Initiator",
        desc: "Lineups + info plays; enables duelists.",
      },
    ],
    phone: "(+46) 731-111111",
    email: "eliot@example.com",
    address: "Gothenburg, Sweden",
  },
  colin: {
    cover: "images/bg.png",
    avatar: "images/Colin.png",
    name: "Colin",
    role: "Defender",
    about: "Defensive playstyle with a good gamesense.",
    exp: [
      {
        year: "2000",
        title: "IGL — Mix Teams",
        desc: "???",
      },
      {
        year: "2025",
        title: "Korvgubbarna — Defense",
        desc: "???",
      },
    ],
    phone: "(+46) 732-4444444",
    email: "Colin@example.com",
    address: "Gothenburg, Sweden",
  },
  damjan: {
    cover: "images/bg.png",
    avatar: "images/Damjan.png",
    name: "Damjan",
    role: "Team player",
    about: "Team player, breaks controllers.",
    exp: [
      {
        year: "2021",
        title: "IGL — Mix Teams",
        desc: "???",
      },
      {
        year: "2025",
        title: "Korvgubbarna — Team player",
        desc: "???",
      },
    ],
    phone: "(+46) 731-111111",
    email: "Damjan@example.com",
    address: "Gothenburg, Sweden",
  },
  emile: {
    cover: "images/bg.png",
    avatar: "images/Emile.png",
    name: "Emile",
    role: "Dps",
    about: "Fast with an offensive playstyle.",
    exp: [
      {
        year: "2020",
        title: "IGL — Mix Teams",
        desc: "???",
      },
      {
        year: "2025",
        title: "Korvgubbarna — Dps",
        desc: "???",
      },
    ],
    phone: "(+46) 731-111111",
    email: "Emile@example.com",
    address: "Gothenburg, Sweden",
  },
  djamil: {
    cover: "images/bg.png",
    avatar: "images/Djamil.png",
    name: "Djamil",
    role: "Pusher",
    about: "Fast and explosive playstyle, go in and hope for the best.",
    exp: [
      {
        year: "2020",
        title: "IGL — Mix Teams",
        desc: "???",
      },
      {
        year: "2025",
        title: "Korvgubbarna — Pusher",
        desc: "???",
      },
    ],
    phone: "(+46) 731-111111",
    email: "Djamil@example.com",
    address: "Gothenburg, Sweden",
  },
};
function buildPcHTML(p) {
  const exp = p.exp
    .map(
      (e) => `
    <div class="pc-item" data-year="${e.year}">
      <div class="pc-item-title">${e.title}</div>
      <div class="pc-item-desc">${e.desc}</div>
    </div>`
    )
    .join("");

  return `
<article class="pc-card" data-state="#about">
  <header class="pc-header">
    <div class="pc-cover" style="background-image:url('${p.cover}')"></div>
    <img class="pc-avatar" src="${p.avatar}" alt="${p.name}">
    <div class="pc-title">
      <div class="pc-name">${p.name}</div>
      <div class="pc-role">${p.role}</div>
    </div>
  </header>

  <nav class="pc-tabs" aria-label="Profile sections">
    <button class="pc-tab is-active" data-target="#pc-about">About</button>
    <button class="pc-tab" data-target="#pc-exp">Experience</button>
    <button class="pc-tab" data-target="#pc-contact">Contact</button>
  </nav>

  <section class="pc-sections">
    <div class="pc-section is-active" id="pc-about">
      <p class="pc-desc">${p.about}</p>
    </div>

    <div class="pc-section" id="pc-exp">
      <div class="pc-timeline">${exp}</div>
    </div>

    <div class="pc-section" id="pc-contact">
      <div class="pc-contact-list">
        <div class="pc-contact">📍 ${p.address}</div>
        <a class="pc-contact" href="tel:${p.phone.replace(/[^\d+]/g, "")}">☎ ${
    p.phone
  }</a>
        <a class="pc-contact" href="mailto:${p.email}">✉ ${p.email}</a>
      </div>
    </div>
  </section>
</article>`;
}

(function addPcStyles() {
  const css = `
.drawer-panel{background:#121216;color:#e9ecf1}
.pc-card{max-width:680px;margin:0 auto;background:#111115;border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;box-shadow:0 18px 48px rgba(0,0,0,.45)}
.pc-header{position:relative;height:200px}
.pc-cover{position:absolute;inset:0;background-size:cover;background-position:center;filter:blur(18px) saturate(1.1);transform:scale(1.12);opacity:.9}
.pc-avatar{position:absolute;right:24px;bottom:16px;width:150px;object-fit:contain;filter:drop-shadow(0 12px 24px rgba(0,0,0,.5))}
.pc-title{position:absolute;left:20px;bottom:20px}
.pc-name{font-weight:800;font-size:22px}
.pc-role{font-size:12px;opacity:.85}
.pc-tabs{display:flex;gap:8px;padding:10px;background:#0f0f12;border-top:1px solid rgba(255,255,255,.06)}
.pc-tab{flex:1;background:#191a22;border:1px solid rgba(255,255,255,.08);color:#cfd6e6;padding:10px 12px;border-radius:10px;cursor:pointer;font-weight:700}
.pc-tab.is-active{background:linear-gradient(180deg,#26283a,#191a22);border-color:#7f8cff;color:#fff;box-shadow:0 0 0 1px #7f8cff inset}
.pc-sections{padding:16px}
.pc-section{display:none;animation:pcfade .3s both}
.pc-section.is-active{display:block}
@keyframes pcfade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.pc-timeline{position:relative;margin-top:8px}
.pc-timeline::before{content:"";position:absolute;left:18px;top:0;bottom:0;width:2px;background:linear-gradient(#7f8cff,transparent)}
.pc-item{position:relative;padding-left:48px;margin:14px 0}
.pc-item::before{content:"";position:absolute;left:12px;top:.35em;width:12px;height:12px;border-radius:50%;background:#7f8cff;box-shadow:0 0 0 3px rgba(127,140,255,.25)}
.pc-item-title{font-weight:700}
.pc-item-desc{color:#aab3c7;font-size:13px}
.pc-contact-list{display:grid;gap:10px;margin-top:8px}
.pc-contact{display:flex;gap:10px;align-items:center;background:#171822;border:1px solid rgba(255,255,255,.06);padding:10px 12px;border-radius:10px;color:#dfe6ff;text-decoration:none}
  `;
  const tag = document.createElement("style");
  tag.textContent = css;
  document.head.appendChild(tag);
})();

const drawer = document.getElementById("profile-drawer");
const content = drawer.querySelector(".drawer-content");
let lastFocused = null;
const focusSel =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function initPcTabs(scope) {
  const tabs = scope.querySelectorAll(".pc-tab");
  const sections = scope.querySelectorAll(".pc-section");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = scope.querySelector(tab.dataset.target);
      if (!target) return;
      tabs.forEach((t) => t.classList.remove("is-active"));
      sections.forEach((s) => s.classList.remove("is-active"));
      tab.classList.add("is-active");
      target.classList.add("is-active");
    });
  });
}

function openDrawer(key) {
  const p = PROFILES[key];
  if (!p) {
    console.error(`Profile not found for key: ${key}`);
    return;
  }
  console.log(`Opening drawer for: ${key}`, p); // Debugging
  content.innerHTML = buildPcHTML(p);
  drawer.setAttribute("aria-hidden", "false");
  initPcTabs(content);
  const f = content.querySelectorAll(focusSel);
  if (f.length) f[0].focus();
}
function closeDrawer() {
  drawer.setAttribute("aria-hidden", "true");
  content.innerHTML = "";
  if (lastFocused) lastFocused.focus();
}

document.addEventListener("click", (e) => {
  const cardEl = e.target.closest(".cards .card[data-player]");
  if (cardEl) {
    e.preventDefault();
    console.log(`Card clicked: ${cardEl.getAttribute("data-player")}`); // Debugging
    lastFocused = cardEl;
    openDrawer(cardEl.getAttribute("data-player"));
  }
  if (e.target.matches("[data-close]")) {
    e.preventDefault();
    console.log("Close button clicked"); // Debugging
    closeDrawer();
  }
});

drawer.addEventListener("click", (e) => {
  if (e.target.classList.contains("drawer-backdrop")) closeDrawer();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.getAttribute("aria-hidden") === "false")
    closeDrawer();
});

