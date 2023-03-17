import { spring } from "framer-motion";

export const imageMotion ={
   hidden:{
y:60,
opacity:0
},
     show:{
        y:0,
        opacity:1,
        transition:{
            ease: "easeInOut",
            duration:1.5,
            type:"tween",
            
           
          
        }
        
    }
}


export const Textanime={

    hidden:{
        opacity:1
    },
    visible:{
        opacity:1,
        transition:{
            
            delay:0.5,
            staggerChildren:0.08
        }
    }
    
}
export const Letter={
    hidden:{opacity:0, y:50},
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration: 1.5,
        }
    }
}
export const head={
    hidden:{
        opacity:0,
        x:-50,
        scale:0.8,

    },
    Show:{
        scale:1,
        x:0,
        opacity:1,
        transition:{
            delay:0.5,
            type:'tween',
            duration: 0.4,

        }
    }
}