import { create } from 'zustand'

export const useUIStore = create((set) => ({
  sidebarOpen: true,
  modals: {},
  activeTab: null,

  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  openModal: (modalName) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: true },
    })),

  closeModal: (modalName) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: false },
    })),

  closeAllModals: () => set({ modals: {} }),

  setActiveTab: (tabName) => set({ activeTab: tabName }),
}))
