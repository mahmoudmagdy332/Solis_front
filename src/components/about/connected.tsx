import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import { aboutSection } from "../../app/utils/types/types"

const Connected = ({section}:{section:aboutSection}) => {
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);

    const sosials=[{image:'/icons/facebook.svg',link:setting?.facebook},
        {image:'/icons/instgram.svg',link:setting?.instagram},
        {image:'/icons/twiter.svg',link:setting?.twitter},
        {image:'/icons/linkdin.svg',link:setting?.linkedin}
    ]

  return (
    <div className="grid lg:grid-cols-2">
         <div className="bg-[#353535] text-white p-2 py-6 sm:p-20 flex flex-col gap-8">
             <h3 className="md:text-3xl">{section.title}</h3>
             {/* <p className="">Select the email communications you would like to receive - newsletters, product announcements from your favorite brands, education resources, project stories, and more!</p> */}
             <p
          dangerouslySetInnerHTML={{ __html: section.description }}
          className=" md:text-lg leading-9 "
        />
             {/* <Link to='/' className=" md:text-lg flex gap-2 items-center mt-6">
             Subscribe
             <img  loading="lazy"  src="/icons/Vector-white.svg"/>
             </Link> */}
         </div>
         <div className="bg-[#999C9D] text-white flex py-6 flex-col gap-4 justify-center items-center">
              <p className="md:text-lg">Connect with us on social media</p>
              <div className="flex gap-3"> 
                 {sosials.map((sosial)=>(
                    <a href={sosial.link} className="w-10 h-10 hover:bg-black transition-all ease-in-out rounded-full bg-[#6A6A6A] flex p-3 justify-center items-center">
                        <img  loading="lazy"  src={sosial.image} className="max-h-5"/>
                    </a>
                 ))}    
              </div>
         </div>
    </div>
  )
}

export default Connected