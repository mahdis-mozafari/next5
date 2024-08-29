import getData from "@/utils/getData";


export const {users} = getData('https://dummyjson.com/users')

export async function GET(req) {
    const serchParams = req.nextUrl.serchParams
    const query = serchParams.get('q')

    if(query){
        const filterdata = users.filter((el)=>el.firstName.toLowerCase().includes(query))
        return Response.json(filterdata)
    }else{
        return Response.json(posts)
    }
}