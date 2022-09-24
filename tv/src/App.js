import "./styles.css";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import GifPage from "./GifPage";
// import Apps from './component/Apps';

export default function App() {
  const [state, setState] = useState(<GifPage />);
  useEffect(() => {
    let num = 3;
    let timer = setInterval(() => {
      num -= 1;
      if (num === 0) {
        setState(<Search />);
        clearInterval(timer);
      }
    }, 1000);
  }, []);
  return <>{state}</>;
}
