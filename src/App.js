import { useEffect, useState } from 'react';
import './App.css';
import Cell from './Cell';

function App() {
  const [data, setData] = useState([["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]])
  const [table, setTable] = useState([["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]])

  function onChange(e) {
    const j = Math.floor(Number(e.target.id) / 1000)
    const i = Number(e.target.id) % 1000
    setData([
      ...data.slice(0, i),
      [
        ...data[i].slice(0, j),
        e.target.value,
        ...data[i].slice(j+1)
      ],
      ...data.slice(i+1)
    ])
  }

  function update() {
    setTable(data)
  }

  return (
    <>
      <table className='result'>
        {table.map((val, i) => (
          <tr key={i}>
            {val.map((val2, j) => (
              <td>{val2}</td>
            ))}
          </tr>
        ))}
      </table>

      <table>
        {data.map((val, i) => (
          <tr key={i}>
            {val.map((val2, j) => (
              <Cell value={val2} onChange={onChange} key={j*1000+i} id={j*1000+i} />
            ))}
          </tr>
        ))}
      </table>
      <br/><br/><br/>
      <button onClick={update}>Зберегти зміни</button>
    </>
  );
}

export default App;
