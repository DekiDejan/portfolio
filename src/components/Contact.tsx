import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [message, setMessage] = useState<JSX.Element>(
    <p className="text-white sm:text-lg lg:text-xl font-bold uppercase">
      Feel free to contact me and I will get back to you as soon as I can
    </p>
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const formElement = useRef<HTMLFormElement>(null);
  const emailInputElement = useRef<HTMLInputElement>(null);
  const messageTextareaElement = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (emailInputElement.current?.value.match(emailRegex)) {
      if (messageTextareaElement.current?.value) {
        setIsDisabled(true);

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
              setMessage(
                <p className="text-[#C1FF82] sm:text-lg lg:text-xl font-bold uppercase">
                  Your message was successfully sent!
                </p>
              );
              formElement.current?.reset();
              setIsDisabled(false);
            },
            (error) => {
              console.log("FAILED...", error.text);
              setMessage(
                <p className="text-red-700 sm:text-lg lg:text-xl font-bold uppercase">
                  There was a problem and your message was not sent!
                </p>
              );
            }
          );
      } else {
        setMessage(
          <p className="text-red-700 sm:text-lg lg:text-xl font-bold uppercase">
            Please enter a message.
          </p>
        );

        messageTextareaElement.current?.focus();
      }
    } else {
      setMessage(
        <p className="text-red-700 sm:text-lg lg:text-xl font-bold uppercase">
          Please enter a valid e-mail.
        </p>
      );

      emailInputElement.current?.focus();
    }
  };

  return (
    <div className="basis-1/2 flex flex-col" id="contact">
      {message}
      <form
        ref={formElement}
        onSubmit={sendEmail}
        className="mt-6 flex flex-col gap-6 grow"
      >
        <input
          ref={emailInputElement}
          type="email"
          name="email"
          placeholder="Your e-mail"
          className="p-4 placeholder-black placeholder-opacity-30 sm:text-lg lg:text-xl rounded-sm"
        />
        <textarea
          ref={messageTextareaElement}
          name="message"
          placeholder="Your message"
          className="p-4 grow min-h-40 max-h-80 placeholder-black placeholder-opacity-30 sm:text-lg lg:text-xl rounded-sm resize-none"
        />
        <input
          disabled={isDisabled}
          type="submit"
          value="SEND MESSAGE"
          className={`py-4 bg-white text-[#628340] cursor-pointer sm:text-lg lg:text-xl rounded-sm ${
            isDisabled && "opacity-30 cursor-auto"
          }`}
        />
      </form>
    </div>
  );
};

export default Contact;
