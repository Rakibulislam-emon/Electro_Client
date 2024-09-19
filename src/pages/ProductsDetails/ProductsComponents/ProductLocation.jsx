import  {useLocation}  from 'react-router-dom';

export default function ProductLocation() {
    const location = useLocation()
    const pathSegments = location.pathname.split('/')
    const locations = pathSegments[1]
    
  return (
    <div>
        <h1 className='text-3xl'>Home ➜ {locations}   </h1>
    </div>
  )
}
