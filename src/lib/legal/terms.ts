import { COMPANY, COMPANY_ADDRESS_INLINE } from "./company";
import type { LegalDoc } from "./types";

/**
 * Terms of Service, doubling as the End User Licence Agreement (EULA) for the
 * iOS app.
 *
 * Section 17 reproduces Apple's "Instructions for Minimum Terms of Developer's
 * EULA" (Schedule 1 to the Apple Developer Program Licence Agreement). Do not
 * remove or water down that section — App Review checks for it whenever a
 * custom EULA is used instead of Apple's standard one. Sections 12–14 cover
 * App Store Review Guideline 1.2 (user-generated content), section 11 covers
 * Guideline 3.1.2 (auto-renewable subscriptions) and section 7 covers
 * Guideline 5.1.1(v) (account deletion).
 */
export const termsDoc: LegalDoc = {
  en: `## 1. Who we are

This end user licence agreement and these terms of service (the "Terms") are a binding agreement between you and:

- Legal entity: ${COMPANY.legalName}
- Registration number: ${COMPANY.regNo}
- VAT number: ${COMPANY.vatNo}
- Registered address: ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.en}
- Email: ${COMPANY.supportEmail}
- Phone (support): ${COMPANY.phoneSupport}
- Phone (technical): ${COMPANY.phoneTechnical}

We refer to ourselves below as "Pieraksts", "we", "us" or "our". "You" means the person using the Pieraksts mobile application, the website at ${COMPANY.domain}, and any related services (together, the "Service").

## 2. Accepting these Terms

By downloading, installing, creating an account in, or otherwise using the Service, you confirm that you have read and agree to these Terms and to our [Privacy Policy](/legal/privacy-policy), [Community Guidelines](/legal/community-guidelines) and [Cookie Policy](/legal/cookie-policy), which form part of these Terms.

If you do not agree, do not use the Service.

This agreement is concluded between you and ${COMPANY.legalName} only, and not with Apple Inc. See section 17 for the additional terms that apply to the iOS app.

## 3. Definitions

- "Client" — a person who uses the Service to find and book beauty or personal care appointments.
- "Salon" — a business or self-employed professional that publishes a profile, staff, services and availability on the Service and accepts bookings through it.
- "Salon Service" — the real-world beauty or personal care service that a Salon performs for a Client.
- "User Content" — anything a user uploads, submits or publishes through the Service, including salon descriptions, photographs, staff and service listings, reviews, ratings and free-text booking notes.

## 4. What Pieraksts is, and what it is not

Pieraksts is a booking platform. We put Clients and Salons in touch and handle the scheduling. We are not a salon, we do not employ Salon staff, and we do not perform, supervise or guarantee any Salon Service.

Accordingly:

- The contract for a Salon Service is concluded directly between the Client and the Salon. We are not a party to it.
- The Salon alone is responsible for the quality, safety, legality, licensing, hygiene and pricing of the Salon Service, and for complying with the law that applies to it.
- Information about Salons, staff, services, prices and availability comes from the Salons themselves. We do not independently verify it, and we do not warrant that it is accurate, complete or current.
- We do not endorse any Salon, and a listing on the Service is not a recommendation.

Complaints about a Salon Service should be raised with the Salon first. You may also report a Salon to us under section 13, and we will act where the Terms or Community Guidelines have been broken.

## 5. Eligibility and age

- You must be at least 13 years old to create an account. This reflects the age of digital consent in Latvia under the GDPR.
- If you are under 18, you may use the Service only with the consent and supervision of a parent or legal guardian, and that parent or guardian accepts these Terms on your behalf and is responsible for your use of the Service.
- Some Salon Services may be restricted to adults by law or by the Salon's own rules. It is your responsibility, and the Salon's, to observe those restrictions.
- To register as a Salon you must be authorised to act for that business and be at least 18 years old.

## 6. Your account

- You must give accurate, current and complete information when you register, and keep it up to date.
- You are responsible for keeping your login credentials confidential and for all activity that takes place under your account.
- Tell us promptly at ${COMPANY.supportEmail} if you believe your account has been accessed without your permission.
- One person may hold one Client account. Accounts may not be sold, shared or transferred.

## 7. Deleting your account

You can delete your account at any time from within the app, under Profile. No email, phone call or form is required.

When you delete your account:

- your profile, your account credentials and your personal booking history are permanently deleted from our live systems;
- User Content you published, such as reviews and photographs, is deleted or irreversibly disassociated from you;
- future bookings you hold are cancelled, and the Salons concerned are notified;
- data we are required by law to keep, such as accounting records for a Salon subscription, is retained for the statutory period and then deleted;
- backups are overwritten on their normal rotation.

Deletion is permanent and cannot be undone. If you cannot reach the in-app option, see our [Account Deletion](/legal/account-deletion) page or write to ${COMPANY.supportEmail}, and we will complete the deletion for you within 30 days.

## 8. Making a booking

- A booking request you submit becomes a confirmed appointment when the Salon accepts it, or immediately where the Salon has enabled instant confirmation. You will receive a notification either way.
- The Salon may decline or propose a different time. Availability shown in the app is provided by the Salon and can change.
- You agree to attend at the time booked, and to give the Salon any information it reasonably needs to perform the Salon Service safely, including relevant allergies or medical conditions.
- We send push and email notifications about booking status. These are service messages, not marketing, and they are part of the Service.

## 9. Cancellation and no-shows

- You may cancel a booking free of charge up to 24 hours before the appointment starts.
- Cancellations made less than 24 hours before the appointment, and failures to attend, are treated as late cancellations.
- Salons may set stricter requirements only where these are shown to you before you confirm the booking. Salons may not set a longer free-cancellation window than the one above without displaying it.
- Where you have not paid in advance through the Service, we do not charge you a cancellation fee. A Salon may pursue its own cancellation charge under its own terms; that is a matter between you and the Salon.

Repeated late cancellations or no-shows affect other users and the Salons. Our approach is:

- a warning on the first confirmed case;
- a temporary booking restriction on repetition;
- suspension or closure of the account for persistent abuse.

Salons must likewise honour confirmed bookings. A Salon that repeatedly cancels confirmed appointments at short notice, or fails to attend them, may be removed from the Service.

## 10. Prices and payment for Salon Services

- Prices shown for Salon Services are set by the Salon and are indicative. The price actually payable is the one agreed with the Salon.
- Clients do not pay for Salon Services through the Service. Payment is made directly to the Salon, at the Salon, by whatever means the Salon accepts.
- We do not process, hold or refund payments for Salon Services, and we do not issue invoices or receipts for them. The Salon does.
- The Service is free of charge for Clients.

## 11. Salon subscriptions purchased through the App Store

Some features for Salons are offered as an auto-renewable subscription purchased inside the iOS app through Apple's In-App Purchase. Where you buy such a subscription, the following applies.

- The subscription title, the length of the subscription period, what it includes, and the price are shown to you in the app before you confirm the purchase.
- Payment is charged to your Apple ID account at confirmation of purchase.
- The subscription renews automatically unless auto-renewal is turned off at least 24 hours before the end of the current period.
- Your account is charged for renewal within 24 hours before the end of the current period, at the price shown for the renewal.
- You can manage your subscription and turn off auto-renewal in your Apple ID Account Settings after purchase.
- Any free trial period that we offer is forfeited when you buy a subscription, to the extent that this is offered.
- Refunds for App Store purchases are handled by Apple under the Apple Media Services Terms and Conditions, not by us. We cannot refund an App Store purchase. Your statutory rights are unaffected.
- Cancelling a subscription stops future renewals. Unless the law requires otherwise, we do not refund the unused part of a period that has already been paid for.
- Subscriptions for Salons are sold to businesses acting in a commercial capacity. The consumer right of withdrawal does not apply to them.

We may also invoice Salons directly for services agreed outside the app. Where we do, the agreed invoice terms apply, payment is due within the period stated on the invoice, and statutory late-payment interest may be charged.

## 12. User Content and the licence you grant us

You keep all rights you have in your User Content. By publishing User Content through the Service you grant us a worldwide, non-exclusive, royalty-free, transferable and sublicensable licence to host, store, reproduce, adapt for display, and publicly display that User Content, for the sole purpose of operating, promoting and improving the Service. This licence ends when you delete the User Content or your account, except for copies retained in backups until they are overwritten and copies we must keep by law.

You represent and warrant that:

- you own the User Content or have all the rights needed to publish it;
- publishing it does not infringe anyone's intellectual property, privacy, image or other rights;
- where a photograph shows an identifiable person, you have that person's consent to publish it;
- the User Content is accurate and not misleading, and a review you post describes a Salon Service you genuinely received.

## 13. Prohibited content and conduct — zero tolerance

We operate a zero-tolerance policy for objectionable content and abusive behaviour. You must not publish, transmit or engage in:

- content that is unlawful, defamatory, harassing, threatening, hateful or discriminatory, including on the basis of race, ethnicity, national origin, religion, disability, sex, gender identity, sexual orientation or age;
- sexually explicit or pornographic material, or any sexualised content involving a minor;
- content depicting or encouraging violence, self-harm, or the use of illegal drugs;
- content that impersonates another person or business, or falsely suggests an affiliation or endorsement;
- fake, incentivised or retaliatory reviews, or reviews written about your own business or a competitor;
- another person's personal data published without a legal basis, including photographs, contact details or health information;
- spam, advertising unrelated to the Salon's own services, chain messages, or attempts to move a transaction off the platform in order to avoid these Terms;
- malware, scraping, automated data collection, reverse engineering, penetration attempts, or interference with the Service's security or availability;
- use of the Service for any fraudulent or otherwise unlawful purpose.

Full details are in our [Community Guidelines](/legal/community-guidelines).

## 14. Reporting, blocking and enforcement

We provide, inside the app:

- automated filtering that screens User Content before it is published;
- a report control on every profile, review, photograph and message, so you can flag content or a user to us;
- a block control, so you can prevent another user from contacting you or interacting with you or your content;
- our published contact details, so you can always reach a human: ${COMPANY.supportEmail}, ${COMPANY.phoneSupport}.

When you report content or a user, we review the report and act within 24 hours. Where a report is upheld we will, depending on severity, remove the content, warn the user, restrict the account, or terminate it permanently. We remove content that is reported and found to be objectionable, and we eject users who post it. We may act on our own initiative on the same basis.

If we terminate your account for a breach of this section you may not create a new one. You may ask us to review a decision by writing to ${COMPANY.supportEmail}; we will respond and, where the decision was wrong, reverse it.

## 15. Intellectual property in the Service

The Service, including its software, source code, design, user interface, text, graphics and the Pieraksts name and logo, belongs to ${COMPANY.legalName} or its licensors and is protected by intellectual property law. Nothing in these Terms transfers any of those rights to you. You may not copy, modify, distribute, sell, lease or create derivative works from any part of the Service, nor attempt to extract its source code, except where the law expressly permits it despite this restriction.

## 16. Third-party services

The Service relies on third-party providers, including cloud hosting and database services, push-notification delivery, email delivery, and map and location services. Your use of the Service is also subject to those providers' terms where they apply to you. We are not responsible for third-party services we do not control.

## 17. Additional terms for the iOS application

This section applies to the Pieraksts application obtained from the Apple App Store and takes precedence over any conflicting provision elsewhere in these Terms, to the extent of the conflict.

### 17.1 Acknowledgement

These Terms are concluded between you and ${COMPANY.legalName} only, and not with Apple Inc. ("Apple"). ${COMPANY.legalName}, not Apple, is solely responsible for the application and its content.

### 17.2 Scope of licence

We grant you a limited, non-exclusive, non-transferable, revocable licence to use the application on any Apple-branded product that you own or control, as permitted by the Usage Rules set out in the Apple Media Services Terms and Conditions, except that the application may be accessed and used by other accounts associated with you via Family Sharing or volume purchasing.

### 17.3 Maintenance and support

${COMPANY.legalName} is solely responsible for providing any maintenance and support services for the application, as specified in these Terms or as required under applicable law. Apple has no obligation whatsoever to furnish any maintenance and support services in respect of the application.

### 17.4 Warranty

${COMPANY.legalName} is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event of any failure of the application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the application to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the application, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be ${COMPANY.legalName}'s sole responsibility.

### 17.5 Product claims

${COMPANY.legalName}, not Apple, is responsible for addressing any claims by you or any third party relating to the application or your possession and use of it, including (i) product liability claims; (ii) any claim that the application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy or similar legislation. These Terms do not limit ${COMPANY.legalName}'s liability beyond what is permitted by applicable law.

### 17.6 Intellectual property rights

In the event of any third-party claim that the application or your possession and use of it infringes that third party's intellectual property rights, ${COMPANY.legalName}, not Apple, will be solely responsible for the investigation, defence, settlement and discharge of any such claim.

### 17.7 Legal compliance

You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.

### 17.8 Developer name and address

Questions, complaints or claims with respect to the application should be directed to ${COMPANY.legalName}, ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.en}, ${COMPANY.supportEmail}, ${COMPANY.phoneSupport}.

### 17.9 Third-party terms of agreement

You must comply with applicable third-party terms of agreement when using the application.

### 17.10 Third-party beneficiary

You acknowledge and agree that Apple, and Apple's subsidiaries, are third-party beneficiaries of these Terms, and that upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary of them.

## 18. Availability and changes to the Service

We aim to keep the Service available, but we do not guarantee that it will be uninterrupted or error-free. We may suspend it for maintenance, security or technical reasons, and we will give notice where it is reasonable to do so.

We may add, change or withdraw features. Where a change materially reduces the Service for you, we will give you reasonable advance notice by email or in the app, and you may stop using the Service and delete your account.

## 19. Disclaimers

To the extent permitted by law, the Service is provided "as is" and "as available", and we exclude all implied warranties. We do not warrant that the Service will meet your requirements, that any Salon will be available, or that information supplied by Salons or other users is accurate.

Nothing in these Terms excludes or limits anything that cannot lawfully be excluded or limited, including liability for death or personal injury caused by negligence, for fraud, or under mandatory consumer protection law.

## 20. Limitation of liability

Subject to section 19:

- we are not liable for the acts or omissions of any Salon, or for any Salon Service, including its quality, safety or outcome;
- we are not liable for indirect or consequential loss, loss of profit, loss of business, or loss of data;
- our total liability to you for all claims arising in any twelve-month period is limited to the greater of EUR 100 and the amount you paid us for the Service during that period.

Where you are a consumer, this section applies only to the extent permitted by the consumer protection law of your country of residence.

## 21. Your consumer rights

Nothing in these Terms affects your mandatory rights as a consumer under the law of the Republic of Latvia or of your country of residence in the European Union.

If you are a consumer with a complaint you cannot resolve with us, you may contact the Consumer Rights Protection Centre (Patērētāju tiesību aizsardzības centrs) in Latvia, or use the European Commission's online dispute resolution platform.

## 22. Suspension and termination

You may stop using the Service and delete your account at any time under section 7.

We may suspend or terminate your access where you materially breach these Terms or the Community Guidelines, where we are required to by law, or where continued access presents a security or safety risk. Except where the breach is serious or urgent, we will notify you and give you an opportunity to put it right. On termination, sections 12 (as to the surviving licence in backups), 15, 19, 20, 23 and 24 continue to apply.

## 23. Changes to these Terms

We may update these Terms to reflect changes in the Service or in the law. We will publish the updated version at ${COMPANY.domain} with a new effective date. Where a change materially affects your rights or obligations, we will notify you by email or in the app at least 30 days in advance, and continuing to use the Service after the change takes effect means you accept it. If you do not accept it, delete your account before it takes effect.

## 24. Governing law and disputes

These Terms are governed by the law of the Republic of Latvia. If you are a consumer resident elsewhere in the European Union, you also keep the protection of the mandatory law of your country of residence.

Disputes that cannot be resolved by negotiation are to be settled by the courts of the Republic of Latvia, without prejudice to any right a consumer has to bring proceedings in the courts of their own country of residence.

## 25. Contact

- ${COMPANY.legalName}
- ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.en}
- Registration number: ${COMPANY.regNo}
- VAT number: ${COMPANY.vatNo}
- Email: ${COMPANY.supportEmail}
- Phone (support): ${COMPANY.phoneSupport}
- Phone (technical): ${COMPANY.phoneTechnical}`,

  lv: `## 1. Kas mēs esam

Šis galalietotāja licences līgums un lietošanas noteikumi ("Noteikumi") ir saistošs līgums starp Tevi un:

- Juridiskā persona: ${COMPANY.legalName}
- Reģistrācijas numurs: ${COMPANY.regNo}
- PVN numurs: ${COMPANY.vatNo}
- Juridiskā adrese: ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.lv}
- E-pasts: ${COMPANY.supportEmail}
- Tālrunis (atbalsts): ${COMPANY.phoneSupport}
- Tālrunis (tehniskie jautājumi): ${COMPANY.phoneTechnical}

Turpmāk tekstā sevi dēvējam par "Pieraksts", "mēs" vai "mums". "Tu" nozīmē personu, kas lieto Pieraksts mobilo lietotni, mājaslapu ${COMPANY.domain} un ar tām saistītos pakalpojumus (kopā — "Pakalpojums").

## 2. Noteikumu pieņemšana

Lejupielādējot, instalējot, izveidojot kontu vai citādi lietojot Pakalpojumu, Tu apliecini, ka esi iepazinies un piekrīti šiem Noteikumiem, kā arī mūsu [Privātuma politikai](/legal/privacy-policy), [Kopienas vadlīnijām](/legal/community-guidelines) un [Sīkdatņu politikai](/legal/cookie-policy), kas ir šo Noteikumu sastāvdaļa.

Ja nepiekrīti, nelieto Pakalpojumu.

Šis līgums ir noslēgts tikai starp Tevi un ${COMPANY.legalName}, nevis ar Apple Inc. Skat. 17. sadaļu par papildu noteikumiem, kas attiecas uz iOS lietotni.

## 3. Termini

- "Klients" — persona, kas lieto Pakalpojumu, lai atrastu un rezervētu skaistumkopšanas vai personīgās aprūpes pakalpojumus.
- "Salons" — uzņēmums vai pašnodarbināta persona, kas Pakalpojumā publicē profilu, darbiniekus, pakalpojumus un pieejamību un pieņem pierakstus.
- "Salona pakalpojums" — reālais skaistumkopšanas vai personīgās aprūpes pakalpojums, ko Salons sniedz Klientam.
- "Lietotāja saturs" — viss, ko lietotājs augšupielādē, iesniedz vai publicē Pakalpojumā, tostarp salona apraksti, fotoattēli, darbinieku un pakalpojumu saraksti, atsauksmes, vērtējumi un brīvā teksta piezīmes pie pierakstiem.

## 4. Kas Pieraksts ir un kas nav

Pieraksts ir rezervāciju platforma. Mēs savedam kopā Klientus un Salonus un nodrošinām pierakstu tehnisko pusi. Mēs neesam salons, mēs nenodarbinām Salonu darbiniekus un mēs nesniedzam, neuzraugām un negarantējam nevienu Salona pakalpojumu.

Attiecīgi:

- Līgums par Salona pakalpojumu tiek noslēgts tieši starp Klientu un Salonu. Mēs neesam tā puse.
- Par Salona pakalpojuma kvalitāti, drošību, likumību, licencēm, higiēnu un cenu, kā arī par piemērojamo normatīvo aktu ievērošanu, atbild tikai Salons.
- Informāciju par Saloniem, darbiniekiem, pakalpojumiem, cenām un pieejamību sniedz paši Saloni. Mēs to neverificējam un negarantējam, ka tā ir precīza, pilnīga vai aktuāla.
- Mēs neizsakām atbalstu nevienam Salonam, un profila esamība Pakalpojumā nav ieteikums.

Sūdzības par Salona pakalpojumu vispirms jāizsaka Salonam. Tu vari arī ziņot mums par Salonu saskaņā ar 13. sadaļu, un mēs rīkosimies, ja būs pārkāpti Noteikumi vai Kopienas vadlīnijas.

## 5. Vecums un tiesības lietot

- Konta izveidei jābūt vismaz 13 gadus vecam. Tas atbilst digitālās piekrišanas vecumam Latvijā saskaņā ar VDAR.
- Ja esi jaunāks par 18 gadiem, Pakalpojumu drīksti lietot tikai ar vecāka vai likumiskā aizbildņa piekrišanu un uzraudzību; šī persona pieņem šos Noteikumus Tavā vārdā un atbild par Tavu Pakalpojuma lietošanu.
- Atsevišķi Salona pakalpojumi normatīvo aktu vai paša Salona noteikumu dēļ var būt pieejami tikai pilngadīgām personām. Šo ierobežojumu ievērošana ir Tavā un Salona atbildībā.
- Lai reģistrētos kā Salons, Tev jābūt tiesīgam rīkoties attiecīgā uzņēmuma vārdā un vismaz 18 gadus vecam.

## 6. Tavs konts

- Reģistrējoties jānorāda precīza, aktuāla un pilnīga informācija, un tā jāuztur aktuāla.
- Tu atbildi par savu piekļuves datu konfidencialitāti un par visām darbībām, kas veiktas Tavā kontā.
- Ja ir aizdomas, ka kontam piekļuvusi cita persona, nekavējoties raksti uz ${COMPANY.supportEmail}.
- Vienai personai var būt viens Klienta konts. Kontus nedrīkst pārdot, koplietot vai nodot citam.

## 7. Konta dzēšana

Kontu jebkurā laikā vari dzēst pats lietotnē, sadaļā Profils. Nav nepieciešams e-pasts, zvans vai pieteikuma forma.

Dzēšot kontu:

- Tavs profils, piekļuves dati un personīgā pierakstu vēsture tiek neatgriezeniski dzēsti no mūsu darba sistēmām;
- Tavs publicētais Lietotāja saturs, piemēram, atsauksmes un fotoattēli, tiek dzēsts vai neatgriezeniski atsaistīts no Tevis;
- nākotnē paredzētie pieraksti tiek atcelti, un attiecīgie Saloni tiek informēti;
- dati, kas mums normatīvo aktu dēļ jāsaglabā, piemēram, grāmatvedības ieraksti par Salona abonementu, tiek glabāti likumā noteikto termiņu un pēc tam dzēsti;
- rezerves kopijas tiek pārrakstītas to parastajā rotācijas ciklā.

Dzēšana ir neatgriezeniska. Ja nevari izmantot dzēšanas iespēju lietotnē, skati [Konta dzēšanas](/legal/account-deletion) lapu vai raksti uz ${COMPANY.supportEmail}, un mēs dzēšanu veiksim 30 dienu laikā.

## 8. Pieraksta veikšana

- Iesniegtais pieraksta pieteikums kļūst par apstiprinātu pierakstu brīdī, kad Salons to apstiprina, vai uzreiz, ja Salons ir ieslēdzis tūlītējo apstiprināšanu. Abos gadījumos saņemsi paziņojumu.
- Salons var pieteikumu noraidīt vai piedāvāt citu laiku. Lietotnē redzamo pieejamību nodrošina Salons, un tā var mainīties.
- Tu apņemies ierasties norunātajā laikā un sniegt Salonam informāciju, kas tam saprātīgi nepieciešama pakalpojuma drošai sniegšanai, tostarp par alerģijām vai veselības stāvokli.
- Mēs sūtām push un e-pasta paziņojumus par pierakstu statusu. Tie ir pakalpojuma paziņojumi, nevis mārketings, un ir Pakalpojuma sastāvdaļa.

## 9. Atcelšana un neierašanās

- Pierakstu bez maksas vari atcelt līdz 24 stundām pirms pieraksta sākuma.
- Atcelšana vēlāk nekā 24 stundas pirms pieraksta, kā arī neierašanās, tiek uzskatīta par novēlotu atcelšanu.
- Saloni var noteikt stingrākas prasības tikai tad, ja tās Tev tiek parādītas pirms pieraksta apstiprināšanas. Saloni nedrīkst noteikt garāku bezmaksas atcelšanas periodu, to nenorādot.
- Ja neesi veicis priekšapmaksu caur Pakalpojumu, mēs no Tevis neiekasējam atcelšanas maksu. Salons var piemērot savu atcelšanas maksu saskaņā ar saviem noteikumiem; tas ir jautājums starp Tevi un Salonu.

Atkārtota novēlota atcelšana vai neierašanās skar citus lietotājus un Salonus. Mūsu pieeja:

- brīdinājums pirmajā konstatētajā gadījumā;
- pagaidu pierakstu ierobežojums atkārtošanās gadījumā;
- konta apturēšana vai slēgšana sistemātiska pārkāpuma gadījumā.

Arī Saloniem ir jāievēro apstiprinātie pieraksti. Salons, kas atkārtoti īsā termiņā atceļ apstiprinātus pierakstus vai uz tiem neierodas, var tikt izslēgts no Pakalpojuma.

## 10. Cenas un norēķini par Salona pakalpojumiem

- Salona pakalpojumu cenas nosaka Salons, un tās ir informatīvas. Faktiski maksājamā cena ir tā, par ko vienojies ar Salonu.
- Klienti par Salona pakalpojumiem caur Pakalpojumu nemaksā. Samaksa tiek veikta tieši Salonam, uz vietas salonā, ar Salona pieņemtajiem maksāšanas līdzekļiem.
- Mēs neapstrādājam, neuzglabājam un neatmaksājam maksājumus par Salona pakalpojumiem un neizrakstām par tiem rēķinus vai čekus. To dara Salons.
- Klientiem Pakalpojums ir bez maksas.

## 11. Salonu abonementi, kas iegādāti App Store

Atsevišķas Saloniem paredzētas funkcijas tiek piedāvātas kā automātiski atjaunojams abonements, kas iegādājams iOS lietotnē ar Apple In-App Purchase. Ja iegādājies šādu abonementu, piemēro turpmāko.

- Abonementa nosaukums, perioda ilgums, saturs un cena tiek parādīti lietotnē pirms pirkuma apstiprināšanas.
- Maksa tiek ieturēta no Tava Apple ID konta pirkuma apstiprināšanas brīdī.
- Abonements atjaunojas automātiski, ja vien automātiskā atjaunošana netiek izslēgta vismaz 24 stundas pirms kārtējā perioda beigām.
- Maksa par atjaunošanu tiek ieturēta 24 stundu laikā pirms kārtējā perioda beigām, atjaunošanai norādītajā cenā.
- Abonementu pārvaldīt un automātisko atjaunošanu izslēgt vari sava Apple ID konta iestatījumos pēc pirkuma.
- Ja tiek piedāvāts bezmaksas izmēģinājuma periods, tā neizmantotā daļa zūd, iegādājoties abonementu.
- App Store pirkumu atmaksu saskaņā ar Apple Media Services noteikumiem administrē Apple, nevis mēs. Mēs nevaram atmaksāt App Store pirkumu. Tas neietekmē Tavas normatīvajos aktos noteiktās tiesības.
- Abonementa atcelšana pārtrauc turpmāku atjaunošanu. Ja vien normatīvie akti nenosaka citādi, mēs neatmaksājam jau apmaksāta perioda neizmantoto daļu.
- Salonu abonementi tiek pārdoti komercdarbību veicošiem uzņēmumiem. Patērētāja atteikuma tiesības uz tiem neattiecas.

Mēs varam arī izrakstīt Saloniem rēķinus par ārpus lietotnes saskaņotiem pakalpojumiem. Tādā gadījumā piemēro saskaņotos rēķina noteikumus, samaksa veicama rēķinā norādītajā termiņā, un var tikt piemēroti likumiskie nokavējuma procenti.

## 12. Lietotāja saturs un licence, ko piešķir mums

Visas Tavas tiesības uz Lietotāja saturu paliek Tev. Publicējot Lietotāja saturu Pakalpojumā, Tu piešķir mums pasaules mēroga, neekskluzīvu, bezatlīdzības, nododamu un apakšlicencējamu licenci šo saturu izvietot, glabāt, reproducēt, pielāgot attēlošanai un publiski attēlot vienīgi Pakalpojuma nodrošināšanas, reklamēšanas un uzlabošanas nolūkā. Licence beidzas, kad dzēs Lietotāja saturu vai kontu, izņemot kopijas rezerves kopijās līdz to pārrakstīšanai un kopijas, kas mums jāglabā normatīvo aktu dēļ.

Tu apliecini un garantē, ka:

- Lietotāja saturs pieder Tev vai Tev ir visas tā publicēšanai nepieciešamās tiesības;
- publicēšana nepārkāpj citu personu intelektuālā īpašuma, privātuma, attēla vai citas tiesības;
- ja fotoattēlā redzama identificējama persona, Tev ir šīs personas piekrišana attēla publicēšanai;
- Lietotāja saturs ir patiess un nav maldinošs, un publicētā atsauksme apraksta Salona pakalpojumu, ko patiešām esi saņēmis.

## 13. Aizliegtais saturs un rīcība — nulles tolerance

Mēs piemērojam nulles tolerances politiku pret nepieņemamu saturu un ļaunprātīgu rīcību. Ir aizliegts publicēt, pārsūtīt vai īstenot:

- saturu, kas ir prettiesisks, godu aizskarošs, aizskaroša rakstura, draudošs, naidu kurinošs vai diskriminējošs, tostarp pēc rases, etniskās vai nacionālās piederības, reliģijas, invaliditātes, dzimuma, dzimtes identitātes, seksuālās orientācijas vai vecuma pazīmes;
- seksuāli tiešu vai pornogrāfisku materiālu, kā arī jebkādu seksualizētu saturu, kurā iesaistīta nepilngadīga persona;
- saturu, kas attēlo vai veicina vardarbību, sevis ievainošanu vai nelegālu vielu lietošanu;
- saturu, kas uzdodas par citu personu vai uzņēmumu vai maldīgi liek domāt par saistību vai atbalstu;
- viltus, apmaksātas vai atriebīgas atsauksmes, kā arī atsauksmes par savu vai konkurenta uzņēmumu;
- citas personas datus, kas publicēti bez tiesiska pamata, tostarp fotoattēlus, kontaktinformāciju vai veselības datus;
- surogātpastu, ar Salona pakalpojumiem nesaistītas reklāmas, ķēdes vēstules vai mēģinājumus pārcelt darījumu ārpus platformas, lai apietu šos Noteikumus;
- ļaunatūru, datu izgūšanu, automatizētu datu vākšanu, apgriezto inženieriju, ielaušanās mēģinājumus vai Pakalpojuma drošības un pieejamības traucēšanu;
- Pakalpojuma izmantošanu krāpnieciskos vai citos prettiesiskos nolūkos.

Pilns apraksts ir mūsu [Kopienas vadlīnijās](/legal/community-guidelines).

## 14. Ziņošana, bloķēšana un pārkāpumu novēršana

Lietotnē mēs nodrošinām:

- automatizētu filtrēšanu, kas pārbauda Lietotāja saturu pirms publicēšanas;
- ziņošanas pogu pie katra profila, atsauksmes, fotoattēla un ziņas, lai varētu norādīt mums uz saturu vai lietotāju;
- bloķēšanas iespēju, lai liegtu citam lietotājam ar Tevi sazināties vai mijiedarboties ar Tevi un Tavu saturu;
- publicētu kontaktinformāciju, lai vienmēr varētu sazināties ar cilvēku: ${COMPANY.supportEmail}, ${COMPANY.phoneSupport}.

Saņemot ziņojumu par saturu vai lietotāju, mēs to izskatām un rīkojamies 24 stundu laikā. Ja ziņojums apstiprinās, mēs atkarībā no pārkāpuma smaguma saturu dzēšam, lietotāju brīdinām, kontu ierobežojam vai neatgriezeniski slēdzam. Mēs dzēšam saturu, par kuru ziņots un kurš atzīts par nepieņemamu, un izslēdzam lietotājus, kas to publicē. Tāpat mēs varam rīkoties pēc savas iniciatīvas.

Ja Tavs konts tiek slēgts par šīs sadaļas pārkāpumu, Tu nedrīksti veidot jaunu. Lēmuma pārskatīšanu vari lūgt, rakstot uz ${COMPANY.supportEmail}; mēs atbildēsim un, ja lēmums bijis kļūdains, to atcelsim.

## 15. Intelektuālais īpašums

Pakalpojums, tostarp tā programmatūra, pirmkods, dizains, saskarne, teksti, grafika, kā arī nosaukums un logo Pieraksts, pieder ${COMPANY.legalName} vai tā licences devējiem un ir aizsargāts ar intelektuālā īpašuma tiesībām. Šie Noteikumi nenodod Tev nevienu no šīm tiesībām. Nevienu Pakalpojuma daļu nedrīkst kopēt, pārveidot, izplatīt, pārdot, iznomāt vai izmantot atvasinātu darbu radīšanai, kā arī nedrīkst mēģināt izgūt tā pirmkodu, izņemot gadījumus, kad normatīvie akti to skaidri atļauj neatkarīgi no šī ierobežojuma.

## 16. Trešo personu pakalpojumi

Pakalpojums balstās uz trešo personu nodrošinātiem pakalpojumiem, tostarp mākoņa un datubāzes infrastruktūru, push paziņojumu piegādi, e-pasta piegādi, kā arī karšu un atrašanās vietas pakalpojumiem. Uz Pakalpojuma lietošanu attiecas arī šo pakalpojumu sniedzēju noteikumi, ciktāl tie uz Tevi attiecas. Mēs neatbildam par trešo personu pakalpojumiem, kurus nekontrolējam.

## 17. Papildu noteikumi iOS lietotnei

Šī sadaļa attiecas uz Pieraksts lietotni, kas iegūta Apple App Store, un pretrunu gadījumā tai ir augstāks spēks nekā citām šo Noteikumu normām.

### 17.1 Apliecinājums

Šie Noteikumi ir noslēgti tikai starp Tevi un ${COMPANY.legalName}, nevis ar Apple Inc. ("Apple"). Par lietotni un tās saturu atbild tikai ${COMPANY.legalName}, nevis Apple.

### 17.2 Licences apjoms

Mēs piešķiram Tev ierobežotu, neekskluzīvu, nenododamu, atsaucamu licenci lietot lietotni jebkurā Apple zīmola ierīcē, kas Tev pieder vai ko Tu kontrolē, saskaņā ar Apple Media Services noteikumos ietvertajiem lietošanas noteikumiem, izņemot to, ka lietotnei var piekļūt un to lietot arī citi ar Tevi saistīti konti, izmantojot Family Sharing vai apjoma iegādi.

### 17.3 Uzturēšana un atbalsts

Par lietotnes uzturēšanas un atbalsta pakalpojumiem, kā noteikts šajos Noteikumos vai normatīvajos aktos, atbild tikai ${COMPANY.legalName}. Apple nav nekāda pienākuma nodrošināt lietotnes uzturēšanas vai atbalsta pakalpojumus.

### 17.4 Garantija

Par jebkādām produkta garantijām, tiešām vai netiešām, ciktāl tās nav spēkā esoši izslēgtas, atbild tikai ${COMPANY.legalName}. Ja lietotne neatbilst kādai piemērojamai garantijai, Tu vari par to paziņot Apple, un Apple atmaksās Tev lietotnes pirkuma cenu (ja tāda bijusi). Ciktāl to pieļauj piemērojamie normatīvie akti, Apple nav nekādu citu garantijas saistību attiecībā uz lietotni, un par jebkādām citām prasībām, zaudējumiem, saistībām, izmaksām vai izdevumiem, kas saistīti ar garantijas neizpildi, atbild tikai ${COMPANY.legalName}.

### 17.5 Prasības par produktu

Par jebkādām Tavām vai trešo personu prasībām saistībā ar lietotni vai tās valdījumu un lietošanu atbild ${COMPANY.legalName}, nevis Apple, tostarp par (i) prasībām par produkta atbildību; (ii) prasībām par lietotnes neatbilstību normatīvo aktu prasībām; un (iii) prasībām, kas izriet no patērētāju tiesību aizsardzības, privātuma vai līdzīgiem normatīvajiem aktiem. Šie Noteikumi neierobežo ${COMPANY.legalName} atbildību vairāk, nekā to pieļauj piemērojamie normatīvie akti.

### 17.6 Intelektuālā īpašuma tiesības

Ja trešā persona ceļ prasību par to, ka lietotne vai tās valdījums un lietošana pārkāpj šīs trešās personas intelektuālā īpašuma tiesības, par šādas prasības izmeklēšanu, aizstāvību, izlīgumu un izpildi atbild tikai ${COMPANY.legalName}, nevis Apple.

### 17.7 Atbilstība normatīvajiem aktiem

Tu apliecini un garantē, ka (i) neatrodies valstī, uz kuru attiecas ASV valdības noteiktais embargo vai kuru ASV valdība ir noteikusi par "terorismu atbalstošu" valsti; un (ii) neesi iekļauts nevienā ASV valdības aizliegto vai ierobežoto personu sarakstā.

### 17.8 Izstrādātāja nosaukums un adrese

Jautājumi, sūdzības vai prasības par lietotni adresējami: ${COMPANY.legalName}, ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.lv}, ${COMPANY.supportEmail}, ${COMPANY.phoneSupport}.

### 17.9 Trešo personu noteikumi

Lietojot lietotni, Tev jāievēro piemērojamie trešo personu noteikumi.

### 17.10 Trešā persona — labuma guvējs

Tu apliecini un piekrīti, ka Apple un Apple meitasuzņēmumi ir šo Noteikumu trešās personas labuma guvēji un ka, Tev pieņemot šos Noteikumus, Apple iegūst tiesības (un tiek uzskatīts, ka ir tās pieņēmis) īstenot šos Noteikumus pret Tevi kā trešā persona labuma guvējs.

## 18. Pieejamība un Pakalpojuma izmaiņas

Mēs cenšamies nodrošināt Pakalpojuma pieejamību, taču negarantējam, ka tas darbosies nepārtraukti un bez kļūdām. Mēs varam to apturēt uzturēšanas, drošības vai tehnisku iemeslu dēļ un par to informēsim, ja tas ir saprātīgi iespējams.

Mēs varam pievienot, mainīt vai izņemt funkcijas. Ja izmaiņa būtiski samazina Pakalpojuma vērtību Tev, mēs par to savlaicīgi paziņosim e-pastā vai lietotnē, un Tu vari pārtraukt lietošanu un dzēst savu kontu.

## 19. Atrunas

Ciktāl to pieļauj normatīvie akti, Pakalpojums tiek sniegts "kā ir" un "kā pieejams", un mēs izslēdzam visas netiešās garantijas. Mēs negarantējam, ka Pakalpojums atbildīs Tavām prasībām, ka kāds konkrēts Salons būs pieejams vai ka Salonu un citu lietotāju sniegtā informācija ir precīza.

Nekas šajos Noteikumos neizslēdz un neierobežo to, ko saskaņā ar normatīvajiem aktiem izslēgt vai ierobežot nedrīkst, tostarp atbildību par nāvi vai miesas bojājumiem, kas radušies nolaidības dēļ, par krāpšanu vai saskaņā ar imperatīvām patērētāju tiesību normām.

## 20. Atbildības ierobežojums

Ievērojot 19. sadaļu:

- mēs neatbildam par Salona darbību vai bezdarbību, ne arī par Salona pakalpojumu, tostarp tā kvalitāti, drošību vai rezultātu;
- mēs neatbildam par netiešiem vai izrietošiem zaudējumiem, negūto peļņu, komercdarbības vai datu zudumu;
- mūsu kopējā atbildība par visām prasībām jebkurā divpadsmit mēnešu periodā ir ierobežota ar lielāko no šīm summām: EUR 100 vai summa, ko šajā periodā esi mums samaksājis par Pakalpojumu.

Ja esi patērētājs, šī sadaļa piemērojama tikai tiktāl, ciktāl to pieļauj Tavas dzīvesvietas valsts patērētāju tiesību aizsardzības normas.

## 21. Tavas patērētāja tiesības

Nekas šajos Noteikumos neietekmē Tavas imperatīvās patērētāja tiesības saskaņā ar Latvijas Republikas vai Tavas Eiropas Savienības dzīvesvietas valsts normatīvajiem aktiem.

Ja esi patērētājs un sūdzību nav izdevies atrisināt ar mums, vari vērsties Patērētāju tiesību aizsardzības centrā vai izmantot Eiropas Komisijas strīdu izšķiršanas tiešsaistes platformu.

## 22. Apturēšana un izbeigšana

Tu jebkurā laikā vari pārtraukt Pakalpojuma lietošanu un dzēst kontu saskaņā ar 7. sadaļu.

Mēs varam apturēt vai izbeigt Tavu piekļuvi, ja būtiski pārkāp šos Noteikumus vai Kopienas vadlīnijas, ja to prasa normatīvie akti vai ja piekļuves saglabāšana rada drošības risku. Ja vien pārkāpums nav smags vai steidzami novēršams, mēs Tevi informēsim un dosim iespēju to novērst. Pēc izbeigšanas turpina darboties 12. sadaļa (attiecībā uz licenci rezerves kopijās), kā arī 15., 19., 20., 23. un 24. sadaļa.

## 23. Noteikumu izmaiņas

Mēs varam šos Noteikumus atjaunot, lai atspoguļotu Pakalpojuma vai normatīvo aktu izmaiņas. Aktuālo redakciju publicēsim ${COMPANY.domain} ar jaunu spēkā stāšanās datumu. Ja izmaiņas būtiski ietekmē Tavas tiesības vai pienākumus, mēs par tām paziņosim e-pastā vai lietotnē vismaz 30 dienas iepriekš, un Pakalpojuma lietošanas turpināšana pēc izmaiņu spēkā stāšanās nozīmē to pieņemšanu. Ja tām nepiekrīti, dzēs kontu pirms to spēkā stāšanās.

## 24. Piemērojamie tiesību akti un strīdi

Šos Noteikumus reglamentē Latvijas Republikas tiesību akti. Ja esi patērētājs ar dzīvesvietu citā Eiropas Savienības valstī, Tu saglabā arī savas dzīvesvietas valsts imperatīvo normu aizsardzību.

Strīdi, kurus nav iespējams atrisināt pārrunu ceļā, izskatāmi Latvijas Republikas tiesā, neierobežojot patērētāja tiesības celt prasību savas dzīvesvietas valsts tiesā.

## 25. Kontakti

- ${COMPANY.legalName}
- ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.lv}
- Reģistrācijas numurs: ${COMPANY.regNo}
- PVN numurs: ${COMPANY.vatNo}
- E-pasts: ${COMPANY.supportEmail}
- Tālrunis (atbalsts): ${COMPANY.phoneSupport}
- Tālrunis (tehniskie jautājumi): ${COMPANY.phoneTechnical}`,
};
