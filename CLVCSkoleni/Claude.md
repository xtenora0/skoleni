# CLVC – Landing page školení Claude AI (Vibe Coding)

Statická vstupní (landing) stránka pro reklamní kampaně propagující školení
**Claude AI – vibe coding a tvorba aplikací bez programování (CLVC)**. Připravena
pro přímé nasazení na GitHub Pages, bez backendu.

## Struktura projektu

```
/
├── index.html              # Celá stránka (hero, přínosy, cílovky, program, CTA…)
├── css/
│   └── style.css           # Design systém (barvy, komponenty, responzivita)
├── js/
│   └── script.js           # Mobilní menu, AOS init, Lucide ikony, validace formuláře
├── assets/
│   ├── images/
│   │   └── og-cover.svg    # Placeholder obrázku pro sdílení (Open Graph)
│   └── icons/
│       └── favicon.svg     # Favicon
└── Claude.md                # Tento soubor
```

## Použité technologie

- **HTML5** – sémantické značky (`header`, `main`, `section`, `footer`, `nav`),
  strukturovaná data (`schema.org/Course`).
- **CSS3** – vlastní design systém přes CSS proměnné, grid/flexbox layout,
  plně responzivní (mobile-first breakpointy 680 / 860 / 1024 px).
- **Vanilla JavaScript** – mobilní navigace, sticky header, inicializace knihoven,
  klientská validace registračního formuláře.

### Externí závislosti (CDN, kompatibilní s GitHub Pages)

| Knihovna | Účel | Zdroj |
|---|---|---|
| [Google Fonts – Sora & Inter](https://fonts.google.com) | Typografie (nadpisy / text) | `fonts.googleapis.com` |
| [AOS – Animate On Scroll](https://michalsnik.github.io/aos/) | Jemné animace při scrollování | `cdn.jsdelivr.net/npm/aos@2.3.4` |
| [Lucide Icons](https://lucide.dev) | Ikonová sada (SVG ikony) | `cdn.jsdelivr.net/npm/lucide@0.469.0` |

Všechny závislosti se načítají z CDN přes `<link>`/`<script>` – žádný build krok,
žádný bundler, žádný Node.js server. Stránka funguje i offline po stažení, pokud
se CDN soubory nahradí lokálními kopiemi.

## Barevná paleta

Design vědomě **nepoužívá modrou** jako dominantní barvu. Kombinace:

- **Emerald** (`#0d5c46` → `#34c48a`) – primární akcentová barva, důvěryhodnost, IT/AI kontext
- **Charcoal** (`#0e1512` → `#2a3934`) – tmavé pozadí, moderní a profesionální dojem
- **Gold / Amber** (`#e2a63b` → `#f6d489`) – CTA tlačítka a zvýraznění, vysoký kontrast pro konverzi
- **Beige / Ink** (`#f4f1ea`) – světlý text na tmavém pozadí

## Obsahové sekce

1. **Hero** – název školení, slogan, dvě CTA tlačítka (Registrovat se / Chci více informací), klíčové údaje
2. **Trust strip** – pořadatel školení (ICT Pro s.r.o.)
3. **Přínosy** (`#prinosy`) – 6 benefitů s ikonou, názvem a popisem
4. **Pro koho** (`#pro-koho`) – 5 cílových skupin
5. **Program školení** (`#program`) – časová osa se 6 tematickými bloky
6. **Proč absolvovat / hodnota** (`#reference`) – 3 důvody účasti + statistiky
7. **CTA / registrace** (`#kontakt`) – registrační formulář + kontaktní placeholdery

## SEO

- Unikátní `<title>` a `meta description`
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`)
- Twitter Card meta tagy
- `schema.org/Course` strukturovaná data (JSON-LD) s termíny konání
- Sémantické HTML, jeden `<h1>`, logická hierarchie nadpisů
- `canonical` odkaz (nutno upravit na skutečnou doménu před nasazením)

## Formulář – důležité

Registrační formulář (`#registrationForm`) na GitHub Pages **nemá backend** –
`js/script.js` pouze ověří vyplnění a zobrazí potvrzující zprávu v prohlížeči.
Před ostrým nasazením je potřeba napojit reálné odeslání dat, např.:

- [Formspree](https://formspree.io/) nebo [Getform](https://getform.io/) (formulář → e-mail, zdarma pro nízký objem)
- Google Forms / Google Apps Script webhook
- Vlastní serverless funkce (Cloudflare Workers, Netlify Functions apod.)

Kontaktní údaje (telefon, e-mail) v sekci CTA a v patičce jsou **placeholdery** –
nahraďte reálnými údaji objednavatele školení.

## Obrázky

- `assets/images/og-cover.svg` je vektorový placeholder pro sdílení na sociálních
  sítích (Open Graph). Pro maximální kompatibilitu s reklamními systémy
  (Facebook/LinkedIn Ads) doporučujeme před spuštěním kampaně exportovat
  ekvivalentní **PNG/JPG 1200×630 px** a nahradit odkaz v `index.html`
  (`og:image`, `twitter:image`).
- `assets/icons/favicon.svg` je hotový SVG favicon, funguje ve všech moderních prohlížečích.

## Nasazení na GitHub Pages

1. Vytvořte nový repozitář na GitHubu (nebo použijte existující) a nahrajte do něj
   obsah tohoto adresáře (`index.html`, `css/`, `js/`, `assets/`).
   ```bash
   git init
   git add .
   git commit -m "Landing page CLVC"
   git branch -M main
   git remote add origin https://github.com/<uzivatel>/<repozitar>.git
   git push -u origin main
   ```
2. V repozitáři přejděte do **Settings → Pages**.
3. V sekci **Build and deployment** zvolte **Source: Deploy from a branch**.
4. Jako **Branch** vyberte `main` a složku `/ (root)`, uložte.
5. Po chvíli bude stránka dostupná na adrese:
   `https://<uzivatel>.github.io/<repozitar>/`
6. (Volitelné) Vlastní doména: v **Settings → Pages → Custom domain** zadejte
   doménu a nastavte odpovídající DNS záznam (CNAME) u poskytovatele domény.
   Aktualizujte `canonical`, `og:url` a strukturovaná data v `index.html` na
   finální doménu.

Žádný build krok není potřeba – GitHub Pages servíruje statické soubory přímo.

## Další rozvoj (návrhy)

- Napojit formulář na reálný backend/e-mail službu (viz výše).
- Nahradit `og-cover.svg` rastrovým obrázkem a doplnit fotografie z učeben do `assets/images/`.
- Přidat Google Analytics / Meta Pixel pro měření konverzí z reklamních kampaní
  (vložit snippet do `<head>` v `index.html`).
- Případně doplnit sekci s referencemi účastníků, jakmile budou k dispozici.
