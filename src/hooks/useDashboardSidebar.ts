import { create } from "zustand";

interface SidebarStore {
  isCollapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

const useDashboardSidebar = create<SidebarStore>((set) => ({
  isCollapsed: false,
  onExpand: () =>
    set(() => ({
      isCollapsed: false,
    })),
  onCollapse: () =>
    set(() => ({
      isCollapsed: true,
    })),
}));

export default useDashboardSidebar;
