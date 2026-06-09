import React from 'react'
import {motion} from "framer-motion"

const ScrollView = ({children,onEnter,onLeave,id}) => {
  return (
    <motion.div id={id} initial={{opacity:0,y:50}}  whileInView={{opacity:1,y:0}} viewport={{once:false,margin:"-30% 0px"}} transition={{duration:1.5,ease:'easeOut'}}  onViewportEnter={(entry)=>{
            if(onEnter) onEnter(entry)
    }} onViewportLeave={(entry)=>{
                if(onLeave) onLeave(entry)
}}>{children}</motion.div>
  )

}

export default ScrollView