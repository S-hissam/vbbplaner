
import Layout from '../components/Layout'



export default function NotFound() {




  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='m-24 animate-bounce hover:animate-ping text-3xl'>404</h1>
      <h1 className=' text-xl underline'>Page not Found  Bro go back to <a href='/' className='text-lime-500 text-2xl hover:animate-pulse'>Home</a></h1>
      </div>
    </>
  )
}
