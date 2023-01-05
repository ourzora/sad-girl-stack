import fs from "fs/promises";
const contentPath = "content";

export const getLocalFile = async (path: string): Promise<string> => {
  const jsonDirectory = __dirname + "/../" + contentPath;
  const data = await fs.readFile(`${jsonDirectory}/${path}`, "utf8");
  return data.toString();
};
