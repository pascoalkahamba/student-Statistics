import usePersistedStorage from "../hooks/usePersistedStorage";

import Head from "./Head";

const Home = () => {
  // const [theme, setTheme] = usePersistedStorage<ThemeMode>("theme", "light");

  return (
    <section>
      <Head />
    </section>
  );
};

export default Home;
