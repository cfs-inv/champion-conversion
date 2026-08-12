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
    title: "",
    steps: [
      {
        number: "1",
        title: "Start Your Application",
        description:
          "Complete a quick application with a few details about you and your vehicle, or give us a call to get started.",
      },
      {
        number: "2",
        title: "Provide Your Documents",
        description:
          "Send us the documents needed to review your application, such as your ID, vehicle title, and proof of insurance.",
      },
      {
        number: "3",
        title: "Review Your Options",
        description:
          "We'll review your information and, if you're approved, walk you through the available loan terms before you sign.",
      },
      {
        number: "4",
        title: "Get Your Funds",
        description:
          "Once everything is finalized, your funds will be delivered through one of our available payment options.",
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