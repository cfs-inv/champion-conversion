"use client";

import { useState } from "react";
import SecondForm from "@/app/components/SecondForm";
import LoanTimeline from "../components/LoanTimeline";

export default function ThankYouPageContent() {
  const [showForm, setShowForm] = useState(false);

  return (
   <section className="champion-thank-you">

    <div className="champion-thank-you-contact">
  <span>Questions about your application?</span>
  <a href="tel:+18887981970">☎ CALL US (888) 798-1970</a>
</div>

  <div className="champion-thank-you-hero">

    <div className="champion-thank-you-image">
      <img
        src="/images/champ_ty.webp"
        alt="Thank you"
      />
    </div>

    <div className="champion-thank-you-content">

      <div className="champion-thank-you-message">
        <h1>Application Received</h1>

        <p>
          We've received your initial application and our team
          will review your information shortly.
        </p>
      </div>


      {!showForm && (
        <div className="champion-thank-you-cta">

          <h2>⏱ Takes a few minutes to move forward</h2>

          <p>
            Complete a few additional details about your residence,
            employment, and income so we can review your application
            more efficiently.
          </p>

          <button
            data-track="extend_application"
            className="champion-thank-you-button"
            onClick={() => {
              setShowForm(true);

              setTimeout(() => {
                const element = document.querySelector(".champion-form-container");

                if (element) {
                  const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY;

                  const offsetPosition = elementPosition - 100;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }, 100);
            }}
          >
            Continue Full Application →
          </button>

        </div>
      )}

    </div>

  </div>


  <div className="champion-thank-you-timeline">
    <LoanTimeline currentStep={showForm ? 2 : 1} />
  </div>


  <div
    className="champion-form-container"
    style={{
      display: showForm ? "block" : "none",
      opacity: showForm ? 1 : 0,
      transition: "opacity 0.5s ease-in-out",
      maxWidth: "710px",
      margin: "30px auto 0",
      width: "100%",
    }}
  >
    <SecondForm />
  </div>

</section>
  );
}