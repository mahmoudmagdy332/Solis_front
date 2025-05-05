
// import JopRadioInput from "../components/jop/JopRadioInput";
// import JopCheckInput from "../components/jop/JopCheckInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import JopInput from "../components/jop/JopInput";
import JopTextArea from "../components/jop/JopTextArea";
import { ApplyJop, Career } from "../app/utils/types/types";
import { useJopApplicationMutation } from "../app/services/mutation";
import { toast } from "react-toastify";
import { useLanguageSelector } from "../app/slices/languageSlice";



export const JopApplication = () => {
  // const { id } = useParams<{ id: string }>();
   const { translations } = useLanguageSelector((state) => state.LanguageReducer);
 
  const [career,setCareer]=useState<Career>();
  useEffect(()=>{
    const careerStorage=localStorage.getItem('career');
    if(careerStorage){
     setCareer(JSON.parse(careerStorage));
    }
  },[])
  const { mutate, isPending, error } = useJopApplicationMutation();
  
  
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<ApplyJop>();
  const [resumeName, setResumeName] = useState<File | null>(null);

  const onSubmit: SubmitHandler<ApplyJop> = (data) => {
    console.log(data)
    if (resumeName) {
      mutate(
        { ...data, career_id: career?.id, file: resumeName },
        {
          onSuccess: () => {
            toast.success(` Apply job is success`);
          },
          onError:()=>{
            toast.error(error?.response?.data.message); 
            console.log('error',error)
          }
        }
      );
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
            {career?.title}
          </p>
         

          <div className="text-white">{career?.type} / {career?.place} / Open</div>
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
                {translations.SubmitYourApplication}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-y-8 gap-x-4">
                <p
                 
                >
                  {translations.Resume_CV} <span className="ms-2 text-red-600">*</span>
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
                      translations.ATTACHRESUME}
                  </p>
                  
                </label>
                <p className="text-red-500">{errors.file?.message}</p>
                <input
                  type="file"
                  id="avatar-upload"
                  {...register("file", {
                    required:  translations.Resume_is_required ,
                  
                  })}
                  className="hidden"
                  onChange={(e) => handleResumeChange(e)}
                /> 
                </div>
               
               
             
              
              
                <p
                  
                >
                 {translations.FullName}  <span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  rules={{
                    required: translations.FullNameIsRequired,
                  }}
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <JopInput {...field} error={errors?.name?.message} />
                  )}
                />

               
               

                <p>{translations.Email} <span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  rules={{
                    required: translations.EmailIsRequired,
                  }}
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <JopInput {...field} error={errors?.name?.message} />
                  )}
                />

                <p
                 
                >
                  {translations.Phone}<span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  name="phone"
                  rules={{
                    required:translations.PhoneIsRequired,
                  }}
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />

                <p
                
                >
                  {translations.CurrentLocation}<span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  name="current_location"
                  rules={{
                    required:translations.currentLocationIsRequired,
                  }}
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
                <p
                
                >
                 {translations.CurrentCompany} <span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  name="current_company"
                  rules={{
                    required: translations.currentCompanyIsRequired,
                  }}
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
              </div>
              <p
              
              >
                {translations.Links}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-y-8">
                <p
                 
                >
                 {translations.LinkedInURL} {" "}
                </p>
                <Controller
                  name="linked_in"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/\S*)?$/,
                      message: translations.InvalidURL,
                    },
                  }}
                  render={({ field }) => <JopInput {...field} error={errors?.linked_in?.message}/>}
                />
                {/* <p
               
                >
                  GitHub URL{" "}
                </p>
                <Controller
                  name="git_hub"
                  rules={{
                    pattern: {
                      value: /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/\S*)?$/,
                      message: "Invalid  URL",
                    },
                  }}
                  control={control}
                  render={({ field }) => <JopInput {...field} error={errors?.git_hub?.message}/>}
                /> */}

                {/* <p
                
                >
                  Portfolio URL{" "}
                </p>
                <Controller
                  name="portfolio"
                  rules={{
                    pattern: {
                      value: /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/\S*)?$/,
                      message: "Invalid  URL",
                    },
                  }}
                  control={control}
                  render={({ field }) => <JopInput {...field} error={errors?.portfolio?.message}/>}
                /> */}
                
                
                {/* <p
                 
                >
                  Other website{" "}
                </p>
                <Controller
                  name="other_website"
                  rules={{
                    pattern: {
                      value: /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/\S*)?$/,
                      message: "Invalid  URL",
                    },
                  }}
                  control={control}
                  render={({ field }) => <JopInput {...field} error={errors?.other_website?.message} />}
                /> */}
              </div>
              <p
                
              >
                
                {translations.interestedSolis}
              </p>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <p >
                {translations.Please_leave}
                   <span className="ms-2 text-red-600">*</span>
                </p>
                <Controller
                  name="why_interested"
                  control={control}
                  render={({ field }) => <JopTextArea {...field} />}
                />
              </div>

              

            
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <p >
                  
                  {translations.AdditionInformation}
                </p>
                <Controller
                  name="addition_information"
                  
                  control={control}
                  render={({ field }) => <JopTextArea {...field} />}
                />
              </div>
            </div>
          
            <div className="flex justify-center my-20">
              {isPending?(
                 <button type="button" className="py-3 px-8 text-white bg-black  cursor-not-allowed font-medium rounded-lg text-lg  text-center flex items-center gap-2" disabled>
                   
                   {translations.Loading}
                 <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                 </svg>
               </button>
              ):(
              <button
           className="bg-white hover:bg-black transition-all ease-in-out border border-black text-black hover:text-white px-4 py-2 rounded"
             type="submit"
          >
             {translations.SubmitApplication}
          </button>
              )}    
           
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
