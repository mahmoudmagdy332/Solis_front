import { toast } from "react-toastify";
import { IFormContuctInput } from "../../app/utils/types/types";
import TextInput from "./TextInput"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import SelectInput from "./SelectInput";
import { useContuctMutation } from "../../app/services/mutation";

const Form = () => {

  const {
    mutate,
    isPending,
    error,
    isError: isErrorUpdatedUser,
  } = useContuctMutation();
    const { handleSubmit,
        formState,
         control
        , reset } =
    useForm<IFormContuctInput>();
    const { errors } = formState;
    const onSubmit: SubmitHandler<IFormContuctInput> = (data) => {
              mutate(data, {
                onSuccess: () => {
                  reset({ name: "", company_name: "", email: "", phone: '',
                    product_type: '',subject: '', message: "" });
                  toast.success(`sent Form success`);
                },
              });
       
      };
  return (
    <div >
    <p className="text-[#4A4A4A] text-xl">Do you need advice? Or do you encounter any issues?
    Please get in touch by filling out the form below.</p>
    <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
    <Controller
            name="name"
            control={control}
            rules={{ required: " Name required", 
                maxLength: {
                    value: 17,
                    message: " Name must be at least 17 character",
                  },
            }}
            render={({ field }) => (
            
              <TextInput lable=" Name *" 
               error={errors.name?.message}
               {...field}
              />
            )}
          />
         
          <Controller
            name="email"
            control={control}
            rules={{ required: "email required",
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter valid Email",
                  },
             }}
            render={({ field }) => (              
              <TextInput 
              lable="E-mail *"
              {...field}
               error={errors.email?.message}
              
              />
            )}
            
          />
        <Controller
            rules={{
              required: "Phone number required",           
              minLength: {
                value: 9,
                message: "Phone number must be phone number",
              },
            }}
            name="phone"
            control={control}
            render={({ field }) => (
              <TextInput
                error={errors.phone?.message}
                 lable="Phone number *"
                {...field}
              />
            )}
          />
           <Controller
            name="company_name"
            control={control}
            rules={{ required: "Company Name required", }}
            render={({ field }) => (
                <TextInput 
                lable="Company Name *"
                 error={errors.company_name?.message}
                {...field}
                />
            )}
          />
           <Controller
            name="subject"
            control={control}
            rules={{ required: "Subject required", 
               
            }}
            render={({ field }) => (
            
              <TextInput lable=" Subject *" 
               error={errors.subject?.message}
               {...field}
              />
            )}
          />
        <Controller
            rules={{
              required: "Product Type required",           
            
            }}
            name="product_type"
            control={control}
            render={({ field }) => (
              // <TextInput
              //    error={errors.order_number?.message}
              //    lable="Order Number"
              //   {...field}
              // />
              <SelectInput lable="Product Type"
                 error={errors.product_type?.message}
                 {...field}
               />
            
            )}
          />
            <Controller
            rules={{
              required: "Message required",           
            
            }}
            name="message"
            control={control}
            render={({ field }) => (
     
            <div >
            <label htmlFor="message" className="font-semibold text-[#4A4A4A]">Message *</label>
              <textarea id="message" {...field} className={`w-full rounded-sm outline-none mt-2 border  focus:ring-white focus:border-2 h-28 focus:border-black ${errors.message?.message?'border-red-600':'border-[#4A4A4A]'}`}></textarea>
              <p className="text-red-600 text-sm">{errors.message?.message}</p>
            </div>
            )}
          />
           {isErrorUpdatedUser && (
            <div className="text-red-500 mt-5">{error?.message}</div>
          )}
          <div className="flex justify-end mt-4">
          {isPending ? (
              <button type="button" className="py-3 px-8 text-white bg-black  cursor-not-allowed font-medium rounded-lg text-lg  text-center flex items-center gap-2" disabled>
              Loading
              <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
            </button>
          ) : (
            <button className="py-3 px-8 rounded-xl text-lg bg-black text-white ">Send</button>

          )}

          </div>
    </form>
</div>
  )
}

export default Form