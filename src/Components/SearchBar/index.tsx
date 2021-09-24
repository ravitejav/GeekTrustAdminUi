import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchProps } from './Defaults';
import './SearchBarStyles.css';

export const SearchBar = (props: SearchProps) => {
    return (
        <div className="searchBarWrapper">
            <input type="search" placeholder={"Search By name, email or role"} onChange={(e) => props.handleSearchProps(e.target.value)} />
            <div className="button searchButton center">
                <FontAwesomeIcon icon={faSearch} />
                Search
            </div>
        </div>
    );
}
