/* eslint-disable no-unused-vars */
import team1 from '../../assets/images/office-group-1.jpg'
import team2 from '../../assets/images/office-group-2.jpg'
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[83vh] rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1/2">
                    <motion.img
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm w-80 rounded-lg shadow-2xl shadow-[#7178CF]"
                    />
                    <motion.img
                        src={team1}
                        animate={{ x: [0, 50, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm w-80 rounded-lg shadow-2xl shadow-[#7178CF] relative lg:left-32"
                    />
                </div>
                <div className="flex-1/2 mt-8 lg:mt-0">
                    <motion.h1
                        animate={{ x: [0, 50, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="text-3xl lg:text-4xl font-bold">Job Portal News</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => console.log('hover started!')}
                        className="btn bg-indigo-500 text-white">Let's Start</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;