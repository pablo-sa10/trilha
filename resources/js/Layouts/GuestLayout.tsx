import { About } from '@/Components/Guest/About';
import { HowItWorks } from '@/Components/Guest/HowItWorks';
import { Sponsors } from '@/Components/Guest/Sponsors';
import WelcomeGuest from '@/Components/Guest/WelcomeGuest';

export default function Guest() {
    return (
        <>
            <WelcomeGuest />
            <Sponsors/>
            <About/>
            <HowItWorks/>
        </>
    );
}
