import { SerieType } from "../types";
import { createCRUDStore } from "./crud";

export const useSeriesStore = createCRUDStore<SerieType>();
