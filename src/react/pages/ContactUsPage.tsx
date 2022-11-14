import { useState, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// components
import { AuthFormCard } from "../containers/AuthForms";
import Input, { Textarea } from "../elements/Input";
import Button from "../elements/Button";

// helpers
import ContactUsInterface from "../../__types__/containers/ContactUs.types";
import customFetch from "../../api/customFetch";

// assets
import Logo from "../icons/Logo";


function ContactUsPage() {
  const [lastRequest, setLastRequest] = useState<null | Array<{name: string, email: string}>>(null);

  const { handleSubmit, watch, setValue, formState: { errors } } = useForm<ContactUsInterface>({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const { email, name, message } = watch();

  const handleSubmitEvent = (data: ContactUsInterface) => {
    // onSubmit && onSubmit(data);
    customFetch.post("/contact-us", data)
      .then(() => toast.success("Contact Request created"));
  }

  useLayoutEffect(() => {
    customFetch("/contact-us").then(resp => setLastRequest(resp.data))
  }, []);

  return (
    <AuthFormCard
      icon={<Logo/>}
      title="Contact Us"
      footer={lastRequest?.map((item, index) => <p key={index}>{index + 1} {`${item.name}-${item.email}`}</p>)}
    >
      <form
        className="pdp-chat-auth-form"
        onSubmit={handleSubmit(handleSubmitEvent)}
      >
        <Input
          fullWidth
          label="email"
          value={email}
          name="email"
          onChange={e => setValue("email", e.target.value)}
          error={errors.email?.message}
        />
        <Input
          fullWidth
          label="name"
          value={name}
          name="name"
          onChange={e => setValue("name", e.target.value)}
          error={errors.name?.message}
        />
        <Textarea
          fullWidth
          label="Message"
          value={message}
          name="message"
          onChange={e => setValue("message", e.target.value)}
          error={errors.message?.message}
        />
        <Button htmlType="submit">
          Submit
        </Button>
      </form>
    </AuthFormCard>
  );
}


export default ContactUsPage;
