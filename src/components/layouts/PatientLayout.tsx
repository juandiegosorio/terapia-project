
import { Outlet } from "react-router-dom"
import { Navigation } from "@/components/Navigation" // This should now work
import Footer from "@/components/Footer"

export default function PatientLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
