import getData from "@/utils/getData";
import { Button, Card, CardActions, CardContent, Container, Stack, Typography} from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
  title: "users cards",
  description: "showing cards for connect users",
};

const Card = dynamic(()=>import('../../component/UserCard'),{
  loading:()=><p>is loading...</p>,
})
export default async function UsersRote() {
    const {users} = await getData('https://dummyjson.com/users')
    return(

        <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
        {users.map((el,i) => (
       <Card item={el} key={i}/>
        ))}
        </Stack>
      </Container>
    )
}