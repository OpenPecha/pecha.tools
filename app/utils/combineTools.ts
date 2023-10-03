import { fetchToolInfo } from "~/api/getUserToolInfo";
import { toolList } from "~/constant";

export async function getCombineTools(email: string) {
  if (!email) {
    return toolList;
  }

  try {
    const updatedTool = await fetchToolInfo(email);

    toolList.forEach((tool) => {
      if (tool.department?.includes(updatedTool.department)) {
        tool.url = updatedTool.url;
      }
    });

    return toolList;
  } catch (error) {
    // Handle errors from fetchToolInfo, if needed
    throw error;
  }
}
