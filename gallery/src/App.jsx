import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

    useEffect(function(){
      getData()
    },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  '>Loading</h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-45 bg-white rounded-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h1>{elem.author}</h1>
        </a>
      </div>
    })

  }

  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto'>
      <div className='flex h-4/5 flex-wrap gap-4 p-2 '>
        {printUserData}
      </div>

      <div className="flex justify-center gap-6 items-centre p-4">
        <button 
        style={{opacity: index == 1 ? 0.5 : 1}}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={()=>{
            if(index>1){
              setUserData([])
              setindex(index-1)
            }
        }}>Prev</button>
        <h3>Page {index}</h3>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={()=>{
            setUserData([])
            setindex(index+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
