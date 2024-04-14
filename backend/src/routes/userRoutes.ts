import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


import { Hono } from 'hono'
import { sign } from 'hono/jwt'

import {SingUpinputtype, SingINinputtype} from "@amankumar95/commonfile"

export const userRoute = new Hono<{
     Bindings?:{
      DATABASE_URL:string
       JWT_TOKEN:string 
    },
     Variables?:{
      email:string
      password:string
     }

     
     
}>()






userRoute.post("/singup",async(c)=>{
const prisma = new PrismaClient({
  datasourceUrl:c.env?.DATABASE_URL
}).$extends(withAccelerate())

 let body=await c.req.json()
 const validinput=SingUpinputtype.safeParse(body)
 console.log(validinput.success)
console.log(body)

try {
if(!validinput.success) return c.json({message:"invalid inputs"})

  const user=await prisma.user.create({
    data:{
      name:body.name,
      lastname:body.lastname,
      // @ts-ignore
      email:body.email,
      password:body.password
    }
  })

const payload={
  sub:user.id,
role:"user",
exp:Math.floor(Date.now()/1000)+60*60*60,
}

const secretkey=c.env?.JWT_TOKEN
console.log(secretkey,body)
const toeknn=await sign(
  payload,
  `${secretkey}`,
 'HS256'

)

if(!user) return c.status(400)




  return c.json({userid:user.id,
created:"created successfull",
token:toeknn
  })



} catch (error) {
  return c.json({message:"there is an error"})
}

})










// Singin=-------------------------->



userRoute.post("/singin",async(c)=>{



const prisma =new PrismaClient({
  datasourceUrl:c.env?.DATABASE_URL
}).$extends(withAccelerate())


const body=await c.req.json()
const validinput=SingINinputtype.safeParse(body)
console.log(validinput.success)

try {
  if(!validinput.success) return c.json({Message:"invalid types"})
  const user =await prisma.user.findUnique({
  where:{
    email:body.email,
    password:body.password,
  }
})


if(!user) return c.json({message:"invalid codentials"})


const payload={
  sub:user?.id,
role:"user",
exp:Math.floor(Date.now()/1000)+60*60*60,
}

const secretkey=c.env?.JWT_TOKEN
console.log(secretkey,body)
const toeknn=await sign(
  payload,
  `${secretkey}`,
 'HS256'

)



    return c.json({message:"this is signin",
    token:toeknn})
} catch (error) {
 return c.json({message:"invalid things"})
}


})
