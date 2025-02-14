interface RecomendationCardProps {
  header: string;
  data: {
      images: { title: string; src: string }[];
      loading: boolean;
      error: string | null;
  };
}

export const RecomendationCard = ({ header, data }: RecomendationCardProps) => {
  if (data.loading) return <p>Loading...</p>;
  if (data.error) return <p>Error: {data.error}</p>;

  return (
      <div className="space-y-8">
          <h1 className="text-light text-4xl font-bold font-mona">{header}</h1>
          <div className="flex flex-row overflow-y-auto space-x-8">
              {data.images.map((img, index) => (
                  <img key={index} src={img.src} alt={img.title} />
              ))}
          </div>
      </div>
  );
};
