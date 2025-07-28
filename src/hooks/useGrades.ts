import { useState } from 'react';

export interface Grade {
  id: number;
  subject: string;
  grade: number;
}

export const useGrades = () => {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [editingGrade, setEditingGrade] = useState<Grade | null>(null);

  const addGrade = (grade: Omit<Grade, 'id'>) => {
    setGrades([...grades, { ...grade, id: Date.now() }]);
  };

  const updateGrade = (updatedGrade: Grade) => {
    setGrades(grades.map((grade) => (grade.id === updatedGrade.id ? updatedGrade : grade)));
    setEditingGrade(null);
  };

  const deleteGrade = (id: number) => {
    setGrades(grades.filter((grade) => grade.id !== id));
  };

  const startEditing = (grade: Grade) => {
    setEditingGrade(grade);
  };

  const cancelEditing = () => {
    setEditingGrade(null);
  };

  return {
    grades,
    editingGrade,
    addGrade,
    updateGrade,
    deleteGrade,
    startEditing,
    cancelEditing,
  };
};
