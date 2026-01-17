export default function DashboardHome() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h2>
      <p className="text-gray-700">
        Here you can manage services, view bookings, update gallery, etc.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Manage Services</h3>
          <p className="mt-2 text-gray-600">Add, edit or delete services</p>
        </div>
      </div>
    </div>
  );
}
