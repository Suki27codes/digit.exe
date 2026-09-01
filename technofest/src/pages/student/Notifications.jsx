import { useState } from "react";
import { Bell, Check, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import Button from "../../components/ui/Button";
import { notifications as initialNotifications } from "../../data/notifications";

export default function StudentNotifications() {
  const [items, setItems] = useState(initialNotifications);

  const markAllRead = () => {
    setItems(items.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[#800000]">Notifications</h1>
          <p className="text-sm text-gray-500 mt-1">Stay updated on your project reviews, messages, and deadlines.</p>
        </div>
        <Button variant="outline" onClick={markAllRead} className="text-xs flex items-center gap-1">
          <Check className="h-3.5 w-3.5" /> Mark All Read
        </Button>
      </div>

      <div className="space-y-3">
        {items.map((n) => (
          <div
            key={n.id}
            className={`p-5 rounded-2xl border transition-all flex items-start gap-4 ${
              n.read ? "bg-white border-gray-200" : "bg-maroon-50/40 border-maroon-200 shadow-sm"
            }`}
          >
            <div className={`mt-0.5 p-2 rounded-xl text-white ${n.read ? "bg-gray-400" : "bg-[#800000]"}`}>
              <Bell className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-sm">{n.title}</h3>
                <span className="text-xs text-gray-400">{n.date || "Just now"}</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">{n.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
