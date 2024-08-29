import getData from "@/utils/getData";


export const {recipes} = getData('https://dummyjson.com/recipes')

export async function GET(req) {
    const serchParams = req.nextUrl.serchParams
    const query = serchParams.get('q')

    if(query){
        const filterdata = recipes.filter((el)=>el.firstName.toLowerCase().includes(query))
        return Response.json(filterdata)
    }else{
        return Response.json(posts)
    }
}