import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoanTimeline from "@/app/components/LoanTimeline";

export default function FinalThankYouPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="thank-you-page">
          <LoanTimeline currentStep={2} />

          <div className="thank-you-card">

  <h1>Your Application Is Under Review</h1>

  <p className="lead">
    Thank you for completing your application.
  </p>

</div>

<div className="review-grid">
  <div className="info-card">
    <h3>What Happens Next</h3>

      <p>
    Our team will begin reviewing your information and
    will contact you if any additional documentation
    or verification is needed.
  </p>

  </div>

  <div className="info-card">
    <h3>What You Should Do</h3>

    <ul>
      <li>✓ Keep your phone nearby</li>
      <li>✓ Check your email regularly today</li>
      <li>✓ Have documents ready if requested</li>
    </ul>
  </div>
</div>

<div className="contact-card">
  <h3>Need Immediate Assistance?</h3>

  <p>
    If you have questions about your application,
    our team is ready to help.
  </p>

  <a href="tel:+18888121076" className="btn-confirm">
    Call Us Now
  </a>
</div>


        </section>
      </main>

      <Footer />
    </>
  );
}