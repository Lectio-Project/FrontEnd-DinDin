import NextAuth, { NextAuthOptions } from "next-auth";
import { nextAuthOptions } from '@/providers/NextAuthOptionsRenomear';

//Nextauht será reutilizado na proteçao de rotas


const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST}