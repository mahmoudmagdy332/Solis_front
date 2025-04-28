import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IFormnewsletterInput } from "../../app/utils/types/types";
import FadeEffect from "../common/FadeEffect"
import {  useNewsletterMutation } from "../../app/services/mutation";
import { toast } from "react-toastify";

const Subscribe = () => {
  const {
    mutate,
    isPending,
  } = useNewsletterMutation();
    const { handleSubmit,
        formState,
         control
        , reset } =
    useForm<IFormnewsletterInput>();
    const { errors } = formState;
    const onSubmit: SubmitHandler<IFormnewsletterInput> = (data) => {
              mutate(data, {
                onSuccess: () => {
                  reset({  email: "" });
                  toast.success(`sent Form success`);
                },
              });
       
      };
  return (
    <FadeEffect transition={0.1} direction="up" duration={ 0.4}>
      <div className="flex flex-col gap-8 items-center bg-[#BBBEBF] py-12 my-16">
          <h2 className="text-center text-2xl w-11/12 md:w-3/4 lg:w-1/2">Enjoy our newsletters now</h2> 
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-11/12 md:w-3/4 lg:w-1/2 justify-center lg:flex-row gap-6">
                <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter your email"
                className="p-4 text-xs border w-full focus:ring-gray-50 focus:border-gray-50 border-gray-300 rounded-lg outline-none"
              />
            )}
          />
           {isPending ? (
              <button type="button" className="py-3 px-8 text-white bg-black  cursor-not-allowed font-medium rounded-lg text-lg  text-center flex items-center gap-2" disabled>
              Loading
              <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
            </button>
          ) : (
            <button className="bg-black rounded-lg text-sm text-white border hover:border-black  hover:bg-white  hover:text-black transition-all ease-in-out py-[14px] px-8">Subscribe</button>
          )}

          </form>
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
          </div>
    </FadeEffect>
  )
}

export default Subscribe