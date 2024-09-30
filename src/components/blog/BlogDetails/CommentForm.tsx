import { toast } from "react-toastify";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../../contact/TextInput";
import { IFormAddCommentInput } from "../../../app/utils/types/types";

const CommentForm = () => {
  const { handleSubmit, formState, control, reset } =
    useForm<IFormAddCommentInput>();
  const { errors } = formState;
  const onSubmit: SubmitHandler<IFormAddCommentInput> = (data) => {
    console.log(data);
    reset({
      name: "",
      email: "",
      message: "",
      Website: "",
    });
    toast.success(`sent Form success`);
  };
  return (
    <div>
      <h2 className=" w-11/12 mx-auto text-xl md:text-2xl lg:text-3xl font-semibold text-[#353535]">
        Add Comment
      </h2>
      <form className="my-10 border-2 p-8  " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-4">
          <Controller
            name="name"
            control={control}
            rules={{
              required: "First Name required",
              maxLength: {
                value: 17,
                message: " Name must be at least 17 character",
              },
            }}
            render={({ field }) => (
              <TextInput
                lable="User Name *"
                error={errors.name?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "email required",
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
        </div>
        <Controller
          rules={{
            required: "Phone number required",
            minLength: {
              value: 9,
              message: "Phone number must be phone number",
            },
          }}
          name="Website"
          control={control}
          render={({ field }) => (
            <TextInput
              error={errors.Website?.message}
              lable=" Website *"
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
            <div>
              <label htmlFor="message" className="font-semibold text-[#4A4A4A]">
                Message *
              </label>
              <textarea
                id="message"
                {...field}
                className={`w-full rounded-sm outline-none mt-2 border  focus:ring-white focus:border-2 h-28 focus:border-black ${
                  errors.message?.message
                    ? "border-red-600"
                    : "border-[#4A4A4A]"
                }`}
              ></textarea>
              <p className="text-red-600 text-sm">{errors.message?.message}</p>
            </div>
          )}
        />
        <div className="flex justify-end mt-4">
          <button className="py-3 px-8 rounded-xl text-lg bg-black text-white ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
