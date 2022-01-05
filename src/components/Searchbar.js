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



  console.log(results)

  useEffect(() => {
    const getLocation = async () => {
      const url = 'https://v5.vbb.transport.rest/';
      const query = `locations?query=${term}&results=3`
      const response = await fetch(url + query);
      const data = await response.json();
      
      if (response.status === 404 || response.status === 400 || response.status === 502 || response.status === 500) {
        return alert(`api problem:Err code:  ${response.status}`)
      }

      return data
    }


    if (term) {
      getLocation().then(data => setResults(data)).catch(err => console.log(`here is an error ${err}`))
    }

  }, [term])


  const onSubmit = (e) => {
    e.preventDefault();
  }

  const rendered = results?  `${results.map((stop) => {
    return (
      <div key={stop.id} className="border border-blue-300 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md rounded-md my-1 hover:border-2 hover:shadow-2xl p-2 w-11/12 ">
        <Link to={`/${stop.id}`} className=" flex space-x-2">
          <div className="flex-1 space-y-1 ">
            <div className="rounded  font-bold ">{stop.name}</div>
            <div className="">
              <h2>Transport Options :</h2>
              <div className="flex gap-3 flex-wrap ">
                <div className=""> {(stop.products ? `${stop.products.bus ? 'Bus' : ''}` : '')}</div>
                <div className=""> {(stop.products ? `${stop.products.tram ? 'Tram' : ''}` : '')}</div>
                <div className=""> {(stop.products ? `${stop.products.express ? 'Express' : ''}` : '')}</div>
                <div className=""> {(stop.products ? `${stop.products.ferry ? 'Ferry' : ''}` : '')}</div>
                <div className=""> {(stop.products ? `${stop.products.regional ? 'Regional' : ''}` : '')}</div>
                <div className=""> {(stop.products ? `${stop.products.subway ? 'Subway' : ''}` : '')}</div>
                <div className=''> {(stop.products ? `${stop.products.suburban ? 'Suburban' : ''}` : '')}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })}` : `No data from api... `;


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <h1 className='text-white mt-16 text-lg font-extrabold font-mono'>Welcome to Fahrplaner</h1>
              <h1 className='text-white  text-md font-bold font-mono text-center'>Search For Location with transport options</h1>
              <svg className="animate-bounce w-6 h-6">
              </svg>

              <form onSubmit={onSubmit}
                className="my-4 flex-col flex items-center justify-center w-11/12">
                <RiRouteFill className='h-6 w-6 animate-bounce' />

                <input value={term} onChange={(e) => setTerm(e.target.value)}
                  type="search" placeholder="Search for it..." className="bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold text-center input input-bordered my-2 w-full px-2 " />
              </form>
              {rendered}
            </>
          } />

          <Route path='/:id' element={<Dynamic />} />
        </Routes>
      </Router>

    </>

  )
}
