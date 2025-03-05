import { About } from '@/Components/Guest/About';
import { Features } from '@/Components/Guest/Features';
import { HowItWorks } from '@/Components/Guest/HowItWorks';
import { Services } from '@/Components/Guest/Services';
import { Sponsors } from '@/Components/Guest/Sponsors';
import WelcomeGuest from '@/Components/Guest/WelcomeGuest';

export default function Guest() {
    return (
        <>
            <WelcomeGuest />
            <Sponsors/>
            <About/>
            <HowItWorks/>
            <Features />
            <Services />
        </>
    );
}
