import { Reveal } from '@/components/common/Reveal';

import { stats } from '../data/landingData';
import { AnimatedCounter } from './AnimatedCounter';

export default function StatsStrip() {
  return (
    <section
      id="stats"
      className="border-y border-white/10 bg-gradient-to-r from-[#163826] via-[#1d4a32] to-[#163826] py-14 text-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-6">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 120} className="text-center">
            <p className="font-display text-3xl font-bold text-green-300 md:text-5xl">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-2 text-sm text-green-100/75">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
