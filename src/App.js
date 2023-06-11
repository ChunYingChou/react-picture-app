// 載入bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// 載入CSS設定
import "./styles/style.css";
import Nav from "./components/nav";
import Homepage from "./pages/homepage";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
