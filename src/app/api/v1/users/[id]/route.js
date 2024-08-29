import { users } from "../route";

export async function GET(req,{params}) {
    const res = users.find((el)=>el.id===params.id)
    return Response.json(res)
}