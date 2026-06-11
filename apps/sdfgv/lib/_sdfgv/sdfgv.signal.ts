
import { endpoint, internal } from "akanjs/signal";

import * as srv from "../srv";

export class SdfgvInternal extends internal(srv.sdfgv, () => ({})) {}

export class SdfgvEndpoint extends endpoint(srv.sdfgv, () => ({})) {}
  