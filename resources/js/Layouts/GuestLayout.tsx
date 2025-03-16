import { About } from '@/Components/Guest/About';
import { Cta } from '@/Components/Guest/Cta';
import { Features } from '@/Components/Guest/Features';
import { Footer } from '@/Components/Guest/Footer';
import { HowItWorks } from '@/Components/Guest/HowItWorks';
import { Pricing } from '@/Components/Guest/Pricing';
import { ScrollToTop } from '@/Components/Guest/ScrollToTop';
import { Services } from '@/Components/Guest/Services';
import { Sponsors } from '@/Components/Guest/Sponsors';
import { Team } from '@/Components/Guest/Team';
import WelcomeGuest from '@/Components/Guest/WelcomeGuest';

export default function Guest() {
    return (
        <>
            <WelcomeGuest />
            {/* <Sponsors/> */}
            <About/>
            <HowItWorks/>
            <Features/>
            <Services/>
            <Cta/>
            <Team/>
            <Pricing/>
            <ScrollToTop />
            <Footer />
        </>
    );
}
