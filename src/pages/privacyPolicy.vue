<template>
  <pageWrapper>
    <page-section :is-whole-scrollable="false" :is-snap="false">
      <template #l>
        <div class="w-full md:max-w-[560px] flex flex-col items-start gap-5">
          <text-title text="Privacy Policy" />
          <text-text
            text="Cosmos provides a website located at cosmos.so (the “Site”) and corresponding mobile application (the “App”) which allows users to upload and share images and other content. To make this Privacy Notice easier to read, the Site, our services and App are collectively called the “Services.”"
          />
        </div>
      </template>
      <template #r>
        <div
          class="w-full flex flex-col self-start items-start p-4 gap-4 text-black border-t-2 md:border-t-0 md:border-l border-black"
        >
          <h1 class="text-xl md:text-2xl font-bold text-start">
            Privacy Policy of www.filter.li
          </h1>
          <p>
            In order to receive information about your Personal Data, the
            purposes and the parties the Data is shared with, contact the Owner.
            For more information and to understand your rights, you can also
            view the complete version of this privacy policy, by clicking the
            link at the bottom right of this page.
          </p>
          <div
            class="flex flex-col items-start gap-2"
            v-for="(txt, index) in text"
            :key="index"
          >
            <p class="text-lg md:text-xl font-bold text-start">
              {{ txt.title }}
            </p>
            <div v-html="txt.text" />
          </div>
        </div>
      </template>
    </page-section>
  </pageWrapper>
</template>

<script setup>
import pageWrapper from '../components/pageWrapper.vue';
import pageSection from '../components/ui/pageSection.vue';
import textTitle from '../components/ui/textTitle.vue';
import textText from '../components/ui/textText.vue';
import { shallowRef } from 'vue';

const text = shallowRef([
   {
      title: "Owner and Data Controller",
      text: `Filter LLC - Bukhar Zhirau boulevard 27/5, Block 1, 23 floor, office 577, Almaty, Kazakhstan, 050021 <br> <strong>Owner contact email:</strong> community@filter.li`
   },
   {
      title: "Types of Data collected",
      text: `<p class="mb-1.5">The owner does not provide a list of Personal Data types collected.</p> Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by
specific explanation texts displayed prior to the Data collection.
Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it
impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not
mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the
Service.
Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
Any use of Cookies – or of other tracking tools — by this Application or by the owners of third-party services used by this
Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the
present document and in the Cookie Policy. <br><br> Users are responsible for any third-party Personal Data obtained, published or shared through this Application.`
   },
   {
      title: "Mode and place of processing the Data",
      text: `<h3 class="my-2 font-bold">Methods of processing</h3> <p>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized
destruction of the Data.
The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes
strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of
persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration)
or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies,
communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be
requested from the Owner at any time.</p> <h3 class="my-2 font-bold">Place</h3> <p>The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are
located.</p> <br> <p>Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To
find out more about the place of processing of such transferred Data, Users can check the section containing details about the
processing of Personal Data.</p> <h3 class="my-2 font-bold">Retention time</h3> <p>Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose
they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent.</p>`
   },
   {
      title: "Cookie Policy",
      text: `This Application uses Trackers. To learn more, Users may consult the <a class="text-blue-600 underline" target="blank" href="https://www.iubenda.com/privacy-policy/10919530/cookie-policy">Cookie Policy</a>.`
   },
   {
      title: "Further Information for Users",
      text: `<strong class="my-1">Legal basis of processing</strong> <br><br> The Owner may process Personal Data relating to Users if one of the following applies:
      <ul style="list-style-type: circle;"><li>Users have given their consent for one or more specific purposes.</li><li>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations
thereof;</li><li>processing is necessary for compliance with a legal obligation to which the Owner is subject</li><li>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the
Owner;</li><li>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li></ul> <br><br>
<p>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether
the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p> <br>
<strong class="my-1">Further information about retention time</strong> <br>
<p>Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose
they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent.</p> <br><br> Therefore:
<ul style="list-style-type: circle;"><li>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be
retained until such contract has been fully performed.</li><li>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill
such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the
relevant sections of this document or by contacting the Owner.</li></ul> <br>
<p class="mb-2">The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing,
as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period
whenever required to fulfil a legal obligation or upon order of an authority</p> <p>Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to
rectification and the right to data portability cannot be enforced after expiration of the retention period.</p> <br> 
<strong>The rights of Users based on the General Data Protection Regulation (GDPR)</strong> <br>
<p>Users may exercise certain rights regarding their Data processed by the Owner.</p> <br>
<p>In particular, Users have the right to do the following, to the extent permitted by law:</p>
<ul style="list-style-type: circle;"><li><strong>Withdraw their consent at any time.</strong>Users have the right to withdraw consent where they have previously given their
consent to the processing of their Personal Data.</li><li><strong>Object to processing of their Data.</strong>Users have the right to object to the processing of their Data if the processing is
carried out on a legal basis other than consent.</li><li><strong>Access their Data.</strong>Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding
certain aspects of the processing and obtain a copy of the Data undergoing processing.</li><li><strong>Verify and seek rectification.</strong>Users have the right to verify the accuracy of their Data and ask for it to be updated or
corrected.</li><li><strong>Restrict the processing of their Data.</strong>Users have the right to restrict the processing of their Data. In this case, the Owner
will not process their Data for any purpose other than storing it.</li><li><strong>Have their Personal Data deleted or otherwise removed.</strong>Users have the right to obtain the erasure of their Data from the
Owner.</li><li><strong>Receive their Data and have it transferred to another controller.</strong>Users have the right to receive their Data in a
structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another
controller without any hindrance.</li><li><strong>Lodge a complaint.</strong>Users have the right to bring a claim before their competent data protection authority.</li></ul> <br> <br>
<p>Users are also entitled to learn about the legal basis for Data transfers abroad including to any international organization governed
by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the
Owner to safeguard their Data.</p> <br>
<strong>Details about the right to object to processing</strong> <br> <br>
<strong>Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for
the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground
related to their particular situation to justify the objection.</strong> <br>
<strong>Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to
that processing at any time, free of charge and without providing any justification. Where the User objects to processing
for direct marketing purposes, the Personal Data will no longer be processed for such purposes. To learn whether the
Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this
document.</strong> <br> <br>
<strong>How to exercise these rights</strong> <br> 
<p>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. Such
requests are free of charge and will be answered by the Owner as early as possible and always within one month, providing Users
with the information required by law. Any rectification or erasure of Personal Data or restriction of processing will be
communicated by the Owner to each recipient, if any, to whom the Personal Data has been disclosed unless this proves
impossible or involves disproportionate effort. At the Users’ request, the Owner will inform them about those recipients.</p>`
   },
   {
      title: "Further information for Users in Switzerland",
      text: `<p>This section applies to Users in Switzerland, and, for such Users, supersedes any other possibly divergent or conflicting
information contained in the privacy policy.</p> <br>
<p>Further details regarding the categories of Data processed, the purposes of processing, the categories of recipients of the personal
data, if any, the retention period and further information about Personal Data can be found in <strong>the section titled “Detailed
information on the processing of Personal Data” within this document.</strong></p> <br>
<strong>The rights of Users according to the Swiss Federal Act on Data Protection</strong> <br>
<p>Users may exercise certain rights regarding their Data within the limits of law, including the following:</p>
<ul style="list-style-type: circle;"><li>right of access to Personal Data</li><li>right to object to the processing of their Personal Data (which also allows Users to demand that processing of Personal
Data be restricted, Personal Data be deleted or destroyed, specific disclosures of Personal Data to third parties be
prohibited);</li><li>right to receive their Personal Data and have it transferred to another controller (data portability);</li><li>right to ask for incorrect Personal Data to be corrected.</li></ul> <br>
<strong>How to exercise these rights</strong> <br>
<p>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. Such
requests are free of charge and will be answered by the Owner as early as possible, providing Users with the information required
by law.</p>`
   },
   {
      title: "Further information for Users in Brazil",
      text: `<p>This section of the document integrates with and supplements the information contained in the rest of the privacy policy and is
provided by the entity running this Application and, if the case may be, its parent, subsidiaries and affiliates (for the purposes of
this section referred to collectively as “we”, “us”, “our”).
This section applies to all Users in Brazil (Users are referred to below, simply as “you”, “your”, “yours”), according to the "Lei
Geral de Proteção de Dados" (the "LGPD"), and for such Users, it supersedes any other possibly divergent or conflicting
information contained in the privacy policy.
This part of the document uses the term “personal information“ as it is defined in the <strong>LGPD.</strong></p> <br>
<p><strong>The grounds on which we process your personal information</strong></p> <br>
<p>We can process your personal information solely if we have a legal basis for such processing. Legal bases are as follows:</p>
<ul style="list-style-type: circle;"><li>your consent to the relevant processing activities;</li><li>compliance with a legal or regulatory obligation that lies with us;</li><li>the carrying out of public policies provided in laws or regulations or based on contracts, agreements and similar legal
instruments;</li><li>studies conducted by research entities, preferably carried out on anonymized personal information</li><li>the carrying out of a contract and its preliminary procedures, in cases where you are a party to said contract;</li><li>the exercising of our rights in judicial, administrative or arbitration procedures</li><li>protection or physical safety of yourself or a third party</li><li>the protection of health – in procedures carried out by health entities or professionals;</li><li>our legitimate interests, provided that your fundamental rights and liberties do not prevail over such interests; and credit protection</li></ul> <br>
<p>To find out more about the legal bases, you can contact us at any time using the contact details provided in this document</p> <br>
<p><strong>Categories of personal information processed</strong></p> <br>
<p>To find out what categories of your personal information are processed, you can read the section titled “Detailed information on
the processing of Personal Data” within this document.</p> <br>
<p><strong>Why we process your personal information</strong></p> <br>
<p>To find out why we process your personal information, you can read the sections titled “Detailed information on the processing of
Personal Data” and “The purposes of processing” within this document.</p> <br>
<p><strong>Your Brazilian privacy rights, how to file a request and our response to your requests</strong></p> <br>
<strong>Your Brazilian privacy rights</strong> <br>
<p>You have the right to:</p>
<ul style="list-style-type: circle;"><li>obtain confirmation of the existence of processing activities on your personal information;</li><li>access to your personal information</li><li>have incomplete, inaccurate or outdated personal information rectified</li><li>obtain the anonymization, blocking or elimination of your unnecessary or excessive personal information, or of
information that is not being processed in compliance with the LGPD;</li><li>obtain information on the possibility to provide or deny your consent and the consequences thereof;</li><li>obtain information about the third parties with whom we share your personal information</li><li>obtain, upon your express request, the portability of your personal information (except for anonymized information) to
another service or product provider, provided that our commercial and industrial secrets are safeguarded</li><li>obtain the deletion of your personal information being processed if the processing was based upon your consent, unless one
or more exceptions provided for in art. 16 of the LGPD apply</li><li>revoke your consent at any time;</li><li>lodge a complaint related to your personal information with the ANPD (the National Data Protection Authority) or with
consumer protection bodies;</li><li>oppose a processing activity in cases where the processing is not carried out in compliance with the provisions of the law</li><li>request clear and adequate information regarding the criteria and procedures used for an automated decision; and
request the review of decisions made solely on the basis of the automated processing of your personal information, which
affect your interests. These include decisions to define your personal, professional, consumer and credit profile, or aspects
of your personality.</li></ul> <br>
<p>You will never be discriminated against, or otherwise suffer any sort of detriment, if you exercise your rights.</p> <br>
<p><strong>How to file your request</strong></p> <br>
<p>You can file your express request to exercise your rights free from any charge, at any time, by using the contact details provided
in this document, or via your legal representative.</p> <br>
<p><strong>How and when we will respond to your request</strong></p> <br>
<p>We will strive to promptly respond to your requests.
In any case, should it be impossible for us to do so, we’ll make sure to communicate to you the factual or legal reasons that
prevent us from immediately, or otherwise ever, complying with your requests. In cases where we are not processing your
personal information, we will indicate to you the physical or legal person to whom you should address your requests, if we are in
the position to do so.</p> <br>
<p>In the event that you file an <strong>access</strong> or personal information <strong>processing confirmation</strong> request, please make sure that you specify
whether you’d like your personal information to be delivered in electronic or printed form.
You will also need to let us know whether you want us to answer your request immediately, in which case we will answer in a
simplified fashion, or if you need a complete disclosure instead.
In the latter case, we’ll respond within 15 days from the time of your request, providing you with all the information on the origin
of your personal information, confirmation on whether or not records exist, any criteria used for the processing and the purposes
of the processing, while safeguarding our commercial and industrial secrets.</p> <br>
<p>In the event that you file a <strong>rectification, deletion, anonymization or personal information blocking</strong> request, we will make sure
to immediately communicate your request to other parties with whom we have shared your personal information in order to
enable such third parties to also comply with your request — except in cases where such communication is proven impossible or
involves disproportionate effort on our side.</p> <br>
<p><strong>Transfer of personal information outside of Brazil permitted by the law</strong></p> <br>
<p>We are allowed to transfer your personal information outside of the Brazilian territory in the following cases:</p>
<ul style="list-style-type: circle;"><li>when the transfer is necessary for international legal cooperation between public intelligence, investigation and prosecution
bodies, according to the legal means provided by the international law;</li><li>when the transfer is necessary to protect your life or physical security or those of a third party;</li><li>when the transfer is authorized by the ANPD;</li><li>when the transfer results from a commitment undertaken in an international cooperation agreement;</li><li>when the transfer is necessary for the execution of a public policy or legal attribution of public service;</li><li>when the transfer is necessary for compliance with a legal or regulatory obligation, the carrying out of a contract or
preliminary procedures related to a contract, or the regular exercise of rights in judicial, administrative or arbitration
procedures.</li></ul>`
   },
   {
      title: "Further information for Users in the United States",
      text: `<p>This part of the document integrates with and supplements the information contained in the rest of the privacy policy and is
provided by the business running this Application and, if the case may be, its parent, subsidiaries and affiliates (for the purposes
of this section referred to collectively as “we”, “us”, “our”).</p> <br>
<p>The information contained in this section applies to all Users (Users are referred to below, simply as “you”, “your”, “yours”),
who are residents in the following states: California, Virginia, Colorado, Connecticut, Utah, Texas, Oregon and Montana.</p> <br>
<p>For such Users, this information supersedes any other possibly divergent or conflicting provisions contained in the privacy policy.</p> <br>
<p>This part of the document uses the term Personal Information.</p> <br>
<p><strong>Notice at collection</strong></p> <br>
<p>The following Notice at collection provides you with timely notice about the <strong>categories of Personal Information collected or
disclosed in the past 12 months</strong> so that you can exercise meaningful control over our use of that Information.</p> <br>
<p>While such categorization of Personal Information is mainly based on California privacy laws, it can also be helpful for anyone
who is not a California resident to get a general idea of what types of Personal Information are collected.</p> <br>
<p>You can read the definitions of these concepts inside the <a href="file:///C:/Users/andre/Downloads/Telegram%20Desktop/privacy-policy-10919530.pdf#definitions_and_legal_references" target="blank" class="text-blue-600 underline">“Definitions and legal references section”</a> of the privacy policy.</p> <br>
<p><strong>To know more about your rights you can refer to the <a href="file:///C:/Users/andre/Downloads/Telegram%20Desktop/privacy-policy-10919530.pdf#privacy_rights_under_us_state_laws" target="blank" class="text-blue-600 underline">“Your privacy rights under US state laws”</a> section of our privacy
policy.</strong></p> <br>
<p>For more details on the collection of Personal Information, please read the section <a target="blank" class="text-blue-600 underline" href="">“Detailed information on the processing of
Personal Data”</a> of our privacy policy.</p> <br>
<p>We won’t process your Information for unexpected purposes, or for purposes that are not reasonably necessary to and compatible
with the purposes originally disclosed, without your consent.</p> <br>
<p><strong>What are the sources of the Personal Information we collect?</strong></p> <br>
<p>We collect the above-mentioned categories of Personal Information, either directly or indirectly, from you when you use this
Application.</p> <br>
<p>For example, you directly provide your Personal Information when you submit requests via any forms on this Application. You
also provide Personal Information indirectly when you navigate this Application, as Personal Information about you is
automatically observed and collected.</p> <br>
<p><strong>Your privacy rights under US state laws</strong></p> <br>
<p>You may exercise certain rights regarding your Personal Information. In particular, to the extent permitted by applicable law, you
have:</p>
<ul style="list-style-type: circle;"><li><strong>the right to access Personal Information: the right to know.</strong> You have the right to request that we confirm whether or
not we are processing your Personal Information. You also have the right to access such Personal Information;</li><li><strong>the right to correct inaccurate Personal Information.</strong> You have the right to request that we correct any inaccurate
Personal Information we maintain about you;</li><li><strong>the right to request the deletion of your Personal Information.</strong> You have the right to request that we delete any of your
Personal Information;</li><li><strong>the right to obtain a copy of your Personal Information.</strong> We will provide your Personal Information in a portable and
usable format that allows you to transfer data easily to another entity – provided that this is technically feasible;</li><li><strong>the right to opt out from the Sale of your Personal Information;</strong> We will not discriminate against you for exercising
your privacy rights.</li> <li><strong>the right to non-discrimination.</strong></li></ul> <br>
<p><strong>Additional rights for Users residing in California</strong></p> <br>
<p>In addition to the rights listed above common to all Users in the United States, as a User residing in California, you have</p>
<ul style="list-style-type: circle;"><li><strong>The right to opt out of the Sharing of your Personal Information</strong> for cross-context behavioral advertising;</li><li><strong>The right to request to limit our use or disclosure of your Sensitive Personal Information</strong> to only that which is
necessary to perform the services or provide the goods, as is reasonably expected by an average consumer. Please note that
certain exceptions outlined in the law may apply, such as, when the collection and processing of Sensitive Personal
Information is necessary to verify or maintain the quality or safety of our service.</li></ul> <br>
<p><strong>Additional rights for Users residing in Virginia, Colorado, Connecticut, Texas, Oregon and Montana</strong></p> <br>
<p>In addition to the rights listed above common to all Users in the United States, as a User residing in Virginia, Colorado,
Connecticut, Texas and Oregon, you have</p>
<ul style="list-style-type: circle;"><li><strong>The right to opt out of</strong> the processing of your personal information for <strong>Targeted Advertising or profiling</strong> in furtherance
of decisions that produce legal or similarly significant effects concerning you;</li><li><strong>The right to freely give, deny or withdraw your consent for the processing of your Sensitive Personal Information.</strong> Please note that certain exceptions outlined in the law may apply, such as, but not limited to, when the collection and
processing of Sensitive Personal Information is necessary for the provision of a product or service specifically requested by
the consumer.</li></ul> <br>
<p><strong>Additional rights for users residing in Utah</strong></p> <br>
<p>In addition to the rights listed above common to all Users in the United States, as a User residing in Utah, you have</p>
<ul style="list-style-type: circle;"><li>The right to opt out of the processing of your Personal Information for Targeted Advertising</li><li>The right to opt out of the processing of your Sensitive Personal Information. Please note that certain exceptions
outlined in the law may apply, such as, but not limited to, when the collection and processing of Sensitive Personal
Information is necessary for the provision of a product or service specifically requested by the consumer.</li></ul> <br>
<p><strong>How to exercise your privacy rights under US state laws</strong></p> <br>
<p>To exercise the rights described above, you need to submit your request to us by contacting us via the contact details provided in
this document</p> <br>
<p>For us to respond to your request, we must know who you are. We will not respond to any request if we are unable to verify your
identity and therefore confirm the Personal Information in our possession relates to you. You are not required to create an account
with us to submit your request. We will use any Personal Information collected from you in connection with the verification of
your request solely for verification and shall not further disclose the Personal Information, retain it longer than necessary for
purposes of verification, or use it for unrelated purposes.</p> <br>
<p>If you are an adult, you can make a request on behalf of a child under your parental authority.</p> <br>
<p><strong>How to exercise your rights to opt out</strong></p> <br>
<p>In addition to what is stated above, to exercise your right to opt-out of Sale or Sharing and Targeted Advertising you can also use
the privacy choices link provided on this Application.</p> <br>
<p>If you want to submit requests to opt out of Sale or Sharing and Targeted Advertising activities via a user-enabled <strong>global privacy
control</strong>, such as for example the Global Privacy Control  ("<a target="blank" class="text-blue-600 underline" href="https://globalprivacycontrol.org/">GPC</a>"), you are free to do so and we will abide by such request in a
frictionless manner.</p> <br>
<p><strong>How and when we are expected to handle your request</strong></p> <br>
<p>We will respond to your request without undue delay, but in all cases within the timeframe required by applicable law. Should we
need more time, we will explain to you the reasons why, and how much more time we need.</p> <br>
<p>Should we deny your request, we will explain to you the reasons behind our denial (where envisaged by applicable law you may
then contact the relevant authority to submit a complaint).</p> <br>
<p>We do not charge a fee to process or respond to your request unless such request is manifestly unfounded or excessive and in all
other cases where it is permitted by the applicable law. In such cases, we may charge a reasonable fee or refuse to act on the
request. In either case, we will communicate our choices and explain the reasons behind them.</p>`
   },
   {
      title: "Additional information about Data collection and processing",
      text: `<p><strong>Legal action</strong></p> <br>
      <p>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action
arising from improper use of this Application or the related Services.
The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.</p> <br>
<p><strong>Additional information about User's Personal Data</strong></p> <br>
<p>In addition to the information contained in this privacy policy, this Application may provide the User with additional and
contextual information concerning particular Services or the collection and processing of Personal Data upon request.</p> <br>
<p><strong>System logs and maintenance</strong></p> <br>
<p>For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction
with this Application (System logs) or use other Personal Data (such as the IP Address) for this purpose.</p> <br>
<p><strong>Information not contained in this policy</strong></p> <br>
<p>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see
the contact information at the beginning of this document</p> <br>
<p><strong>Changes to this privacy policy</strong></p> <br>
<p>The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly
within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information
available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at
the bottom.</p> <br>
<p>Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent
from the User, where required</p> <br>
<p><strong>Definitions and legal references</strong></p> <br>
<p><strong>Personal Data (or Data) / Personal Information (or Information)</strong></p> <br>
<p>Any information that directly, indirectly, or in connection with other information — including a personal identification number —
allows for the identification or identifiability of a natural person</p> <br>
<p><strong>Sensitive Personal Information</strong></p> <br>
<p>Sensitive Personal Information means any Personal Information that is not publicly available and reveals information considered
sensitive according to the applicable privacy law.</p> <br>
<p><strong>Usage Data</strong></p> <br>
<p>Information collected automatically through this Application (or third-party services employed in this Application), which can
include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses
(Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file
received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country
of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time
spent on each page within the Application) and the details about the path followed within the Application with special reference
to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</p> <br>
<p><strong>User</strong></p> <br>
<p>The individual using this Application who, unless otherwise specified, coincides with the Data Subject.</p> <br>
<p><strong>Data Subject</strong></p> <br>
<p>The natural person to whom the Personal Data refers.</p> <br>
<p><strong>Data Processor (or Processor)</strong></p> <br>
<p>The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as
described in this privacy policy.</p> <br>
<p><strong>Data Controller (or Owner)</strong></p> <br>
<p>The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes
and means of the processing of Personal Data, including the security measures concerning the operation and use of this
Application. The Data Controller, unless otherwise specified, is the Owner of this Application.</p> <br>
<p><strong>This Application</strong></p> <br>
<p>The means by which the Personal Data of the User is collected and processed.</p> <br>
<p><strong>Service</strong></p> <br>
<p>The service provided by this Application as described in the relative terms (if available) and on this site/application.</p> <br>
<p><strong>Sale</strong></p> <br>
<p>Sale means any exchange of Personal Information by the Owner to <strong>a third party, for monetary or other valuable
consideration</strong>, as defined by the applicable privacy US state law. Please note that the exchange of Personal Information with a
service provider pursuant to a written contract that meets the requirements set by the applicable law, does not constitute a Sale of
your Personal Information.</p> <br>
<p><strong>Sharing</strong></p> <br>
<p>Sharing means any sharing, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise
communicating orally, in writing, or by electronic or other means, a consumer's Personal Information by the business to a <strong>third
party for cross-context behavioral advertising</strong>, whether for monetary or other valuable consideration, including transactions
between a business and a third party for cross-context behavioral advertising for the benefit of a business in which no money is
exchanged, as defined by the California privacy laws. Please note that the exchange of Personal Information with a service
provider pursuant to a written contract that meets the requirements set by the California privacy laws, does not constitute sharing
of your Personal Information.</p> <br>
<p><strong>Targeted advertising</strong></p> <br>
<p>Targeted advertising means displaying advertisements to a consumer where the advertisement is selected based on Personal
Information obtained from that consumer’s activities over time and across nonaffiliated websites or online applications to predict
such consumer’s preferences or interests, as defined by the applicable privacy US state law.</p> <br>
<p><strong>European Union (or EU)</strong></p> <br>
<p>Unless otherwise specified, all references made within this document to the European Union include all current member states to
the European Union and the European Economic Area.</p> <br>
<p><strong>Legal information</strong></p> <br>
<p>This privacy statement has been prepared based on provisions of multiple legislations.</p> <br>
<p>This privacy policy relates solely to this Application, if not stated otherwise within this document.</p> <br>
<p>Latest update: October 21, 2024</p>`
   }
])
</script>
