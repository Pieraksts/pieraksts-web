/**
 * Legal copy for the public site, ported from the mobile app's
 * `docs/legal/*` and extended to cover the website waitlist / lead collection
 * (GDPR). Stored as a small Markdown subset (## / ### headings, "- " bullet
 * lists, and paragraphs) and rendered by <LegalDocument>.
 *
 * NOTE: this is operator-provided boilerplate, not legal advice. Have it
 * reviewed by a qualified lawyer before launch. Keep the effective date and the
 * waitlist consent version (`CONSENT_VERSION` in src/lib/consent.ts) in sync
 * whenever the wording materially changes.
 */

export const LEGAL_EFFECTIVE_DATE = "2026-06-13";

type LegalDoc = { en: string; lv: string };

export const termsDoc: LegalDoc = {
  en: `## 1. General information

This app, website (pieraksts.app), and related services are provided by:

- Legal entity: SIA Callido
- Registration number: 40203600833
- Country: Latvia
- Email: support@pieraksts.app
- Phone (support and marketing): +371 28338094
- Phone (technical support): +371 27303530

By using the app or website, you confirm that you have read and agree to these Terms of Service.

## 2. Service description

The service provides:

- booking creation, management, and cancellation for clients;
- salon profile, staff, service, and scheduling management for salon owners;
- automated notifications (push and email) about booking status updates.

Online payments for clients are currently not enabled in the app.

Through our website you can also join our waitlist to be notified when Pieraksts launches in Riga. The personal data you provide when joining the waitlist is processed as described in our Privacy Policy.

## 3. Account and access

- Users must provide accurate and truthful account information.
- Users are responsible for account security and confidentiality of access credentials.
- We may restrict or suspend access where there is a reasonable suspicion of terms violations or abuse.

## 4. Age requirement

- The service may be used from age 13 (industry-standard approach in the EU/GDPR digital services context).
- If a user is under 18, parental or guardian supervision and consent is recommended.

## 5. Booking and conduct rules

Users must:

- attend bookings on time or cancel in a reasonable timeframe;
- not use the service for fraudulent or unlawful activities;
- not submit misleading data or third-party data without a legal basis.

## 6. Cancellation and no-show policy

If a user does not attend a booking or repeatedly cancels outside a reasonable timeframe:

- a warning is issued on the first confirmed case;
- repeated violations may lead to restricted or blocked access to the app.

## 7. Intellectual property

All rights to the app and website, including code, design, text, and branding elements, belong to SIA Callido or its lawful partners, except user-submitted content.

## 8. Limitation of liability

- The service is provided "as is", to the extent permitted by law.
- We are not liable for indirect losses resulting from service interruptions, third-party actions, or inaccurate user-provided data.

## 9. Service changes

We may update or modify service functionality due to security, technical, operational, or legal requirements.

## 10. Governing law and disputes

These Terms are governed by the laws of the Republic of Latvia. Disputes that cannot be resolved by negotiation are settled in the courts of the Republic of Latvia.

## 11. Contact for legal matters

For questions about these Terms:

- Email: support@pieraksts.app
- Phone: +371 28338094
- Technical support: +371 27303530`,

  lv: `## 1. Vispārīga informācija

Šo lietotni, mājaslapu (pieraksts.app) un saistītos pakalpojumus nodrošina:

- Juridiskā persona: SIA Callido
- Reģistrācijas numurs: 40203600833
- Valsts: Latvija
- E-pasts: support@pieraksts.app
- Tālrunis (atbalsts un mārketings): +371 28338094
- Tālrunis (tehniskie jautājumi): +371 27303530

Lietojot lietotni vai mājaslapu, Tu apstiprini, ka esi iepazinies ar šiem Lietošanas noteikumiem un piekrīti tiem.

## 2. Pakalpojuma apraksts

Pakalpojums nodrošina:

- pierakstu izveidi, pārvaldīšanu un atcelšanu klientiem;
- salona profilu, darbinieku, pakalpojumu un grafiku pārvaldi salonu īpašniekiem;
- automatizētus paziņojumus (push un e-pasta veidā) par pierakstu statusu.

Šobrīd lietotnē nav ieviesti tiešsaistes maksājumi klientiem.

Mūsu mājaslapā Tu vari arī pievienoties gaidītāju sarakstam, lai uzzinātu, kad Pieraksts atvērsies Rīgā. Personas datus, ko sniedz, pievienojoties sarakstam, mēs apstrādājam tā, kā aprakstīts mūsu Privātuma politikā.

## 3. Konts un piekļuve

- Lietotājam ir jānodrošina precīzi un patiesi konta dati.
- Lietotājs atbild par sava konta drošību un piekļuves datu konfidencialitāti.
- Mēs drīkstam ierobežot vai apturēt piekļuvi, ja ir pamatotas aizdomas par noteikumu pārkāpumu vai pakalpojuma ļaunprātīgu izmantošanu.

## 4. Vecuma ierobežojums

- Pakalpojumu drīkst lietot no 13 gadu vecuma (industrijas standarta pieeja digitālajiem pakalpojumiem ES/GDPR kontekstā).
- Ja lietotājs ir jaunāks par 18 gadiem, ieteicama vecāka vai aizbildņa uzraudzība un piekrišana.

## 5. Rezervāciju un uzvedības noteikumi

Lietotājam ir pienākums:

- ierasties laikā vai savlaicīgi atcelt pierakstu;
- neizmantot pakalpojumu krāpnieciskos vai citos prettiesiskos nolūkos;
- neievadīt maldinošus vai citas personas datus bez tiesiska pamata.

## 6. Atcelšanas un neierašanās politika

Ja lietotājs neierodas uz pierakstu vai atkārtoti atceļ pierakstus neatbilstoši saprātīgam termiņam:

- pirmajā konstatētajā gadījumā tiek izteikts brīdinājums;
- atkārtota pārkāpuma gadījumā piekļuve lietotnei var tikt ierobežota vai liegta.

## 7. Intelektuālais īpašums

Visas tiesības uz lietotni un mājaslapu, tostarp kodu, dizainu, tekstus un zīmola elementus, pieder SIA Callido vai tā tiesiskajiem partneriem, izņemot pašu lietotāju ievadīto saturu.

## 8. Atbildības ierobežojums

- Mēs nodrošinām pakalpojumu "kā ir" ietvaros, ciktāl to pieļauj normatīvie akti.
- Mēs neatbildam par netiešiem zaudējumiem, kas radušies no pakalpojuma lietošanas traucējumiem, trešo personu rīcības vai lietotāja ievadītu neprecīzu datu.

## 9. Pakalpojuma izmaiņas

Mēs varam atjaunot vai mainīt pakalpojuma funkcionalitāti, tostarp drošības, tehnisku vai juridisku prasību dēļ.

## 10. Piemērojamie tiesību akti un strīdu izskatīšana

Šos noteikumus reglamentē Latvijas Republikas tiesību akti. Strīdi, kurus nav iespējams atrisināt pārrunu ceļā, izskatāmi Latvijas Republikas tiesā.

## 11. Saziņai par juridiskiem jautājumiem

Jautājumiem par šiem noteikumiem:

- E-pasts: support@pieraksts.app
- Tālrunis: +371 28338094
- Tehniskais atbalsts: +371 27303530`,
};

export const privacyDoc: LegalDoc = {
  en: `## 1. Data controller

The data controller for personal data processing is:

- Legal entity: SIA Callido
- Registration number: 40203600833
- Country: Latvia
- Email: support@pieraksts.app
- Phone (support and marketing): +371 28338094
- Phone (technical support): +371 27303530

## 2. What data we process

Based on the current implementation, the following data categories are processed.

### 2.1 Account and profile data

- authentication data in Supabase Auth (for example, email and account identifier);
- profile fields: first name, last name, phone number, display name, roles, and onboarding status.

### 2.2 Booking data

- salon, service, and staff identifiers;
- client name, client phone (if provided), booking notes;
- booking date, time, status, and source;
- booking event history (created, updated, cancelled, no-show, completed).

### 2.3 Salon profile data

- salon name and location data (address, city, street, coordinates);
- public profile fields: description, contact phone, website, category tags;
- salon, staff, and gallery photos.

### 2.4 Technical and notification data

- push notification device tokens (Expo push token), platform, active status;
- notification delivery technical records (attempts and error statuses);
- system logs for security and service reliability.

### 2.5 Payment data

Client online payments are currently not enabled. In a future phase, invoice-based charging may be introduced for business fees.

### 2.6 Website waitlist and marketing contacts

When you join the waitlist on our website, we process:

- your email address;
- your role interest (client, salon owner, or both);
- your preferred language;
- whether you opted in to receive marketing emails;
- a record of the consent text version you agreed to and the time of signup;
- an unsubscribe token used to manage your email preferences.

## 3. Data sources

We obtain personal data:

- directly from you (for example, registration, profile input, bookings, and joining the waitlist on our website);
- from app usage events (technical events and logs);
- from salon owners when they create or edit client bookings.

## 4. Processing purposes and legal basis

We process data to:

- provide core app functionality and booking execution (contract performance);
- provide communication, support, and notifications (contract performance, legitimate interests);
- notify you about the launch of Pieraksts in Riga and the updates you asked for when joining the waitlist (consent);
- where you have opted in, send occasional product news and offers (consent), which you can withdraw at any time;
- maintain security, prevent abuse, and handle dispute scenarios (legitimate interests);
- comply with legal obligations, where applicable (legal obligation).

## 5. Data retention

### 5.1 Current practice (factual state)

The current implementation does not define a single automatic retention period across all data categories. Data is kept while the account and related records remain in the system, or until deleted on a valid legal basis or request.

### 5.2 Technical deletion by relationships

Some records are deleted automatically via relational constraints (for example, deleting a user or salon may cascade to related records).

### 5.3 Planned approach

We may introduce explicit retention windows by data category in a future update and inform users accordingly.

### 5.4 Waitlist contacts

Waitlist contact data is kept until the launch communication is completed and you have had a reasonable opportunity to use the service, or until you unsubscribe or withdraw your consent — whichever is earlier.

## 6. Data sharing

We may share data with processors that provide technical infrastructure:

- Supabase (database, authentication, storage, and backend functions);
- push notification infrastructure (Expo push processing);
- email delivery services (transactional, waitlist, and support communication).

We do not sell personal data to third parties for marketing purposes.

## 7. International transfers

If processors use infrastructure outside Latvia or the EU/EEA, we apply an appropriate legal basis for such transfers as required by applicable law.

## 8. Your rights

You have the right to:

- request access to your personal data;
- request correction of inaccurate data;
- request deletion or restriction of processing;
- object to processing based on legitimate interests;
- withdraw consent at any time (for example, via the unsubscribe link in our emails or by contacting us), without affecting the lawfulness of processing before withdrawal;
- request data portability, where applicable;
- lodge a complaint with the supervisory authority (in Latvia, the Data State Inspectorate / Datu valsts inspekcija).

## 9. Data security

We use reasonable technical and organizational safeguards, including access control, authorization, and row-level security policies in the database, to protect personal data against unauthorized access, loss, or unlawful alteration.

## 10. Minors

The service is intended for users aged 13 and above. If a user is under 18, parental or guardian supervision and consent is recommended.

## 11. Privacy contact

For privacy questions or data subject requests:

- Email: support@pieraksts.app
- Phone: +371 28338094
- Technical support: +371 27303530

## 12. Policy updates

We may update this Privacy Policy from time to time to reflect legal, technical, or service changes. The latest version is made available through official pieraksts.app channels.`,

  lv: `## 1. Pārzinis

Personas datu apstrādes pārzinis:

- Juridiskā persona: SIA Callido
- Reģistrācijas numurs: 40203600833
- Valsts: Latvija
- E-pasts: support@pieraksts.app
- Tālrunis (atbalsts un mārketings): +371 28338094
- Tālrunis (tehniskie jautājumi): +371 27303530

## 2. Kādi dati tiek apstrādāti

Balstoties uz pašreizējo sistēmas ieviešanu, tiek apstrādātas šādas datu kategorijas.

### 2.1 Konta un profila dati

- autentifikācijas dati Supabase Auth vidē (piemēram, e-pasts un konta identifikators);
- profila lauki: vārds, uzvārds, tālrunis, attēlotais vārds, lomas un onboarding statuss.

### 2.2 Rezervāciju dati

- salona, pakalpojuma un darbinieka identifikatori;
- klienta vārds, klienta tālrunis (ja norādīts), piezīmes;
- rezervācijas datums, laiks, statuss un avots;
- rezervāciju notikumu vēsture (izveidots, atjaunots, atcelts, neierašanās, pabeigts).

### 2.3 Salona profila dati

- salona nosaukums un lokācijas dati (adrese, pilsēta, iela, koordinātes);
- publiskie profila lauki: apraksts, kontakttālrunis, mājaslapa, kategorijas;
- salona, darbinieku un galerijas foto.

### 2.4 Tehniskie un paziņojumu dati

- push paziņojumu ierīces tokeni (Expo push token), platforma, aktivitātes statuss;
- paziņojumu piegādes tehniskie ieraksti (mēģinājumi, kļūdu statusi);
- sistēmas žurnālu ieraksti drošības un darbspējas nodrošināšanai.

### 2.5 Maksājumu dati

Šobrīd klientu tiešsaistes maksājumi lietotnē nav ieviesti. Nākamajā etapā var tikt izmantota rēķinu izrakstīšana biznesa klientiem par pakalpojuma komisijām.

### 2.6 Mājaslapas gaidītāju saraksts un mārketinga kontakti

Kad pievienojies gaidītāju sarakstam mūsu mājaslapā, mēs apstrādājam:

- tavu e-pasta adresi;
- tavu interesi (klients, salona īpašnieks vai abi);
- tavu izvēlēto valodu;
- vai esi piekritis saņemt mārketinga e-pastus;
- ierakstu par piekrišanas teksta versiju, kurai piekriti, un pievienošanās laiku;
- atteikšanās tokenu, ko izmanto tavu e-pasta iestatījumu pārvaldīšanai.

## 3. Datu avoti

Personas datus mēs iegūstam:

- no Tevis paša (piemēram, reģistrācija, profils, rezervācijas un pievienošanās gaidītāju sarakstam mūsu mājaslapā);
- no lietotnes lietošanas procesa (tehniskie notikumi un žurnāli);
- no salonu īpašniekiem, kas pievieno vai rediģē klientu pierakstus.

## 4. Apstrādes mērķi un tiesiskais pamats

Mēs apstrādājam datus, lai:

- nodrošinātu lietotnes funkcionalitāti un rezervāciju izpildi (līguma izpilde);
- nodrošinātu komunikāciju, atbalstu un paziņojumus (līguma izpilde, leģitīmās intereses);
- paziņotu Tev par Pieraksts atvēršanu Rīgā un par jaunumiem, ko lūdzi, pievienojoties gaidītāju sarakstam (piekrišana);
- ja esi tam piekritis, sūtītu retas ziņas par jaunumiem un piedāvājumiem (piekrišana), kuru vari atsaukt jebkurā laikā;
- uzturētu drošību, novērstu pārkāpumus un strīdu situācijas (leģitīmās intereses);
- pildītu normatīvos pienākumus (juridisks pienākums), ja tāda prasība rodas.

## 5. Datu glabāšanas termiņi

### 5.1 Pašreizējā prakse (faktiskā situācija)

Pašreizējā ieviešanā nav noteikts vienots automātisks dzēšanas termiņš visām datu kategorijām. Dati glabājas, kamēr konts un saistītie ieraksti eksistē sistēmā, vai līdz tie tiek dzēsti pēc tiesiska pamata vai pieprasījuma.

### 5.2 Tehniska dzēšana saistību dēļ

Atsevišķi ieraksti tiek dzēsti automātiski relāciju līmenī (piemēram, dzēšot lietotāju vai salonu, saistītajiem ierakstiem var tikt piemērota kaskādes dzēšana).

### 5.3 Plānotā pieeja

Mēs varam ieviest precīzus glabāšanas termiņus pa datu kategorijām atsevišķā atjauninājumā, par to informējot lietotājus.

### 5.4 Gaidītāju saraksta kontakti

Gaidītāju saraksta kontaktu dati tiek glabāti, līdz atvēršanas komunikācija ir pabeigta un Tev ir bijusi saprātīga iespēja izmantot pakalpojumu, vai līdz brīdim, kad atsakies vai atsauc savu piekrišanu — atkarībā no tā, kurš notikums iestājas pirmais.

## 6. Kam dati tiek nodoti

Mēs varam nodot datus datu apstrādātājiem, kas nodrošina tehnoloģisko infrastruktūru:

- Supabase (datubāze, autentifikācija, glabātava, backend funkcijas);
- push paziņojumu infrastruktūra (Expo push paziņojumu apstrāde);
- e-pasta piegādes pakalpojumi (transakciju, gaidītāju saraksta un atbalsta komunikācija).

Dati netiek pārdoti trešajām personām mārketinga nolūkos.

## 7. Starptautiska datu pārsūtīšana

Ja apstrādātāji darbojas ar infrastruktūru ārpus Latvijas vai ES/EEZ, mēs nodrošinām atbilstošu tiesisko pamatu datu pārsūtīšanai, ciktāl to pieprasa normatīvie akti.

## 8. Tavas tiesības

Tev ir tiesības:

- pieprasīt piekļuvi saviem datiem;
- pieprasīt neprecīzu datu labošanu;
- pieprasīt datu dzēšanu vai apstrādes ierobežošanu;
- iebilst pret apstrādi leģitīmo interešu pamata;
- atsaukt piekrišanu jebkurā laikā (piemēram, izmantojot atteikšanās saiti mūsu e-pastos vai sazinoties ar mums), neietekmējot apstrādes likumību pirms atsaukšanas;
- pieprasīt datu pārnesamību, ja tas piemērojams;
- iesniegt sūdzību uzraudzības iestādei (Latvijā — Datu valsts inspekcijai).

## 9. Datu drošība

Mēs izmantojam saprātīgus tehniskus un organizatoriskus drošības pasākumus, tostarp piekļuves kontroli, autorizāciju un RLS politikas datubāzes līmenī, lai aizsargātu datus pret neautorizētu piekļuvi, zudumu vai neatļautu izmaiņu.

## 10. Nepilngadīgo dati

Pakalpojums paredzēts lietotājiem no 13 gadu vecuma. Ja lietotājs ir jaunāks par 18 gadiem, ieteicama vecāka vai aizbildņa uzraudzība un piekrišana.

## 11. Saziņa par privātumu

Jautājumiem vai pieprasījumiem par personas datu apstrādi:

- E-pasts: support@pieraksts.app
- Tālrunis: +371 28338094
- Tehniskais atbalsts: +371 27303530

## 12. Politikas izmaiņas

Mēs varam periodiski atjaunot šo Privātuma politiku, lai atspoguļotu normatīvo aktu vai pakalpojuma izmaiņas. Aktuālā versija vienmēr ir pieejama oficiālajos pieraksts.app kanālos.`,
};
