import { create } from "zustand";
import { ExerciseType } from "../types";

type ExercisesStore = {
  exercises: ExerciseType[];
  exerciseActiveToEdit: ExerciseType | undefined;
  addExercise: (newExercise: ExerciseType) => void;
  removeExercise: (exerciseId: string) => void;
  updateExercise: (updatedExercise: ExerciseType) => void;
  setAciveToEditExercise: (targetExercise?: ExerciseType) => void;
};

export const useExercisesStore = create<ExercisesStore>((set) => {
  return {
    exercises: [],
    exerciseActiveToEdit: undefined,
    addExercise: (newExercise) => {
      set((prevState) => {
        const updateExercises = [...prevState.exercises];
        updateExercises.push(newExercise);
        return { ...prevState, exercises: updateExercises };
      });
    },
    removeExercise: (exerciseId) => {
      set((prevState) => {
        const { exercises } = prevState;
        const updateExercises = exercises.filter(
          (currentExercise) => currentExercise.id !== exerciseId
        );
        return { ...prevState, exercises: updateExercises };
      });
    },
    updateExercise: (updatedExercise) => {
      set((prevState) => {
        const { exercises } = prevState;
        const updatedExercises = exercises.map((currentExercise) => {
          const isTargetExercise = currentExercise.id === updatedExercise.id;
          if (isTargetExercise) {
            return updatedExercise;
          }
          return currentExercise;
        });

        return { ...prevState, exercises: updatedExercises };
      });
    },
    setAciveToEditExercise: (targetExercise) => {
      console.log("targetExercise", targetExercise);
      set((prevState) => {
        const updatedEstate = {
          ...prevState,
          exerciseActiveToEdit: targetExercise,
        };
        return updatedEstate;
      });
    },
  };
});
