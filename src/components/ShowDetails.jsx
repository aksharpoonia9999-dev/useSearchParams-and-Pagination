import { useSearchParams } from "react-router-dom";
import { shows } from "../utils/helper.js";

export default function ShowDetails() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const slug = searchParams.get("slug");
  const year = searchParams.get("year");

  const show = shows.find((item) => item.slug === slug);

  const handleBack = () => {
    setSearchParams({
      page: searchParams.get("page") || "1",
    });
  };

  const accent =
    show && show.accent === "blue" ? "text-sky-300" : "text-red-400";

  const displayYear = year || (show && show.year);

  return !show || (category && category !== show.category) ? (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-5 overflow-x-clip bg-[#0b0b0d] px-4 text-center text-white">
      <h1 className="wrap-break-word text-2xl font-semibold min-[375px]:text-3xl">
        Show not found.
      </h1>

      <button
        onClick={handleBack}
        className="max-w-full cursor-pointer wrap-break-word text-sm text-white/60 hover:text-white"
      >
        🡠 Back to watchlist
      </button>
    </main>
  ) : (
    <main className="min-h-screen w-full overflow-x-clip bg-[#0b0b0d] px-4 py-7 text-white min-[375px]:px-5 min-[375px]:py-10 sm:px-8 sm:py-14">
      <article className="mx-auto w-full max-w-5xl">
        <button
          onClick={handleBack}
          className="mb-6 max-w-full cursor-pointer wrap-break-word text-left text-sm text-white/50 transition hover:text-white min-[375px]:mb-8"
        >
          🡠 Back to watchlist
        </button>

        <div className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <img
            src={show.image}
            alt={show.title}
            className="max-h-105 w-full min-w-0 rounded-xl border border-white/10 object-cover min-[425px]:max-h-125 md:max-h-150"
          />

          <div className="min-w-0">
            <p
              className={`mb-3 wrap-break-word text-[10px] uppercase tracking-[0.18em] min-[375px]:mb-4 min-[375px]:text-xs min-[375px]:tracking-[0.25em] ${accent}`}
            >
              {show.category} · {displayYear}
            </p>

            <h1 className="wrap-break-word text-3xl font-bold tracking-tight min-[375px]:text-4xl min-[425px]:text-5xl sm:text-6xl">
              {show.title}
            </h1>

            <p className="mt-4 wrap-break-word text-xs font-medium tracking-wider text-white/70 min-[375px]:mt-5 min-[375px]:text-sm">
              {show.tagline}
            </p>

            <blockquote
              className={`mt-6 wrap-break-word border-l-2 border-white/25 pl-3 text-lg italic leading-relaxed min-[375px]:pl-4 min-[375px]:text-xl sm:text-2xl ${accent}`}
            >
              "{show.quote}"
            </blockquote>

            <p className="mt-5 wrap-break-word text-sm leading-7 text-white/60 min-[375px]:mt-6 min-[375px]:text-base min-[375px]:leading-8">
              {show.excerpt}
            </p>

            <div className="my-6 h-px bg-white/10 min-[375px]:my-7" />

            <h2 className="mb-3 wrap-break-word text-base font-semibold min-[375px]:text-lg">
              About the show
            </h2>

            <p className="wrap-break-word text-sm leading-7 text-white/65">
              {show.content}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60">
                Category: {show.category}
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60">
                Year: {show.year}
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60">
                Name: {show.slug}
              </span>
            </div>

            <button
              onClick={handleBack}
              className="mt-7 inline-flex max-w-full cursor-pointer items-center justify-center rounded-lg border border-white/15 px-4 py-3 text-center text-sm transition hover:bg-white hover:text-black min-[375px]:mt-8 min-[375px]:px-5"
            >
              🡠 Back to all shows
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
