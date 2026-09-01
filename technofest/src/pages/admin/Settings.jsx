import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function Settings() {
  const [settings, setSettings] = useState({
    eventName: "Innoject 2026",
    eventDate: "20 November 2026",
    eventLocation: "PNG University of Technology",
    emailNotifications: true,
    projectNotifications: true,
    maintenanceMode: false,
  });

  const update = (field, value) => {
    setSettings({
      ...settings,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#800000]">
        Settings
      </h1>

      <Card>
        <h2 className="text-xl font-semibold">
          Innoject Settings
        </h2>

        <div className="mt-5 space-y-4">
          <input
            value={settings.eventName}
            onChange={(e) =>
              update("eventName", e.target.value)
            }
            className="w-full rounded-lg border px-4 py-2"
            placeholder="Event Name"
          />

          <input
            value={settings.eventDate}
            onChange={(e) =>
              update("eventDate", e.target.value)
            }
            className="w-full rounded-lg border px-4 py-2"
            placeholder="Event Date"
          />

          <input
            value={settings.eventLocation}
            onChange={(e) =>
              update("eventLocation", e.target.value)
            }
            className="w-full rounded-lg border px-4 py-2"
            placeholder="Event Location"
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">
          Notification Preferences
        </h2>

        <div className="mt-5 space-y-4">
          <label className="flex gap-3">
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) =>
                update(
                  "emailNotifications",
                  e.target.checked
                )
              }
            />

            Email Notifications
          </label>

          <label className="flex gap-3">
            <input
              type="checkbox"
              checked={settings.projectNotifications}
              onChange={(e) =>
                update(
                  "projectNotifications",
                  e.target.checked
                )
              }
            />

            Project Notifications
          </label>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">
          Platform Settings
        </h2>

        <label className="mt-5 flex gap-3">
          <input
            type="checkbox"
            checked={settings.maintenanceMode}
            onChange={(e) =>
              update(
                "maintenanceMode",
                e.target.checked
              )
            }
          />

          Maintenance Mode
        </label>

        <Button
          className="mt-5"
          onClick={() =>
            alert("Settings saved successfully")
          }
        >
          Save Settings
        </Button>
      </Card>
    </div>
  );
}
