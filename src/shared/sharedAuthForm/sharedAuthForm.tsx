import type { ReactNode } from "react";
import type {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";

interface FormField {
  name: string;
  type?: string;
  placeholder: string;
  validation?: RegisterOptions;
}

interface SharedAuthFormProps {
  onSubmit: (data: any) => void;
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
  fields: FormField[];
  buttonText: ReactNode;
  className?: string; 
}

export default function SharedAuthForm({
  onSubmit,
  register,
  errors,
  fields,
  buttonText,
  className
}: SharedAuthFormProps) {
  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className || ""}`}>
      {fields.map((field) => (
        <div key={field.name}>
          {field.type === "textarea" ? (
            <textarea
              {...register(field.name, field.validation)}
              placeholder={field.placeholder}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-white"
            />
          ) : (
            <input
              {...register(field.name, field.validation)}
              type={field.type || "text"}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-white"
            />
          )}

          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      ))}
      <button type="submit" className="btn w-full">
        {buttonText}
      </button>
    </form>
  );
}



///////////////////////
// for example How to use resouble component
////////////////////
// import { useForm } from "react-hook-form";
// import SharedAuthForm from "./SharedAuthForm";

// export default function LoginPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const fields = [
//     {
//       name: "email",
//       type: "email",
//       placeholder: "Enter your email",
//       validation: { required: "Email is required" },
//     },
//     {
//       name: "password",
//       type: "password",
//       placeholder: "Enter your password",
//       validation: { required: "Password is required" },
//     },
//   ];

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <SharedAuthForm
//         onSubmit={handleSubmit(onSubmit)}
//         register={register}
//         errors={errors}
//         fields={fields}
//         buttonText="Login"
//       />
//     </div>
//   );
// }
