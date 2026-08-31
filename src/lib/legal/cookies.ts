import { COMPANY, COMPANY_ADDRESS_INLINE } from "./company";
import type { LegalDoc } from "./types";

/**
 * Cookie Policy for the marketing website.
 *
 * The site currently sets only strictly necessary cookies (locale preference,
 * CSRF/session for the waitlist form), which do not require prior consent under
 * the ePrivacy Directive as implemented in Latvia. If analytics, a pixel, or any
 * other non-essential technology is ever added, a consent banner becomes
 * mandatory and section 4 must be updated to list it.
 */
export const cookiesDoc: LegalDoc = {
  en: `## 1. What this policy covers

This policy explains how the ${COMPANY.domain} website uses cookies and similar technologies, and what choices you have. It sits alongside our [Privacy Policy](/legal/privacy-policy), which explains how we handle personal data generally.

The Pieraksts mobile application does not use cookies. It stores a small amount of data on your device — your login session and your settings — which is deleted when you log out or uninstall the app.

## 2. What a cookie is

A cookie is a small text file that a website asks your browser to store. On a later visit the browser sends it back, so the site can recognise your browser and remember something about it — for example which language you chose. Similar technologies, such as local storage, do the same job by a different mechanism, and this policy covers them too.

## 3. Our approach

We use as few cookies as we can. At present the site sets only strictly necessary cookies: ones without which the website or a feature you asked for would not work. Under Latvian and EU law these do not require your prior consent, and we do not show a consent banner for them.

We do not use advertising cookies, and we do not allow third parties to track you across other websites through our site.

## 4. Cookies we set

### 4.1 Strictly necessary

- Language preference. Remembers whether you chose Latvian or English, so the site does not switch back on your next visit. Stored for up to 12 months. Set by us.
- Form security. A short-lived token used when you submit the waitlist form, to confirm the request came from our own page and to block automated abuse. Deleted when you close the browser. Set by us.
- Load balancing and security. Our hosting provider, Vercel, may set a technical cookie to route your request correctly and to protect the site from attack. Session-length. Set by Vercel as our processor.

### 4.2 Analytics

We do not currently run web analytics on this site. If we add it, we will use a privacy-preserving, cookie-free tool where possible, and where a cookie is required we will ask for your consent before setting it, and update this policy first.

### 4.3 Advertising and tracking

None. We do not set advertising cookies, and there are no third-party advertising or social media tracking scripts on this site.

## 5. Managing cookies

Because we only set strictly necessary cookies, there is nothing here for you to opt out of. You can still control cookies in your browser:

- Chrome — Settings, Privacy and security, Third-party cookies.
- Safari — Settings, Privacy.
- Firefox — Settings, Privacy & Security.
- Edge — Settings, Cookies and site permissions.

Blocking all cookies will stop the language preference from being remembered, and may prevent the waitlist form from submitting.

Most browsers also offer a "Do Not Track" or Global Privacy Control signal. Since we do not track you, there is nothing for these signals to change, but we honour them if we ever add technology to which they apply.

## 6. If this changes

If we introduce analytics, advertising, or any other non-essential cookie, we will publish an updated version of this policy and ask for your consent through a banner before any such cookie is set. You will be able to change or withdraw that consent at any time.

## 7. Contact

Questions about this policy:

- ${COMPANY.legalName}
- ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.en}
- Email: ${COMPANY.privacyEmail}
- Phone: ${COMPANY.phoneSupport}`,

  lv: `## 1. Ko šī politika aptver

Šī politika skaidro, kā mājaslapa ${COMPANY.domain} izmanto sīkdatnes un līdzīgas tehnoloģijas un kādas ir Tavas izvēles iespējas. Tā papildina mūsu [Privātuma politiku](/legal/privacy-policy), kas skaidro personas datu apstrādi kopumā.

Pieraksts mobilā lietotne sīkdatnes neizmanto. Tā ierīcē saglabā nelielu datu apjomu — pieteikšanās sesiju un iestatījumus —, kas tiek dzēsts, izrakstoties vai atinstalējot lietotni.

## 2. Kas ir sīkdatne

Sīkdatne ir neliela teksta datne, ko mājaslapa lūdz pārlūkprogrammai saglabāt. Nākamajā apmeklējumā pārlūks to nosūta atpakaļ, un mājaslapa var atpazīt pārlūku un atcerēties kaut ko par to — piemēram, izvēlēto valodu. Līdzīgas tehnoloģijas, piemēram, local storage, veic to pašu uzdevumu ar citu mehānismu, un šī politika attiecas arī uz tām.

## 3. Mūsu pieeja

Mēs izmantojam pēc iespējas mazāk sīkdatņu. Pašlaik mājaslapā tiek iestatītas tikai obligāti nepieciešamās sīkdatnes — tādas, bez kurām mājaslapa vai Tevis pieprasītā funkcija nedarbotos. Saskaņā ar Latvijas un ES normatīvajiem aktiem tām nav nepieciešama iepriekšēja piekrišana, un mēs par tām nerādām piekrišanas logu.

Mēs neizmantojam reklāmas sīkdatnes un neļaujam trešajām personām caur mūsu mājaslapu izsekot Tevi citās vietnēs.

## 4. Sīkdatnes, ko iestatām

### 4.1 Obligāti nepieciešamās

- Valodas izvēle. Atceras, vai izvēlējies latviešu vai angļu valodu, lai nākamajā apmeklējumā tā nemainītos. Glabāta līdz 12 mēnešiem. Iestata mēs.
- Formas drošība. Īslaicīgs tokens, ko izmanto, iesniedzot gaidītāju saraksta formu, lai apstiprinātu, ka pieprasījums nāk no mūsu lapas, un bloķētu automatizētu ļaunprātīgu izmantošanu. Tiek dzēsts, aizverot pārlūku. Iestata mēs.
- Slodzes sadale un drošība. Mūsu mitināšanas pakalpojuma sniedzējs Vercel var iestatīt tehnisku sīkdatni, lai pareizi maršrutētu pieprasījumu un aizsargātu mājaslapu no uzbrukumiem. Sesijas ilgumā. Iestata Vercel kā mūsu apstrādātājs.

### 4.2 Analītika

Šobrīd mēs šajā mājaslapā neizmantojam tīmekļa analītiku. Ja to pievienosim, izmantosim privātumu saudzējošu, no sīkdatnēm brīvu risinājumu, kur tas iespējams; ja sīkdatne būs nepieciešama, mēs vispirms atjaunosim šo politiku un lūgsim Tavu piekrišanu pirms tās iestatīšanas.

### 4.3 Reklāma un izsekošana

Nav. Mēs neiestatām reklāmas sīkdatnes, un mājaslapā nav trešo personu reklāmas vai sociālo tīklu izsekošanas skriptu.

## 5. Sīkdatņu pārvaldība

Tā kā iestatām tikai obligāti nepieciešamās sīkdatnes, no kā atteikties šeit nav. Sīkdatnes joprojām vari pārvaldīt pārlūkprogrammā:

- Chrome — Iestatījumi, Privātums un drošība, Trešo pušu sīkfaili.
- Safari — Iestatījumi, Privātums.
- Firefox — Iestatījumi, Privātums un drošība.
- Edge — Iestatījumi, Sīkfaili un vietņu atļaujas.

Bloķējot visas sīkdatnes, valodas izvēle netiks atcerēta un gaidītāju saraksta forma var netikt nosūtīta.

Lielākā daļa pārlūku piedāvā arī "Do Not Track" vai Global Privacy Control signālu. Tā kā mēs Tevi neizsekojam, šiem signāliem nav ko mainīt, taču mēs tos ievērosim, ja jebkad pievienosim tehnoloģiju, uz kuru tie attiecas.

## 6. Ja tas mainīsies

Ja ieviesīsim analītiku, reklāmu vai jebkādu citu neobligātu sīkdatni, mēs publicēsim atjaunotu šīs politikas redakciju un pirms jebkuras šādas sīkdatnes iestatīšanas lūgsim Tavu piekrišanu ar piekrišanas logu. Šo piekrišanu varēsi jebkurā laikā mainīt vai atsaukt.

## 7. Kontakti

Jautājumiem par šo politiku:

- ${COMPANY.legalName}
- ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.lv}
- E-pasts: ${COMPANY.privacyEmail}
- Tālrunis: ${COMPANY.phoneSupport}`,
};
