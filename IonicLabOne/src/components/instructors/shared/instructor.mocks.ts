import { InstructorModel } from './instructor.model';

export const instructors: InstructorModel[] = [
    { id: 1, name: 'C#/.NET', syllabus: '' },
    { id: 2, name: 'HTML/CSS/Responsive', syllabus: '' },
    { id: 3, name: 'MVC/Web API', syllabus: '' },
    { id: 4, name: 'Java', syllabus: '' },
    { id: 5, name: 'JavaScript', syllabus: '' },
    { id: 6, name: 'SQL', syllabus: '' },
    { id: 7, name: 'Cordova', syllabus: '' },
    { id: 8, name: 'Consulting Book', syllabus: '' }];

export class InstructorServiceMock {
    // constructor() { }

    public getInstructors(): any {
        return [];
    }
}
