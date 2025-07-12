import { create } from 'zustand'

export const useStoryStore = create((set, get) => ({
    tasks: [
        {
            id: 1,
            text: "Should I turn on the light?",
            actions: [
                {
                    id: 1,
                    completed: false,
                    type: "button",
                    text: 'Turn ON',
                }
            ]
        }
    ],
    currStory: null,
    typing: false,
    setCurrStory: (_currStory) => set({ currStory: _currStory }),
    setTyping: (_typing) => set({ typing: _typing }),
    setTaskIsCompleted: (_id) => set((state) => ({ tasks: state.tasks.map((task) => task.id === _id ? { ...task, completed: !task.completed } : task) })),
    getTasks: () => get().tasks,
    getTaskById: (id) => get().tasks.find((task) => task.id === id),
    getTaskIsCompleted: (id) => get().tasks.find((task) => task.id === id).completed
}))
