
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'




export const BlogsRoute = new Hono<{
  Bindings?: {
    DATABASE_URL: string
    JWT_TOKEN: string
  },
  Variables: {
    userID: string,
    sub: string
  }



}>()

BlogsRoute.use("/*", async (c, next) => {

  try {
    const token = c.req.header("Authorization")

    console.log(token, "Tokennnnnn hai")
    if (!token) {
      c.status(401)
      return c.json({ messsage: "not autoriz3ed" })
    }

    let secretkey = c.env?.JWT_TOKEN
    const tokendata = token.split(",")[1]


    const jwttoken = await verify(tokendata, `${secretkey}`)
    console.log(jwttoken, "verify")
    if (!jwttoken) {
      c.status(401);
      return c.json({ error: "unotherrized" });

    }
    c.set("userID", jwttoken)
    await next()
  } catch (error) {
    return c.json({
      Message: "yor are not login"
    })
  }



})


BlogsRoute.post("/", async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())



  //@ts-ignore
  const userid = await c.get("userID");
  const useridsub = userid.sub
  console.log(useridsub, "userid")
  const body = await c.req.json()
  const post = await prisma.post.create({
    data: {
      title: body.title,
      disc: body.disc,
      //@ts-ignore
      createdbyy: useridsub
    }
  })


  return c.json({
    message: "this is blog",
    create: post.id,
    body: body

  })
})


BlogsRoute.put("/", async (c) => {


  const prisma = await new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  //@ts-ignore


  const userid = await c.get("userId")

  if (!userid) {
    c.status(401)
    return c.json({
      error: "unothorized"
    })
  }


  const body = await c.req.json()
  await prisma.post.update({
    where: {
      createdbyy: userid,
      id: body.id
    },
    data: {
      title: body.title,
      disc: body.dis
    }
  })


  return c.json({ message: "post update" })
})



BlogsRoute.get("/:id", async (c) => {

  const primsa = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const param = c.req.param("id")
  console.log(param)
  const post = await primsa.post.findFirst({
    where: {
      id: param,
    }, select: {
      title: true,
      disc: true,
      cretateAt: true,
      cratedby: {
        select: {
          name: true,
          lastname: true
        }
      }
    }
  })



  return c.json({

    post: post
  })
})



BlogsRoute.get("/bulk/all", async (c) => {




  const primsa = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  try {

    const posts = await primsa.post.findMany({
      select: {
        id: true,
        title: true,
        disc: true,
        cretateAt: true,
        cratedby: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })


    return c.json({

      posts
    })
  } catch (error) {
    return c.json({
      message: "there is an error",
      error: error
    })
  }


})