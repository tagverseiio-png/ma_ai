import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { PageShell, Section } from '@/components/site/PageShell';
import { Instagram } from 'lucide-react';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import teamVinay from '@/assets/1ebc6027-b395-4200-8c9d-b996c087f377.JPG.jpeg';
import teamSouvik from '@/assets/ChatGPT Image Sep 2, 2026, 04_39_27 PM.png';

export const Route = createFileRoute('/members')({
  head: () => ({
    meta: [
      { title: 'Members — The team behind ma.ai' },
      { name: 'description', content: 'Meet the major figures and the broader team behind ma.ai.' },
    ],
  }),
  component: MembersPage,
});

const majorFigures = [
  {
    name: 'Meena Chabbria',
    role: 'Founder & Chief Everything Officer',
    bio: 'The one who started it all — quite literally. Meena is sales, strategy and spotlight energy rolled into one person, and somehow makes multitasking look like a superpower. If Ma.ai has a face and a heartbeat, it\'s her.',
    ig: 'mee.a_chhabbria',
    image: team3,
    imagePosition: 'object-center'
  },
  {
    name: 'Prarthana Chabbria',
    role: 'Co-Founder & Head of Operations (Certified Diva Boss)',
    bio: 'Runs the entire operation on caffeine, precision and zero patience for anything less than excellent.',
    ig: 'Prarthana_chabbria',
    image: team2
  },
  {
    name: 'Vinay Sakhrani',
    role: 'Co-Founder & Creative Director',
    bio: 'The creative brain behind everything you see. Big believer in work-life balance — until a deadline says otherwise, and then it\'s an all-nighter, no questions asked. Chill by default, unstoppable on demand.',
    ig: 'Vinay_sakhrani',
    image: teamVinay
  },
  {
    name: 'Souvik Seal',
    role: 'Co-Founder & CEO',
    bio: 'The brain of the operation, in the most literal sense. Souvik lives life on Sop’s and runs on spreadsheets, and cold hard data — a walking encyclopedia who somehow makes numbers sound like a personality trait.',
    ig: 'souvik_seal',
    image: teamSouvik,
    imagePosition: 'object-center'
  }
];

function MembersPage() {
  return (
    <PageShell
      index="05"
      eyebrow="The Team"
      title="The minds"
      accent="behind ma.ai"
      intro="A team of strategists, creators and engineers building AI with purpose."
    >
      <Section>
        {/* Major Figures Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {majorFigures.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="bg-[#0B0B13] rounded-[24px] overflow-hidden group relative border border-white/5 shadow-2xl"
            >
              <div className="absolute bottom-0 left-0 w-full h-[50%] rounded-b-[24px] border-b-[2px] border-x-[2px] border-transparent bg-gradient-to-t from-[#7C3AED]/30 to-transparent p-[1px] z-30 pointer-events-none" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'destination-out' }}></div>
              <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

              <div className="h-[320px] sm:h-[380px] overflow-hidden relative bg-[#0B0B13]">
                <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imagePosition || 'object-top'} grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-[20%] group-hover:scale-105 transition-all duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B13] via-[#0B0B13]/70 to-transparent z-10"></div>
              </div>

              <div className="p-6 sm:p-8 relative z-20 -mt-24">
                <h3 className="text-[24px] font-bold text-white mb-2 tracking-[-0.02em]">{member.name}</h3>
                <p className="text-[#7C3AED] text-[12px] font-bold mb-8 tracking-[0.05em]">{member.role}</p>

                <div className="space-y-1 mb-8">
                  <p className="text-gray-400 text-[13px] font-light leading-[1.6] line-clamp-4">{member.bio}</p>
                </div>

                <a href={`https://instagram.com/${member.ig}`} target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] transition-all cursor-pointer backdrop-blur-sm z-30">
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 20 Empty Grid Members section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-[32px] md:text-[48px] font-bold text-[var(--site-fg)] mb-12 tracking-[-0.04em]">Members</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="aspect-square bg-black/5 border border-[var(--site-border)] rounded-2xl flex items-center justify-center relative overflow-hidden group hover:border-[#CCFF00] transition-colors"
              >
                <span className="text-black/20 font-bold text-xl group-hover:text-[#CCFF00]/50 transition-colors">#{i + 1}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </PageShell>
  );
}
