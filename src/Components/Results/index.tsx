import { useState } from "react";
import { Row } from "../Row/Row";
import { ResultProps, ResultType } from "./Defaults";

import './ResultsStyles.css';

export const Results = (props: ResultProps) => {

    const [editableRows, setEditableRows] = useState({} as any);
    const [pageNumber, setPageNumber] = useState(1);

    const handleSelectAll = (e: any) => {
        props.updateResults((results: Array<ResultType>) => (
            [...results.map((result, i) => (
                i >= ((pageNumber-1) * 10) && i <= (pageNumber * 10)
                    ? { ...result, checked: e?.target?.checked }
                    : result
            )
            )]
        ))
    }

    const UpdateResult = (id: string, data: any) => {
        props.updateResults((results: Array<ResultType>) => {
            const deepCopyResults = JSON.parse(JSON.stringify(results)) as Array<ResultType>;
            const index = deepCopyResults.findIndex((result: ResultType) => result.id == id);
            deepCopyResults[index] = {
                ...deepCopyResults[index],
                ...data,
            }
            return deepCopyResults;
        })
    }

    const UpdateRowEditable = (id: string, editable: boolean) => {
        setEditableRows({
            ...editableRows,
            [id]: editable,
        })
    }

    const deleteSlectedRecords = () => {
        props.updateResults((results: Array<ResultType>) => (results.filter(result => !result.checked)));
        (document.getElementById('allselectedButton') as HTMLInputElement).checked = false;
        setPageNumber(pageNumber=> (pageNumber < (props.results.length / 10) -1 ? pageNumber : 1 ))
    }

    const DeleteRecord = (id: string) => {
        props.updateResults((results: Array<ResultType>) => (results.filter(result => result.id != id)));
    }

    const getPaginationButtons = () => {
        const paginationButtons = [];
        if(props.results.length > 0) {
            paginationButtons.push(
                <span className={'button center'} onClick={() => setPageNumber(1)}> {'<<'} </span>
            )
        }
        for (let i = 0; i < (props.results.length / 10); i++) {
            paginationButtons.push(
                <span className={i == pageNumber - 1 ? 'button activePage center' : 'button center'} onClick={() => setPageNumber(i + 1)}>{i + 1}</span>
            )
        }
        return paginationButtons;
    }


    return (
        <>
            {props.results
                ? (
                    <>
                        <div className="resultsWrapper">
                            <div className="resultHeading center">
                                <input type="checkbox" onClick={handleSelectAll} id="allselectedButton" />
                                <span> Name </span>
                                <span> Email </span>
                                <span> Role </span>
                                <span> Actions </span>
                            </div>
                            {props.results.slice((pageNumber - 1) * 10 + 1, (pageNumber * 10)+1).map((result: ResultType, index: number) => (
                                <Row
                                    editable={editableRows[result.id] || false}
                                    UpdateResult={UpdateResult}
                                    index={index}
                                    result={result}
                                    key={index}
                                    editRow={UpdateRowEditable}
                                    DeleteRecord={DeleteRecord}
                                />
                            ))}
                        </div>
                        <div className="pagination">
                            <div className="deltedSeletecd button center" onClick={deleteSlectedRecords}>
                                Delete Selected
                            </div>
                            <div className="pageNumbers center">
                                {getPaginationButtons()}
                            </div>
                        </div>
                    </>
                )
                : <div className="noResults center"> Loading results......</div>
            }
        </>
    );


}