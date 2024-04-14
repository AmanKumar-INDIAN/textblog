import { z } from "zod";
export declare const SingUpinputtype: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    lastname: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    lastname: string;
}, {
    name: string;
    email: string;
    password: string;
    lastname: string;
}>;
export type singupinputType = z.infer<typeof SingUpinputtype>;
export declare const SingINinputtype: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type singINinputType = z.infer<typeof SingINinputtype>;
export declare const CReatblog: z.ZodObject<{
    title: z.ZodString;
    disc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    disc: string;
}, {
    title: string;
    disc: string;
}>;
export type CReatblogtype = z.infer<typeof CReatblog>;
export declare const updateblog: z.ZodObject<{
    title: z.ZodString;
    disc: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    disc: string;
    id: string;
}, {
    title: string;
    disc: string;
    id: string;
}>;
export type updateblogtype = z.infer<typeof updateblog>;
