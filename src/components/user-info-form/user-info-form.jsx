import { useFormAndValidation } from "./form-validation";
import { userInformationApi } from "@/utils/api";
import { useRouter } from "next/router";
import DialogPopUp from "../ui/DialogPopUp";
import { useState } from "react";

export const UserInfoForm = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleFormData = async (data) => {
    try {
      const response = await userInformationApi(data);
      console.log("Form submission successful:", response);
      setIsError(false);
      setOpen(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsError(true);
      setOpen;
    }
  };

  // const handleFormData = (data) => {
  //   console.log(data)
  //   router.push('/success');
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    handleFormData({
      firstName: values.firstName,
      lastName: values.lastName,
      attendanceFrequency: values.attendanceFrequency,
      comment: values.comment,
    });
    resetForm();
  };

  return (
    <section id="pre-register">
      <div className="flex min-h-full flex-1 flex-col justify-center py-20 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-xl font-bold leading-9 tracking-tight text-galactic-text md:text-2xl xl:text-3xl">
            Your Thoughts. Your Voice.
          </h2>
          <p className="px-4 pt-6 font-semibold text-gray-400 md:px-0">
            We'd love to hear from you! Share your ideas for things you'd wish
            to see.
          </p>
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
                  htmlFor="attendanceFrequency"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  How often do you attend anime-related events?
                </label>
                <div className="mt-2">
                  <select
                    id="attendanceFrequency"
                    name="attendanceFrequency"
                    required
                    value={values.attendanceFrequency || ""}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="never">Never</option>
                    <option value="rarely">Rarely (Once a year or less)</option>
                    <option value="sometimes">
                      Sometimes (A few times a year)
                    </option>
                    <option value="often">Often (Monthly)</option>
                    <option value="very_often">
                      Very Often (Weekly or more)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Leave your feedback or opinions here
                </label>
                <div className="mt-2">
                  <textarea
                    id="comment"
                    name="comment"
                    type="text"
                    minLength={4}
                    maxLength={400}
                    value={values.comment || ""}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full resize-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
      <DialogPopUp
        open={open}
        setOpen={setOpen}
        onClick={() => {
          setOpen(false);
          if (isError) {
            setOpen(false);
            return;
          }
        }}
        title={isError ? "Submission Failed" : "Submission Successful"}
        description={
          isError ? errorMessage : "We've received your message. Thank you!"
        }
        buttonText={isError ? "Try Again" : "Close"}
        isError={isError}
      />
    </section>
  );
};
