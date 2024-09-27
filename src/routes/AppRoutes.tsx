import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ExercisesPage, HomePage } from "../pages";
import { ReactNode } from "react";
import { SeriesPage } from "../pages/SeriesPage/SeriesPage";

type AppRouterProps = {
  children?: ReactNode;
};

export const AppRoutes = ({ children }: AppRouterProps) => (
  <Router>
    {children}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exercicios" element={<ExercisesPage />} />
      <Route path="/series" element={<SeriesPage />} />
    </Routes>
  </Router>
);
