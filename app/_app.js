import { UserProvider } from "./contexts/UserContext";
import RootLayout from "./layout";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </UserProvider>
  )
}

export default MyApp
