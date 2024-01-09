import Dropdownbox from "./dropdownbox";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";

const Data = () => {
    return directusClient.request(
      readItems("Category", {
        fields: ["*"]
      })
    );
  };

const DropdownIcon = async() => {
    const data = await Data()
  return (
    <Dropdownbox categoryData={data}/>
  )
}

export default DropdownIcon