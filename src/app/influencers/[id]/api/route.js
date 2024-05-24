import supabase from "@/app/utils"

export async function GET(request){
  const url = request.url.split('/')
  const id = url[4]
  
  try {
    const { data, error } = await supabase
    .from('influencers')
    .select('name, description, youtubeChannel, wallet')
    .eq('id', id)
    return Response.json({...data[0]})
  }catch (e){
    console.log("The error is: ", e)
    return Response.json({messsage: 'Connection problem with database'}, {status: 500})
  }
}