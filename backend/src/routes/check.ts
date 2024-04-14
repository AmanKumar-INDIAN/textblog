
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const check= new Hono<{
     Bindings?:{
      DATABASE_URL:string
    },
}>()

check.get("/v1",async(c)=>{

   const primsa=new PrismaClient({
    datasourceUrl:c.env?.DATABASE_URL
  }).$extends(withAccelerate())



  const posts=await primsa.post.findMany()


    return c.json({message:"this is bulk",
      posts
    })
  
})
