import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from '@/api/api';

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: 'text'},
                password: {label: 'password', type: 'password' }
            },
            
            async authorize(credentials, req) {

                const response = await api.post('/login', {
                    email: credentials?.email,
                    password: credentials?.password
                })

                const user = await response.data;

                if(user && response.status === 200){
                    return user
                }

                return null
            },

            
        })
    ]
}

const handler = NextAuth()

export { handler as GET, handler as POST }