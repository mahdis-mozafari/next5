import getData from '@/utils/getData'
import { Button, Card, CardActions, CardContent, Container, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic';

export const metadata = {
  title: "posts cards",
  description: "showing cards about post and details that",
};

const Card =dynamic(()=> import('../../component/CardPost'),{
  loading:()=><p>is loading...</p>,
})

async function PostRote() {
    const {posts}=await getData('https://dummyjson.com/posts')
  return (
    <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
    {posts.map((el)=>( 
        <Card item={el} key={el.id}/>
    ))}
    </Stack>
    </Container>
  )
}

export default PostRote