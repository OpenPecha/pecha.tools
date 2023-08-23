export async function fetchToolInfo(username: string) {
  try {
    let res = await fetch(`https://work.pecha.tools/api/mapping/${username}`);

    let data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
}
