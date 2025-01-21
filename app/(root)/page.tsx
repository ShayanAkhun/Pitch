import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUP_QURIES } from "@/sanity/lib/quries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;
  const params = {search : query || null}

  const { data: posts } = await sanityFetch({ query: STARTUP_QURIES,params })


  return (
    <>
      <section className="pink_container">

        <h1 className="heading">Pitch your startup, <br /> connect with Entreprenuers</h1>
        <p className="sub-heading !max-w-3xl">
          Submit your Ideas, Vote on pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search resutlts for "${query}"` : 'All starups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (

            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found </p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}
