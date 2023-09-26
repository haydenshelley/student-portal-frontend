import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
