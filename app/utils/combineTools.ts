import { fetchToolInfo } from "~/api/getUserToolInfo";
import { getTools } from "~/modal/tool";

function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re?.test(email);
}

export async function getCombineTools(email: string) {
  const toolList=await getTools();
  if (!email ?? !validateEmail(email)) {
    return toolList;
  }

  try {
    const updatedTool = await fetchToolInfo(email);

    let newToolList = toolList.map((tool) => {
      if (tool.department?.includes(updatedTool.department)) {
        tool.url = updatedTool.url;
      }
      return tool;
    });
    return newToolList;
  } catch (error) {
    // Handle errors from fetchToolInfo, if needed
    throw error;
  }
}
