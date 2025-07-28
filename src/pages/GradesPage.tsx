import React, { useState } from 'react';
import { useGrades, Grade } from '@/hooks/useGrades';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const GradesPage: React.FC = () => {
  const { grades, addGrade, updateGrade, deleteGrade, startEditing, cancelEditing, editingGrade } = useGrades();
  const [newGrade, setNewGrade] = useState<Omit<Grade, 'id'>>({ subject: '', grade: 0 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddGrade = () => {
    addGrade(newGrade);
    setNewGrade({ subject: '', grade: 0 });
    setIsDialogOpen(false);
  };

  const handleUpdateGrade = () => {
    if (editingGrade) {
      updateGrade(editingGrade);
    }
    setIsDialogOpen(false);
  };

  const openEditDialog = (grade: Grade) => {
    startEditing(grade);
    setIsDialogOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Grades</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Grade</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingGrade ? 'Edit Grade' : 'Add Grade'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subject" className="text-right">
                  Subject
                </Label>
                <Input
                  id="subject"
                  value={editingGrade ? editingGrade.subject : newGrade.subject}
                  onChange={(e) =>
                    editingGrade
                      ? startEditing({ ...editingGrade, subject: e.target.value })
                      : setNewGrade({ ...newGrade, subject: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="grade" className="text-right">
                  Grade
                </Label>
                <Input
                  id="grade"
                  type="number"
                  value={editingGrade ? editingGrade.grade : newGrade.grade}
                  onChange={(e) =>
                    editingGrade
                      ? startEditing({ ...editingGrade, grade: Number(e.target.value) })
                      : setNewGrade({ ...newGrade, grade: Number(e.target.value) })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={cancelEditing}>Cancel</Button>
              </DialogClose>
              <Button onClick={editingGrade ? handleUpdateGrade : handleAddGrade}>
                {editingGrade ? 'Save Changes' : 'Add'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {grades.map((grade) => (
          <Card key={grade.id}>
            <CardHeader>
              <CardTitle>{grade.subject}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{grade.grade}</p>
            </CardContent>
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" onClick={() => openEditDialog(grade)}>
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => deleteGrade(grade.id)}>
                <i className="bi bi-trash"></i>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GradesPage;
