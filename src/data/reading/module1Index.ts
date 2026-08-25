import { READING_MODULE_1_OVERVIEW } from './module1/m1Overview';
import { MODULE_1_DEMOS } from './module1/m1Demos';
import { MODULE_1_EXERCISES_PART_1 } from './module1/m1ExercisesPart1';
import { MODULE_1_EXERCISES_PART_2 } from './module1/m1ExercisesPart2';
import { ReadingQuestion, DemonstrationExample, ReadingModuleOverview } from './readingTypes';

export const MODULE_1_ALL_EXERCISES: ReadingQuestion[] = [
  ...MODULE_1_EXERCISES_PART_1,
  ...MODULE_1_EXERCISES_PART_2
];

export interface Module1DataPackage {
  overview: ReadingModuleOverview;
  demonstrations: DemonstrationExample[];
  exercises: ReadingQuestion[];
}

export const READING_MODULE_1_PACKAGE: Module1DataPackage = {
  overview: READING_MODULE_1_OVERVIEW,
  demonstrations: MODULE_1_DEMOS,
  exercises: MODULE_1_ALL_EXERCISES
};

export {
  READING_MODULE_1_OVERVIEW,
  MODULE_1_DEMOS,
  MODULE_1_EXERCISES_PART_1,
  MODULE_1_EXERCISES_PART_2
};
