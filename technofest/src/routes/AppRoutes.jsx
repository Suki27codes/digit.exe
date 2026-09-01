import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/public/Home";
import Explore from "../pages/public/Explore";
import ProjectDetailsPage from "../pages/public/ProjectDetailsPage";
import About from "../pages/public/About";
import FAQ from "../pages/public/FAQ";
import Contact from "../pages/public/Contact";
import Privacy from "../pages/public/Privacy";
import Terms from "../pages/public/Terms";

import Login from "../pages/public/auth/Login";
import Signup from "../pages/public/auth/Signup";
import ForgotPassword from "../pages/public/auth/ForgotPassword";

import DashboardLayout from "../components/layout/DashboardLayout";
import {
  adminNavigation,
  mentorNavigation,
  organizationNavigation,
  studentNavigation,
} from "../constants/navigation";

import StudentDashboard from "../pages/student/Dashboard";
import StudentProjects from "../pages/student/Projects";
import CreateProject from "../pages/student/CreateProject";
import EditProject from "../pages/student/EditProject";
import ProjectPreview from "../pages/student/ProjectPreview";
import StudentCollaboration from "../pages/student/Collaboration";
import StudentMentors from "../pages/student/Mentors";
import StudentNotifications from "../pages/student/Notifications";
import StudentProfile from "../pages/student/Profile";

import OrganizationDashboard from "../pages/organization/Dashboard";
import ExploreProjects from "../pages/organization/ExploreProjects";
import SavedProjects from "../pages/organization/SavedProjects";
import OrganizationProfile from "../pages/organization/Profile";
import Internships from "../pages/organization/Internships";
import Partnerships from "../pages/organization/Partnerships";

import MentorDashboard from "../pages/mentor/Dashboard";
import AssignedProjects from "../pages/mentor/AssignedProjects";
import ReviewProject from "../pages/mentor/ReviewProjects";
import MentorProfile from "../pages/mentor/Profile";

import AdminDashboard from "../pages/admin/Dashboard";
import Submissions from "../pages/admin/Submissions";
import Users from "../pages/admin/Users";
import Organizations from "../pages/admin/Organizations";
import Mentors from "../pages/admin/Mentors";
import Categories from "../pages/admin/Categories";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";

import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../context/AuthContext";

// Helper to build a role-restricted protected dashboard route
function Protected({ role, nav, user, children }) {
  return (
    <ProtectedRoute allowedRoles={[role]}>
      <DashboardLayout sidebarItems={nav} user={user}>
        {children}
      </DashboardLayout>
    </ProtectedRoute>
  );
}

export default function AppRoutes() {
  const { displayName, role } = useAuth();

  const studentUser  = { name: displayName, role: "Student" };
  const orgUser      = { name: displayName, role: "Organization" };
  const mentorUser   = { name: displayName, role: "Mentor" };
  const adminUser    = { name: displayName, role: "Admin" };

  return (
    <Routes>
      {/* =========================
          PUBLIC ROUTES
          ========================= */}

      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />

      {/* =========================
          AUTH ROUTES
          ========================= */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* =========================
          STUDENT ROUTES  (role: student)
          ========================= */}

      <Route path="/student" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <StudentDashboard />
        </Protected>
      } />

      <Route path="/student/projects" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <StudentProjects />
        </Protected>
      } />

      <Route path="/student/projects/new" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <CreateProject />
        </Protected>
      } />

      <Route path="/student/projects/:id" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <ProjectPreview />
        </Protected>
      } />

      <Route path="/student/projects/:id/edit" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <EditProject />
        </Protected>
      } />

      <Route path="/student/collaboration" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <StudentCollaboration />
        </Protected>
      } />

      <Route path="/student/mentors" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <StudentMentors />
        </Protected>
      } />

      <Route path="/student/notifications" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <StudentNotifications />
        </Protected>
      } />

      <Route path="/student/profile" element={
        <Protected role="student" nav={studentNavigation} user={studentUser}>
          <StudentProfile />
        </Protected>
      } />

      {/* =========================
          ORGANIZATION ROUTES  (role: organization)
          ========================= */}

      <Route path="/organization" element={
        <Protected role="organization" nav={organizationNavigation} user={orgUser}>
          <OrganizationDashboard />
        </Protected>
      } />

      <Route path="/organization/projects" element={
        <Protected role="organization" nav={organizationNavigation} user={orgUser}>
          <ExploreProjects />
        </Protected>
      } />

      <Route path="/organization/saved" element={
        <Protected role="organization" nav={organizationNavigation} user={orgUser}>
          <SavedProjects />
        </Protected>
      } />

      <Route path="/organization/internships" element={
        <Protected role="organization" nav={organizationNavigation} user={orgUser}>
          <Internships />
        </Protected>
      } />

      <Route path="/organization/partnerships" element={
        <Protected role="organization" nav={organizationNavigation} user={orgUser}>
          <Partnerships />
        </Protected>
      } />

      <Route path="/organization/profile" element={
        <Protected role="organization" nav={organizationNavigation} user={orgUser}>
          <OrganizationProfile />
        </Protected>
      } />

      {/* =========================
          MENTOR ROUTES  (role: mentor)
          ========================= */}

      <Route path="/mentor" element={
        <Protected role="mentor" nav={mentorNavigation} user={mentorUser}>
          <MentorDashboard />
        </Protected>
      } />

      <Route path="/mentor/projects" element={
        <Protected role="mentor" nav={mentorNavigation} user={mentorUser}>
          <AssignedProjects />
        </Protected>
      } />

      <Route path="/mentor/projects/:id" element={
        <Protected role="mentor" nav={mentorNavigation} user={mentorUser}>
          <ReviewProject />
        </Protected>
      } />

      <Route path="/mentor/profile" element={
        <Protected role="mentor" nav={mentorNavigation} user={mentorUser}>
          <MentorProfile />
        </Protected>
      } />

      {/* =========================
          ADMIN ROUTES  (role: admin)
          ========================= */}

      <Route path="/admin" element={
        <Protected role="admin" nav={adminNavigation} user={adminUser}>
          <AdminDashboard />
        </Protected>
      } />

      <Route path="/admin/submissions" element={
        <Protected role="admin" nav={adminNavigation} user={adminUser}>
          <Submissions />
        </Protected>
      } />

      <Route path="/admin/users" element={
        <Protected role="admin" nav={adminNavigation} user={adminUser}>
          <Users />
        </Protected>
      } />

      <Route path="/admin/organizations" element={
        <Protected role="admin" nav={adminNavigation} user={adminUser}>
          <Organizations />
        </Protected>
      } />

      <Route path="/admin/mentors" element={
        <Protected role="admin" nav={adminNavigation} user={adminUser}>
          <Mentors />
        </Protected>
      } />

      <Route path="/admin/categories" element={
        <Protected role="admin" nav={adminNavigation} user={adminUser}>
          <Categories />
        </Protected>
      } />

      <Route path="/admin/reports" element={
        <Protected role="admin" nav={adminNavigation} user={adminUser}>
          <Reports />
        </Protected>
      } />

      <Route path="/admin/settings" element={
        <Protected role="admin" nav={adminNavigation} user={adminUser}>
          <Settings />
        </Protected>
      } />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
