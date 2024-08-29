import { recipes } from "../route";

export async function GET(req,{params}) {
    const res = recipes.find((el)=>el.id===params.id)
    return Response.json(res)
}