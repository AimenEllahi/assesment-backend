import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  const token = useSelector((state) => state.token)
  if (!token) {
    router.push("/auth/login")
    return null;
  }
  return (
    <div>
      Home
    </div>
  )
}
