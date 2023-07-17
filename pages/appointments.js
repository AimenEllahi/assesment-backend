import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const DynamicNavbar = dynamic(() => import('../components/Navigation/Navbar'), {
})

const DynamicTable = dynamic(() => import ("../components/Appointments/AppointmentCalender"))

//const DynamicCalender = dynamic(() => import ("../components/Table/TableComponent"))

export default function Appointments() {
  return (
    <div className='bg-white' style={{
        height: '100vh',
    }}>
      <DynamicNavbar />
      <DynamicTable />
    </div>
  )
}
