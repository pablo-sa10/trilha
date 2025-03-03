import { About } from '@/Components/Guest/About';
import { Sponsors } from '@/Components/Guest/Sponsors';
import WelcomeGuest from '@/Components/Guest/WelcomeGuest';

export default function Guest() {
    return (
        <>
            <WelcomeGuest />
            <Sponsors/>
            <About/>
        </>
    );
}
