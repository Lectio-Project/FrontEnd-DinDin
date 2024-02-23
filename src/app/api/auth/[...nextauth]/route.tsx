import NextAuth, { NextAuthOptions } from "next-auth";
import { nextAuthOptions } from '@/providers/NextAuthOptionsRenomear';



const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST}