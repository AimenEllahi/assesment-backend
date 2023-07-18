import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const DynamicNavbar = dynamic(() => import('@/components/Navigation/Navbar'), {
})

const DynamicTable = dynamic(() => import ("@/components/Appointments/AppointmentCalender"))

const DynamicCalender = dynamic(() => import ("@/components/Table/Schedular"))

export default function Appointments() {
  const token = useSelector((state) => state.token)
  const router = useRouter()
  console.log("token",token)
  if(!token)
  {
    router.push("/auth/login")
  }
  return (
    <div className='bg-white' style={{
        height: '100vh',
    }}>
      <DynamicNavbar />
      <DynamicTable />
    </div>
  )
}
