import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { ResultType } from "../Results/Defaults"

import './RowStyles.css';

export const Row = (resultProps: ResultRowProps) => {

    const { result } = resultProps;

    const [updatedData, setUpdatedData] = useState(result);

    const saveResult = () => {
        resultProps.editRow(result.id, false);
        resultProps.UpdateResult(result.id, updatedData);
    }

    const updateData = (name: string, value: any) => {
        setUpdatedData({
            ...updatedData,
            [name]: value
        })
    }

    return (
        <div className="resultRowWrapper center">
            {resultProps.editable ?
                (
                    <>
                        <span className="checkbox">
                            <input
                                type='checkbox'
                                checked={result.checked}
                                onChange={(e) => resultProps.UpdateResult(result.id, { checked: e.target.checked })}
                            />
                        </span>
                        <input value={updatedData.name} placeholder="Name" onChange={(e) => updateData('name', e.target.value)} />
                        <input value={updatedData.email} placeholder="Email" onChange={(e) => updateData('email', e.target.value)} />
                        <input value={updatedData.role} placeholder="Role" onChange={(e) => updateData('role', e.target.value)} />
                        <span className="buttons">
                            <span className="saveButton button" onClick={saveResult}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className="deleteButton button" onClick={() => resultProps.DeleteRecord(result.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        </span>
                    </>
                )
                : (
                    <>
                        <span>
                            <input
                                type='checkbox'
                                checked={result.checked}
                                onChange={(e) => resultProps.UpdateResult(result.id, { checked: e.target.checked })}
                            />
                        </span>
                        <span>{result.name}</span>
                        <span>{result.email}</span>
                        <span>{result.role}</span>
                        <span className="buttons">
                            <span className="editButton button" onClick={() => resultProps.editRow(result.id, true)}>
                                <FontAwesomeIcon icon={faEdit} />
                            </span>
                            <span className="deleteButton button" onClick={() => resultProps.DeleteRecord(result.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        </span>
                    </>
                )}
        </div>
    )
}

interface ResultRowProps {
    result: ResultType;
    UpdateResult: any;
    editable: boolean;
    index: number;
    editRow: any;
    DeleteRecord: any;
}