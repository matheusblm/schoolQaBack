export type AskType = {
  Student_answers: string[];
  Users: string[];
  answers: Answer[];
  id: string;
  title: string;
  topicsId: string;
};

type Answer = {
  asksId: string;
  id: string;
  is_correct: boolean;
  title: string;
};
