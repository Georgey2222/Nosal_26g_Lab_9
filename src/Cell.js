import { useState } from "react"

function Cell({ value, onChange, id }) {
    return (
        <td>
            <input value={value} onChange={onChange} placeholder="Значення" id={id} />
        </td>
    )
}

export default Cell
