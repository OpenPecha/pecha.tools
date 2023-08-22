import { fetchToolInfo } from "~/api/getUserToolInfo";
import { toolList } from "~/constant";

export async function getCombineTools(email: string) {
  let updatedTool = await fetchToolInfo(email);
  for (let i = 0; i < toolList.length; i++) {
    if (toolList[i].department?.includes(updatedTool.department)) {
      toolList[i].url = updatedTool.url;
    }
  }
  return toolList;
}
