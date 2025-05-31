import { easeInOut, easeOut, motion } from "motion/react"
import team1 from '../assets/teams/team1.jpg'
import team2 from '../assets/teams/team2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img animate={{ y: [0, 50, 0] }} transition={{ duration: 5, delay: 3, ease: easeOut, repeat: Infinity }}
                    src={team2}
                    className="w-72 rounded-[40px] border-l-4px boder-b-4px border-indigo-500 -mt-44" />
                <div>
                    <motion.h1 animate={{ x: [0, 50, 0] }}
                        transition={{ duration: 2, delay: 2, ease: easeInOut, repeat: Infinity }} className="text-5xl font-bold">Job
                        <motion.span
                            animate={{ color: ['#c91717', '#45c917', '#0eeb7d'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}>
                            Portal
                        </motion.span> News!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;