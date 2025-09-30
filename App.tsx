import { useState, useEffect } from "react";
import axios from "axios";
import LoadingBar from "./components/loading_bar";
import Header from "./components/Header";
import BodyStart from "./components/BodyStart";
import BodyContents from "./components/BodyContents";

function App() {
  const [action, setAction] = useState("");
  const [displayLoading, setDisplayLoading] = useState("block");
  const [widthLoading, setWidthLoading] = useState(10);
  const [languages, setLanguages] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const setWidthLoadingHandle = (num: number, type: string) => {
    if (type === "add") {
      if (widthLoading + num < 100) {
        setWidthLoading(widthLoading + num);
      } else {
        setWidthLoading(100);
        setTimeout(() => {
          setDisplayLoading("none");
        }, 100);
      }
    } else if (type === "set") {
      setWidthLoading(num);
      if (num >= 100) {
        setTimeout(() => {
          setDisplayLoading("none");
        }, 100);
      } else {
        setDisplayLoading("block");
      }
    } else console.log("Wrong Width Loading Type");
  };

  const getCategoryList = () => {
    setWidthLoadingHandle(10, "set");
    axios
      .get("http://192.168.0.89:3000/category_list")
      .then((response) => {
        setCategoryList(response.data);
        setWidthLoadingHandle(100, "set");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setActionHandle = (type: string) => {
    const currentAction = localStorage.getItem("Action");
    if (currentAction !== type) {
      localStorage.setItem("Action", type);
      setAction(type);
      console.log("Clicked");
    }
  };

  const handleBodyClick = () => {
    setActionHandle("ordering");
    getCategoryList();
  };

  useEffect(() => {
    axios
      .get("http://192.168.0.89:3000/languages_available")
      .then((response) => {
        setLanguages(response.data);
        setWidthLoadingHandle(100, "set");

        const storedAction = localStorage.getItem("Action");
        if (!storedAction) {
          localStorage.setItem("Action", "Start");
          setAction("Start");
        } else if (storedAction != "Start") {
          setAction(storedAction);
          console.log(233);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <LoadingBar
        widthLoading={widthLoading}
        displayLoading={displayLoading}
      ></LoadingBar>
      <Header action={action} languages={languages} />
      {action === "Start" ? (
        <BodyStart onClick={handleBodyClick} /> // Attach onClick here
      ) : (
        <BodyContents categoryList={categoryList}></BodyContents>
      )}
    </div>
  );
}

export default App;
