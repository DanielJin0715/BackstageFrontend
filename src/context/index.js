import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";

const BASE = 768;

const GlobalStateContext = createContext({
  isMobile: window.innerWidth <= BASE,
  isCookiePopup: false,
});
const { Provider: GlobalStatesProvider } = GlobalStateContext;

export const Provider = ({ children }) => {
  const [isMobile, setMobile] = useState(window.innerWidth <= BASE);
  const [isCookiePopup, setCookiePopup] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setMobile(window.innerWidth <= BASE);
    }

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("consent") === null) setCookiePopup(true);
  }, []);

  return (
    <GlobalStatesProvider value={{ isMobile, isCookiePopup, setCookiePopup }}>
      {children}
    </GlobalStatesProvider>
  );
};

export const useGlobalStateContext = () => {
  return useContext(GlobalStateContext);
};
