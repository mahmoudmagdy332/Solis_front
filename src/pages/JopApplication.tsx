
// import JopRadioInput from "../components/jop/JopRadioInput";
// import JopCheckInput from "../components/jop/JopCheckInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import JopInput from "../components/jop/JopInput";
import JopTextArea from "../components/jop/JopTextArea";

export interface FormValues {
  resume: File;
  email: string;
  pronouns: string;
  full_name: string;
  phone?: string;
  current_location?: string;
  current_company?: string;
  linkedin_url?: string;
  github_url?: string;
  portfolio_url?: string;
  other_website?: string;
  interest_note?: string;
  teaching_sample?: string;
  teaching_experience?: string;
  additional_information?: string;
  career_id: string | undefined;
}

export const JopApplication = () => {
  // const { id } = useParams<{ id: string }>();
 

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormValues>();
  const [resumeName, setResumeName] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    if (resumeName) {
      // mutate(
      //   { ...data, career_id: id, resume: resumeName },
      //   {
      //     onSuccess: () => {
      //       toast.success(` Apply job is success`);
      //     },
      //     onError:()=>{
      //       toast.error(error?.response?.data.message); 
      //       console.log('error',error)
      //     }
      //   }
      // );
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0]);
    }
  };

  return (
    <div>
      
      <div className="relative ">
    <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
    <img src="/images/page-electronicdesign.webp" className=" w-full h-full object-cover	 "/>
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70"></div>

    </div>
    <div className=" w-full  mt-16 flex  items-center">
    <div className="w-10/12 lg:w-3/5  mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <p
         
            className="text-white font-medium text-2xl"
          >
            Senior Producer (Machine Learning & Artificial Intelligence)
          </p>
          <p
          className="text-white  text-lg"
          >
            Americas
          </p>

          <div className="text-white">Content / Full-time / Remote</div>
        </div>
      </div>
    </div>
    </div>
      <div >
        <form
          className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-4 py-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-span-3">
            <div className="flex flex-col gap-12">
              <p
               
              >
                Submit Your Application
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-y-8 gap-x-4">
                <p
                 
                >
                  Resume/CV <span className="ms-2 text-red-600">*</span>
                </p>
                <div className="col-span-2">
                <label
                  htmlFor="avatar-upload"
                  role="button"
                  className="flex gap-6 overflow-hidden p-4 col-span-2 max-w-64 items-start bg-gray-200 justify-center border rounded-sm border-gray-300"
                >
                  {/* <img src="/images/ICONS/ATTACH.svg" alt="Attach Icon" /> */}
                  <p >
                    {(resumeName?.name && resumeName?.name) ||
                      "ATTACH RESUME/CV"}
                  </p>
                  
                </label>
                <p className="text-red-500">{errors.resume?.message}</p>
                <input
                  type="file"
                  id="avatar-upload"
                  {...register("resume", {
                    required: "Resume is required",
                  })}
                  className="hidden"
                  onChange={(e) => handleResumeChange(e)}
                /> 
                </div>
               
               
             
              
              
                <p
                  
                >
                  Full name <span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  rules={{
                    required: "Full Name is required",
                  }}
                  name="full_name"
                  control={control}
                  render={({ field }) => (
                    <JopInput {...field} error={errors?.full_name?.message} />
                  )}
                />

               
               

                <p>Email <span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  rules={{
                    required: "Email is required",
                  }}
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <JopInput {...field} error={errors?.full_name?.message} />
                  )}
                />

                <p
                 
                >
                  Phone{" "}
                </p>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />

                <p
                
                >
                  Current location{" "}
                </p>
                <Controller
                  name="current_location"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
                <p
                
                >
                  Current company{" "}
                </p>
                <Controller
                  name="current_company"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
              </div>
              <p
              
              >
                Links
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-y-8">
                <p
                 
                >
                  LinkedIn URL{" "}
                </p>
                <Controller
                  name="linkedin_url"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
                <p
               
                >
                  GitHub URL{" "}
                </p>
                <Controller
                  name="github_url"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />

                <p
                
                >
                  Portfolio URL{" "}
                </p>
                <Controller
                  name="portfolio_url"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
                <p
                 
                >
                  Other website{" "}
                </p>
                <Controller
                  name="other_website"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
              </div>
              <p
                
              >
                Why are you interested in Brilliant?
              </p>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <p >
                  Please leave a note that expresses your interest in the
                  position/company. <span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  name="interest_note"
                  control={control}
                  render={({ field }) => <JopTextArea {...field} />}
                />
              </div>

              <p
               
              >
                Teaching sample
              </p>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <p >
                  If you’re the right fit for this role, you probably have a
                  blog, have designed some lessons, or have some amazing past
                  projects; please share links to one or more artifacts you'd
                  like to highlight, we’d love to check them out!
                </p>
                <Controller
                  name="teaching_sample"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
              </div>

              <p
              
              >
                Teaching experience (ML)
              </p>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <p >
                  Please summarize your teaching experience. We're particularly
                  interested in hearing about your experiences teaching machine
                  learning, AI, and data science topics!{" "}
                </p>
                <Controller
                  name="teaching_experience"
                  control={control}
                  render={({ field }) => <JopTextArea {...field} />}
                />
              </div>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <p >
                  Addition information
                </p>
                <Controller
                  name="additional_information"
                  control={control}
                  render={({ field }) => <JopTextArea {...field} />}
                />
              </div>
            </div>
          
            <div className="flex justify-center my-20">
              {/* {isPending?(
                  <Button
                  sx={{
                    bgcolor: "primary.main",
                    "&:hover": { bgcolor: "black.dark" },
                    color: "background.default",
                    fontWeight: "600",
                    px: "30px",
                    py: "15px",
                    borderRadius: "5px",
                    display:'flex',
                    gap:'10px'
                  }}
                >
                   loading
                  <CircularProgress size="1rem" variant="indeterminate" sx={{color:'background.default'}}/>
                </Button>
              ):( */}
              <button
           className="bg-white hover:bg-black transition-all ease-in-out border border-black text-black hover:text-white px-4 py-2 rounded"
             type="submit"
          >
             Submit application
          </button>
                
           
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
