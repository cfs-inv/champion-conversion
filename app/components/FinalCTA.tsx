interface FinalCTAProps {
  lang?: "en" | "es";
}

const ctaText = {
  en: {
    message: "Ready when you are.",
    link: "Return to application ↑",
  },
  es: {
    message: "Cuando estés listo comenzamos.",
    link: "Volver a la solicitud ↑",
  },
};

export default function FinalCTA({ lang = "en" }: FinalCTAProps) {
  const t = ctaText[lang];

  return (
    <section className="champion-final-cta">

      <p className="champion-final-cta-text">
        {t.message}
      </p>

      <a href="#top" className="champion-final-cta-link">
        {t.link}
      </a>

    </section>
  );
}