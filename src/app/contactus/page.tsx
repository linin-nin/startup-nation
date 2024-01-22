import { directusClient } from "@/lib/directus_client";
import { createItem } from "@directus/sdk";
import ContactUs from "./text";

const Page = async () => {
  const result = await directusClient.request(
    createItem("Subscriber", {
      email: "sreyninpon@gmail.com",
      phone_number: "070419305"
    })
  );
  return <ContactUs />;
};

export default Page;
