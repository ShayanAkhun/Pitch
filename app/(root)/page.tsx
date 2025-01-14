import SearchForm from "@/app/Compnents/SearchFOrm";

export default function Home() {
  return (
   <>
   <section className="pink_container">

   <h1 className="heading">Pitch your startup, <br/> connect with Entreprenuers</h1>
   <p className="sub-heading !max-w-3xl">
    Submit your Ideas, Vote on pitches, and Get Noticed in Virtual Competitions.
   </p>
   <SearchForm/>
   </section>
   </>
  );
}
