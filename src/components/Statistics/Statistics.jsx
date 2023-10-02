export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  }) => (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive percentage: {positivePercentage.toFixed(0)}%</p>
    </div>
  );

