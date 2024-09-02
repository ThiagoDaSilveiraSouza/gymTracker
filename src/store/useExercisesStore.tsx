import { createCRUDStore } from "./crud";
import { ExerciseType } from "../types";

export const useExercisesStore = createCRUDStore<ExerciseType>();
