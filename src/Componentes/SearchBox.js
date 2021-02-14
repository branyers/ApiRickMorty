import { LocationContainer } from "./LocationContainer";
import { LocationInfo } from "./LocationInfo";
import ResidentInfo from "./ResidentInfo"



const SearchBox = () => {

      return (
            <>
            <div className="main">
            <h1 className="title">Residents.name</h1>
            <input />
            <button className="buton"> Search</button>
            </div>
            <LocationContainer />
            </>
      )
}

export default SearchBox;