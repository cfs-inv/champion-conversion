type Step = {
  number: string;
  title: string;
  description: string;
};

type StepsProps = {
  lang?: "en" | "es";
};

const stepsContent: Record<"en" | "es", { title: string; steps: Step[] }> = {
  en: {
    title: "Get Funded in 4 Simple Steps",
    steps: [
      {
        number: "1",
        title: "Apply Online or Call",
        description:
          "Complete a quick application with a few details about you and your vehicle, or give us a call to get started.",
      },
      {
        number: "2",
        title: "Submit Documents",
        description:
          "Send a few basic documents like your ID, proof of ownership, and insurance. We'll help every step of the way.",
      },
      {
        number: "3",
        title: "Review & Sign",
        description:
          "We review your information quickly and carefully, then send everything over for signature.",
      },
      {
        number: "4",
        title: "Receive Funds",
        description:
          "Once approved, receive your funds using one of our available payment options.",
      },
    ],
  },
  es: {
  title: "Obtén tu Dinero en Solo 4 Pasos",

  steps: [
    {
      number: "1",
      title: "Aplica en Línea o Llámanos",
      description:
        "Completa una breve solicitud con algunos datos sobre ti y tu carro, o llámanos para comenzar."
    },
    {
      number: "2",
      title: "Envía tus Documentos",
      description:
        "Comparte tu identificación, el título de tu carro y tu comprobante de seguro. Te acompañamos durante todo el proceso."
    },
    {
      number: "3",
      title: "Revisa y Firma",
      description:
        "Revisaremos tu información y, si todo está en orden, te enviaremos los documentos para que los firmes."
    },
    {
      number: "4",
      title: "Recibe tu Dinero",
      description:
        "Una vez aprobado tu préstamo, recibirás tu dinero mediante una de nuestras opciones de pago."
    }
  ]
}
};

export default function Steps({ lang = "en" }: StepsProps) {
  const content = stepsContent[lang] || stepsContent.en;

  return (
    <section className="steps-section">
      <h2 className="steps-title">{content.title}</h2>

      <div className="steps-container">
        {content.steps.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-number">{step.number}</div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}