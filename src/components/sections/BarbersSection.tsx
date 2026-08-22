import BarberList from "@/features/barbers/BarberList";
import { barbers } from "@/features/barbers/data/barbers";

export function BarbersSection() {
    return (
        <section>
            <BarberList barbers={barbers} />
        </section>
    );
}