import { create } from "zustand";

interface ActionType {
  id: number;
  type: string;
  text: string;
}

interface TaskType {
  id: number;
  text: string;
  completed: boolean;
  actions: ActionType[];
}

interface StoryStoreState {
  tasks: TaskType[];
  currStory: any;
  typing: boolean;
  setCurrStory: (story: any) => void;
  setTyping: (typing: boolean) => void;
  setTaskIsCompleted: (taskId: number) => void;
  getTasks: () => any[];
  getTaskById: (id: number) => TaskType;
  getTaskIsCompleted: (taskId: number) => boolean | undefined;
}

export const useStoryStore = create<StoryStoreState>((set, get) => ({
  tasks: [
    {
      id: 1,
      text: "You can turn on the light",
      completed: false,
      actions: [
        {
          id: 1,
          type: "button",
          text: "Turn ON",
        },
      ],
    },
    {
      id: 4,
      // saya sudah membuatkan kue, sekarang kamu bisa coba kuenya
      text: "I have made the cake, now can you try the cake",
      completed: false,
      actions: [
        {
          id: 1,
          type: "button",
          text: "Take the cake",
        },
      ],
    },
  ],
  currStory: null,
  typing: false,
  setCurrStory: (_currStory) => set({ currStory: _currStory }),
  setTyping: (_typing) => set({ typing: _typing }),
  setTaskIsCompleted: (_taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === _taskId) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      }),
    })),
  getTasks: () => get().tasks,
  getTaskById: (_taskId) => get().tasks.find((task) => task.id === _taskId),
  getTaskIsCompleted: (_taskId) =>
    get().tasks.find((task) => task.id === _taskId)?.completed,
}));
