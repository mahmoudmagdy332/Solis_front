import { toast } from "react-toastify";
import { IFormContuctInput } from "../../app/utils/types/types";
import TextInput from "./TextInput"
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const Form = () => {
    const { handleSubmit,
        formState,
         control
        , reset } =
    useForm<IFormContuctInput>();
    const { errors } = formState;
    const onSubmit: SubmitHandler<IFormContuctInput> = (data) => {
            console.log(data)
            reset({ f_name: "", l_name: "", email: "", phone: '',
                order_number: '',subject: '', message: "" });
              toast.success(`sent Form success`);
       
      };
  return (
    <div >
    <p className="text-[#4A4A4A] text-xl">Do you need advice? Or do you encounter any issues?
    Please get in touch by filling out the form below.</p>
    <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
    <Controller
            name="f_name"
            control={control}
            rules={{ required: "First Name required", 
                maxLength: {
                    value: 17,
                    message: "First Name must be at least 17 character",
                  },
            }}
            render={({ field }) => (
            
              <TextInput lable="First Name *" 
               error={errors.f_name?.message}
               {...field}
              />
            )}
          />
          <Controller
            name="l_name"
            control={control}
            rules={{ required: "Last Name required", }}
            render={({ field }) => (
                <TextInput 
                lable="Last Name *"
                 error={errors.l_name?.message}
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
            rules={{
              required: "Order Number required",           
            
            }}
            name="order_number"
            control={control}
            render={({ field }) => (
              <TextInput
                 error={errors.order_number?.message}
                 lable="Order Number"
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
          <div className="flex justify-end mt-4">
          <button className="py-3 px-8 rounded-xl text-lg bg-black text-white ">Send</button>

          </div>
    </form>
</div>
  )
}

export default Form