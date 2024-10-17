import React from 'react';
import { Store, Utensils, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <Icon className="w-12 h-12 text-green-400 mb-4" />
    <h3 className="lg:text-2xl text-xl font-semibold mb-2">{title}</h3>
    <p className="lg:text-lg md:text-base text-sm text-gray-700">{description}</p>
  </div>
);

const ImageGallery = () => (
  <div className="grid grid-cols-4 gap-4 h-64">
    <img src="https://www.meetcharlescounty.com/clientuploads/page%20photos/slbe.jpg?_t=1653317040" alt="Local community 1" className="w-full h-full object-center object-cover rounded-lg col-span-2 row-span-2" />
    <img src="https://www.meetcharlescounty.com/clientuploads/page%20photos/slbe.jpg?_t=1653317040" alt="Local community 2" className="w-full h-full object-center object-cover rounded-lg" />
    <img src="https://www.meetcharlescounty.com/clientuploads/page%20photos/slbe.jpg?_t=1653317040" alt="Local community 3" className="w-full h-full object-center object-cover rounded-lg" />
    <img src="https://www.meetcharlescounty.com/clientuploads/page%20photos/slbe.jpg?_t=1653317040" alt="Local community 4" className="w-full h-full object-center object-cover rounded-lg col-span-2" />
  </div>
);

const LocalPulseFeatures = () => {
  const features = [
    {
      icon: Store,
      title: "Discover Local Shops",
      description: "Explore a curated marketplace of unique local businesses. From artisanal crafts to essential services, support your community's economy with every purchase."
    },
    {
      icon: Utensils,
      title: "Savor Local Flavors",
      description: "Uncover hidden culinary gems in your neighborhood. Browse menus, read reviews, and order directly from local restaurants and food artisans."
    },
    {
      icon: Users,
      title: "Connect & Engage",
      description: "Strengthen community bonds through local events, forums, and special offers. Participate in neighborhood initiatives and build lasting connections."
    }
  ];

  return (
    <div className="text-black p-8 w-[80vw] my-5 flex flex-col justify-evenly bg-white">
      <h2 className="sm:text-5xl text-3xl font-bold text-center text-green-400 mb-8">Empowering Community Commerce</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="w-full mb-10">
        <ImageGallery />
      </div>
    </div>
  );
};

export default LocalPulseFeatures;