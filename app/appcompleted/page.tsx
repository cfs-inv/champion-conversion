import Footer from "../components/Footer";

export default function FinalThankYouPage() {
  return (
    <>
    <main className="champion-final-thank-you">

      <section className="champion-final-header">
        <h1>Your Application Is Under Review</h1>

        <p>
          Thank you for completing your application.
          Our team will review your information and be in touch soon.
        </p>
      </section>


      <section className="champion-final-grid">

        {/* COLUMN 1 */}
        <article className="champion-final-card">
          <div className="champion-final-image">
            <img
              src="/images/whn.webp"
              alt="Champion representative reviewing an application"
            />
          </div>

          <div className="champion-final-content">
            <h2>What Happens Next</h2>

            <p>
              Our team will contact you in the next 10 to 15 minutes. <b>Keep an eye out for calls from <span className="champion-final-phone">(888) 798-1970</span>,</b> as we may need to verify your information or request additional documents.
            </p>
          
          </div>
        </article>


        {/* COLUMN 2 */}
        <article className="champion-final-card">
          <div className="champion-final-image">
            <img
              src="/images/kae.webp"
              alt="Champion representative checking a phone"
            />
          </div>

          <div className="champion-final-content">
            <h2>What You Should Do</h2>

            <ul>
              <li>✓ Keep your phone nearby</li>
              <li>✓ Check your email regularly</li>
              <li>✓ Have documents ready if requested</li>
            </ul>
          </div>
        </article>


        {/* COLUMN 3 */}
        <article className="champion-final-card champion-final-help">
          <div className="champion-final-image">
            <img
              src="/images/nhwya.webp"
              alt="Champion representative ready to help"
            />
          </div>

          <div className="champion-final-content">
            <h2>Need Help With Your Application?</h2>

            <p>
              Have questions about your application?
              Our team is ready to help.
            </p>

            <a
              href="tel:+18887981970"
              className="champion-final-button"
            >  
              ☎ CALL US (888) 798-1970
            </a>
          </div>

          

        </article>
      
      </section>

      <section className="champion-final-hours">
  <h2>Our Hours of Operation</h2>
  <p>
    Our team is available Monday through Saturday, from 9:00 AM to 7:00 PM. And Sundays from 9:00 AM to 2:00 PM. 
    Applications submitted outside of business hours may receive a call
    on the next business day.
  </p>
</section>

    </main>

    <Footer />
    </>
  );
}