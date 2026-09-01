import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Tags,
  User,
  Users,
} from "lucide-react";

export const studentNavigation = [
  {
    label: "Dashboard",
    to: "/student",
    icon: LayoutDashboard,
  },
  {
    label: "My Projects",
    to: "/student/projects",
    icon: FolderKanban,
  },
  {
    label: "Collaboration",
    to: "/student/collaboration",
    icon: Handshake,
  },
  {
    label: "Mentors",
    to: "/student/mentors",
    icon: GraduationCap,
  },
  {
    label: "Notifications",
    to: "/student/notifications",
    icon: Bell,
  },
  {
    label: "Profile",
    to: "/student/profile",
    icon: User,
  },
];

export const organizationNavigation = [
  {
    label: "Dashboard",
    to: "/organization",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    to: "/organization/projects",
    icon: FolderKanban,
  },
  {
    label: "Saved Projects",
    to: "/organization/saved",
    icon: FolderKanban,
  },
  {
    label: "Internships",
    to: "/organization/internships",
    icon: BriefcaseBusiness,
  },
  {
    label: "Partnerships",
    to: "/organization/partnerships",
    icon: Handshake,
  },
  {
    label: "Profile",
    to: "/organization/profile",
    icon: User,
  },
];

export const mentorNavigation = [
  {
    label: "Dashboard",
    to: "/mentor",
    icon: LayoutDashboard,
  },
  {
    label: "Assigned Projects",
    to: "/mentor/projects",
    icon: FolderKanban,
  },
  {
    label: "Profile",
    to: "/mentor/profile",
    icon: User,
  },
];

export const adminNavigation = [
  {
    label: "Overview",
    to: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Submissions",
    to: "/admin/submissions",
    icon: FolderKanban,
  },
  {
    label: "Users",
    to: "/admin/users",
    icon: Users,
  },
  {
    label: "Organizations",
    to: "/admin/organizations",
    icon: ShieldCheck,
  },
  {
    label: "Mentors",
    to: "/admin/mentors",
    icon: GraduationCap,
  },
  {
    label: "Categories",
    to: "/admin/categories",
    icon: Tags,
  },
  {
    label: "Reports",
    to: "/admin/reports",
    icon: BarChart3,
  },
  {
    label: "Settings",
    to: "/admin/settings",
    icon: Settings,
  },
  {
    label: "Notifications",
    to: "/admin/notifications",
    icon: Bell,
  },
];