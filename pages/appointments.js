import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const DynamicNavbar = dynamic(() => import('../components/Navigation/Navbar'), {
})

const DynamicTable = dynamic(() => import ("../components/Appointments/AppointmentCalender"))

const DynamicCalender = dynamic(() => import ("../components/Table/Schedular"))

export default function Appointments() {
  const token = useSelector((state) => state.token)
  console.log("token",token)
  return (
    <div className='bg-white' style={{
        height: '100vh',
    }}>
      <DynamicNavbar />
      <DynamicTable />
    </div>
  )
}
