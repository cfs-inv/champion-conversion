import Footer from "@/app/components/Footer";
import LoanForm from "@/app/components/LoanForm";
import Steps from "@/app/components/Steps";
import FAQAccordion from "@/app/components/FAQAccordion";
import { cities } from "@/app/data/cityData";
import Image from "next/image";
import { Metadata } from "next";
import { Suspense } from "react";
import Reviews from "@/app/components/Reviews";
import FinalCTA from "@/app/components/FinalCTA";

const cityData = cities.californiaSpanish;

export const metadata: Metadata = {
  title: "Préstamos con tu Título de Auto en California | Champion Cash Loans",
  description:
    "Solicita en línea un préstamo con el título de tu auto en California. Comienza tu solicitud en línea y sigue conduciendo tu vehículo mientras realizas tus pagos.",
};

export default function Home() {
  const localFAQs = cityData.faqs;

  return (
    <>
      <main className="champion-landing">

        {/* =========================================================
            ENCABEZADO / HEADLINE
        ========================================================= */}

        <div className="champion-brand-heading">

          <div className="champion-brand">
            <Image
              src="/images/championlogo_web.webp"
              alt="Champion Cash Loans"
              width={220}
              height={60}
              priority
              className="champion-logo"
            />
          </div>

          <span
            className="champion-heading-divider"
            aria-hidden="true"
          />

          <h1 className="champion-headline">
            Préstamos con tu {" "}
            <span className="champion-headline-accent">
              Título de Auto
            </span>
          </h1>

          <div className="champion-contact">
            <span>¿Tienes preguntas sobre tu solicitud?</span>
            <a href="tel:+18887981970">
              ☎ LLÁMANOS (888) 798-1970
            </a>
          </div>

        </div>


        {/* =====================================================
            BENEFICIOS
        ===================================================== */}

        <div className="champion-container">

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
              IMAGEN + FORMULARIO
          ===================================================== */}

          <div className="champion-conversion-grid">

            <div className="champion-image-column">

              <Image
                src={cityData.heroImage}
                alt="Préstamos con tu título de auto en California"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="champion-hero-image"
                priority
              />

              <div className="champion-image-copy">
                <h2>Aplica hoy.</h2>

                <p>
                  Completa tu solicitud en línea y descubre qué opciones
                  pueden estar disponibles para ti.
                </p>

                <p className="disclaimer">
                  *El financiamiento el mismo día está sujeto a disponibilidad
                  y puede variar según la revisión de la solicitud y el
                  procesamiento bancario.
                </p>
              </div>

            </div>


            <div className="champion-form-column">

              <Suspense fallback={<div className="loan-form-loading" />}>
                <LoanForm
  slug="california"
  lang="es"
  attribution={{
    mainSource: "CFS Google Ads",
    trafficSource: "landing-california-es",
    brand: "Champion",
  }}
/>
              </Suspense>

            </div>

          </div>

        </div>


        {/* =========================================================
            BANNER LOCAL / SEO
        ========================================================= */}

        <section className="champion-local-section">

          <div className="champion-container">

            <div className="champion-local-banner">

              {/* VISUAL */}

              <div className="champion-local-image">

                <Image
                  src={cityData.cityBadgeImage}
                  alt={`Champion Cash Loans en ${cityData.cityName}`}
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


        <Reviews
  reviews={cityData.reviews}
  lang="es"
/>


        {/* =========================================================
            PASOS + PREGUNTAS FRECUENTES
        ========================================================= */}

        <section className="champion-information">

          <div className="champion-container">

            <div className="champion-information-grid">

              {/* =========================
                  CÓMO FUNCIONA
              ========================= */}

              <div className="champion-steps-column">

                <h2 className="champion-section-title">
                  Cómo Funciona
                </h2>

                <Steps lang="es" />

              </div>


              {/* =========================
                  PREGUNTAS FRECUENTES
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
            DATOS ESTRUCTURADOS FAQ
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


        <FinalCTA lang="es" />

      </main>

      <Footer lang="es" />
    </>
  );
}