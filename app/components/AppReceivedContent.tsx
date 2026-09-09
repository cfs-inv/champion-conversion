import Footer from "../components/Footer";

export default function AppReceivedContent() {
  return (
    <section className="thank-you-page">

      <main className="thank-you-content">

        <div className="thank-you-message">
          <h1>Application Received</h1>

          <p>
            We've received your initial application and our team will
            review your information shortly.
          </p>
        </div>

        <div className="thank-you-cta">

          <h2>Want to keep the momentum going?</h2>

          <p>
            <strong>Give us a call</strong> to continue moving forward
            with your application.
          </p>

          <a
            href="tel:1-888-798-1970"
            className="thank-you-button"
          >
            (888) 798-1970
          </a>

        </div>

      </main>

      <Footer variant="thankYou" />

    </section>
  );
}