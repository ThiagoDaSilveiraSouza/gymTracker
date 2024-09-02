import { ExerciseType } from "./ExerciseType";

export type SerieType = {
  id: string;
  name: string;
  exerciseList: ExerciseType[];
};
