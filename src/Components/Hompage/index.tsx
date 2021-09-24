import { useEffect, useState } from 'react';
import { Results } from '../Results';
import { ResultType } from '../Results/Defaults';
import { SearchBar } from '../SearchBar';
import './HompageStyles.css';

export const HomPage = () => {

    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([] as Array<ResultType>);

    useEffect(() => {
        fetch(
                'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json', 
                {
                    method: 'get',
                }
            )
            .then(async (res) => {
                const results = await res.json();
                setResults(results.map((result: ResultType) => ({ ...result, checked: false })));
            })
            .catch();

    }, []);

    return (
        <section className="containerWrapper">
            <div className="container center">
                <SearchBar handleSearchProps={setSearchText} />
                <Results serachString={searchText} results={results} updateResults={setResults} />
            </div>
        </section>
    );
}