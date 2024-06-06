import About from "./components/About/About";
import BlogList from "./components/Blog/BlogList";
import Combined from "./components/Combined";

import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import FounderComponent from "./components/Founder/FounderComponent";
import Navbar from "./components/Navbar/Navbar";
import Questions from "./components/Questions/Questions";
import Reviews from "./components/Reviews/Reviews";
import Scroll from "./components/Scroll/Scroll";
import Spreadsheet from "./components/Spreadsheet/Spreadsheet";

export default function App() {
  return (
    <div>
      <Navbar/>
      <About />
      <Questions />
      <Scroll/>
      <Reviews/>
      <Dashboard />
      <Combined/>
      <BlogList />
      <Footer />
    </div>
  );
}
