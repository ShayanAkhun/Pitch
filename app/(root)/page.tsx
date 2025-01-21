import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUP_QURIES } from "@/sanity/lib/quries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;

  const posts  = await client.fetch(STARTUP_QURIES);

  console.log(JSON.stringify(posts,null,2))


  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: 'Naruto' },
  //     _id: 1,
  //     description: 'This is a description',
  //     image: 'https://i2.wp.com/animenosub.to/wp-content/uploads/2024/08/ryefC0mqOSzpyTgIS2suZts4Z7H.jpg',
  //     category: 'Anime',
  //     title: 'We Anime'
  //   }
  // ]


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
    </>
  );
}
