export enum QUIZ_LEVEL {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export enum QUIZ_TYPE {
  DRAG_AND_DROP_QUIZ = 1,
  MULTI_CHOOSING_QUIZ = 2,
  TYPING_AND_SELECT_QUIZ = 3,
  TYPING_AND_SORT_QUIZ = 4,
  TYPING_QUIZ = 5,
  SINGLE_CHOOSING_QUIZ = 6,
  ESSAY = 7,
  // SINGLE_CHOICE = "single_choice",
  // MULTIPLE_CHOICE = "multiple_choice",
  // MATCH_COL = "match_col",
  // FILL_BLANK = "fill_blank",
  // PAIRING = "pairing",
  // CLASSIFY = "classify",
  // DRAG_DROP = "drag_drop",
  // ORDERING = "ordering",
  // ESSAY = "essay",
}
export const DefaultQuizPbj = {
  id: 0,
  type: 0,
  answers: [],
  question: "",
};
export type QuizData = {
  bookId: string;
  classroomId: null | string;
  createdAt: string;
  description: null | string;
  id: string;
  imgUrl: null | string;
  indexId: null | string;
  isPublic: boolean;
  name: string;
  subjectId: null | string;
  updatedAt: string;
  userId: null | string;
};
export const QUIZ_NAME: Record<string, string> = {
  single_choice: "Chọn một đáp án đúng",
  multiple_choice: "Chọn nhiều đáp án đúng",
  match_col: "Chọn cặp",
  fill_blank: "Điền vào chỗ trống",
  drag_drop: "Kéo thả",
  ordering: "Sắp xếp",
  essay: "Bài luận",
  classify: "Phân loại",
};

export const TYPE_QUIZ = {
  DRAG_AND_DROP_QUIZ: 1,
  MULTI_CHOOSING_QUIZ: 2,
  TYPING_AND_SELECT_QUIZ: 3,
  TYPING_AND_SORT_QUIZ: 4,
  TYPING_QUIZ: 5,
  SINGLE_CHOOSING_QUIZ: 6,
  ESSAY: 7,
};

export const LEVEL_QUIZ = {
  BASIC: 1,
};

export interface QuizDetailProps {
  quiz: QuizDetailData;
  index?: number;
}

export interface QuizExerciseData {
  id: number;
  title: string;
  name?: string;
  slug?: string;
  children?: string[];
  isDeleted?: boolean;
  orderNo?: number;
  pageNo?: number;
  parentId?: number;
}

export interface QuizDetail {
  id?: number;
  data?: QuizDetailData[];
  level?: number;
  title?: string;
}

export interface QuizDetailData {
  id: number;
  type: number;
  answers: DetailQuizAnswer[];
  question: string;
  answers_correct?: string;
  metadata?: string;
  hint?: string | TrustedHTML;
  prev_question_data?: MetaDataOptional[];
  previous_answers?: MetaDataOptional[];
  relative_id?: number[];
  relative_angles?: string[];
  status?: number;
  is_doing?: boolean;
  marked_as_done?: boolean;
  is_completed?: boolean;
  data_angle?: number;
  is_true?: boolean;
  point?: number;
  group_title?: string;
  group_id?: number;
  white_board?: string[];
  white_board_image?: string;
  attachments?: string[];
}

export interface DetailQuizAnswer {
  id: string;
  value: string;
  type?: string;
  metadata?: MetaDataOptional[];
  content?: string;
  is_select?: boolean;
  is_true?: boolean;
  is_true_answer?: boolean;
  answer?: string;
  sort?: number;
  true_sort?: number;
}

export interface MetaDataOptional {
  id?: number;
  content?: string;
  value?: string;
  is_select?: boolean;
  is_true?: boolean;
}

export interface AngleInfo {
  x?: number;
  y?: number;
  id?: number;
  text?: string;
  draggable?: boolean;
  angle?: number;
  type?: number;
  data?: number[];
  url: string;
}

export interface DataTypeApi {
  detail: string;
  instance: string;
  status: number;
  title: string;
  type: string;
  data?: object;
  message?: string;
  success?: boolean;
}

export interface InputsCheckQuizAIType extends UpdateInputsCheckQuizAIType {
  current_screen?: string; // giữ nguyên
  quiz_question?: string; // nội dung câu hỏi
  quiz_answer?: string; // nội dung câu trả lời
  quiz_correct_answer?: string; // câu trả lời đúng
  quiz_type?: string; // 0: bài tập trắc nghiệm, 1 bài tập tự luận
  quiz_relevant_content?: string | TrustedHTML; // nội dung liên quan
  quiz_user_answer_is_correct?: string;
  questionId?: number;
  quizId?: string;
  query?: string;
  response_mode?: string;
  imageId?: string;
  message?: string;
  user_name?: string;
  is_first_message?: string;
}

export interface UpdateInputsCheckQuizAIType {
  character?: string;
  subject?: string;
  current_lession?: string;
}

export interface CheckQuizAIType {
  inputs?: InputsCheckQuizAIType;
  query?: string;
  response_mode?: string;
  conversation_id?: string;
  user?: string;
  files?: string[];
  questionId?: number;
  quizId?: string;
}
