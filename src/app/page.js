import styles from "./page.module.css";
import supabase from "./utils.js"

export const getInfluencers = async () => {
  try {
    const { data, error } = await supabase
    .from('influencers')
    .select('name, youtubeChannel, id');
    return { props: {influencers : data}};
  }catch (e){
    console.log(e.message);
  }
}

export default async function Home() {
  const data = await getInfluencers();
  const influencers= data && data.props && data.props.influencers ? data.props.influencers : undefined

  return (
    <main className="container text-center">
      <div className="row">
        <h1>Crypto Patreon</h1>
        <p>Tip your favorite influencer</p>
        {influencers && influencers.length && influencers.length> 0 ? (
          <table className="table table-bordered">
            <tr>
              <th>Name</th>
              <th>Youtube Channel</th>
              <th>Link</th>
            </tr>
            <tbody>
              {influencers.map(influencer => (
                <tr key={influencer.id}>
                  <td>{influencer.name}</td>
                  <td>{influencer.youtubeChannel}</td>
                  <td><a href={`influencers/${influencer.id}`}>Link</a></td>

                </tr>
              ))}
            </tbody>
          </table>

        ) : null }
      </div>
    </main>
  );
}
