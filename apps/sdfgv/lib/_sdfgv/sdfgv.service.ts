
import { serve } from "akanjs/service";

export class SdfgvService extends serve("sdfgv" as const, { serverMode: "batch" }, () => ({})) {}
