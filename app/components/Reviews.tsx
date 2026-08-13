type Review = {
  name: string;
  stars: number;
  text: string;
};

interface ReviewsProps {
  reviews?: Review[];
  lang?: "en" | "es";
  className?: string;
}

const reviewTitles = {
  en: "Here's what our clients have to say",
  es: "Esto es lo que dicen nuestros clientes",
};

export default function Reviews({
  reviews,
  lang = "en",
  className = "",
}: ReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className={`reviews-section ${className}`}>
      <h2 className="reviews-title">
        {reviewTitles[lang]}
      </h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => {
          return (
            <div key={index} className="review-card">

              <div className="divider">
                <img
                  src="/images/favicon.webp"
                  alt="Google Review"
                  className="avatar"
                />
              </div>

              <div className="stars">
                {"⭐".repeat(review.stars)}
              </div>

              <p>"{review.text}"</p>

              <span>
                {review.name}
              </span>

            </div>
          );
        })}
      </div>
    </section>
  );
}