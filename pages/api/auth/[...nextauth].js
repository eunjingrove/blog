import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liXVmMuuDZPMSBK1',
      clientSecret: '40e12fe24c311d1428a9cac25e3b54930b56cdbe',
    }),
  ],
  secret : 'ghwn0wnrnjs'
};
export default NextAuth(authOptions); 