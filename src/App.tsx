import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { isContentModalOpen, isDeleteModalOpen } from "./atoms"
import { Toaster } from "sonner"
import { AnimatePresence } from "motion/react"
import { ErrorBoundary } from "./components/ErrorBoundary"

// Lazy load pages for better performance
const Landing = lazy(() => import("./pages/Landing").then(module => ({ default: module.Landing })))
const Dashboard = lazy(() => import("./pages/DashBoard").then(module => ({ default: module.Dashboard })))
const Login = lazy(() => import("./pages/Login"))
const Signup = lazy(() => import("./pages/Signup"))
const QueryRoom = lazy(() => import("./pages/QueryRoom").then(module => ({ default: module.QueryRoom })))
const Aboutus = lazy(() => import("./components/Aboutus"))
const Modal = lazy(() => import("./components/AddContentModal").then(module => ({ default: module.Modal })))
const DeleteModal = lazy(() => import("./components/DeleteModal").then(module => ({ default: module.DeleteModal })))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="text-white font-primary text-xl">Loading...</div>
  </div>
)

function App() {
  const isContentModalOp = useRecoilValue(isContentModalOpen)
  const isDelModalOpen = useRecoilValue(isDeleteModalOpen)
  
  return (
    <ErrorBoundary>
      <>
        <Toaster theme="dark" richColors position="top-right" />

        <AnimatePresence>
          {isContentModalOp && (
            <Suspense fallback={null}>
              <Modal />
            </Suspense>
          )}
          {isDelModalOpen && (
            <Suspense fallback={null}>
              <DeleteModal />
            </Suspense>
          )}
        </AnimatePresence>

        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/:id" element={<QueryRoom />} />
          </Routes>
        </Suspense>
      </>
    </ErrorBoundary>
  )
}

export default App
