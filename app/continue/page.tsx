import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoanTimeline from "@/app/components/LoanTimeline";
import SecondForm from "@/app/components/SecondForm";

// Link del correo: /continue?t=<LeadUUID>. Página aparte de /thankyou para no volver a contar
// la conversión del paso 1 cada vez que alguien abre el correo.
export const metadata = { robots: { index: false } };

export default function ContinuePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="thank-you-page">
          <LoanTimeline currentStep={2} />
          <div className="form-container" style={{ maxWidth: "710px", margin: "30px auto 0", width: "100%" }}>
            <SecondForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
