import getData from '@/utils/getData'
import { Button, Card, CardActions, CardContent, Container, List, ListItem, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic';
import Image from 'next/image'

export const metadata = {
  title: "recipes cards",
  description: "showing cards for recipes and explain these",
};

 const Card = dynamic(()=>import('../../component/RecepiCard'),{
  loading:()=> <p>is loading...</p>,
 })
async function RecepiesRote() {
    const {recipes}= await getData('https://dummyjson.com/recipes')
  return (
    <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
        {recipes.map((el,i) => (
            <Card key={i} item={el}/>
        ))}
  
</Stack>
</Container>
  )
}

export default RecepiesRote