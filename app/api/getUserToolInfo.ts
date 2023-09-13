export async function fetchToolInfo(email: string) {
  try {
    let res = await fetch(`https://work.pecha.tools/api/mapping/${email}`);
    let data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
