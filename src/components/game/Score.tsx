export default function Score({
  score,
  className,
}: {
  score: number;
  className?: string;
}) {
  return (
    <p className={`absolute font-bungee text-7xl ${className}`}>{score}</p>
  );
}
