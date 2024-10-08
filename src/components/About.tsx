import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const About: React.FC = () => {
  const formElement = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0stt544",
        "template_iye4uo8",
        formElement.current as HTMLFormElement,
        {
          publicKey: "Ryh5__SAp4AnHvaq7",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    formElement.current?.reset();
  };

  return (
    <div className="pt-12 pb-24 mx-36">
      <h3
        className="text-5xl text-white opacity-90 font-bold text-center"
        id="about"
      >
        ABOUT ME
      </h3>
      <div className="flex gap-8 mt-12">
        <div className="basis-1/2">
          <p className="text-white opacity-90 text-xl italic font-light text-justify">
            &nbsp; I'm Dejan, a front-end web developer who loves creating
            websites that are both visually appealing and easy to use. My
            experience working with React, Next.js, TypeScript, and Tailwind CSS
            has helped me develop the skills to build modern, user-friendly web
            applications. With a background in design, I pay close attention to
            detail, making sure that my projects are not only functional but
            also look great.
            <br />
            &nbsp; In my free time, I’m passionate about hiking. Being outdoors
            helps me clear my mind and stay creative. Whether it’s exploring new
            trails or climbing mountains, I find inspiration in nature, which I
            often bring back to my work. I also love playing guitar and singing
            in a choir, where I enjoy expressing creativity in a different way.
            On top of that, cycling is another hobby I’m passionate about,
            keeping me active and allowing me to unwind after a day of coding.
            <br />
            &nbsp;I’m always excited to take on new challenges and connect with
            others in the field
          </p>
        </div>
        <div className="basis-1/2 flex flex-col">
          <p className="text-white text-xl font-bold uppercase">
            Feel free to contact me and I will get back to you as soon as I can
          </p>
          <form
            ref={formElement}
            onSubmit={sendEmail}
            className="mt-6 flex flex-col gap-6 grow"
          >
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              className="p-4 placeholder-black placeholder-opacity-30 text-xl rounded-sm"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="p-4 grow placeholder-black placeholder-opacity-30 text-xl rounded-sm resize-none"
            />
            <input
              type="submit"
              value="SEND MESSAGE"
              className="py-4 bg-white text-[#628340] cursor-pointer text-xl rounded-sm"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
