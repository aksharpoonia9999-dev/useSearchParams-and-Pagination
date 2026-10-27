import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { shows } from "../utils/helper.js";
import ShowDetails from "./ShowDetails.jsx";
import Icons from "./common/Icons.jsx";

const CARDS_PER_PAGE = 3;

let totalPages =
  (shows.length - (shows.length % CARDS_PER_PAGE)) / CARDS_PER_PAGE;
if (shows.length % CARDS_PER_PAGE !== 0) {
  totalPages = totalPages + 1;
}

export default function ShowCard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [expandedSlug, setExpandedSlug] = useState(null);

  const currentPage = Number(searchParams.get("page")) || 1;

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;

  const visibleShows = shows.slice(startIndex, startIndex + CARDS_PER_PAGE);

  let endIndex = startIndex + CARDS_PER_PAGE;
  if (endIndex > shows.length) {
    endIndex = shows.length;
  }

  const changePage = (page) => {
    setSearchParams({ page: String(page) });
    setExpandedSlug(null);
  };

  const openDetails = (show) => {
    setSearchParams({
      slug: show.slug,
      category: show.category,
      year: show.year,
      page: String(currentPage),
    });
  };

  return searchParams.get("slug") ? (
    <ShowDetails />
  ) : (
    <main className="min-h-screen w-full overflow-x-clip bg-[#0b0b0d] px-4 py-10 text-white min-[375px]:px-5 min-[375px]:py-12 sm:px-8 sm:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40 min-[375px]:text-xs min-[375px]:tracking-[0.3em]">
          The Timepass
        </p>

        <h1 className="wrap-break-word text-3xl font-semibold tracking-tight min-[375px]:text-4xl sm:text-5xl">
          useSearchParams and Pagination
        </h1>

        <p className="mb-8 mt-3 max-w-full wrap-break-word text-sm leading-6 text-white/50 min-[375px]:mb-10">
          All good shows, yeah good, some real good tho XD
        </p>

        <div className="grid items-start grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visibleShows.map((show) => (
            <article
              key={show.slug}
              onClick={() => openDetails(show)}
              role="link"
              tabIndex={0}
              aria-label={`View details for ${show.title}`}
              className="group min-w-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#141416] transition duration-300 hover:-translate-y-1 hover:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
            >
              <div className="relative overflow-hidden">
                <img
                  src={show.image}
                  alt={show.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 min-[375px]:h-72 min-[425px]:h-80 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/10" />

                <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] wrap-break-word rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] backdrop-blur-sm min-[375px]:left-4 min-[375px]:top-4 min-[375px]:text-xs">
                  {show.category}
                </span>

                <p className="absolute bottom-3 left-3 text-[10px] tracking-widest text-white/70 min-[375px]:bottom-4 min-[375px]:left-4 min-[375px]:text-xs">
                  {show.year}
                </p>
              </div>

              <div className="min-w-0 p-4 min-[375px]:p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2
                    className={`min-w-0 wrap-break-word text-xl font-semibold transition-colors min-[375px]:text-2xl ${
                      show.accent === "red"
                        ? "group-hover:text-red-400"
                        : "group-hover:text-sky-300"
                    }`}
                  >
                    {show.title}
                  </h2>

                  <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-white/50">
                    {show.category}
                  </span>
                </div>

                <blockquote className="mt-4 wrap-break-word border-l-2 border-white/20 pl-3 text-sm italic leading-6 text-white/75 transition-colors group-hover:border-white/50 group-hover:text-white">
                  "{show.quote}"
                </blockquote>

                <p className="mt-3 wrap-break-word text-sm leading-6 text-white/45">
                  {show.excerpt}
                </p>

                <button
                  type="button"
                  aria-expanded={expandedSlug === show.slug}
                  onClick={(event) => {
                    event.stopPropagation();

                    setExpandedSlug(
                      expandedSlug === show.slug ? null : show.slug,
                    );
                  }}
                  className="mt-5 flex w-full cursor-pointer items-center justify-between gap-3 border-t border-white/10 pt-4 text-left text-sm text-white/65 transition hover:text-white"
                >
                  <span>
                    {expandedSlug === show.slug ? "Show less" : "Show more"}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`shrink-0 transition-transform duration-200 ${
                      expandedSlug === show.slug ? "rotate-180" : ""
                    }`}
                  >
                    <Icons icon="down" />
                  </span>
                </button>

                {expandedSlug === show.slug && (
                  <div
                    onClick={(event) => event.stopPropagation()}
                    className="mt-3 space-y-3 rounded-lg border border-white/10 bg-black/25 p-3"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {show.tagline}
                    </p>

                    <p className="text-sm leading-6 text-white/65">
                      {show.content}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs text-white/50">
                      <span className="rounded-full bg-white/5 px-2.5 py-1">
                        Genre: {show.category}
                      </span>

                      <span className="rounded-full bg-white/5 px-2.5 py-1">
                        {show.year}
                      </span>
                    </div>

                    <p className="text-xs text-white/35">
                      Click the card outside this panel to explore full details.
                    </p>
                  </div>
                )}

                <div className="mt-4 flex min-w-0 items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <span className="min-w-0 wrap-break-word text-[10px] uppercase tracking-wider text-white/50 min-[375px]:text-xs min-[375px]:tracking-widest">
                    Explore show
                  </span>

                  <span className="shrink-0 transition-transform group-hover:translate-x-1">
                    <Icons icon="arrowRight" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav
          aria-label="Show cards pagination"
          className="mt-9 flex items-center justify-center gap-5 min-[375px]:mt-12"
        >
          <button
            type="button"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-xl transition hover:border-white/40 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-25"
          >
            <Icons icon="left" />
          </button>

          <div className="min-w-24 text-center">
            <p className="text-sm text-white/80">
              {currentPage} <span className="text-white/30">/</span>{" "}
              {totalPages}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
              Page
            </p>
          </div>

          <button
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-xl transition hover:border-white/40 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-25"
          >
            <Icons icon="right" />
          </button>
        </nav>

        <p className="mt-4 text-center text-xs text-white/35">
          Showing {startIndex + 1}–{endIndex} of {shows.length} shows
        </p>
      </div>
    </main>
  );
}
