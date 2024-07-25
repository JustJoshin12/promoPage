
import { useFormAndValidation } from "./form-validation";
import { userInformationApi } from "@/utils/api";
import { useRouter } from 'next/router';

export const UserInfoForm = () => {
  const router = useRouter();

  const { values, handleChange, errors, isValid, resetForm } =
  useFormAndValidation();

  const handleFormData = async (data) => {
    try {
      const response = await userInformationApi(data);
      console.log('Form submission successful:', response);
      // Redirect to success page after submission
      router.push('/success');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  }

  // const handleFormData = (data) => {
  //   console.log(data)
  //   router.push('/success');
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isValid) return;
    handleFormData({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      comment: values.comment,
    });
    resetForm();
  }

  return (
    <section id="pre-register">
      <div className="flex min-h-full flex-1 flex-col justify-center py-20 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-xl md:text-2xl xl:text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Pre-Register 
          </h2>
          <p className="pt-6 font-semibold">We'd love to hear from you! Share your ideas for things you'd wish to see.</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    minLength={2}
                    maxLength={12}
                    value={values.firstName || ""}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    minLength={2}
                    maxLength={12}
                    value={values.lastName || ""}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={values.email || ""}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Leave your idea here
                </label>
                <div className="mt-2">
                  <textarea
                    id="comment"
                    name="comment"
                    type="text"
                    minLength={4}
                    maxLength={140}
                    value={values.comment || ""}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                   
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
