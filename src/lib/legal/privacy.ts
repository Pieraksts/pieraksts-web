import { COMPANY, COMPANY_ADDRESS_INLINE } from "./company";
import type { LegalDoc } from "./types";

/**
 * Privacy Policy — GDPR-shaped and written to satisfy App Store Review
 * Guideline 5.1.1. Apple expects the policy to identify every data type
 * collected, how it is collected, all third parties it is shared with, the
 * retention and deletion policy, and how a user withdraws consent.
 *
 * The categories below must stay in step with the App Store Connect privacy
 * "nutrition labels" — if a new SDK or data type is added to the app, update
 * both. Section 6 lists the processors by name; keep it accurate.
 */
export const privacyDoc: LegalDoc = {
  en: `## 1. Who controls your data

${COMPANY.legalName} is the data controller for the personal data described in this policy.

- Legal entity: ${COMPANY.legalName}
- Registration number: ${COMPANY.regNo}
- VAT number: ${COMPANY.vatNo}
- Registered address: ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.en}
- Email for privacy matters: ${COMPANY.privacyEmail}
- Phone (support): ${COMPANY.phoneSupport}
- Phone (technical): ${COMPANY.phoneTechnical}

This policy covers the Pieraksts mobile application, the website at ${COMPANY.domain}, and our email communications. It explains what we collect, why, how long we keep it, who we share it with, and what you can do about it.

## 2. A short summary

- We collect what we need to run a booking service, and no more.
- We do not sell your personal data, and we do not use it for advertising.
- We do not track you across other companies' apps or websites.
- You can delete your account from inside the app at any time.
- Precise location is used only while you are looking at nearby salons, and only if you allow it.

## 3. What we collect

### 3.1 Account and profile data

- your email address and account identifier held in our authentication system;
- your first name, last name and display name;
- your phone number, where you provide one;
- your role on the platform (client, salon staff, salon owner) and whether you have finished onboarding;
- your profile photograph, if you upload one;
- your language preference and notification settings.

### 3.2 Booking data

- the salon, service and staff member for each booking;
- the client's name and, if given, phone number;
- free-text notes attached to a booking, which may include information you choose to share about allergies, sensitivities or preferences;
- the date, time, status and origin of the booking;
- the booking's event history: created, changed, cancelled, completed, or recorded as a no-show.

Booking notes may contain health-related information. We treat that as a special category of personal data under Article 9 of the GDPR and process it only on the basis of your explicit consent, given when you enter it, and only so the salon can perform the service safely. You do not have to provide it.

### 3.3 Salon profile data

- the salon's name, address, city, street and geographic coordinates;
- the salon's description, contact phone number, website and category tags;
- photographs of the salon, its staff and its work;
- the salon's services, prices, staff list and opening hours.

### 3.4 Reviews, ratings and reports

- the reviews and ratings you publish, together with the account that published them;
- reports you submit about content or another user, and the blocks you set;
- our record of the moderation decision and any action taken.

### 3.5 Location data

If you grant the permission, the app uses your device's location to show salons near you and to sort search results by distance. Location is used while you are using that part of the app. We do not store a history of your movements, and we do not use location for advertising. You can refuse the permission and still use the app by searching by city or address, and you can withdraw it at any time in your device settings.

### 3.6 Device and technical data

- push notification tokens, the platform they belong to, and whether they are active;
- delivery records for notifications, including failed attempts and error codes;
- app version, device model and operating system version, collected with error reports;
- server and security logs, which include IP address, timestamps and the request made.

### 3.7 Subscription data (salons only)

Salons pay for the salon subscription and for Boost commission through Stripe. The salon owner adds a payment method on a Stripe web page. Stripe processes the payment. We do not receive or store the card number or other payment credentials. We receive from Stripe the status of the subscription and of each payment, the trial and billing period dates, and references to the customer, the subscription and the payment method.

We also process the business's billing details, registration and VAT numbers and the invoice records that accounting law requires us to keep.

### 3.8 Website waitlist

When you join the waitlist on ${COMPANY.domain} we process your email address, the role you are interested in, your language, whether you opted in to marketing email, the version of the consent text you agreed to, the time of signup, and an unsubscribe token.

### 3.9 Support correspondence

When you contact us we keep the message, your contact details and our reply, so we can deal with the issue and show what was decided if it is disputed later.

## 4. What we do not collect

- We do not collect payment card details. Client payments for salon services happen offline, directly between you and the salon. Stripe processes the salon subscription and Boost payments, and we do not see the card details.
- We do not use advertising identifiers, and we do not integrate third-party advertising or cross-app tracking software. The App Tracking Transparency prompt therefore does not appear, because we do not track.
- We do not buy personal data from data brokers.
- We do not access your contacts, photos library, microphone or calendar, except that the app asks for access to your camera or a single photo when you choose to upload an image.

## 5. Why we process it, and on what legal basis

- To create and run your account, take and manage bookings, and send you booking notifications — performance of a contract (GDPR Article 6(1)(b)).
- To show you salons near you, where you have allowed location access — consent (Article 6(1)(a)), which you may withdraw in your device settings.
- To store health-related information you enter in a booking note — explicit consent (Article 9(2)(a)).
- To keep the service secure, prevent fraud and abuse, moderate content, and deal with disputes — our legitimate interests in running a safe platform (Article 6(1)(f)).
- To provide support and answer your messages — performance of a contract and legitimate interests.
- To notify you about the launch in Riga and, if you asked for it, to send occasional product news — consent (Article 6(1)(a)), which you may withdraw at any time.
- To keep accounting records and meet tax, consumer and other legal duties — legal obligation (Article 6(1)(c)).

Where we rely on legitimate interests, we have weighed those interests against your rights and freedoms; you may object at any time under section 9.

## 6. Who we share it with

We share personal data with the processors below, each under a written data processing agreement, and only to the extent they need it.

- Supabase — database, authentication, file storage and backend functions. Hosts account, booking, salon and content data.
- Expo (Expo Application Services) — delivery of push notifications to your device.
- Apple — App Store distribution and push notification transport (APNs).
- Stripe processes payments for salon subscriptions and Boost commission.
- Vercel — hosting of the ${COMPANY.domain} website and its server logs.
- Our transactional email provider — delivery of booking, account and waitlist email.
- Apple Maps and the device's own location services — rendering maps and resolving your position on the device.

We also share data with salons, but only what they need: a salon sees the bookings made with it and the client details attached to those bookings. Other clients never see your account data; other users see only what you deliberately publish, such as a review.

We may disclose data to professional advisers, auditors, or to a public authority or court where the law requires it. If the business is sold or restructured, data may transfer to the acquirer, who will remain bound by this policy or one at least as protective.

We do not sell personal data, and we do not share it with third parties for their own marketing.

## 7. International transfers

Our infrastructure is chosen to keep personal data in the European Union or the European Economic Area wherever possible. Some processors, including Apple and parts of Expo's and Vercel's infrastructure, are established in the United States or operate global networks. Where personal data is transferred outside the EEA, we rely on the European Commission's Standard Contractual Clauses, or an adequacy decision where one applies, together with supplementary technical measures such as encryption in transit and at rest.

You may ask us for details of the safeguards in place by writing to ${COMPANY.privacyEmail}.

## 8. How long we keep it

- Account and profile data — for as long as your account exists, then deleted when you delete the account.
- Bookings and booking history — for as long as your account exists, then deleted when you delete the account.
- Reviews and ratings — until you delete them or delete your account.
- Booking notes containing health information — deleted 12 months after the appointment, or sooner if you delete them.
- Reports, blocks and moderation records — 2 years from the decision, so that repeat behaviour can be identified.
- Push tokens — until the token becomes invalid, the app is uninstalled, or the account is deleted.
- Server and security logs — up to 12 months. Our hosting providers set the exact period.
- Waitlist contacts — until the Riga launch communication is complete and you have had a reasonable opportunity to use the service, or until you unsubscribe, whichever comes first.
- Support correspondence — 2 years from the last message.
- Accounting records for subscriptions and invoices — at least 5 years, as required by the Latvian Accounting Law.
- After a salon owner deletes the account, we keep the salon's specialists (names, roles and descriptions), services and prices, working schedule and client list for 5 years. Nobody can open them in the app. Then we delete them with the salon invoices.

Backups are retained on a rolling basis and overwritten within 30 days, so deleted data disappears from backups within that window.

## 9. Your rights

Under the GDPR you have the right to:

- ask what personal data we hold about you and receive a copy;
- have inaccurate data corrected;
- have your data erased;
- restrict how we process your data while a question about it is resolved;
- object to processing that we base on legitimate interests, including profiling;
- receive the data you gave us in a portable, machine-readable format, and have it sent to another controller where technically feasible;
- withdraw any consent you have given, at any time, without affecting the lawfulness of what we did before you withdrew it;
- not be subject to a decision based solely on automated processing that produces legal or similarly significant effects. We do not make such decisions. Our content filter flags material for human review; it does not act alone in closing accounts.

To exercise any of these, write to ${COMPANY.privacyEmail}. We reply within one month, and will tell you if we need to extend that by up to two further months because the request is complex. We may ask you to confirm your identity first. There is no charge unless a request is manifestly unfounded or excessive.

To withdraw marketing consent, use the unsubscribe link in any marketing email, change the setting in the app, or write to us. To withdraw location consent, turn off location access for Pieraksts in your device settings.

If you believe we have handled your data wrongly, please tell us first so that we can put it right. You also have the right to complain to the supervisory authority: Datu valsts inspekcija (Data State Inspectorate), Elijas iela 17, Riga, LV-1050, Latvia. If you live elsewhere in the EU, you may complain to your own national authority instead.

## 10. Deleting your account and your data

You can delete your account at any time in the app, under your profile settings. This is a full deletion, not a deactivation: your profile, credentials, bookings, notes, reviews and photographs are removed from our live systems, future bookings are cancelled, and the salons concerned are told only that the booking is cancelled.

We keep only what the law obliges us to keep, principally accounting records for salon subscriptions, and we delete that at the end of the statutory period. One exception applies to salon owners. When a salon owner deletes the account, we keep the salon records listed in section 8 for 5 years. Backups are overwritten within 30 days.

If you cannot use the in-app option, see our [Account Deletion](/legal/account-deletion) page, or write to ${COMPANY.privacyEmail} and we will complete the deletion within 30 days.

## 11. How we protect your data

- Traffic is encrypted in transit with TLS, and data is encrypted at rest by our hosting providers.
- Access to the database is controlled by row-level security policies, so a user's queries can only reach the rows they are entitled to see.
- Administrative access is limited to the people who need it, is individually accounted for, and requires multi-factor authentication.
- Passwords are stored only as salted hashes; we never see them in readable form.
- We log security events and review them, and we keep our dependencies patched.

No system is perfectly secure. If a personal data breach occurs that is likely to result in a risk to your rights and freedoms, we will notify the Data State Inspectorate within 72 hours and, where the risk is high, tell you directly without undue delay.

## 12. Children

The Service is intended for people aged 13 and over, which is the age of digital consent in Latvia. We do not knowingly collect personal data from children under 13. If you believe a child under 13 has given us personal data, write to ${COMPANY.privacyEmail} and we will delete it. Users under 18 should use the Service with the consent and supervision of a parent or guardian.

## 13. Automated content filtering

Content published on the Service is screened automatically before it appears, to catch material that breaks our [Community Guidelines](/legal/community-guidelines). Where something is flagged, a person reviews it before any account is restricted. You can contest any moderation decision by writing to ${COMPANY.supportEmail}.

## 14. Cookies

The ${COMPANY.domain} website uses a small number of cookies and similar technologies. These are described in our [Cookie Policy](/legal/cookie-policy). The mobile app does not use cookies.

## 15. Changes to this policy

We may update this policy to reflect changes in the Service, our processors, or the law. The current version is always published at ${COMPANY.domain} with its effective date. Where a change materially affects you, we will notify you by email or in the app before it takes effect.

## 16. Contact

- ${COMPANY.legalName}
- ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.en}
- Email: ${COMPANY.privacyEmail}
- Phone (support): ${COMPANY.phoneSupport}
- Phone (technical): ${COMPANY.phoneTechnical}`,

  lv: `## 1. Kas ir datu pārzinis

${COMPANY.legalName} ir šajā politikā aprakstīto personas datu pārzinis.

- Juridiskā persona: ${COMPANY.legalName}
- Reģistrācijas numurs: ${COMPANY.regNo}
- PVN numurs: ${COMPANY.vatNo}
- Juridiskā adrese: ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.lv}
- E-pasts privātuma jautājumos: ${COMPANY.privacyEmail}
- Tālrunis (atbalsts): ${COMPANY.phoneSupport}
- Tālrunis (tehniskie jautājumi): ${COMPANY.phoneTechnical}

Šī politika attiecas uz Pieraksts mobilo lietotni, mājaslapu ${COMPANY.domain} un mūsu e-pasta saziņu. Tā skaidro, ko mēs vācam, kāpēc, cik ilgi glabājam, kam nododam un ko Tu vari darīt.

## 2. Īsumā

- Mēs vācam tikai to, kas nepieciešams rezervāciju pakalpojuma darbībai.
- Mēs nepārdodam Tavus personas datus un neizmantojam tos reklāmai.
- Mēs Tevi neizsekojam citu uzņēmumu lietotnēs vai mājaslapās.
- Savu kontu jebkurā laikā vari dzēst pats lietotnē.
- Precīzu atrašanās vietu izmantojam tikai brīdī, kad skaties tuvumā esošos salonus, un tikai tad, ja esi to atļāvis.

## 3. Kādus datus mēs apstrādājam

### 3.1 Konta un profila dati

- e-pasta adrese un konta identifikators mūsu autentifikācijas sistēmā;
- vārds, uzvārds un attēlotais vārds;
- tālruņa numurs, ja to esi norādījis;
- loma platformā (klients, salona darbinieks, salona īpašnieks) un onboarding statuss;
- profila fotoattēls, ja to esi augšupielādējis;
- valodas izvēle un paziņojumu iestatījumi.

### 3.2 Pierakstu dati

- salons, pakalpojums un darbinieks katram pierakstam;
- klienta vārds un, ja norādīts, tālruņa numurs;
- brīvā teksta piezīmes pie pieraksta, kurās vari norādīt informāciju par alerģijām, jutīgumu vai vēlmēm;
- pieraksta datums, laiks, statuss un izcelsme;
- pieraksta notikumu vēsture: izveidots, mainīts, atcelts, pabeigts vai atzīmēts kā neierašanās.

Piezīmes pie pieraksta var saturēt ar veselību saistītu informāciju. Mēs to uzskatām par īpašu personas datu kategoriju VDAR 9. panta izpratnē un apstrādājam tikai uz Tavas nepārprotamas piekrišanas pamata, ko sniedz, šo informāciju ievadot, un tikai tāpēc, lai salons varētu pakalpojumu sniegt droši. Šī informācija nav obligāta.

### 3.3 Salona profila dati

- salona nosaukums, adrese, pilsēta, iela un ģeogrāfiskās koordinātes;
- salona apraksts, kontakttālrunis, mājaslapa un kategorijas;
- salona, darbinieku un darbu fotoattēli;
- salona pakalpojumi, cenas, darbinieku saraksts un darba laiks.

### 3.4 Atsauksmes, vērtējumi un ziņojumi

- Tavas publicētās atsauksmes un vērtējumi kopā ar kontu, kas tos publicējis;
- ziņojumi, ko iesniedz par saturu vai citu lietotāju, un Tevis uzliktie bloķējumi;
- mūsu ieraksts par pieņemto moderācijas lēmumu un veiktajām darbībām.

### 3.5 Atrašanās vietas dati

Ja atļauj, lietotne izmanto ierīces atrašanās vietu, lai parādītu tuvumā esošos salonus un sakārtotu meklēšanas rezultātus pēc attāluma. Atrašanās vieta tiek izmantota tikai brīdī, kad lieto šo lietotnes daļu. Mēs neglabājam Tavu pārvietošanās vēsturi un neizmantojam atrašanās vietu reklāmai. Atļauju vari nedot un lietotni lietot, meklējot pēc pilsētas vai adreses, un vari to jebkurā laikā atsaukt ierīces iestatījumos.

### 3.6 Ierīces un tehniskie dati

- push paziņojumu tokeni, to platforma un aktivitātes statuss;
- paziņojumu piegādes ieraksti, tostarp neveiksmīgi mēģinājumi un kļūdu kodi;
- lietotnes versija, ierīces modelis un operētājsistēmas versija, kas tiek iekļauti kļūdu ziņojumos;
- servera un drošības žurnāli, kuros ir IP adrese, laika zīmogi un veiktais pieprasījums.

### 3.7 Abonementa dati (tikai saloniem)

Saloni maksā par salona abonementu un Boost komisiju, izmantojot Stripe. Maksājuma veidu salona īpašnieks pievieno Stripe tīmekļa lapā. Maksājumu apstrādā Stripe. Mēs nesaņemam un neglabājam kartes numuru vai citus maksājumu datus. No Stripe mēs saņemam abonementa un katra maksājuma statusu, bezmaksas perioda un norēķinu perioda datumus, kā arī atsauces uz klientu, abonementu un maksājuma veidu.

Mēs apstrādājam arī uzņēmuma rekvizītus, reģistrācijas un PVN numuru, kā arī rēķinu ierakstus, kas mums jāglabā grāmatvedību regulējošo normatīvo aktu dēļ.

### 3.8 Mājaslapas gaidītāju saraksts

Pievienojoties gaidītāju sarakstam ${COMPANY.domain}, mēs apstrādājam e-pasta adresi, interesējošo lomu, valodu, informāciju par to, vai esi piekritis mārketinga e-pastiem, piekrišanas teksta versiju, pieteikšanās laiku un atteikšanās tokenu.

### 3.9 Sarakste ar atbalstu

Kad sazinies ar mums, mēs saglabājam ziņu, Tavu kontaktinformāciju un mūsu atbildi, lai jautājumu atrisinātu un vēlāk varētu pierādīt, kas tika nolemts.

## 4. Ko mēs nevācam

- Mēs nevācam maksājumu karšu datus. Klientu norēķini par salona pakalpojumiem notiek ārpus lietotnes, tieši ar salonu. Salonu abonementu un Boost maksājumus apstrādā Stripe, un kartes datus mēs neredzam.
- Mēs neizmantojam reklāmas identifikatorus un neintegrējam trešo personu reklāmas vai starplietotņu izsekošanas rīkus. Tāpēc App Tracking Transparency uzvedne netiek rādīta — mēs neizsekojam.
- Mēs nepērkam personas datus no datu tirgotājiem.
- Mēs nepiekļūstam Taviem kontaktiem, fotoattēlu bibliotēkai, mikrofonam vai kalendāram; lietotne prasa piekļuvi kamerai vai atsevišķam attēlam tikai tad, kad pats izvēlies augšupielādēt attēlu.

## 5. Apstrādes mērķi un tiesiskais pamats

- Konta izveide un uzturēšana, pierakstu pieņemšana un pārvaldība, paziņojumu sūtīšana — līguma izpilde (VDAR 6. panta 1. punkta b) apakšpunkts).
- Tuvumā esošo salonu rādīšana, ja esi atļāvis piekļuvi atrašanās vietai — piekrišana (6. panta 1. punkta a) apakšpunkts), kuru vari atsaukt ierīces iestatījumos.
- Ar veselību saistītas informācijas glabāšana pieraksta piezīmēs — nepārprotama piekrišana (9. panta 2. punkta a) apakšpunkts).
- Pakalpojuma drošība, krāpšanas un pārkāpumu novēršana, satura moderācija un strīdu risināšana — mūsu leģitīmās intereses uzturēt drošu platformu (6. panta 1. punkta f) apakšpunkts).
- Atbalsta sniegšana un atbildēšana uz ziņām — līguma izpilde un leģitīmās intereses.
- Paziņošana par atvēršanu Rīgā un, ja esi to lūdzis, retu jaunumu sūtīšana — piekrišana (6. panta 1. punkta a) apakšpunkts), kuru vari jebkurā laikā atsaukt.
- Grāmatvedības uzskaite un nodokļu, patērētāju tiesību un citu normatīvo prasību izpilde — juridisks pienākums (6. panta 1. punkta c) apakšpunkts).

Ja balstāmies uz leģitīmajām interesēm, mēs tās esam izsvēruši pret Tavām tiesībām un brīvībām; Tu jebkurā laikā vari iebilst saskaņā ar 9. sadaļu.

## 6. Kam dati tiek nodoti

Personas datus nododam turpmāk minētajiem apstrādātājiem, katram uz rakstiska datu apstrādes līguma pamata un tikai nepieciešamajā apjomā.

- Supabase — datubāze, autentifikācija, failu glabātava un backend funkcijas. Glabā kontu, pierakstu, salonu un satura datus.
- Expo (Expo Application Services) — push paziņojumu piegāde uz Tavu ierīci.
- Apple — izplatīšana App Store un push paziņojumu transports (APNs).
- Stripe apstrādā maksājumus par salonu abonementiem un Boost komisiju.
- Vercel — mājaslapas ${COMPANY.domain} mitināšana un tās servera žurnāli.
- Mūsu transakciju e-pasta pakalpojuma sniedzējs — pierakstu, konta un gaidītāju saraksta e-pastu piegāde.
- Apple Maps un ierīces atrašanās vietas pakalpojumi — karšu attēlošana un pozīcijas noteikšana ierīcē.

Datus nododam arī saloniem, bet tikai tos, kas tiem nepieciešami: salons redz pie tā veiktos pierakstus un ar tiem saistītos klienta datus. Citi klienti nekad neredz Tava konta datus; citi lietotāji redz tikai to, ko apzināti publicē, piemēram, atsauksmi.

Datus varam izpaust profesionāliem konsultantiem, revidentiem vai valsts iestādei un tiesai, ja to prasa normatīvie akti. Uzņēmuma pārdošanas vai pārstrukturēšanas gadījumā dati var tikt nodoti ieguvējam, kuram paliks saistoša šī vai vismaz līdzvērtīgi aizsargājoša politika.

Mēs personas datus nepārdodam un nenododam trešajām personām to pašu mārketinga vajadzībām.

## 7. Datu nodošana ārpus EEZ

Mūsu infrastruktūra ir izvēlēta tā, lai personas dati pēc iespējas paliktu Eiropas Savienībā vai Eiropas Ekonomikas zonā. Daļa apstrādātāju, tostarp Apple un atsevišķas Expo un Vercel infrastruktūras daļas, ir reģistrēti ASV vai izmanto globālus tīklus. Ja personas dati tiek nodoti ārpus EEZ, mēs balstāmies uz Eiropas Komisijas standarta līguma klauzulām vai uz lēmumu par aizsardzības līmeņa pietiekamību, ja tāds piemērojams, kopā ar papildu tehniskiem pasākumiem, piemēram, šifrēšanu pārraides laikā un glabāšanā.

Informāciju par piemērotajiem aizsardzības pasākumiem vari lūgt, rakstot uz ${COMPANY.privacyEmail}.

## 8. Cik ilgi datus glabājam

- Konta un profila dati — kamēr pastāv konts; tiek dzēsti, dzēšot kontu.
- Pieraksti un pierakstu vēsture — kamēr pastāv konts; tiek dzēsti, dzēšot kontu.
- Atsauksmes un vērtējumi — līdz tos dzēs pats vai dzēsīsi kontu.
- Pierakstu piezīmes ar veselības informāciju — dzēstas 12 mēnešus pēc pieraksta vai agrāk, ja tās dzēs pats.
- Ziņojumi, bloķējumi un moderācijas ieraksti — 2 gadus no lēmuma, lai varētu konstatēt atkārtotus pārkāpumus.
- Push tokeni — līdz tokens kļūst nederīgs, lietotne tiek atinstalēta vai konts tiek dzēsts.
- Servera un drošības žurnāli — līdz 12 mēnešiem. Precīzu termiņu nosaka mūsu mitināšanas pakalpojumu sniedzēji.
- Gaidītāju saraksta kontakti — līdz Rīgas atvēršanas komunikācija ir pabeigta un Tev ir bijusi saprātīga iespēja pakalpojumu izmantot, vai līdz brīdim, kad atsakies, atkarībā no tā, kas iestājas pirmais.
- Sarakste ar atbalstu — 2 gadus no pēdējās ziņas.
- Grāmatvedības ieraksti par abonementiem un rēķiniem — vismaz 5 gadus, kā to nosaka Grāmatvedības likums.
- Pēc tam, kad salona īpašnieks dzēš kontu, salona speciālistus (vārdus, amatus un aprakstus), pakalpojumus un cenas, darba grafiku un klientu sarakstu glabājam 5 gadus. Lietotnē tos neviens nevar atvērt. Pēc tam tos dzēšam kopā ar salona rēķiniem.

Rezerves kopijas tiek uzturētas rotācijā un pārrakstītas 30 dienu laikā, tāpēc dzēstie dati no rezerves kopijām pazūd šajā termiņā.

## 9. Tavas tiesības

Saskaņā ar VDAR Tev ir tiesības:

- uzzināt, kādus datus par Tevi glabājam, un saņemt to kopiju;
- pieprasīt neprecīzu datu labošanu;
- pieprasīt datu dzēšanu;
- pieprasīt apstrādes ierobežošanu, kamēr tiek risināts jautājums par datiem;
- iebilst pret apstrādi, kas balstīta uz leģitīmajām interesēm, tostarp profilēšanu;
- saņemt mums sniegtos datus pārnesamā, mašīnlasāmā formātā un lūgt nosūtīt tos citam pārzinim, ja tas tehniski iespējams;
- jebkurā laikā atsaukt sniegto piekrišanu, neietekmējot apstrādes likumību pirms atsaukšanas;
- netikt pakļautam lēmumam, kas balstīts tikai uz automatizētu apstrādi un rada tiesiskas vai līdzīgi būtiskas sekas. Mēs šādus lēmumus nepieņemam. Mūsu satura filtrs atzīmē materiālu cilvēka pārbaudei, bet pats kontus neslēdz.

Lai izmantotu kādu no šīm tiesībām, raksti uz ${COMPANY.privacyEmail}. Mēs atbildam mēneša laikā un informēsim, ja pieprasījuma sarežģītības dēļ šo termiņu būs nepieciešams pagarināt vēl līdz diviem mēnešiem. Mēs varam lūgt vispirms apliecināt identitāti. Maksa netiek piemērota, izņemot acīmredzami nepamatotus vai pārmērīgus pieprasījumus.

Lai atsauktu piekrišanu mārketingam, izmanto atteikšanās saiti jebkurā mārketinga e-pastā, maini iestatījumu lietotnē vai raksti mums. Lai atsauktu piekrišanu atrašanās vietai, izslēdz Pieraksts piekļuvi atrašanās vietai ierīces iestatījumos.

Ja uzskati, ka esam apstrādājuši Tavus datus nepareizi, lūdzu, vispirms pasaki to mums, lai varam to labot. Tev ir arī tiesības iesniegt sūdzību uzraudzības iestādei: Datu valsts inspekcija, Elijas iela 17, Rīga, LV-1050, Latvija. Ja dzīvo citā ES valstī, sūdzību vari iesniegt savas valsts iestādei.

## 10. Konta un datu dzēšana

Kontu jebkurā laikā vari dzēst lietotnē, sadaļā Profils. Tā ir pilnīga dzēšana, nevis deaktivizēšana: profils, piekļuves dati, pieraksti, piezīmes, atsauksmes un fotoattēli tiek izņemti no mūsu darba sistēmām, nākotnes pieraksti tiek atcelti, un attiecīgajiem saloniem tiek paziņots tikai tas, ka pieraksts ir atcelts.

Mēs saglabājam tikai to, kas mums jāglabā normatīvo aktu dēļ, galvenokārt grāmatvedības ierakstus par salonu abonementiem, un dzēšam tos pēc likumā noteiktā termiņa beigām. Salonu īpašniekiem ir viens izņēmums. Kad salona īpašnieks dzēš kontu, 8. sadaļā minētos salona ierakstus glabājam 5 gadus. Rezerves kopijas tiek pārrakstītas 30 dienu laikā.

Ja nevari izmantot dzēšanas iespēju lietotnē, skati [Konta dzēšanas](/legal/account-deletion) lapu vai raksti uz ${COMPANY.privacyEmail}, un mēs dzēšanu pabeigsim 30 dienu laikā.

## 11. Kā mēs datus aizsargājam

- Datu pārraide ir šifrēta ar TLS, un dati glabāšanas vietā ir šifrēti mūsu mitināšanas pakalpojumu līmenī.
- Piekļuvi datubāzei kontrolē rindu līmeņa drošības (RLS) politikas, tāpēc lietotāja vaicājumi var sasniegt tikai tās rindas, kuras tam ir tiesības redzēt.
- Administratīvā piekļuve ir ierobežota tikai tiem cilvēkiem, kuriem tā nepieciešama, ir personiski izsekojama un prasa daudzfaktoru autentifikāciju.
- Paroles glabājam tikai kā sālītus jaucējkodus; mēs tās nekad neredzam salasāmā veidā.
- Mēs reģistrējam un pārskatām drošības notikumus un uzturam atjauninātas programmatūras atkarības.

Neviena sistēma nav pilnībā droša. Ja notiek personas datu aizsardzības pārkāpums, kas varētu radīt risku Tavām tiesībām un brīvībām, mēs 72 stundu laikā par to paziņosim Datu valsts inspekcijai un, ja risks ir augsts, bez nepamatotas kavēšanās informēsim arī Tevi.

## 12. Bērni

Pakalpojums paredzēts personām no 13 gadu vecuma — tas ir digitālās piekrišanas vecums Latvijā. Mēs apzināti nevācam datus par bērniem, kas jaunāki par 13 gadiem. Ja uzskati, ka bērns, kas jaunāks par 13 gadiem, mums ir sniedzis personas datus, raksti uz ${COMPANY.privacyEmail}, un mēs tos dzēsīsim. Lietotājiem, kas jaunāki par 18 gadiem, Pakalpojums jālieto ar vecāka vai aizbildņa piekrišanu un uzraudzību.

## 13. Automatizēta satura filtrēšana

Pakalpojumā publicētais saturs pirms parādīšanas tiek automātiski pārbaudīts, lai atklātu materiālu, kas pārkāpj mūsu [Kopienas vadlīnijas](/legal/community-guidelines). Ja kaut kas tiek atzīmēts, pirms konta ierobežošanas to izvērtē cilvēks. Jebkuru moderācijas lēmumu vari apstrīdēt, rakstot uz ${COMPANY.supportEmail}.

## 14. Sīkdatnes

Mājaslapā ${COMPANY.domain} tiek izmantots neliels skaits sīkdatņu un līdzīgu tehnoloģiju. Tās aprakstītas mūsu [Sīkdatņu politikā](/legal/cookie-policy). Mobilā lietotne sīkdatnes neizmanto.

## 15. Politikas izmaiņas

Mēs varam šo politiku atjaunot, lai atspoguļotu Pakalpojuma, apstrādātāju vai normatīvo aktu izmaiņas. Aktuālā redakcija vienmēr ir publicēta ${COMPANY.domain} ar tās spēkā stāšanās datumu. Ja izmaiņas Tevi būtiski ietekmē, mēs par tām paziņosim e-pastā vai lietotnē pirms to spēkā stāšanās.

## 16. Kontakti

- ${COMPANY.legalName}
- ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.lv}
- E-pasts: ${COMPANY.privacyEmail}
- Tālrunis (atbalsts): ${COMPANY.phoneSupport}
- Tālrunis (tehniskie jautājumi): ${COMPANY.phoneTechnical}`,
};
