import { posts } from "../route";

export async function GET(req,{params}){
    const res = posts.find((el)=> el.id === params.id)
    return Response.json(res)
}