import TableLetter from './TableLetter'
import React from "react";

const TableCell = ({ word }) => {

    return (
        <td>
            {Array.from(word).map((letter, index) => (
                <TableLetter key={index} letter={letter} index={index}/>
            ))}
        </td>
    )
}

export default TableCell