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
DISCLOSURES TO CASH LOANS EXPERTS VEHICLE SECURED TITLE LOANS
</h4>

<ul>
<li>Upon completion of the call, conditional approval may be given pending the review of documentation.</li>

<li>Loan approval is subject to meeting credit criteria standards, which may include providing acceptable property as collateral and demonstrating ability to repay the loan.</li>

<li>Funding time may vary depending on the time of final approval following the reception and review of all required documents and signing. Same day funding is subject to final approval and signing completion before 3PM PT on a business day. A bank account is required as a condition and in order to obtain a Persona Loan. Loan proceeds may need to be disbursed via Automatic Clearing House (“ACH”) to the borrower’s bank account. The actual availability of funds can vary based on bank processing times, daily ACH deadlines, weekends and holidays.</li>

<li>Actual loan amount, term, and annual percentage rate the applicant qualifies for may vary by applicant, lender and the law requirements of those terms.</li>

<li>The states this site services may change without notice. This service does not constitute an offer or solicitation for consumers in all states. This service may not be available in your particular state.</li>

<li>Service availability may change by state and does not constitute an offer in all jurisdictions.</li>

<li>Our loans can be up to $50,000 depending on certain factors.</li>
</ul>

<p>THIS LOAN (Auto-Tile or Personal Loan) IS NOT INTENDED TO MEET LONG-TERM FINANCIAL NEEDS. Loan proceeds are intended primarily for personal, family, and household purposes. Lenders recommend and encourage consumers to pay early, often and more in order to avoid additional finance charges.</p>

<p>Loan approval is subject to meeting the lender’s credit criteria, which may include providing acceptable property as collateral. Applicant must demonstrate the ability to repay the loan. Loan proceeds are intended primarily for personal, family and household purposes. Minimum loan amounts vary by state.</p>

<p>Cash Loans Experts is licensed or registered as a finance lender as required by applicable state law and does not offer or service student loans. Cash Loans Experts does not provide financial advice and does not guarantee the accuracy of information as it is subject to change without notice about its current product guidelines.</p>

<p>Cash Loans Experts may act as the broker for the loan and may not be the direct lender or servicer of your loan. All loan applications are subject to meeting underwriting and credit criteria, which includes providing acceptable property as collateral. A bank account is required as a condition and in order to obtain a loan. Completing a full application may affect your credit score.</p>

<p>Cash Loans Experts. The terms and conditions set forth within the “General Terms and Conditions, up to and including but limited to the “Wireless Policy” applies to all Cash Loans Experts owned or operated websites in the aforementioned.</p>

<h4>Important Information Concerning Procedures for Opening a New Account</h4>

<p>To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.</p> 

<p>What this means for you: When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver’s license or other identifying documents. We will make a copy of these identifying documents for our records</p>

<p>If you are using a screen-reader and are having problems using this website, please give us a call at (888) 812-1076 for immediate assistance.</p>

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

<p>(888) 812-1076</p>
<p>PO BOX 958</p>
<p>CATHEDRAL CITY, CA 92235-0958</p>


</div>

</div>

</footer>

)

}