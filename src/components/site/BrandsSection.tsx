import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Box, Film, Activity, Sparkles } from 'lucide-react';
import { SectionEyebrow, fadeInUp, staggerContainer } from '@/components/site/SiteChrome';
import brandArckz from '@/assets/brands/ARKCKZ.png';
import brandBaggrys from "@/assets/brands/Bagrry's.png";
import brandHadaza from '@/assets/brands/Hadaza.png';
import brandMilkyMist from '@/assets/brands/Milky_mist.png';
import brandRareRabbit from '@/assets/brands/rare_rabbit.png';
import brandAlluCinemas from '@/assets/brands/allu_cinemas.png';
import brandChallani from '@/assets/brands/challani.png';
import brandNextface from '@/assets/brands/nextface.png';
import brandSpinSalon from '@/assets/brands/spin_salon.png';
import brandSterling from '@/assets/brands/sterling.png';

type BrandCategory = 'Luxe & Lifestyle' | 'Culinary Collection' | 'Entertainment Hub' | 'Wellness Collective';

const brandsData: { name: string; category: BrandCategory; logo: string; whiteBgInDark?: boolean }[] = [
  { name: 'Sterling', category: 'Luxe & Lifestyle', logo: brandSterling },
  { name: 'Milky Mist', category: 'Culinary Collection', logo: brandMilkyMist, whiteBgInDark: true },
  { name: 'Nextface', category: 'Wellness Collective', logo: brandNextface },
  { name: 'Arckz', category: 'Luxe & Lifestyle', logo: brandArckz },
  { name: 'Allu Cinemas', category: 'Entertainment Hub', logo: brandAlluCinemas },
  { name: 'Challani Jewellery Mart', category: 'Luxe & Lifestyle', logo: brandChallani },
  { name: 'Spin Salon', category: 'Wellness Collective', logo: brandSpinSalon },
  { name: 'Rare Rabbit', category: 'Luxe & Lifestyle', logo: brandRareRabbit },
  { name: 'Baggrys', category: 'Culinary Collection', logo: brandBaggrys },
  { name: 'Hadaza Grooming Studio', category: 'Wellness Collective', logo: brandHadaza },
];

const getBrandIcon = (category: BrandCategory) => {
  switch (category) {
    case 'Luxe & Lifestyle': return <Heart size={16} />;
    case 'Culinary Collection': return <Box size={16} />;
    case 'Entertainment Hub': return <Film size={16} />;
    case 'Wellness Collective': return <Activity size={16} />;
    default: return <Sparkles size={16} />;
  }
};

interface Props {
  standalone?: boolean;
}

export const BrandsSection = ({ standalone }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<BrandCategory | 'All Partners' | null>('All Partners');
  const [hoveredCategory, setHoveredCategory] = useState<BrandCategory | 'All Partners' | null>(null);

  const activeCategory = hoveredCategory !== null ? hoveredCategory : (selectedCategory !== 'All Partners' ? selectedCategory : null);
  const isHovering = activeCategory !== null && activeCategory !== 'All Partners';

  const filterCategories = ['All Partners', 'Luxe & Lifestyle', 'Culinary Collection', 'Entertainment Hub', 'Wellness Collective'] as const;

  const row1Brands = brandsData.slice(0, 5);
  const row2Brands = brandsData.slice(5, 10);

  const renderBrand = (brand: typeof brandsData[0], index: number) => {
    const isHighlighted = isHovering && activeCategory === brand.category;
    const isDimmed = isHovering && activeCategory !== brand.category;
    const isChallani = brand.name === 'Challani Jewellery Mart';
    const isMilkyMist = brand.name === 'Milky Mist';
    const isRareRabbit = brand.name === 'Rare Rabbit';

    return (
      <div
        key={`${brand.name}-${index}`}
        className={`flex-shrink-0 h-[70px] sm:h-[130px] px-4 sm:px-12 rounded-[16px] flex items-center justify-center transition-all duration-500 ease-out cursor-default ${isHighlighted
          ? 'scale-110 z-10 -translate-y-2'
          : isDimmed
            ? 'opacity-20 scale-95 blur-[2px] border border-transparent'
            : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-100 border border-transparent'
          }`}
      >
        <div className={`flex items-center justify-center transition-all duration-500 ${isChallani ? 'overflow-hidden h-[45px] sm:h-[75px] w-[110px] sm:w-[190px]' : ''} ${brand.whiteBgInDark
          ? isMilkyMist
            ? 'dark:bg-white/90 dark:py-3 dark:px-6 rounded-none'
            : 'dark:bg-white/90 dark:p-3 dark:rounded-xl'
          : ''
          }`}>
          <img
            src={brand.logo}
            alt={brand.name}
            className={`transition-all duration-500 ${!brand.whiteBgInDark && 'dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]'} ${isDimmed ? 'grayscale' : ''} ${isChallani ? 'object-cover w-full h-full' : 'max-h-[55px] sm:max-h-[85px] max-w-[150px] sm:max-w-[250px] object-contain'
              } ${isRareRabbit ? 'scale-[1.3]' : ''} ${isMilkyMist ? 'scale-[1.7]' : ''}`}
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="brands"
      className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 ${standalone ? '' : 'border-t border-[var(--site-border)]'}`}
      style={{ backgroundColor: 'var(--site-bg)' }}
    >
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .marquee-left { animation: scrollLeft 40s linear infinite; }
        .marquee-right { animation: scrollRight 40s linear infinite; }
        .marquee-paused { animation-play-state: paused; }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12 md:mb-16 relative">
          <div className="relative z-10">
            <SectionEyebrow>02.5 / Partners</SectionEyebrow>
            <motion.h2 variants={fadeInUp} className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-[-0.04em] leading-[0.9] mb-4" style={{ color: 'var(--site-fg)' }}>
              <span className="text-[#8B5CF6]">Brands</span> we've<br />worked with
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[16px] md:text-[18px] font-normal leading-[1.5] max-w-[450px]" style={{ color: 'var(--site-muted)' }}>
              Trusted by ambitious brands across industries to deliver AI-powered creative that moves the needle.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-12 relative z-10">
            <span className="text-[11px] sm:text-[12px] font-bold text-[var(--site-muted)] tracking-widest uppercase mr-2">FILTER INDUSTRY:</span>
            {filterCategories.map(cat => {
              const isSelected = selectedCategory === cat;
              const isHovered = hoveredCategory === cat;
              const isActive = isHovered || (hoveredCategory === null && isSelected);
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  onMouseEnter={() => setHoveredCategory(cat as any)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all duration-300 ${isActive
                    ? 'bg-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105'
                    : 'bg-white/5 border border-[var(--site-border)] text-[var(--site-fg)] hover:border-[#8B5CF6]/50'
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="relative pt-8 pb-12">
          <div className="relative overflow-visible mb-6 sm:mb-8">
            <div className="overflow-visible w-full">
              <div className={`flex gap-6 w-max marquee-left ${isHovering ? 'marquee-paused' : ''}`}>
                {[...row1Brands, ...row1Brands, ...row1Brands, ...row1Brands].map((brand, i) => renderBrand(brand, i))}
              </div>
            </div>
          </div>
          <div className="relative overflow-visible">
            <div className="overflow-visible w-full">
              <div className={`flex gap-6 w-max marquee-right ${isHovering ? 'marquee-paused' : ''}`}>
                {[...row2Brands, ...row2Brands, ...row2Brands, ...row2Brands].map((brand, i) => renderBrand(brand, i))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
