// اللغة: عربي (افتراضي) وإنجليزي. النص العربي مكتوب في index.html نفسه، وهنا الترجمة الإنجليزية بس.
var LANG=(document.documentElement.dataset.lang==="en")?"en":"ar";
var I18N_AR={};
document.querySelectorAll("[data-i18n]").forEach(function(n){I18N_AR[n.getAttribute("data-i18n")]=n.textContent});
document.querySelectorAll("[data-i18n-aria]").forEach(function(n){I18N_AR["@"+n.getAttribute("data-i18n-aria")]=n.getAttribute("aria-label")||""});
var I18N_AR_EXTRA={view_sample:"شوف النموذج ↗"};
var I18N_AR_DESC=(document.querySelector('meta[name="description"]')||{content:""}).content;
var I18N_EN={
"title":"NEL | Mohamed Yousry — websites & data entry",
"desc":"Mohamed Yousry (NEL), freelancer in Cairo. Clean websites and tidy data entry. You talk to me directly, no middleman.",
"@aria_nav":"Menu","nav_work":"Work","nav_services":"Services","nav_about":"About","nav_contact":"Contact",
"kicker":"Mohamed Yousry · Freelancer in Cairo",
"h1a":"Clean websites","h1b":"and tidy data work.",
"lead":"You talk to me directly. No agency, no middleman.",
"cta_work":"See my work","cta_contact":"Get in touch",
"@aria_theme":"Choose theme","@aria_day":"Day mode","@aria_night":"Night mode",
"@aria_scene":"A desk with a laptop in front of a window onto Cairo and the pyramids",
"how_title":"How we work",
"s1t":"The idea","s1p":"I ask first, then build. No guessing.",
"s2t":"The look","s2p":"Colours and fonts that fit your brand.",
"s3t":"The words","s3p":"I write the copy, or tidy up what you have.",
"s4t":"The code","s4p":"Hand-written, fast, no bloated templates.",
"s5t":"The phone","s5p":"I check every page on a phone before you see it.",
"s6t":"Going live","s6p":"I put the site online so it opens anywhere.",
"s7t":"Fixes","s7p":"You look, you tell me, I fix until you're happy.",
"s8t":"Handover","s8p":"The site is yours. I'm still around if you need me.",
"work_title":"Work",
"work_note":"Samples of my own work: I built these to show what I can do. Not real clients.",
"@aria_lb":"Enlarged image",
"svc_title":"Services",
"sv1t":"Website design & build",
"sv1p":"A landing page or a small site for your business, fast to load and solid on phones.",
"sv1l1":"Arabic, right-to-left by default","sv1l2":"Fast, with the SEO basics",
"sv1l3":"WhatsApp and email buttons wired up","sv1l4":"Checked on phone and desktop",
"sv2t":"Data entry",
"sv2p":"Clean Excel sheets, data typed up from files or photos, delivered on time.",
"sv2l1":"Clear, easy-to-read tables","sv2l2":"From files, photos or paper",
"sv2l3":"Accuracy checked before delivery","sv2l4":"Delivered on the agreed date",
"about_title":"Straight talk",
"about1":"If your idea won't work, I'll tell you before we start.",
"about2":"It has to work, not just look nice.",
"about3":"You talk to me, not to an agency.",
"faq_title":"Questions",
"q1":"How long does a site take?","a1":"Depends on the size, and on how ready your text and photos are. Once I understand the job I tell you a timeline before we start.",
"q2":"How do you price it?","a2":"By page count and how much detail is in it. Tell me what you need and I'll answer with a clear price before we start.",
"q3":"How many revisions?","a3":"We agree on the number before we start, so there are no surprises.",
"q4":"Do you put it online too?","a4":"Yes. I put it on hosting so it opens anywhere.",
"contact_a":"Got a project?","contact_b":"Let's start.",
"cta_wa":"WhatsApp","cta_mail":"Email","cta_mostaql":"Mostaql","cta_khamsat":"Khamsat","cta_cv":"Download CV",
"avail":"Available for work","footer_name":"Mohamed Yousry",
"view_sample":"View the sample ↗","reply":"I reply within hours"};
function t(k){var v=(LANG==="en"?I18N_EN[k]:I18N_AR[k]);if(v===undefined||v===null)v=I18N_AR_EXTRA[k];return (v===undefined||v===null)?k:v}
function applyLang(){
var en=LANG==="en";
document.documentElement.lang=en?"en":"ar";
document.documentElement.dir=en?"ltr":"rtl";
document.documentElement.dataset.lang=en?"en":"ar";
document.querySelectorAll("[data-i18n]").forEach(function(n){n.textContent=t(n.getAttribute("data-i18n"))});
document.querySelectorAll("[data-i18n-aria]").forEach(function(n){n.setAttribute("aria-label",t("@"+n.getAttribute("data-i18n-aria")))});
var m=document.querySelector('meta[name="description"]');if(m)m.content=en?(I18N_EN.desc||I18N_AR_DESC):I18N_AR_DESC;
var b=document.getElementById("lang");
if(b){b.textContent=en?"عربي":"EN";b.setAttribute("aria-label",en?"التبديل للعربية":"Switch to English")}
document.dispatchEvent(new CustomEvent("nel:lang",{detail:{lang:LANG}}));
}
var langBtn=document.getElementById("lang");
if(langBtn)langBtn.onclick=function(){LANG=(LANG==="en")?"ar":"en";try{localStorage.setItem("nel-lang",LANG)}catch(e){}applyLang()};
applyLang();
