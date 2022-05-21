export interface IEpreuve {
    designation: string;
    epreuve: string;
    corrige?: string;
    matiere: string;
    // filiere: string;
    class: string;
    isArchived: boolean;
    deletedAt: string;
}