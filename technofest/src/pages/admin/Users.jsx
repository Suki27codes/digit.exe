import { useState } from "react";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { users } from "../../data/users";

export default function Users() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [active, setActive] = useState(
    Object.fromEntries(users.map((u) => [u.id, true]))
  );

  const filtered = users.filter((user) => {
    const matchesSearch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRole =
      role === "All" || user.role === role;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#800000]">
        Users
      </h1>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border px-4 py-2"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="rounded-lg border px-4 py-2"
        >
          <option>All</option>
          <option>Student</option>
          <option>Organization</option>
          <option>Mentor</option>
          <option>Admin</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow">
        <table className="min-w-full">
          <thead className="bg-[#E8DCC4]">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((user) => (
              <tr
                key={user.id}
                className="border-b"
              >
                <td className="p-4 font-medium">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  <Badge>{user.role}</Badge>
                </td>

                <td className="p-4">
                  <Badge
                    type={
                      active[user.id]
                        ? "success"
                        : "danger"
                    }
                  >
                    {active[user.id]
                      ? "Active"
                      : "Inactive"}
                  </Badge>
                </td>

                <td className="p-4">
                  <Button
                    onClick={() =>
                      alert(`Viewing ${user.name}`)
                    }
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
