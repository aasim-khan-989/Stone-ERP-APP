import PageHeader from "../../../components/ui/PageHeader";

import UnitForm from "../components/UnitForm";

import useUnits from "../hooks/useUnits";

export default function UnitsPage() {
  const {
    units,
    loading,
  } = useUnits();

  if (loading) {
    return (
      <div className="p-4">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Units"
        subtitle="Manage inventory units"
      />

      <UnitForm />

      <div className="space-y-3">
        {units.map((unit) => (
          <div
            key={unit.id}
            className="
              bg-white
              border
              border-zinc-200
              rounded-2xl
              p-4
            "
          >
            <div className="font-medium">
              {unit.name}
            </div>

            <div className="text-sm text-zinc-500">
              {unit.ucode}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}