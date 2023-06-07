import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../components/organisms/NavBar";
import { useEffect, useState } from "react";
import MobileSidebar from '../../components/organisms/MobileSidebar'
function RootLayout() {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const [isMobileBarOpen, setIsMobileBarOpen] = useState(false);
  const toggleMobileBar = () => {
    setIsMobileBarOpen(!isMobileBarOpen)
  }
  let navigation = useNavigate();
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (!!query) {
        navigation(`/search?query=${query}`);
      }
    }, 1000);
    return () => clearTimeout(delaySearch);
  }, [query]);
  return (
    <>
      <NavBar query={query} onInputChange={handleInputChange} toggleMobileBar={toggleMobileBar}/>
      <MobileSidebar isMobileBarOpen={isMobileBarOpen} toggleMobileBar={toggleMobileBar}/>
      <Outlet context={[query, setQuery]} />
    </>
  );
}
export default RootLayout;
