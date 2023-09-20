import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative z-0 mt-[calc(50vh-6px)]">
        <div className='text-left text-opacity-75'>
        <p className='text-7xl font-extrabold filter'>RONNY</p>
        <p className='text-4xl font-bold uppercase drop-shadow-2xl'>auto service</p>
        </div>
      <Link to='/register'>
        <button className=''>Book Service</button>
      </Link>
    </div>
  )
}

export default Home
