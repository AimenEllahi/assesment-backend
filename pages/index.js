import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const DynamicLogin = dynamic(() => import('../Components/Login/Login'), {
})

export default function Home() {
  return (
    <div>
      <DynamicLogin />
    </div>
  )
}
