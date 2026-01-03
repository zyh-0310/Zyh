
export type Screen = 
  | 'welcome' 
  | 'login' 
  | 'register' 
  | 'home' 
  | 'mood' 
  | 'explore' 
  | 'me' 
  | 'assessment' 
  | 'behavioral' 
  | 'homeostasis' 
  | 'chat' 
  | 'visual-follow'
  | 'visual-follow-complete'
  | 'achievements'
  | 'devices'
  | 'calendar'
  | 'review'
  | 'insights';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  date?: string;
  icon: string;
  completed: boolean;
}
