import getData from "@/utils/getData";


export const {posts} = getData('https://dummyjson.com/posts')

export async function GET(req) {
    const serchParams = req.nextUrl.serchParams
    const query = serchParams.get('q')

    if(query){
        const filterdata = posts.filter((el)=>el.title.toLowerCase().includes(query))
        return Response.json(filterdata)
    }else{
        return Response.json(posts)
    }
}


 