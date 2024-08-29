import { posts } from "../../posts"
import {v4 as uuid} from 'uuid'
export async function PATCH(req,{params}) {
    const {title}=await req.json()
     
    const indexPost = posts.findIndex((el)=> el.id===params.id)

posts[indexPost].title=title
return Response.json(posts[indexPost])
    
}

export async function DELETE(req,{params}) {
    const indexPost = posts.findIndex((el)=>el.id===params.id)
    const deleted = posts[indexPost]
    posts.splice(indexPost,1)
    return Response.json(deleted)
}
export async function POST(req) {
    const body = await req.json()
        posts.push({...body,id: uuid()})
    return Response.json(posts)
}