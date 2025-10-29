type UserBase = {
  id: number;
  name: string;

  email: string;
  age: number;
  postCode: string;
  phone: string;
  hobbies: string[];
  url: string;
};

type Student = UserBase & {
  role: "student";
  studyMinutes: number;
  taskCode: number;
  studyLangs: string[];
  score: number;
};

type Mentor = UserBase & {
  role: "mentor";
  experienceDays: number;
  useLangs: string[];
  availableStartCode: number;
  availableEndCode: number;
};

export type UserType = Student | Mentor;
