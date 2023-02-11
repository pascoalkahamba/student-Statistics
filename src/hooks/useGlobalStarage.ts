import { useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";

const useGlobalStarage = () => {
  const global = useContext(GlobalContext)!;

  return {
    global,
  };
};

export default useGlobalStarage;
