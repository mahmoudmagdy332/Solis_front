
import { Link, useParams } from "react-router-dom";



const SingleJop = () => {
  const { id } = useParams<{ id: string }>();
  

 
  return (
    <div>
     
      <div className="relative ">
    <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
    <img src="/images/page-electronicdesign.webp" className=" w-full h-full object-cover	 "/>
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70"></div>

    </div>
    <div className=" w-full  flex  items-center">
       <div className="w-10/12 lg:w-3/5 mt-16  mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <p className=" text-xl lg:text-3xl font-semibold line-clamp-6 text-white">
           Product Designer, User Motivation
          </p>
          <p
          className="text-gray-200"
          >
          Senior
          </p>

          <div className="text-white">Full-time / On site / open</div>
        </div>
        <Link to={`/jop-application/${id}`}>
          <button
           className="bg-white hover:bg-black transition-all ease-in-out border border-black text-black hover:text-white px-4 py-2 rounded"
            
          >
            Apply for this job
          </button>
        </Link>
      </div>
    </div>
    </div>
      <div className="" >
        <div className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-4 py-10">
          <div className="col-span-3">
          {<p dangerouslySetInnerHTML={{ __html: "Brilliant Design is a diverse team with expertise in product design, brand design, and product illustration. Whether for learners, course writers, or educators — we investigate end user needs and iteratively craft experiences to meet them. We also build the style and component systems that help us all work together and stay consistent. We value UI craft, user research, levity, and experimentation." }} />}
            <div className="flex justify-center my-10">
              <Link to={`/jop-application/${id}`}>
                <button
                className="bg-black hover:bg-white border border-black text-white hover:text-black px-4 py-2 rounded"

                >
                  Apply for this job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJop;
