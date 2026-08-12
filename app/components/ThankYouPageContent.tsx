"use client";

import { useState } from "react";
import SecondForm from "@/app/components/SecondForm";
import LoanTimeline from "../components/LoanTimeline";

export default function ThankYouPageContent() {
  const [showForm, setShowForm] = useState(false);

  return (
   <section className="champion-thank-you fade-in">

  <LoanTimeline currentStep={showForm ? 2 : 1} />

  <div className="champion-thank-you-card">

    <div className="champion-thank-you-icon" aria-hidden="true">
      ✓
    </div>

    <h1>Application Received</h1>

    <p className="champion-thank-you-lead">
      Thank you for submitting your initial application.
    </p>

    <p className="champion-thank-you-copy">
      Our team may contact you shortly to discuss available options
      and answer any questions you may have.
    </p>

    {!showForm && (
      <div className="champion-thank-you-cta">

        <h2>Want to speed up the process?</h2>

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
              const element = document.querySelector(".form-container");

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

        <small>⏱ Takes about 3-5 minutes</small>

      </div>
    )}

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