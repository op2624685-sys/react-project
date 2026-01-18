const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted');
  }

  return (
    <div className='flex m-5 p-3'>
      <div className='bg-gray-300 h-100 w-200 m-10 p-10'>
        <h1 className='text-3xl'>Add Notes</h1>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex m-1 p-3'>
          <input className=' h-20 w-full bg-amber-100 p-3 m-2' type="text" placeholder='Enter your task'/>
          <textarea className='h-20 w-full bg-amber-100 p-3 m-2' type="text" placeholder='Enter Notes'/>
        </form>
        <div>
          <button className='h-10 w-25 mx-77 border-2 rounded bg-amber-700' type="submit">Submit</button>
        </div>
      </div>
      <div className='h-100 w-2xl bg-amber-200 m-10 p-3 flex-col'>
        <div className='h-40 w-30 bg-amber-50 m-2 p-2'>
          
      </div>
      

      </div>
    </div>
  )
}

export default App
