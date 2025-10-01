import { useState, useEffect, useCallback, useRef } from "react";
import axios, { AxiosError } from "axios";
import LoadingBar from "./components/loading_bar";
import Header from "./components/Header";
import BodyStart from "./components/BodyStart";
import BodyContents, { type CategoryItem } from "./components/BodyContents";

function App() {
  const [action, setAction] = useState("");
  const [displayLoading, setDisplayLoading] = useState("block");
  const [widthLoading, setWidthLoading] = useState(10);
  const [languages, setLanguages] = useState([]);
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  const hasLoadedLanguages = useRef(false);
  const hasLoadedCategories = useRef(false);

  const setWidthLoadingHandle = useCallback(
    (num: number, type: "add" | "set") => {
      if (type === "add") {
        setWidthLoading((prevWidth) => {
          const nextWidth = Math.min(prevWidth + num, 100);

          if (nextWidth >= 100) {
            setTimeout(() => {
              setDisplayLoading("none");
            }, 100);
          } else {
            setDisplayLoading("block");
          }

          return nextWidth;
        });
      } else if (type === "set") {
        setWidthLoading(num);
        if (num >= 100) {
          setTimeout(() => {
            setDisplayLoading("none");
          }, 100);
        } else {
          setDisplayLoading("block");
        }
      } else {
        console.log("Wrong Width Loading Type");
      }
    },
    []
  );

  const getCategoryList = useCallback(() => {
    if (hasLoadedCategories.current) {
      return undefined;
    }

    hasLoadedCategories.current = true;
    setWidthLoadingHandle(10, "set");

    const controller = new AbortController();

    axios
      .get("http://192.168.0.89:3000/category_list", {
        signal: controller.signal,
      })
      .then((response) => {
        setCategoryList(response.data);
        setWidthLoadingHandle(100, "set");
      })
      .catch((err) => {
        if (axios.isAxiosError(err) && err.code === AxiosError.ERR_CANCELED) {
          hasLoadedCategories.current = false;
          return;
        }

        hasLoadedCategories.current = false;
        console.log(err);
      });

    return () => controller.abort();
  }, [setWidthLoadingHandle]);

  const setActionHandle = (type: string) => {
    const currentAction = localStorage.getItem("Action");
    if (currentAction !== type) {
      localStorage.setItem("Action", type);
      setAction(type);
    }
  };

  const handleBodyClick = () => {
    setActionHandle("ordering");
  };

  useEffect(() => {
    if (hasLoadedLanguages.current) {
      return;
    }

    hasLoadedLanguages.current = true;
    setWidthLoadingHandle(10, "set");

    const controller = new AbortController();

    axios
      .get("http://192.168.0.89:3000/languages_available", {
        signal: controller.signal,
      })
      .then((response) => {
        setLanguages(response.data);
        setWidthLoadingHandle(100, "set");

        const storedAction = localStorage.getItem("Action");
        if (!storedAction) {
          localStorage.setItem("Action", "Start");
          setAction("Start");
        } else if (storedAction !== "Start") {
          setAction(storedAction);
        }
      })
      .catch((err) => {
        if (axios.isAxiosError(err) && err.code === AxiosError.ERR_CANCELED) {
          hasLoadedLanguages.current = false;
          return;
        }

        hasLoadedLanguages.current = false;
        console.log(err);
      });

    return () => controller.abort();
  }, [setWidthLoadingHandle]);

  useEffect(() => {
    if (action === "ordering") {
      const abortFetch = getCategoryList();
      return () => {
        if (typeof abortFetch === "function") {
          abortFetch();
        }
      };
    }

    return undefined;
  }, [action, getCategoryList]);

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
