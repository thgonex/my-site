import { motion, AnimatePresence } from "framer-motion"
import Men from "./Gender/Men/Men"
import React, {useState} from 'react'
import Women from "./Gender/Women/Women"
import MainGen from "./Gender/MainGen/MainGen"

const Sidebar = ({menu, setMenu, onClose}) => {
  const [active, setActive] = useState("main")
  return (
    <AnimatePresence>
        {menu && (
            <motion.div
            className="modal"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setMenu(false)}
            >
                <motion.div
                className="asideModal"
                initial={{x: "-100%"}}
                animate={{x: 0}}
                exit={{x: "-100%"}}
                transition={{duration: 0.5}}
                onClick={(e) => e.stopPropagation()}
                >
                    <button className="close-btn" onClick={onClose}>
                      &times;
                    </button>
                    <MainGen active={active} setActive={setActive} />
                    <Men active={active} setActive={setActive} />
                    <Women active={active} setActive={setActive} />
                </motion.div>    
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Sidebar
