import { APP_INITIAL_STATE } from "./reducers/reducers";
const AppContext = React.createContext({
    ...APP_INITIAL_STATE
})
export default AppContext