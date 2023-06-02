import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../components/organisms/NavBar";
import { useEffect, useState } from "react";
function RootLayout() {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  let navigation = useNavigate();
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (!!query) {
        navigation(`/search?query=${query}`);
      }
      if(!query) {
        navigation(-1)
      }
    }, 1000);
    return () => clearTimeout(delaySearch);
  }, [query]);
  return (
    <>
      <NavBar query={query} onInputChange={handleInputChange} />
      <Outlet context={[query, setQuery]} />
    </>
  );
}
export default RootLayout;
