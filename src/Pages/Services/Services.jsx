import logo1 from '../../assets/skills/Rest-API-1.png'
import logo3 from '../../assets/skills/back1.png'
import logo4 from '../../assets/skills/front1.png'
import logo5 from '../../assets/skills/fig.png'
import logo6 from '../../assets/skills/git.png'
import logo7 from '../../assets/skills/a.jpg'

const Services = () => {
    return (
        <div id="services" className="my-container bg-[#252734] text-white">
            <div>
                <div className="my-10">
                    <div className='flex items-center'>
                       
                    </div>
                    <h2 className="lg:text-4xl text-center text-2xl font-bold uppercase">My Services</h2>
                    <div className="animated-border"></div>
                </div>
            </div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
                    <div data-aos="fade-down" className='bg-[#182234] hover:bg-slate-600/30 serviceCard p-5 space-y-4'>
                        <img src={logo4} alt="" className='h-20 ' />
                        <h1 className='text-2xl font-semibold'>Front-End Development</h1>
                        <p>Front End Development using ReactJs</p>
                    </div>
                    <div data-aos="fade-down"  className='bg-[#182234] hover:bg-slate-600/30 serviceCard p-5 space-y-4'>
                        <img src={logo1} alt="" className='h-20 ' />
                        <h1 className='text-xl font-semibold'>Application programming interface</h1>
                        <p>Create Api using Nodejs</p>
                    </div>
                    <div data-aos="fade-down"  className='bg-[#182234] hover:bg-slate-600/30 serviceCard p-5 space-y-4'>
                        <img src={logo3} alt="" className='h-20 ' />
                        <h1 className='text-2xl font-semibold'>Back-End Development</h1>
                        <p>Back End Development using ExpressJs</p>
                    </div>
                    <div data-aos="fade-up"  className='bg-[#182234] hover:bg-slate-600/30 serviceCard p-5 space-y-4'>
                        <img src={logo5} alt="" className='h-20 ' />
                        <h1 className='text-2xl font-semibold'>Figma to Front-End Design</h1>
                        <p>Front End Development using Figma File</p>
                    </div>
                    <div data-aos="fade-up"  className='bg-[#182234] hover:bg-slate-600/30 serviceCard p-5 space-y-4'>
                        <img src={logo6} alt="" className='h-20 ' />
                        <h1 className='text-2xl font-semibold'>Git And Github</h1>
                        <p>Using Git version Controlling</p>
                    </div>
                    
                    <div data-aos="fade-up"  className='bg-[#182234] hover:bg-slate-600/30 serviceCard p-5 space-y-4'>
                        <img src={logo7} alt="" className='h-20 ' />
                        <h1 className='text-2xl font-semibold'>User Authentication</h1>
                        <p>Create Authentication Using Firebase </p>
                    </div>
                    
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default Services;