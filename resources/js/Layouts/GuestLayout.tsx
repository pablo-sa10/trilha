import { About } from '@/components/Guest/About';
import { Cta } from '@/components/Guest/Cta';
import { Features } from '@/components/Guest/Features';
import { Footer } from '@/components/Guest/Footer';
import { HowItWorks } from '@/components/Guest/HowItWorks';
import { Pricing } from '@/components/Guest/Pricing';
import { ScrollToTop } from '@/components/Guest/ScrollToTop';
import { Services } from '@/components/Guest/Services';
import { Sponsors } from '@/components/Guest/Sponsors';
import { Team } from '@/components/Guest/Team';
import WelcomeGuest from '@/components/Guest/WelcomeGuest';

export default function Guest() {
    return (
        <>
            <WelcomeGuest/>
            {/* <Sponsors/> */}
            <About/>
            <HowItWorks/>
            <Features/>
            <Services/>
            <Cta/>
            <Team/>
            <Pricing/>
            <ScrollToTop/>
            <Footer/>
        </>
    );
}
