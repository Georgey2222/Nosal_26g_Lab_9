import { useState } from "react"

function Cell() {
    const [value, setValue] = useState("")

    return (
        <td>
            <input value={value} onChange={function(e) {setValue(e.target.value)}} placeholder="Значення" />
        </td>
    )
}

export default Cell
