// ==========================================
// WEBSITE DATA - EDIT HERE
// ==========================================
const site = {
  name: "كن ذا أثر",
  currency: "جنيه",
  // ضع كود GoatCounter هنا بين علامتي التنصيص (مثال: "kunthaathar"). اتركه فارغًا لتعطيل العداد.
  goatcounter: "",
  social: [] // مثال: { name: "فيسبوك", url: "https://facebook.com/..." }
};

const donationInfo = {
  beneficiaryName: "محمود عمر إسماعيل عمر",
  bankak: { name: "بنكك", number: "5838571" },
  ocash: { name: "أوكاش", number: "1115371" },
  fawry: { name: "فوري", number: "51807840" },
  phones: ["0915528384", "0125759195"],
  whatsapp: "https://wa.me/qr/TY6XLVSJBCTGD1",
  email: "Mahmoudomero226@gmail.com",
  address: "النيل الأبيض - الدويم"
};

// بيانات أولية قابلة للتعديل (غير موثقة). النسبة تُحسب تلقائيًا من collected / target.
const statistics = [
  { value: 1000000, label: "مستفيد" },
  { value: 500000, label: "مصحف" },
  { value: 250, label: "مسجد" },
  { value: 120, label: "مشروع" },
  { value: 30, label: "دولة" }
];

// بيانات أولية قابلة للتعديل (غير موثقة ولا تنسب إلى جهة حقيقية)
const projects = [
  { id: 1, icon: "🤲", title: "دعم الأسر المحتاجة", description: "تقديم الدعم والمساعدة للأسر المحتاجة والمساهمة في توفير احتياجاتها الأساسية.", goal: "توفير سلال غذائية ومساعدات أساسية للأسر الأشد حاجة.", target: 60000, collected: 24000, beneficiaries: 300, status: "جاري التنفيذ", startDate: "2026-01-10", updateDate: "2026-09-01" },
  { id: 2, icon: "🧒", title: "كفالة الأيتام", description: "مبادرة تهدف إلى دعم الأطفال الأيتام وتوفير احتياجاتهم الأساسية والمساهمة في تحسين ظروفهم المعيشية والتعليمية.", goal: "كفالة شهرية تغطي المعيشة والتعليم للأيتام.", target: 100000, collected: 72500, beneficiaries: 120, status: "جاري التنفيذ", startDate: "2026-01-01", updateDate: "2026-09-10" },
  { id: 3, icon: "📖", title: "تعليم القرآن", description: "دعم حلقات تحفيظ القرآن الكريم وتوفير البيئة التعليمية المناسبة للطلاب والمعلمين.", goal: "دعم المعلمين وتجهيز الحلقات بما تحتاجه.", target: 50000, collected: 18000, beneficiaries: 250, status: "جاري التنفيذ", startDate: "2026-02-15", updateDate: "2026-08-20" },
  { id: 4, icon: "💧", title: "مشاريع المياه", description: "المساهمة في توفير المياه الصالحة للشرب وإنشاء مصادر مياه تخدم المجتمعات والأسر المحتاجة.", goal: "حفر آبار وتركيب نقاط شرب للقرى المحتاجة.", target: 150000, collected: 90000, beneficiaries: 1500, status: "جاري التنفيذ", startDate: "2026-03-01", updateDate: "2026-09-05" },
  { id: 5, icon: "🕌", title: "بناء المساجد", description: "المساهمة في إنشاء وتجهيز المساجد في المناطق التي تحتاج إلى دور عبادة ومراكز لخدمة المجتمع.", goal: "بناء وتجهيز مساجد في مناطق تفتقر إليها.", target: 200000, collected: 65000, beneficiaries: 800, status: "جمع التبرعات", startDate: "2026-04-01", updateDate: "2026-08-30" },
  { id: 6, icon: "📕", title: "توزيع المصحف الشريف", description: "توفير وتوزيع المصاحف الشريفة للمساجد وحلقات القرآن والمحتاجين.", goal: "طباعة المصاحف وتوزيعها على المساجد والحلقات.", target: 40000, collected: 30000, beneficiaries: 2000, status: "قارب على الاكتمال", startDate: "2026-02-01", updateDate: "2026-09-12" }
];

const initiatives = [
  { icon: "🚰", title: "مبادرة سقيا الماء", description: "تمكين الأسر من الوصول إلى ماء نظيف عبر نقاط سقيا.", details: "تسعى المبادرة إلى إنشاء نقاط سقيا وصيانتها. المحتوى نموذج قابل للتعديل." },
  { icon: "🧒", title: "مبادرة كفالة يتيم", description: "كفالة تحفظ للأيتام كرامتهم وتعليمهم.", details: "كفالة شهرية للأيتام تشمل المعيشة والتعليم. المحتوى نموذج قابل للتعديل." },
  { icon: "🌙", title: "مبادرة إفطار صائم", description: "موائد إفطار تصل إلى الصائمين المحتاجين.", details: "تجهيز وجبات إفطار وتوزيعها في رمضان. المحتوى نموذج قابل للتعديل." },
  { icon: "📕", title: "مبادرة توزيع المصاحف", description: "مصحف في كل مسجد وحلقة.", details: "طباعة المصاحف وتوزيعها على المساجد والمحتاجين. المحتوى نموذج قابل للتعديل." },
  { icon: "🤲", title: "مبادرة دعم الأسر المحتاجة", description: "سلة غذاء وسند في وقت الحاجة.", details: "دعم دوري للأسر الأشد حاجة. المحتوى نموذج قابل للتعديل." }
];

// نماذج تقارير قابلة للتعديل — ليست تقارير حقيقية
const reports = [
  { title: "تقرير مشروع المياه", description: "ملخص نموذجي لمراحل تنفيذ مشروع المياه.", date: "2026-09-01", content: "هذا نموذج قابل للتعديل. استبدله بتقريرك الموثق: الأهداف، المراحل، المستفيدون." },
  { title: "تقرير كفالة الأيتام", description: "ملخص نموذجي لبرنامج الكفالة.", date: "2026-08-15", content: "هذا نموذج قابل للتعديل. أضف هنا تفاصيل الكفالة الفعلية عند توفرها." },
  { title: "تقرير توزيع المصاحف", description: "ملخص نموذجي لحملة التوزيع.", date: "2026-08-01", content: "هذا نموذج قابل للتعديل. أضف أعداد المصاحف وجهات التوزيع الموثقة." },
  { title: "تقرير المشاريع الرمضانية", description: "ملخص نموذجي لأعمال رمضان.", date: "2026-04-01", content: "هذا نموذج قابل للتعديل. أضف تفاصيل المشاريع الرمضانية الموثقة." }
];

const achievements = [
  { title: "إطلاق المبادرات الخيرية", text: "انطلاق باقة مبادرات تجمع أهل الخير." },
  { title: "دعم الأسر المحتاجة", text: "برنامج دعم للأسر الأشد حاجة." },
  { title: "المساهمة في مشاريع المياه", text: "العمل على توفير مصادر مياه صالحة للشرب." },
  { title: "دعم تعليم القرآن", text: "دعم حلقات التحفيظ ومعلميها." },
  { title: "توزيع المصاحف", text: "إيصال المصاحف إلى المساجد والمحتاجين." }
];
// ==========================================
// END OF EDITABLE DATA
// ==========================================

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = n => Number(n).toLocaleString("en-US");
const pct = p => Math.min(100, Math.round((p.collected / p.target) * 100));
const bar = w => `<div class="bar" aria-hidden="true"><i data-w="${w}"></i></div>`;
const tel = n => `<a href="tel:${n}">${n}</a>`;
const mailto = `mailto:${donationInfo.email}`;
const modal = $("#modal");
let lastFocus = null;

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200);
}
async function copy(text, msg) {
  try { await navigator.clipboard.writeText(text); }
  catch (e) {
    const a = document.createElement("textarea");
    a.value = text; a.style.cssText = "position:fixed;opacity:0"; document.body.appendChild(a);
    a.select(); try { document.execCommand("copy"); } catch (_) {} a.remove();
  }
  toast(msg || "تم نسخ الرقم بنجاح ✓");
}
function fillBars(root) {
  requestAnimationFrame(() => setTimeout(() => $$(".bar i", root).forEach(b => b.style.width = b.dataset.w + "%"), 80));
}
function openModal(html) {
  lastFocus = document.activeElement;
  $("#mbody").innerHTML = html;
  modal.classList.add("open"); document.body.style.overflow = "hidden";
  $(".close", modal).focus(); fillBars(modal);
}
function closeModal() {
  modal.classList.remove("open"); document.body.style.overflow = "";
  if (location.hash.startsWith("#project-")) history.replaceState(null, "", location.pathname + location.search);
  if (lastFocus) lastFocus.focus();
}

function projectModal(id) {
  const p = projects.find(x => x.id === +id); if (!p) return;
  const c = pct(p);
  openModal(`<div class="thumb">${p.icon}</div><h3>${p.title}</h3><span class="tag">بيانات أولية قابلة للتعديل</span>
  <p>${p.description}</p><p><b>الهدف:</b> ${p.goal}</p>
  <div class="pm"><div class="meta"><span>نسبة الإنجاز</span><b>${c}%</b></div>${bar(c)}</div>
  <div class="kv"><div>المبلغ المستهدف<b>${fmt(p.target)} ${site.currency}</b></div><div>المبلغ المجموع<b>${fmt(p.collected)} ${site.currency}</b></div>
  <div>المستفيدون<b>${fmt(p.beneficiaries)}</b></div><div>حالة المشروع<b>${p.status}</b></div>
  <div>تاريخ البداية<b>${p.startDate}</b></div><div>آخر تحديث<b>${p.updateDate}</b></div></div>
  <div class="actions"><button class="btn gold" data-donate>ساهم الآن</button><button class="btn ghost" data-share="${p.id}">مشاركة المشروع</button><button class="btn ghost" data-close>إغلاق</button></div>`);
  history.replaceState(null, "", "#project-" + p.id);
}
function infoModal(item, extra) {
  openModal(`<div class="thumb">${item.icon || "📄"}</div><h3>${item.title}</h3><span class="tag">نموذج قابل للتعديل</span><p>${item.details || item.content}</p>${extra || ""}
  <div class="actions"><button class="btn gold" data-donate>ساهم الآن</button><button class="btn ghost" data-close>إغلاق</button></div>`);
}
function donateModal() {
  const d = donationInfo;
  const pay = m => `<div class="pay"><h4>${m.name}</h4><div class="num">${m.number}</div><small>اسم صاحب الحساب: ${d.beneficiaryName}</small><button class="btn ghost" data-copy="${m.number}">نسخ الرقم</button></div>`;
  openModal(`<h3>ساهم في صناعة الأثر</h3><p>يمكنك المساهمة عبر وسائل التحويل التالية</p>
  <small style="color:var(--mut)">اسم المستفيد: ${d.beneficiaryName}</small>
  ${pay(d.bankak)}${pay(d.ocash)}${pay(d.fawry)}
  <p style="margin-top:14px">الموقع لا يستقبل مدفوعات، وتتم المساهمة بالتحويل المباشر. بعد التحويل تواصل معنا لتأكيد المساهمة.</p>
  <div class="actions"><a class="btn gold" href="${d.whatsapp}" target="_blank" rel="noopener">تواصل معنا بعد التحويل</a><button class="btn ghost" data-close>إغلاق</button></div>`);
}
async function share(title, url) {
  if (navigator.share) {
    try { await navigator.share({ title, text: title + " - " + site.name, url }); return; }
    catch (e) { if (e.name === "AbortError") return; }
  }
  const t = encodeURIComponent(title + " " + url);
  openModal(`<h3>مشاركة</h3><p>${title}</p><div class="actions"><button class="btn gold" data-copy="${url}" data-msg="تم نسخ الرابط بنجاح ✓">نسخ الرابط</button>
  <a class="btn ghost" target="_blank" rel="noopener" href="https://wa.me/?text=${t}">مشاركة عبر واتساب</a>
  <a class="btn ghost" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}">مشاركة عبر Facebook</a>
  <button class="btn ghost" data-close>إغلاق</button></div>`);
}

// ---------- render ----------
function render() {
  $$("[data-site-name]").forEach(e => e.textContent = site.name);
  $("#statsGrid").innerHTML = statistics.map(s => `<div class="stat rv"><b data-count="${s.value}">0</b><span>${s.label}</span></div>`).join("");
  $("#projectsGrid").innerHTML = projects.map(p => `<article class="card rv" tabindex="0" role="button" data-project="${p.id}" aria-label="تفاصيل ${p.title}">
    <div class="thumb">${p.icon}</div><div class="cb"><h3>${p.title}</h3><p>${p.description}</p>${bar(pct(p))}
    <div class="meta"><span>${pct(p)}%</span><span>${p.status}</span></div><span class="btn ghost">التفاصيل</span></div></article>`).join("");
  $("#initGrid").innerHTML = initiatives.map((x, i) => `<article class="card rv" tabindex="0" role="button" data-init="${i}">
    <div class="thumb">${x.icon}</div><div class="cb"><h3>${x.title}</h3><p>${x.description}</p><span class="btn ghost">التفاصيل</span></div></article>`).join("");
  $("#reportsGrid").innerHTML = reports.map((x, i) => `<article class="card rv" tabindex="0" role="button" data-report="${i}">
    <div class="cb"><span class="tag">نموذج قابل للتعديل</span><h3>${x.title}</h3><p>${x.description}</p><div class="meta"><span>${x.date}</span></div><span class="btn ghost">عرض التقرير</span></div></article>`).join("");
  $("#timeline").innerHTML = achievements.map(a => `<li class="rv"><h3>${a.title}</h3><p>${a.text}</p></li>`).join("");
  const d = donationInfo;
  $("#contactList").innerHTML = `<li>📍 ${d.address}</li>` + d.phones.map(p => `<li>📞 ${tel(p)}</li>`).join("") + `<li>✉ <a href="${mailto}">${d.email}</a></li>` +
    site.social.map(s => `<li>🔗 <a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`).join("");
  $("#footContact").innerHTML = `<h3>تواصل معنا</h3><div>📍 ${d.address}</div>` + d.phones.map(p => `<div>📞 ${tel(p)}</div>`).join("") +
    `<div>✉ <a href="${mailto}">${d.email}</a></div><div style="margin-top:10px"><a class="btn ghost" style="min-height:40px;padding:0 18px" href="${d.whatsapp}" target="_blank" rel="noopener">واتساب</a></div>`;
  $$("[data-wa]").forEach(a => a.href = d.whatsapp);
  $$("[data-mail]").forEach(a => a.href = mailto);
  $("#callPanel").innerHTML = d.phones.map(tel).join("");
}

// ---------- events ----------
document.addEventListener("click", e => {
  const t = e.target.closest("[data-project],[data-init],[data-report],[data-donate],[data-share],[data-copy],[data-close],[data-sharesite]");
  if (e.target === modal) return closeModal();
  if (!t) return;
  const ds = t.dataset;
  if ("project" in ds) projectModal(ds.project);
  else if ("init" in ds) infoModal(initiatives[ds.init]);
  else if ("report" in ds) infoModal(reports[ds.report], `<p style="color:var(--mut)">التاريخ: ${reports[ds.report].date}</p>`);
  else if ("donate" in ds) { closeMenu(); donateModal(); }
  else if ("share" in ds) { const p = projects.find(x => x.id === +ds.share); share(p.title, location.href.split("#")[0] + "#project-" + p.id); }
  else if ("copy" in ds) copy(ds.copy, ds.msg);
  else if ("close" in ds) closeModal();
  else if ("sharesite" in ds) share(site.name, location.href.split("#")[0]);
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); $("#callPanel").classList.remove("open"); }
  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card[role=button]")) { e.preventDefault(); e.target.click(); }
});
$(".close", modal).addEventListener("click", closeModal);

const menu = $("#menu"), burger = $("#burger");
function closeMenu() { menu.classList.remove("open"); burger.classList.remove("x"); burger.setAttribute("aria-expanded", "false"); }
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.classList.toggle("x", o); burger.setAttribute("aria-expanded", o); });
menu.addEventListener("click", e => { if (e.target.tagName === "A") closeMenu(); });

$("#callBtn").addEventListener("click", e => { const o = $("#callPanel").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); });
document.addEventListener("click", e => { if (!e.target.closest("#float")) $("#callPanel").classList.remove("open"); });
setTimeout(() => $("#flabel").classList.add("hide"), 6000);

addEventListener("scroll", () => {
  $("#nav").classList.toggle("sc", scrollY > 20);
  $("#top").classList.toggle("show", scrollY > 500);
}, { passive: true });
$("#top").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

// ---------- animations ----------
function counter(el) {
  const end = +el.dataset.count, t0 = performance.now(), dur = 1800;
  (function step(t) {
    const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
    el.textContent = "+" + fmt(v);
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}
function observe() {
  if (!("IntersectionObserver" in window)) { $$(".rv").forEach(e => e.classList.add("in")); $$("[data-count]").forEach(e => e.textContent = "+" + fmt(e.dataset.count)); $$(".bar i").forEach(b => b.style.width = b.dataset.w + "%"); return; }
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target; el.classList.add("in");
    $$(".bar i", el).forEach(b => b.style.width = b.dataset.w + "%");
    $$("[data-count]", el).forEach(counter);
    if (el.matches("[data-count]")) counter(el);
    io.unobserve(el);
  }), { threshold: .15 });
  $$(".rv").forEach(e => io.observe(e));
}

// ---------- visit counter (GoatCounter) ----------
async function visits() {
  const els = $$("[data-visits]"), code = (site.goatcounter || "").trim();
  const set = t => els.forEach(e => e.textContent = t);
  if (!code) return set("عداد الزيارات سيتم تفعيله بعد إعداد الخدمة");
  const s = document.createElement("script");
  s.async = true; s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
  document.head.appendChild(s);
  try {
    const r = await fetch(`https://${code}.goatcounter.com/counter/TOTAL.json`);
    if (!r.ok) throw 0;
    set((await r.json()).count);
  } catch (_) { set("سيظهر العدد بعد تفعيل خيار عرض العدد في إعدادات GoatCounter"); }
}

render(); observe(); visits();
if (location.hash.startsWith("#project-")) projectModal(location.hash.slice(9));
