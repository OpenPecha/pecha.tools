import { redirect } from "@remix-run/node";

export async function fetchToolInfo(email: string) {
  try {
    let res = await fetch(`https://stt.pecha.tools/api/mapping/${email}`);
    let data = await res.json();

    if (data.error) redirect("/");
    return data;
  } catch (err) {
    return err;
  }
}
