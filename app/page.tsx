
import Footer from "@/app/components/Footer";
import LoanForm from "@/app/components/LoanForm";
import Steps from "@/app/components/Steps";
import FAQAccordion from "@/app/components/FAQAccordion";
import { cities } from "@/app/data/cityData";
import Image from "next/image";
import { Metadata } from "next";
import { Suspense } from "react";
import Reviews from "./components/Reviews";
import FinalCTA from "./components/FinalCTA";

const cityData = cities.california;

export const metadata: Metadata = {
  title: "Car Title Loans in California | Champion Cash Loans",
  description:
    "Apply online for a car title loan in California. Get started online and keep driving your vehicle while making your payments.",
};

export default function Home() {
  const localFAQs = cityData.faqs;

  return (
    <>
      <main className="champion-landing">

        {/* =========================================================
            HERO / HEADLINE
        ========================================================= */}

        <section className="champion-hero">
          <div className="champion-container ">

           <div id="top" className="champion-brand-heading">
  <Image
    src="/images/championlogo_web.webp"
    alt="Champion Cash Loans"
    width={220}
    height={60}
    priority
    className="champion-logo"
  />

  <span className="champion-heading-divider" aria-hidden="true" />

  <h1 className="champion-headline">
    Car Title Loans{" "}
    <span className="champion-headline-accent">
      Made Simple.
    </span>
  </h1>
</div>



  {/* =====================================================
                BENEFITS
            ===================================================== */}

            <div className="champion-highlights">

              {cityData.localBenefits.map((benefit, index) => (
                <div
                  className="champion-highlight"
                  key={index}
                >
                  <div className="champion-highlight-inner">

                    <span className="champion-check">
                      ✓
                    </span>

                    <span className="champion-highlight-text">
                      {benefit}
                    </span>

                  </div>
                </div>
              ))}

            </div>

            {/* =====================================================
                IMAGE + FORM
            ===================================================== */}

            <div className="champion-conversion-grid">

              <div className="champion-image-column">



  <Image
    src={cityData.heroImage}
    alt="Car title loans in California"
    width={700}
    height={500}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="champion-hero-image"
    priority
  />

  <div className="champion-image-copy">
    <h2>Get started today.</h2>
    <p>
      Complete your application online and see what options may be available.
    </p>
   <p className="disclaimer">
     *Same-day funding is subject to availability and may vary based on application review and bank processing.
   </p>
  </div>

</div>

              <div className="champion-form-column">
                <Suspense fallback={<div className="loan-form-loading" />}>
  <LoanForm
    slug="california"
    attribution={{
      mainSource: "CFS Google Ads",
      trafficSource: "landing-california",
      brand: "Champion",
    }}
  />
</Suspense>
              </div>

            </div>

          

          </div>
        </section>


 {/* =========================================================
    CALIFORNIA LOCAL BANNER / SEO
========================================================= */}

<section className="champion-local-section">
  <div className="champion-container">

    <div className="champion-local-banner">

      {/* VISUAL */}
      <div className="champion-local-image">
        <Image
          src={cityData.cityBadgeImage}
          alt={`${cityData.cityName} Champion Cash Loans`}
          width={300}
          height={180}
        />
      </div>

      {/* CONTENT */}
      <div className="champion-local-content">

        <h2 className="champion-section-title">
          {cityData.seoHeading}
        </h2>

        <p className="champion-local-paragraph">
          {cityData.localSEOParagraph}
        </p>

        <p className="champion-local-disclaimer">
          {cityData.regulationsText}
        </p>

      </div>

    </div>

  </div>
</section>

<Reviews reviews={cityData.reviews} />


        {/* =========================================================
            STEPS + FAQ
        ========================================================= */}

        <section className="champion-information">

          <div className="champion-container">

            <div className="champion-information-grid">

              {/* =========================
                  HOW IT WORKS
              ========================= */}

              <div className="champion-steps-column">

                <h2 className="champion-section-title">
                  How It Works
                </h2>

                <Steps lang="en" />

              </div>


              {/* =========================
                  FAQ
              ========================= */}

              <div className="champion-faq-column">

                <h2 className="champion-section-title">
                  {cityData.faqTitle}
                </h2>

                <FAQAccordion
                  items={localFAQs}
                />

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FAQ STRUCTURED DATA
        ========================================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: localFAQs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />

        <FinalCTA />


      </main>

      <Footer />
    </>
  );
}
