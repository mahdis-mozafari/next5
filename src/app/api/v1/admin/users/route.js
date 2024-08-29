import { users } from "../../users"
import {v4 as uuid} from 'uuid'
export async function PATCH(req,{params}) {
    const {firstName}=await req.json()
     
    const indexUsers = users.findIndex((el)=> el.id===params.id)

users[indexUsers].firstName=firstName
return Response.json(users[indexUsers])
    
}

export async function DELETE(req,{params}) {
    const indexUsers = users.findIndex((el)=>el.id===params.id)
    const deleted = users[indexUsers]
    users.splice(indexUsers,1)
    return Response.json(deleted)
}
export async function POST(req) {
    const body = await req.json()
        users.push({...body,id: uuid()})
    return Response.json(users)
}