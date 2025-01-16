import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      _id: 1,
      description: 'This is a description',
      image: 'https://imgur.com/6jRKww7',
      category: 'Anime',
      title: 'We Anime'
    }
  ]


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
        <p>
          {query ? `Search resutlts for "${query}"` : 'All starups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (

            posts.map((post: StartupCardType, index: number) => (
              <StartupCard />
            ))
          ) : (
            <p className="no-results">No startups found </p>
          )}
        </ul>
      </section>
    </>
  );
}
