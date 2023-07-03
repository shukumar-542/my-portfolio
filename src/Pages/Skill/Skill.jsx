import Marquee from "react-fast-marquee";
import img1 from '../../assets/skills/bootstrap.png'
import img2 from '../../assets/skills/css.png'
import img3 from '../../assets/skills/expressjs.png'
import img4 from '../../assets/skills/figma.png'
import img5 from '../../assets/skills/firebase.png'
import img6 from '../../assets/skills/git.png'
import img7 from '../../assets/skills/github-icon.png'
import img8 from '../../assets/skills/html.png'
import img9 from '../../assets/skills/js.png'
import img10 from '../../assets/skills/jwt.png'
import img11 from '../../assets/skills/mongo-db.png'
import img12 from '../../assets/skills/nextjs.png'
import img13 from '../../assets/skills/node.png'
import img14 from '../../assets/skills/react.png'
import img15 from '../../assets/skills/redux.png'
import img16 from '../../assets/skills/Rest-API-1.png'


const Skill = () => {
    return (
        <div className="my-container  bg-[#252734]">
            <h1 className="text-white text-3xl lg:text-4xl font-bold text-center py-5">My Skills</h1>
            <div className='flex items-center '>
                <Marquee className="h-32">
                    <div className='h-[85px]   w-[150px] mx-5 bg-slate-600/30 text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img1} className='h-[85px] mx-auto py-5' alt="" />
                    </div>
                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30 text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img2} className='h-[80px] mx-auto py-5' alt="" />
                    </div>
                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img3} className='h-[80px] mx-auto py-5' alt="" />
                    </div>
                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img4} className='h-[80px] mx-auto py-5' alt="" />
                    </div>
                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img5} className='h-[80px] mx-auto py-5' alt="" />
                    </div>
                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img6} className='h-[80px] mx-auto py-5' alt="" />
                    </div>
                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img7} className='h-[80px] mx-auto py-5' alt="" />
                    </div>
                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img8} className='h-[80px] mx-auto py-5' alt="" />
                    </div>
                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img9} className='h-[80px] mx-auto py-5' alt="" />
                    </div>

                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img10} className='h-[80px] mx-auto py-5' alt="" />
                    </div>

                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img11} className='h-[80px] mx-auto py-5' alt="" />
                    </div>

                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img12} className='h-[80px] mx-auto py-5' alt="" />
                    </div>

                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img13} className='h-[80px] mx-auto py-5' alt="" />
                    </div>

                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img14} className='h-[80px] mx-auto py-5' alt="" />
                    </div>

                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img15} className='h-[80px] mx-auto py-5' alt="" />
                    </div>

                    <div className='h-[80px]  w-[150px] mx-5 bg-slate-600/30  text-center backdrop-blur-sm rounded-2xl '>
                        <img src={img16} className='h-[80px] mx-auto py-5' alt="" />
                    </div>
                </Marquee>
            </div>
            
        </div>
    );
};

export default Skill;