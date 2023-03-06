import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:${'leander@leanderlindahl.se'}?subject=${
      formData.subject
    }&body=Hi my name is ${formData.name}! ${formData.message} (e-mail ${
      formData.email
    })`;
  };

  return (
    <div className="h-screen w-full relative flex flex-col  justify-evenly px-10 z-0 overflow-y-hidden text-center md:flex-left md:flex-row md:items-center">
      {/* items-center  max-w-6xl */}
      <h3 className="w-4/5 absolute text-center top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        {/* px-10 */}
        <h4 className="text-3xl md:text-4xl mt-[100px] md:mt-0 font-semibold text-center">
          {`I have got just what you need. `}
          <span className="decoration-[#F7AB0A]/50 underline">{`Let's talk`}</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">leander@leanderlindahl.se</p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">123 Developer Lane</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="E-mail"
              className="contactInput mt-2 md:mt-0"
              type="text"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold txt-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
