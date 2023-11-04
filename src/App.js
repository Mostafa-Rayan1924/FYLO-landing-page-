import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <p className="text-center p-5 text-white">Created by : Mostafa Rayan</p>
    </>
  );
}
