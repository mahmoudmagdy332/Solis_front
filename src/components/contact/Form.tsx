import { toast } from "react-toastify";
import { IFormContuctInput } from "../../app/utils/types/types";
import TextInput from "./TextInput"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import SelectInput from "./SelectInput";
import { useContuctMutation } from "../../app/services/mutation";
import { useLanguageSelector } from "../../app/slices/languageSlice";

const Form = () => {
    const { translations } = useLanguageSelector((state) => state.LanguageReducer);

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
    <p className="text-[#4A4A4A] text-xl">
      {translations.Do_you_need}
    </p>
    <p className="text-[#848484] text-md mt-3">
      {translations.WeTakeGreat}
    </p>
    <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
    <Controller
            name="name"
            control={control}
            rules={{ required: translations.Name_required, 
                maxLength: {
                    value: 17,
                    message: translations.Name_must_be_at_least_17_character,
                  },
            }}
            render={({ field }) => (
            
              <TextInput lable={`${translations.FullName} *`}
               error={errors.name?.message}
               {...field}
              />
            )}
          />
         
          <Controller
            name="email"
            control={control}
            rules={{ required: translations.email_required,
                pattern: {
                    value: /^\S+@\S+$/i,
                    message:translations.Enter_valid_Email ,
                  },
             }}
            render={({ field }) => (              
              <TextInput 
            
              lable={`${translations.E_mail} *`}
              {...field}
               error={errors.email?.message}
              
              />
            )}
            
          />
        <Controller
            rules={{
              required: translations.Phone_number_required,           
              minLength: {
                value: 9,
                message: translations.Phone_number_must_be_phone_number,
              },
            }}
            name="phone"
            control={control}
            render={({ field }) => (
              <TextInput
                error={errors.phone?.message}
               
                 lable={`${translations.Phone_number} *`}
                {...field}
              />
            )}
          />
           <Controller
            name="company_name"
            control={control}
            rules={{ required: translations.CompanyNameRequired }}
            render={({ field }) => (
                <TextInput 
                lable={`${translations.CompanyName} *`}
                
                 error={errors.company_name?.message}
                {...field}
                />
            )}
          />
           <Controller
            name="subject"
            control={control}
            rules={{ required: translations.Subject_required, 
               
            }}
            render={({ field }) => (
            
              <TextInput
              lable={`${translations.Subject} *`}
               error={errors.subject?.message}
               {...field}
              />
            )}
          />
        <Controller
            rules={{
              required: translations.ProductTypeRequired,           
            
            }}
            name="product_type"
            control={control}
            render={({ field }) => (
              // <TextInput
              //    error={errors.order_number?.message}
              //    lable="Order Number"
              //   {...field}
              // />
              <SelectInput 
              lable={translations.ProductType }
                 error={errors.product_type?.message}
                 {...field}
               />
            
            )}
          />
            <Controller
            rules={{
              required: translations.Message_required         
            
            }}
            name="message"
            control={control}
            render={({ field }) => (
     
            <div >
            <label htmlFor="message" className="font-semibold text-[#4A4A4A]">{translations.Message} *</label>
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
              {translations.Loading}
              <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
            </button>
          ) : (
            <button className="py-3 px-8 rounded-xl text-lg bg-black text-white ">{translations.Send}</button>

          )}

          </div>
    </form>
</div>
  )
}

export default Form