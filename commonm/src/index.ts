


import {z} from "zod"


export const SingUpinputtype=z.object({
    name:z.string(({invalid_type_error:"need a valid type string",required_error:"required string"})),
    email:z.string().email({message:"need a email"}),
    password:z.string({invalid_type_error:"need a valid pasword string",required_error:"required a password not empty"}).min(6).max(12),
    lastname:z.string({required_error:"required a valid striung",invalid_type_error:"invalid type error"})
})


export type singupinputType=z.infer<typeof SingUpinputtype>



export const SingINinputtype=z.object({

    email:z.string().email({message:"need a email"}),
    password:z.string({invalid_type_error:"need a valid pasword string",required_error:"required a password not empty"}).min(6).max(12),

})


export type singINinputType=z.infer<typeof SingINinputtype>


export const CReatblog=z.object({
    title:z.string({required_error:"required a text ", invalid_type_error:"invalid type need a string in  type"}),
    disc:z.string()
})


export type CReatblogtype=z.infer<typeof CReatblog>




export const updateblog=z.object({
    title:z.string(),
    disc:z.string(),
    id:z.string()
})


export type updateblogtype=z.infer<typeof updateblog>