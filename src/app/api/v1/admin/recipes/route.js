import { recipes } from "../../recipes"
import {v4 as uuid} from 'uuid'
export async function PATCH(req,{params}) {
    const {name}=await req.json()
     
    const indexRecipe = recipes.findIndex((el)=> el.id===params.id)

recipes[indexRecipe].name= name
return Response.json(recipes[indexRecipe])
    
}

export async function DELETE(req,{params}) {
    const indexRecipe = recipes.findIndex((el)=>el.id===params.id)
    const deleted = recipes[indexRecipe]
    recipes.splice(indexRecipe,1)
    return Response.json(deleted)
}
export async function POST(req) {
    const body = await req.json()
        recipes.push({...body,id: uuid()})
    return Response.json(recipes)
}