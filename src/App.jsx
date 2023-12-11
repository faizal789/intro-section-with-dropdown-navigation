import { useContext } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import MenuMobileContext from "./MobileMenuContext";

function App() {
  const { menuMobile } = useContext(MenuMobileContext);
  return (
    <main className="h-full bg-almost-white-neutral">
      {menuMobile && <div className="w-full h-screen bg-black fixed opacity-70"></div>}

      <Header></Header>
      <Content></Content>
    </main>
  );
}

export default App;
