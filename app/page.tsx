import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextBtn from "@/components/NextBtn";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import getData from "@/lib/getData";

export default async function Home() {
  const { hero, skills, services, projects } = await getData();

  return (
    <main className="dark:bg-dark custombp:lg:snap-y custombp:lg:snap-mandatory custombp:lg:pb-28 relative z-10 h-screen w-full overflow-x-hidden scroll-smooth font-poppins transition-colors scrollbar-hide">
      <Header />

      <Hero hero={hero} />
      <Profile hero={hero} />
      <Skills skills={skills} desc={hero.skills} />
      <Services services={services} />
      <Projects projects={projects} />

      <Footer hero={hero} />
      <NextBtn />
    </main>
  );
}
