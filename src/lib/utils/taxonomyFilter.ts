import { slugify } from "@/lib/utils/textConverter";

const taxonomyFilter = (pieces: any[], name: string, key: any) =>
  pieces.filter((piece) =>
    piece.data[name].map((name: string) => slugify(name)).includes(key),
  );

export default taxonomyFilter;
