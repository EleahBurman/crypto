import styles from "./page.module.css";
import supabase from "./utils.js"

export const getInfluencers = async () => {
  try {
    const { data, error } = await supabase
    .from('influencers')
    .select('name, youtubeChannel, id');
    return { props: {data}};
  }catch (e){
    console.log(e.message);
  }
}

export default function Home() {
  return (
    <main className="container text-center">
      <div className="row">
        <h1>Crypto Patreon</h1>
        <p>Tip your favorite influencer</p>
      </div>
    </main>
  );
}
