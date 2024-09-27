import { ExerciseType } from "./ExerciseType";

export type ExerciseListItemType = {
  repetitions: number;
  weight: string;
} & ExerciseType;

export type SerieType = {
  id: string;
  name: string;
  exerciseList: ExerciseListItemType[];
};
