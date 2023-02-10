import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { trpc } from "../utils/trpc";
import NavBar from "@/components/navigation/NavBar";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";
const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};
export default trpc.withTRPC(MyApp);
