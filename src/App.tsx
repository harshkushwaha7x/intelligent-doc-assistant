import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Dashboard } from "./pages/DashBoard"

import Login from "./pages/Login"
import Signup from "./pages/Signup"

import { QueryRoom } from "./pages/QueryRoom"
import { Modal } from "./components/AddContentModal"
import { DeleteModal } from "./components/DeleteModal"
import { useRecoilValue } from "recoil"
import { isContentModalOpen, isDeleteModalOpen } from "./atoms"
import { Toaster } from "sonner"
import { AnimatePresence } from "motion/react"
import Aboutus from "./components/Aboutus"


function App() {
  const isContentModalOp = useRecoilValue(isContentModalOpen)
  const isDelModalOpen = useRecoilValue(isDeleteModalOpen)
  return (

    <>
      <Toaster theme="dark" richColors/>

      <AnimatePresence>
        {isContentModalOp && <Modal />}
        {isDelModalOpen && <DeleteModal/>}
      </AnimatePresence>


      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>

        <Route path="/:id" element={<QueryRoom/>}/>

      </Routes>
    </>
  )
}

export default App
