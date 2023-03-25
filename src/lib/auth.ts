import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'

function getGoogleCredentails() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length === 0) {
        throw new Error('no google client id')
    }

    if (!clientSecret || clientSecret.length === 0) {
        throw new Error('no google client secret')
    }

    return { clientId, clientSecret }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentails().clientId,
            clientSecret: getGoogleCredentails().clientSecret
        })
    ],
    callbacks: {
        session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        },
        async jwt({ token, user }) {
            const dbUser = await db.
        }
    }
}
