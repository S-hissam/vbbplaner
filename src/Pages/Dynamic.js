import { useState, useEffect } from 'react'
import { useParams,useNavigate } from "react-router-dom";

export default function Dynamic() {
  const { id } = useParams();
  const [results, setResults] = useState([])
  const navigate = useNavigate();



  console.log(results)

  useEffect(() => {
    const getLocation = async () => {
      const url = 'https://v5.vbb.transport.rest/';
      const query = `stops/${id}/departures?results=4/`
      const response = await fetch(url + query);
      const data = await response.json();

      if (response.status === 404 || response.status === 400 || response.status === 502 ) {
        navigate('/')
      }
        
      return data
    }

    if (id) {
      getLocation().then(data => setResults(data)).catch(err => console.log(`here is an error${err}`))
    }


  }, [id])

  const rendered =
    results.map((depart) => {
      const when = new Date(depart.when).toString().split('GMT+0100 (Central European Standard Time)').slice([0]);

      return (
        <div key={depart.tripId} className="border-2 border-black hover:shadow rounded-md my-1 shadow-2xl p-1 w-11/12 ">
          <div className=" flex space-x-2">
            <div className="flex-1 space-y-1 ">
              <div className="rounded  font-bold "> Direction: {depart.direction}</div>
              <div className="">
                <div className="flex gap-1 flex-wrap  mb-2 ">
                  <p className=' rounded-md bg-purple-700 px-1'>When: {when} </p>
                  <p className={`rounded-md ${depart.delay ? 'bg-red-700' : 'bg-green-600'} px-1`}>Delay: {depart.delay ? `Yes ${depart.delay} mins` : 'no'}</p>
                  <p className='  rounded-md bg-purple-700 px-1'>Line: {depart.line.productName} {depart.line.name}</p>
                  <p className={`rounded-md bg-yellow-700 px-1`}> {depart.remarks[depart.remarks.length - 1].type} : {depart.remarks[depart.remarks.length - 1].summary}</p>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    })

  return (
    <>
      <h1 className='mt-8 text-center font-bold'>Departures from: {results.length > 0 ? `${results[0].stop.name}` : ''} </h1>
      {rendered}
    </>
  )
}

