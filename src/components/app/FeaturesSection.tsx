'use client';
import { features, Feature } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
  <li className="flex items-start mb-5 p-5 bg-white/5 rounded-xl transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:bg-[hsl(var(--primary-hsl),0.15)]">
    <div className="text-2xl mr-4 flex-shrink-0 w-12 h-12 flex items-center justify-center animated-gradient-bg rounded-full">
      <FontAwesomeIcon icon={feature.icon} />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </div>
  </li>
);

const FeaturesSection = () => {
  return (
    <div className="flex-1 min-w-[300px]">
      <h2 className="section-title">Por que escolher o Lovart?</h2>
      <ul className="list-none">
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturesSection;
