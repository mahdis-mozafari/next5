import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req) {
    const login = JSON.parse(cookies().get('auth').value)
    if(login){
        return Response.json({message:'welcome'})
    }else{
        redirect('/api/v1/posts')
    }
}