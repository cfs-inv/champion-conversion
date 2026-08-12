"use client";

import { useState } from "react";

export default function Footer() {

const [open,setOpen] = useState(false);

return(

<footer className="footer">

<div className="footer-container">

<div className="footer-wide">

<button
className="disclosure-btn"
onClick={()=>setOpen(!open)}
>

{open
? "Hide Disclosure ▲"
: "View Disclosure ▼"}

</button>

{open && (


<div className="disclosures">

  <h4>
    DISCLOSURES FOR CFS VEHICLE SECURED TITLE & PERSONAL LOANS
  </h4>

  <p>
    <strong className="disclosure-accent">California:</strong>{" "}
    All loans are made or arranged pursuant to a California Finance
    Lenders Law License Number: 60DBO-35846.
  </p>

  <p>
    <strong className="disclosure-accent">Arizona:</strong>{" "}
    Loans made pursuant to Arizona Department of Financial Institutions
    Sales Finance Company License SF-1005405.
  </p>

  <p>Before applying, please note:</p>

  <ol>
    <li>
      Upon completion of the call, conditional approval may be given
      pending the review of documentation.
    </li>

    <li>
      Loan approval is subject to meeting credit criteria standards,
      which may include providing acceptable property as collateral and
      demonstrating the ability to repay the loan.
    </li>

    <li>
      Funding time may vary depending on final approval, document review,
      signing time, ACH processing, weekends, and holidays.
    </li>

    <li>
      The actual loan amount, term, and annual percentage rate may vary
      by applicant, lender, and applicable law.
    </li>

    <li>
      Service availability may change by state and does not constitute
      an offer in all jurisdictions.
    </li>
  </ol>

  <p>
    Our loans can be up to $50,000 depending on certain factors.
  </p>

  <p>
    <strong className="disclosure-accent">THIS LOAN</strong>{" "}
    (Auto-Title or Personal Loan) IS NOT INTENDED TO MEET LONG-TERM
    FINANCIAL NEEDS. Loan proceeds are intended primarily for personal,
    family, and household purposes. Lenders recommend and encourage
    consumers to pay early, often, and more in order to avoid additional
    finance charges.
  </p>

  <p>
    Loan approval is subject to meeting the lender’s credit criteria,
    which may include providing acceptable property as collateral. The
    applicant must demonstrate the ability to repay the loan. Loan
    proceeds are intended primarily for personal, family, and household
    purposes. Minimum loan amounts vary by state.
  </p>

  <p>
    Loans with an Annual Interest Rate of 36% are limited to loan
    amounts between $2,500 to $9,999.00, while supplies last.
  </p>

  <p>
    CFS Investments is licensed or registered as a finance lender as
    required by applicable state law and does not offer or service
    student loans. CFS Investments does not provide financial advice
    and does not guarantee the accuracy of information as it is subject
    to change without notice about its current product guidelines.
  </p>

  <p>
    CFS Investments may act as the broker for the loan and may not be
    the direct lender or servicer of your loan. All loan applications
    are subject to meeting underwriting and credit criteria, which
    includes providing acceptable property as collateral. A bank account
    is required as a condition and in order to obtain a loan. Inquiring
    about a loan and its minimum requirements does not impact your
    credit score; however, completing a full application may affect
    your credit score.
  </p>

  <p>
    Champion Financial Services does not discriminate on the basis of
    race, color, religion, sex, marital status, age, or because all or
    part of an applicant's income derives from public assistance.
  </p>

  <p>
    <strong className="disclosure-accent">
      CFS Investments DBA Champion Financial Services, Turbo Loan, and
      Auto Equity Now.
    </strong>{" "}
    The terms and conditions set forth within the “General Terms and
    Conditions,” up to and including but not limited to the “Wireless
    Policy,” apply to all CFS Investments owned or operated websites
    in the aforementioned DBAs.
  </p>

  <h4>
    Important Information Concerning Procedures for Opening a New Account
  </h4>

  <p>
    To help the government fight the funding of terrorism and money
    laundering activities, federal law requires all financial
    institutions to obtain, verify, and record information that
    identifies each person who opens an account.
  </p>

  <p>
    <strong className="disclosure-accent">
      What this means for you:
    </strong>{" "}
    When you open an account, we will ask for your name, address, date
    of birth, and other information that will allow us to identify you.
    We may also ask to see your driver’s license or other identifying
    documents. We will make a copy of these identifying documents for
    our records.
  </p>

</div>


)}

</div>

<div className="footer-col">
          <h4>Resources</h4>
          <a href="/legal/donotsell">Privacy Policy</a>
          <a href="/legal/terms">Terms & Conditions</a>
          <a href="/faq">FAQs</a>
          <a href="/legal/donotsell">Do not sell my info</a>
          <a 
    href="#" 
    className="termly-display-preferences" 
    onClick={(e) => {
      e.preventDefault(); 
      
      if (typeof window !== 'undefined' && window.Termly?.showPreferenceCenter) {
        window.Termly.showPreferenceCenter();
      } else {
        console.warn("El SDK de Termly no se ha inicializado en la ventana aún.");
      }
    }}
  >
    Consent Preferences
  </a>

</div>

<div className="footer-col">

<h4>Hours</h4>

<p>Mon-Sat: 9am-7pm</p>
<p>Sun: 9am-5pm</p>

</div>

<div className="footer-col">

<h4>Contact</h4>

<p>(888) 798-1970</p>
<p>300 N Broadway Suite-A,</p>
<p> Santa Ana, CA 92701</p>


</div>

</div>

    </footer>
  );
}