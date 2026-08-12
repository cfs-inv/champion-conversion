type LoanTimelineProps = {
  currentStep: number;
};

export default function LoanTimeline({ currentStep }: LoanTimelineProps) {
  const steps = ["Contact Info", "Application", "Documents", "Funding"];

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="timeline-wrapper">
      <div className="timeline-line">
        <div
          className="timeline-fill"
          style={{ width: `${progress}%`, transition: "width 0.6s ease-in-out" }} // Añadido para que la línea también se llene suave
        />
      </div>

      <div className="timeline">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          return (
            <div
              key={step}
              className={`timeline-step ${
                currentStep > stepNumber
                  ? "completed"
                  : currentStep === stepNumber
                  ? "active"
                  : ""
              }`}
            >
              <div className="circle">
                {currentStep > stepNumber ? "✓" : stepNumber}
              </div>

              <span>{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}