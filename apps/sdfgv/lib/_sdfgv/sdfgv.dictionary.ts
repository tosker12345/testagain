
import { serviceDictionary } from "akanjs/dictionary";

import type { SdfgvEndpoint } from "./sdfgv.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<SdfgvEndpoint>((fn) => ({}))
  .translate({});
