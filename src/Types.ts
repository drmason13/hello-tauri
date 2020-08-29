export enum Gender {
    Male = "Male",
    Female = "Female",
    Transgender = "Transgender"
}

/**
 * This is equivalent to:
 * type GenderStrings = 'Male' | 'Female' | 'Transgender';
 */
export type GenderStrings = keyof typeof Gender;

export interface User {
    name: string,
    age: number,
    gender: Gender,
}
