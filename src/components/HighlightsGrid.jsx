import Highlight from "./Highlights";

export default function HighlightsGrid({ highlights }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.slice(0, 3).map((highlight) => (
          <div
            key={highlight.id}
            className="h-[750px] w-full max-w-[460px] mx-auto"
          >
            <Highlight
              title={highlight.title}
              description={highlight.description}
              imageUrl={highlight.imageUrl}
              link={highlight.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
