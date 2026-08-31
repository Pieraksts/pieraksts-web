import { COMPANY, COMPANY_ADDRESS_INLINE } from "./company";
import type { LegalDoc } from "./types";

/**
 * Community Guidelines — the public statement of the content moderation regime
 * that App Store Review Guideline 1.2 requires for apps with user-generated
 * content. The four things App Review looks for are all named explicitly here:
 * (1) a filter applied before publication, (2) a report mechanism, (3) a block
 * mechanism, and (4) published contact details. Section 5 states the 24-hour
 * response commitment.
 *
 * These are promises about how the app behaves. Do not publish them until the
 * corresponding features exist in the app.
 */
export const guidelinesDoc: LegalDoc = {
  en: `## 1. Why these guidelines exist

Pieraksts is a place to find a salon and book an appointment. It works when profiles are honest, reviews are real, and nobody has to deal with abuse. These guidelines say what is allowed, what is not, and what we do about it. They apply to everyone — clients, salon staff and salon owners — and everywhere content appears: profiles, photographs, service listings, reviews, ratings and booking notes.

Breaking these guidelines is a breach of our [Terms of Service](/legal/terms-of-service) and can cost you your account.

## 2. What we expect

- Be accurate. Describe your salon, your services and your prices as they really are.
- Be real. Write reviews only about services you actually received.
- Be respectful. Disagree with the service, not with the person.
- Respect other people's privacy. Do not publish someone else's information, photograph or health details without their permission.
- Show up, or cancel in time. Other people are waiting for that slot.

## 3. What is not allowed

We have zero tolerance for objectionable content and for abusive users. Do not post, send or do any of the following.

### 3.1 Harassment and hate

- Threats, intimidation, stalking or targeted harassment of any person.
- Slurs or attacks based on race, ethnicity, national origin, immigration status, religion, disability, illness, sex, gender identity, sexual orientation, or age.
- Encouraging others to harass someone.
- Publishing another person's private information — home address, phone number, identity document, health condition — without their consent.

### 3.2 Sexual content

- Pornographic or sexually explicit material of any kind.
- Sexual solicitation, or offering or seeking sexual services.
- Any sexualised depiction of a minor. We report this to the authorities and permanently ban the account, without warning and without exception.

### 3.3 Violence and harm

- Content depicting, glorifying or inciting violence.
- Content encouraging self-harm, suicide, or disordered eating.
- Promotion of illegal drugs, or of prescription-only treatments offered without the required licence.

### 3.4 Dishonest content

- Reviews that are invented, paid for, written in exchange for a discount, or written about your own business or a competitor.
- Impersonating another person, salon or brand.
- Claiming a qualification, certification or licence you do not hold.
- Before-and-after photographs that are not of your own work, or that have been edited to misrepresent a result.
- Medical or health claims about a treatment that are not true.

### 3.5 Illegal and unsafe practice

- Offering a treatment that requires a licence or medical qualification you do not have. In Latvia this includes injectables, laser treatments and other procedures reserved to qualified practitioners.
- Operating without the registrations and permits your business needs.
- Any use of the platform for fraud, money laundering, or the sale of prohibited goods.

### 3.6 Spam and platform abuse

- Advertising unrelated businesses, chain messages, or bulk unsolicited contact.
- Creating fake accounts or multiple accounts to evade a restriction.
- Trying to move a booking off the platform in order to escape these guidelines.
- Scraping, automated data collection, reverse engineering, or attacks on the security or availability of the Service.

### 3.7 Intellectual property

- Photographs, text, logos or designs that belong to someone else and that you do not have the right to use.

## 4. Photographs

Photographs are how salons are judged, so we hold them to a standard.

- Publish only photographs you took or own the rights to.
- If an identifiable person appears, you must have their consent to publish the image.
- Do not publish photographs of a client, or of a client's treatment, without that client's explicit and separately obtained consent.
- No nudity, no medically graphic images beyond what is needed to show the work, and no images of minors used for promotion.

## 5. Filtering, reporting and blocking

We do four things to keep the platform safe.

- Filtering. Text and images are screened automatically before they are published. Content that matches our prohibited categories is held back for human review rather than going live.
- Reporting. Every profile, review, photograph and message has a report control. Choose a reason, add detail if you want, and send. Reports are confidential — the person you report is not told who reported them.
- Blocking. You can block any user. A blocked user cannot contact you, cannot see or respond to your content, and cannot book with you if you are a salon. You can unblock at any time in your settings.
- Human review, fast. We review every report and act within 24 hours. Content that is reported and found to breach these guidelines is removed, and the user who posted it is ejected where the breach warrants it.

You can also always reach a person directly. The Service is operated by ${COMPANY.legalName} (registration number ${COMPANY.regNo}), ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.en}:

- Email: ${COMPANY.supportEmail}
- Phone: ${COMPANY.phoneSupport}
- Technical: ${COMPANY.phoneTechnical}

For anything involving immediate danger to a person, contact the emergency services on 112 first, then tell us.

## 6. What happens when a rule is broken

Depending on how serious the breach is and whether it has happened before, we will:

- remove the content;
- issue a warning explaining what was wrong;
- restrict what the account can do, for example by suspending reviews or bookings;
- suspend the account temporarily;
- terminate the account permanently and refuse any new account.

Some things bring immediate permanent termination with no warning: sexual content involving a minor, credible threats of violence, and fraud.

Where the law requires it, we report content to the competent authorities.

## 7. If you think we got it wrong

Write to ${COMPANY.supportEmail} with your account email and what happened. A person will look at it again, and we will tell you the outcome. If our decision was wrong we will reverse it and restore the content or the account.

## 8. Changes

We may update these guidelines as the Service grows or the law changes. The current version is always at ${COMPANY.domain}, and we will notify you of material changes in the app or by email.`,

  lv: `## 1. Kāpēc šīs vadlīnijas pastāv

Pieraksts ir vieta, kur atrast salonu un rezervēt vizīti. Tas darbojas tad, ja profili ir godīgi, atsauksmes ir īstas un nevienam nav jāsaskaras ar aizskarošu izturēšanos. Šīs vadlīnijas nosaka, kas ir atļauts, kas nav un ko mēs ar to darām. Tās attiecas uz visiem — klientiem, salonu darbiniekiem un salonu īpašniekiem — un uz visām vietām, kur parādās saturs: profiliem, fotoattēliem, pakalpojumu sarakstiem, atsauksmēm, vērtējumiem un pierakstu piezīmēm.

Šo vadlīniju pārkāpums ir mūsu [Lietošanas noteikumu](/legal/terms-of-service) pārkāpums un var izmaksāt Tev kontu.

## 2. Ko mēs sagaidām

- Esi precīzs. Apraksti savu salonu, pakalpojumus un cenas tā, kā tie patiešām ir.
- Esi īsts. Raksti atsauksmes tikai par pakalpojumiem, ko patiešām esi saņēmis.
- Esi cieņpilns. Nepiekrīti pakalpojumam, nevis cilvēkam.
- Ciení citu privātumu. Nepublicē citas personas informāciju, fotoattēlu vai veselības datus bez tās atļaujas.
- Ierodies vai atcel savlaicīgi. Uz šo laiku gaida citi cilvēki.

## 3. Kas nav atļauts

Mums ir nulles tolerance pret nepieņemamu saturu un ļaunprātīgiem lietotājiem. Nepublicē, nesūti un nedari neko no turpmāk minētā.

### 3.1 Aizskaršana un naids

- Draudi, iebiedēšana, vajāšana vai mērķtiecīga jebkuras personas aizskaršana.
- Apvainojumi vai uzbrukumi rases, etniskās vai nacionālās piederības, imigrācijas statusa, reliģijas, invaliditātes, slimības, dzimuma, dzimtes identitātes, seksuālās orientācijas vai vecuma dēļ.
- Citu mudināšana kādu aizskart.
- Citas personas privātās informācijas — dzīvesvietas adreses, tālruņa numura, personu apliecinoša dokumenta, veselības stāvokļa — publicēšana bez tās piekrišanas.

### 3.2 Seksuāla rakstura saturs

- Jebkāda veida pornogrāfisks vai seksuāli tiešs materiāls.
- Seksuāla rakstura piedāvājumi vai seksuālu pakalpojumu piedāvāšana un meklēšana.
- Jebkāds seksualizēts nepilngadīgas personas attēlojums. Par to mēs ziņojam iestādēm un neatgriezeniski slēdzam kontu bez brīdinājuma un bez izņēmumiem.

### 3.3 Vardarbība un kaitējums

- Saturs, kas attēlo, slavina vai kūda uz vardarbību.
- Saturs, kas veicina sevis ievainošanu, pašnāvību vai ēšanas traucējumus.
- Nelegālu vielu popularizēšana vai recepšu procedūru piedāvāšana bez nepieciešamās licences.

### 3.4 Negodīgs saturs

- Izdomātas, apmaksātas, par atlaidi rakstītas atsauksmes, kā arī atsauksmes par savu vai konkurenta uzņēmumu.
- Uzdošanās par citu personu, salonu vai zīmolu.
- Kvalifikācijas, sertifikāta vai licences piedēvēšana sev, ja tādas nav.
- "Pirms un pēc" fotoattēli, kas nav par paša darbu vai ir apstrādāti, lai maldinātu par rezultātu.
- Nepatiesi medicīniski vai veselības apgalvojumi par procedūru.

### 3.5 Prettiesiska un nedroša prakse

- Tādas procedūras piedāvāšana, kurai nepieciešama licence vai medicīniska kvalifikācija, kuras Tev nav. Latvijā tas ietver injicējamās procedūras, lāzera procedūras un citas darbības, kas atļautas tikai kvalificētiem speciālistiem.
- Darbība bez uzņēmumam nepieciešamajām reģistrācijām un atļaujām.
- Platformas izmantošana krāpšanai, noziedzīgi iegūtu līdzekļu legalizācijai vai aizliegtu preču tirdzniecībai.

### 3.6 Surogātpasts un platformas ļaunprātīga izmantošana

- Nesaistītu uzņēmumu reklamēšana, ķēdes vēstules vai masveida nevēlama saziņa.
- Viltus kontu vai vairāku kontu veidošana, lai apietu ierobežojumu.
- Mēģinājumi pārcelt pierakstu ārpus platformas, lai izvairītos no šīm vadlīnijām.
- Datu izgūšana, automatizēta datu vākšana, apgrieztā inženierija vai uzbrukumi Pakalpojuma drošībai un pieejamībai.

### 3.7 Intelektuālais īpašums

- Fotoattēli, teksti, logo vai dizains, kas pieder citai personai un ko Tev nav tiesību izmantot.

## 4. Fotoattēli

Pēc fotoattēliem salonus vērtē, tāpēc mēs tiem izvirzām standartu.

- Publicē tikai fotoattēlus, ko esi uzņēmis pats vai uz kuriem Tev ir tiesības.
- Ja attēlā redzama identificējama persona, Tev jābūt tās piekrišanai attēla publicēšanai.
- Nepublicē klienta vai klienta procedūras fotoattēlus bez šī klienta nepārprotamas un atsevišķi saņemtas piekrišanas.
- Nekāda kailuma, nekādu medicīniski drastisku attēlu ārpus tā, kas nepieciešams darba parādīšanai, un nekādu nepilngadīgo attēlu reklāmas nolūkos.

## 5. Filtrēšana, ziņošana un bloķēšana

Platformas drošībai mēs darām četras lietas.

- Filtrēšana. Teksti un attēli pirms publicēšanas tiek automātiski pārbaudīti. Saturs, kas atbilst mūsu aizliegtajām kategorijām, tiek aizturēts cilvēka pārbaudei, nevis publicēts uzreiz.
- Ziņošana. Katram profilam, atsauksmei, fotoattēlam un ziņai ir ziņošanas poga. Izvēlies iemeslu, pievieno detaļas, ja vēlies, un nosūti. Ziņojumi ir konfidenciāli — persona, par kuru ziņots, neuzzina, kas par to ziņojis.
- Bloķēšana. Jebkuru lietotāju vari bloķēt. Bloķēts lietotājs nevar ar Tevi sazināties, nevar redzēt un komentēt Tavu saturu un, ja esi salons, nevar pie Tevis pierakstīties. Bloķēšanu jebkurā laikā vari atcelt iestatījumos.
- Ātra cilvēka pārbaude. Mēs izskatām katru ziņojumu un rīkojamies 24 stundu laikā. Saturs, par kuru ziņots un kurš atzīts par šo vadlīniju pārkāpumu, tiek dzēsts, un lietotājs, kas to publicējis, tiek izslēgts, ja pārkāpums to attaisno.

Ar cilvēku vienmēr vari sazināties tieši. Pakalpojumu nodrošina ${COMPANY.legalName} (reģistrācijas numurs ${COMPANY.regNo}), ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.lv}:

- E-pasts: ${COMPANY.supportEmail}
- Tālrunis: ${COMPANY.phoneSupport}
- Tehniskie jautājumi: ${COMPANY.phoneTechnical}

Ja pastāv tūlītējs apdraudējums cilvēkam, vispirms zvani 112, pēc tam informē mūs.

## 6. Kas notiek, ja noteikums ir pārkāpts

Atkarībā no pārkāpuma smaguma un tā, vai tas noticis atkārtoti, mēs:

- dzēšam saturu;
- izsakām brīdinājumu, paskaidrojot, kas bija nepareizi;
- ierobežojam konta iespējas, piemēram, apturot atsauksmes vai pierakstus;
- uz laiku apturam kontu;
- neatgriezeniski slēdzam kontu un atsakām jauna konta izveidi.

Dažos gadījumos konts tiek slēgts neatgriezeniski un bez brīdinājuma: seksuāla rakstura saturs ar nepilngadīgo, ticami vardarbības draudi un krāpšana.

Ja to prasa normatīvie akti, mēs par saturu ziņojam kompetentajām iestādēm.

## 7. Ja uzskati, ka esam kļūdījušies

Raksti uz ${COMPANY.supportEmail}, norādot sava konta e-pastu un notikušo. Cilvēks to izskatīs atkārtoti, un mēs paziņosim rezultātu. Ja lēmums bijis kļūdains, mēs to atcelsim un atjaunosim saturu vai kontu.

## 8. Izmaiņas

Mēs varam šīs vadlīnijas atjaunot, Pakalpojumam attīstoties vai mainoties normatīvajiem aktiem. Aktuālā redakcija vienmēr ir pieejama ${COMPANY.domain}, un par būtiskām izmaiņām informēsim lietotnē vai e-pastā.`,
};
