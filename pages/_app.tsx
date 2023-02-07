import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { trpc } from "../utils/trpc";
import NavBar from "@/components/navigation/NavBar";
import { SessionProvider } from "next-auth/react";
const MyApp: AppType = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
};
export default trpc.withTRPC(MyApp);
