import { RiRouteFill } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import Dynamic from '../Pages/Dynamic'
import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from "react-router-dom";

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const getLocation = async () => {

      const url = 'https://v5.vbb.transport.rest/';
      const query = `stations?query=${term}&results=1&fuzzy=true&completion=true`
      const response = await fetch(url + query);
      const data = await response.json();

      if (response.status === 404 || response.status === 400 || response.status === 502 || response.status === 500) {
        return alert(`api problem:Err code:  ${response.status}`)
      }

      return data
    }


    if (term) {
      // getLocation().then(data => console.log(data)).catch(err => console.log(`here is an error ${err}`))
      getLocation().then(data => setResults(Object.entries(data))).catch(err => console.log(`here is an error ${err}`))

    }

  }, [term])


  console.log(results)
  let newD;
  let newLine;
  if (results && results[0]) {
    if (results[0][1])
      newD = results[0][1]
    if (results[0][1].lines) {
      newLine = results[0][1].lines.map((line) => {
        return (
          <div className='p-1 rounded border mb-1 hover:bg-green-600'>
            <Link to={`/${line.id}`} >
              <div>Line mode:{line.mode} : Line Name:{line.name}
              </div>
            </Link>
          </div>
        )
      })
    }
  }

  console.log('newb=' + newD)
  // console.log('newLine:=' + JSON.stringify(newLine))


  const onSubmit = (e) => {
    e.preventDefault();
  }



  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <h1 className='text-white mt-16 text-lg font-extrabold font-mono'>Welcome to Fahrplaner</h1>
              <h1 className='text-orange-300 text-md font-bold font-mono text-center'>Search For stations but No transport options</h1>
              <svg className="animate-bounce w-6 h-6">
              </svg>

              <form onSubmit={onSubmit}
                className="my-1 flex-col flex items-center justify-center w-11/12">
                <RiRouteFill className='h-6 w-6 animate-bounce' />

                <input value={term} onChange={(e) => setTerm(e.target.value)}
                  type="search" placeholder="Search for it..." className="bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold text-center input input-bordered my-2 w-full px-2 " />
              </form>
              <div className='text-center font-bold  border-b-4 mb-2'>
                {newD ?
                  `Station: ${newD.name}`
                  :
                  'loading...'}

              </div>
              <div className='text-center overflow-hidden overflow-y-scroll  p-1 h-44'>
                {newLine ?
                  newLine
                  :
                  'loading lines...'}
              </div>
            </>
          } />

          <Route path='/:id' element={<Dynamic />} />
        </Routes>
      </Router>

    </>

  )
}
