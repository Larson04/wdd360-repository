import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "./database.js";

export const auth = betterAuth({
    adapter: mongodbAdapter(client),
    emailAndPassword: { 
    enabled: true, 
    }
})