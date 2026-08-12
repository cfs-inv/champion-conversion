type Review = {
  name: string;
  stars: number;
  text: string;
  date: string;
};

interface ReviewsProps {
  reviews?: Review[];
  className?: string;
}

function getTimeLabel(reviewDate: string): string {
  const daysAgo = Math.floor(
    (Date.now() - new Date(reviewDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysAgo <= 0) return "Today";
  if (daysAgo === 1) return "Yesterday";
  if (daysAgo < 7) return `${daysAgo} days ago`;
  
  if (daysAgo < 30) {
    const weeks = Math.floor(daysAgo / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
  
  if (daysAgo < 365) {
    const months = Math.floor(daysAgo / 30);
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  
  const years = Math.floor(daysAgo / 365);
  return years === 1 ? "1 year ago" : `${years} years ago`;
}

export default function Reviews({
  reviews,
  className = "",
}: ReviewsProps) {

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className={`reviews-section ${className}`}>
      {/* Si el título "What clients are saying" está aquí adentro, pónlo aquí: */}
      <h2 className="reviews-title">Here's what our clients have to say</h2>
      
      <div className="reviews-grid">
        {reviews.map((review, index) => {
          const timeLabel = getTimeLabel(review.date);

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
                {review.name} • {timeLabel}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}