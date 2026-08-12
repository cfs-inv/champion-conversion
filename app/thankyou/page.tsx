import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ThankYouPageContent from "@/app/components/ThankYouPageContent";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <ThankYouPageContent />
      </main>

      <Footer />
    </>
  );
}