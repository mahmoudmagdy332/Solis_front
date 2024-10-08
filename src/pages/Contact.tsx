import Form from "../components/contact/Form"
import Map from "../components/contact/Map"

const Contact = () => {
  return (
    <div className="mt-32">
         <h2 className=" w-11/12 mx-auto text-3xl md:text-4xl lg:text-6xl font-semibold text-[#353535]">Contact us</h2>
         <div className="w-10/12 mx-auto mt-16 grid  grid-cols-1 lg:grid-cols-3 gap-32">
              <div className="flex flex-col gap-12  text-white  lg:co">
                  <div className="h-48 w-full flex flex-col justify-center items-center p-4 rounded-md gap-4 bg-black">
                     <img src="/images/phone.svg"/>
                     <p className=" text-xl">01212843661</p>
                     <p className=" text-xl">01029134630</p>
                  </div>
                  <div className="h-48 w-full flex flex-col justify-center items-center p-4 rounded-md gap-4 bg-black">
                     <img src="/images/email.svg"/>
                     <p className=" text-xl">Support@Gazolin.com</p>
                     <p className=" text-xl">Mailbox@AR-Coder.com</p>
                  </div>
                  <div className="h-48 w-full flex flex-col justify-center items-center p-4 rounded-md gap-4 bg-black">
                     <img src="/images/location.svg"/>
                     <p className=" text-xl">14D Street Brooklyn,</p>
                     <p className="text-xl">New York.</p>
                  </div>
              </div>
              <div className="lg:col-span-2">
              <Form/>
              </div>

              
         </div>
         <Map />
    </div>
  )
}

export default Contact