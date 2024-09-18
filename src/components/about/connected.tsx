import { Link } from "react-router-dom"

const Connected = () => {
    const sosials=[{image:'/icons/facebook.svg',link:'/dasdas'},
        {image:'/icons/instgram.svg',link:'/dasdas'},
        {image:'/icons/twiter.svg',link:'/dasdas'},
        {image:'/icons/linkdin.svg',link:'/dasdas'}
    ]
  return (
    <div className="grid lg:grid-cols-2">
         <div className="bg-[#353535] text-white p-2  sm:p-20 flex flex-col gap-8">
             <h3 className="md:text-3xl">Stay connected with Solis</h3>
             <p className="md:text-lg leading-9">Select the email communications you would like to receive - newsletters, product announcements from your favorite brands, education resources, project stories, and more!</p>
             <Link to='/' className=" md:text-lg flex gap-2 items-center mt-6">
             Subscribe
             <img src="/icons/Vector-white.svg"/>
             </Link>
         </div>
         <div className="bg-[#999C9D] text-white flex flex-col gap-4 justify-center items-center">
              <p className="md:text-lg">Connect with us on social media</p>
              <div className="flex gap-3"> 
                 {sosials.map((sosial)=>(
                    <a href={sosial.link} className="w-10 h-10 hover:bg-black transition-all ease-in-out rounded-full bg-[#6A6A6A] flex p-3 justify-center items-center">
                        <img src={sosial.image} className="max-h-5"/>
                    </a>
                 ))}    
              </div>
         </div>
    </div>
  )
}

export default Connected