"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateblog = exports.CReatblog = exports.SingINinputtype = exports.SingUpinputtype = void 0;
const zod_1 = require("zod");
exports.SingUpinputtype = zod_1.z.object({
    name: zod_1.z.string(({ invalid_type_error: "need a valid type string", required_error: "required string" })),
    email: zod_1.z.string().email({ message: "need a email" }),
    password: zod_1.z.string({ invalid_type_error: "need a valid pasword string", required_error: "required a password not empty" }).min(6).max(12),
    lastname: zod_1.z.string({ required_error: "required a valid striung", invalid_type_error: "invalid type error" })
});
exports.SingINinputtype = zod_1.z.object({
    email: zod_1.z.string().email({ message: "need a email" }),
    password: zod_1.z.string({ invalid_type_error: "need a valid pasword string", required_error: "required a password not empty" }).min(6).max(12),
});
exports.CReatblog = zod_1.z.object({
    title: zod_1.z.string({ required_error: "required a text ", invalid_type_error: "invalid type need a string in  type" }),
    disc: zod_1.z.string()
});
exports.updateblog = zod_1.z.object({
    title: zod_1.z.string(),
    disc: zod_1.z.string(),
    id: zod_1.z.string()
});
