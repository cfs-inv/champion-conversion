"use client";

import { useState } from "react";

export default function Footer({
  lang = "en",
}: {
  lang?: "en" | "es";
}) {

  const translations = {
  en: {
    disclosureShow: "View Disclosure ▼",
    disclosureHide: "Hide Disclosure ▲",
    resources: "Resources",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    faqs: "Community Guidelines",
    doNotSell: "Do not sell my info",
    consent: "Consent Preferences",
    hours: "Hours",
    mondaySaturday: "Mon-Sat: 9am-7pm",
    sunday: "Sun: 9am-5pm",
    contact: "Contact",
  },

  es: {
    disclosureShow: "Ver información legal ▼",
    disclosureHide: "Ocultar información legal ▲",
    resources: "Recursos",
    privacy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    faqs: "Reglas de la Comunidad",
    doNotSell: "No vender mi información",
    consent: "Preferencias de consentimiento",
    hours: "Horario",
    mondaySaturday: "Lun-Sáb: 9am-7pm",
    sunday: "Dom: 9am-5pm",
    contact: "Contacto",
  },
};

const disclosureContent = {
  en: {
    title:
      "DISCLOSURES FOR CFS VEHICLE SECURED TITLE & PERSONAL LOANS",

    california:
      "All loans are made or arranged pursuant to a California Finance Lenders Law License Number: 60DBO-35846.",

    arizona:
      "Loans made pursuant to Arizona Department of Financial Institutions Sales Finance Company License SF-1005405.",

    beforeApplying:
      "Before applying, please note:",

    points: [
      "Upon completion of the call, conditional approval may be given pending the review of documentation.",

      "Loan approval is subject to meeting credit criteria standards, which may include providing acceptable property as collateral and demonstrating the ability to repay the loan.",

      "Funding time may vary depending on final approval, document review, signing time, ACH processing, weekends, and holidays.",

      "The actual loan amount, term, and annual percentage rate may vary by applicant, lender, and applicable law.",

      "Service availability may change by state and does not constitute an offer in all jurisdictions.",
    ],

    loanAmount:
      "Our loans can be up to $50,000 depending on certain factors.",

    thisLoan:
      "THIS LOAN",

    thisLoanText:
      "(Auto-Title or Personal Loan) IS NOT INTENDED TO MEET LONG-TERM FINANCIAL NEEDS. Loan proceeds are intended primarily for personal, family, and household purposes. Lenders recommend and encourage consumers to pay early, often, and more in order to avoid additional finance charges.",

    approval:
      "Loan approval is subject to meeting the lender’s credit criteria, which may include providing acceptable property as collateral. The applicant must demonstrate the ability to repay the loan. Loan proceeds are intended primarily for personal, family, and household purposes. Minimum loan amounts vary by state.",

    interestRate:
      "Loans with an Annual Interest Rate of 36% are limited to loan amounts between $2,500 to $9,999.00, while supplies last.",

    cfsLicensing:
      "CFS Investments is licensed or registered as a finance lender as required by applicable state law and does not offer or service student loans. CFS Investments does not provide financial advice and does not guarantee the accuracy of information as it is subject to change without notice about its current product guidelines.",

    broker:
      "CFS Investments may act as the broker for the loan and may not be the direct lender or servicer of your loan. All loan applications are subject to meeting underwriting and credit criteria, which includes providing acceptable property as collateral. A bank account is required as a condition and in order to obtain a loan. Inquiring about a loan and its minimum requirements does not impact your credit score; however, completing a full application may affect your credit score.",

    discrimination:
      "Champion Financial Services does not discriminate on the basis of race, color, religion, sex, marital status, age, or because all or part of an applicant's income derives from public assistance.",

    dba:
      "CFS Investments DBA Champion Financial Services, Turbo Loan, and Auto Equity Now.",

    dbaText:
      "The terms and conditions set forth within the “General Terms and Conditions,” up to and including but not limited to the “Wireless Policy,” apply to all CFS Investments owned or operated websites in the aforementioned DBAs.",

    accountTitle:
      "Important Information Concerning Procedures for Opening a New Account",

    accountInfo:
      "To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.",

    whatThisMeans:
      "What this means for you:",

    identification:
      "When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver’s license or other identifying documents. We will make a copy of these identifying documents for our records.",
  },

  es: {
  title:
    "DIVULGACIONES PARA PRÉSTAMOS PERSONALES Y PRÉSTAMOS GARANTIZADOS CON EL TÍTULO DE UN VEHÍCULO DE CFS",

  california:
    "Todos los préstamos son otorgados o gestionados de conformidad con una Licencia de California Finance Lenders Law Número: 60DBO-35846.",

  arizona:
    "Préstamos otorgados de conformidad con la Licencia de Sales Finance Company SF-1005405 del Arizona Department of Financial Institutions.",

  beforeApplying:
    "Antes de presentar una solicitud, tenga en cuenta lo siguiente:",

  points: [
    "Al finalizar la llamada, se puede otorgar una aprobación condicional, sujeta a la revisión de la documentación.",

    "La aprobación del préstamo está sujeta al cumplimiento de los estándares de los criterios de crédito, lo que puede incluir proporcionar una propiedad aceptable como garantía y demostrar la capacidad para pagar el préstamo.",

    "El tiempo de financiamiento puede variar dependiendo de la aprobación final, la revisión de documentos, el tiempo de firma, el procesamiento de ACH, los fines de semana y los días festivos.",

    "El monto real del préstamo, el plazo y la tasa porcentual anual pueden variar según el solicitante, el prestamista y la legislación aplicable.",

    "La disponibilidad de los servicios puede cambiar según el estado y no constituye una oferta en todas las jurisdicciones.",
  ],

  loanAmount:
    "Nuestros préstamos pueden ser de hasta $50,000, dependiendo de ciertos factores.",

  thisLoan:
    "ESTE PRÉSTAMO",

  thisLoanText:
    "(Préstamo con Título de Auto o Préstamo Personal) NO ESTÁ DESTINADO A SATISFACER NECESIDADES FINANCIERAS A LARGO PLAZO. Los fondos del préstamo están destinados principalmente a fines personales, familiares y del hogar. Los prestamistas recomiendan y alientan a los consumidores a realizar pagos anticipados, frecuentes y de mayor monto para evitar cargos financieros adicionales.",

  approval:
    "La aprobación del préstamo está sujeta al cumplimiento de los criterios de crédito del prestamista, lo que puede incluir proporcionar una propiedad aceptable como garantía. El solicitante debe demostrar la capacidad para pagar el préstamo. Los fondos del préstamo están destinados principalmente a fines personales, familiares y del hogar. Los montos mínimos de los préstamos varían según el estado.",

  interestRate:
    "Los préstamos con una Tasa de Interés Anual del 36% están limitados a montos de préstamo de entre $2,500 y $9,999.00, mientras haya disponibilidad.",

  cfsLicensing:
    "CFS Investments cuenta con licencia o está registrado como prestamista financiero según lo exige la legislación estatal aplicable y no ofrece ni administra préstamos estudiantiles. CFS Investments no proporciona asesoría financiera y no garantiza la exactitud de la información, ya que las pautas actuales de sus productos están sujetas a cambios sin previo aviso.",

  broker:
    "CFS Investments puede actuar como corredor del préstamo y puede no ser el prestamista directo ni el administrador de su préstamo. Todas las solicitudes de préstamo están sujetas al cumplimiento de los criterios de suscripción y crédito, lo que incluye proporcionar una propiedad aceptable como garantía. Se requiere una cuenta bancaria como condición y para obtener un préstamo. Consultar sobre un préstamo y sus requisitos mínimos no afecta su puntaje de crédito; sin embargo, completar una solicitud completa puede afectar su puntaje de crédito.",

  discrimination:
    "Champion Financial Services no discrimina por motivos de raza, color, religión, sexo, estado civil, edad, ni porque la totalidad o parte de los ingresos de un solicitante provengan de asistencia pública.",

  dba:
    "CFS Investments DBA Champion Financial Services, Turbo Loan y Auto Equity Now.",

  dbaText:
    "Los términos y condiciones establecidos en los “General Terms and Conditions”, incluyendo, entre otros, la “Wireless Policy”, se aplican a todos los sitios web propiedad u operados por CFS Investments bajo los DBA anteriormente mencionados.",

  accountTitle:
    "Información importante sobre los procedimientos para abrir una nueva cuenta",

  accountInfo:
    "Para ayudar al gobierno a combatir el financiamiento del terrorismo y las actividades de lavado de dinero, la ley federal exige que todas las instituciones financieras obtengan, verifiquen y registren información que identifique a cada persona que abre una cuenta.",

  whatThisMeans:
    "Lo que esto significa para usted:",

  identification:
    "Cuando abra una cuenta, le solicitaremos su nombre, dirección, fecha de nacimiento y otra información que nos permita identificarlo. También podemos solicitar ver su licencia de conducir u otros documentos de identificación. Haremos una copia de estos documentos de identificación para nuestros registros.",
},
};

const t = translations[lang];
const content = disclosureContent[lang];

const [open,setOpen] = useState(false);

return(

<footer className="footer">

<div className="footer-container">

<div className="footer-wide">

<button
  className="disclosure-btn"
  onClick={() => setOpen(!open)}
>
  {open ? t.disclosureHide : t.disclosureShow}
</button>

{open && (


<div className="disclosures">

  <h4>{content.title}</h4>

  <p>
    <strong className="disclosure-accent">California:</strong>{" "}
    {content.california}
  </p>

  <p>
    <strong className="disclosure-accent">Arizona:</strong>{" "}
    {content.arizona}
  </p>

  <p>{content.beforeApplying}</p>

  <ol>
    {content.points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ol>

  <p>{content.loanAmount}</p>

  <p>
    <strong className="disclosure-accent">
      {content.thisLoan}
    </strong>{" "}
    {content.thisLoanText}
  </p>

  <p>{content.approval}</p>

  <p>{content.interestRate}</p>

  <p>{content.cfsLicensing}</p>

  <p>{content.broker}</p>

  <p>{content.discrimination}</p>

  <p>
    <strong className="disclosure-accent">
      {content.dba}
    </strong>{" "}
    {content.dbaText}
  </p>

  <h4>{content.accountTitle}</h4>

  <p>{content.accountInfo}</p>

  <p>
    <strong className="disclosure-accent">
      {content.whatThisMeans}
    </strong>{" "}
    {content.identification}
  </p>

</div>

)}

</div>

<div className="footer-col">
  <h4>{t.resources}</h4>

  <a href="/legal/donotsell">{t.privacy}</a>
  <a href="/legal/terms">{t.terms}</a>
  <a href="/faq">{t.faqs}</a>
  <a href="/legal/donotsell">{t.doNotSell}</a>

  <a
    href="#"
    className="termly-display-preferences"
    onClick={(e) => {
      e.preventDefault();

      if (
        typeof window !== "undefined" &&
        window.Termly?.showPreferenceCenter
      ) {
        window.Termly.showPreferenceCenter();
      } else {
        console.warn(
          "El SDK de Termly no se ha inicializado en la ventana aún."
        );
      }
    }}
  >
    {t.consent}
  </a>
</div>

<div className="footer-col">
  <h4>{t.hours}</h4>
  <p>{t.mondaySaturday}</p>
  <p>{t.sunday}</p>
</div>

<div className="footer-col">
  <h4>{t.contact}</h4>

  <p>(888) 798-1970</p>
  <p>300 N Broadway Suite-A,</p>
  <p>Santa Ana, CA 92701</p>

  <a href="https://www.championcashloans.com">
    www.championcashloans.com
  </a>
</div>

</div>

    </footer>
  );
}