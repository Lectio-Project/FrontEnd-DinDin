import NextAuth from 'next-auth'

//Os types será reutilizado junto com os componentes

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			email: string
			name: string
		}
	}
}