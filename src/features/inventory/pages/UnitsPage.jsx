import PageHeader from "../../../components/ui/PageHeader";
import UnitForm from "../components/UnitForm";
import { units } from "../data/units";

export default function UnitsPage() {
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
            className="bg-white border border-zinc-200 rounded-2xl p-4"
          >
            {unit.name}
          </div>
        ))}
      </div>
    </div>
  );
}