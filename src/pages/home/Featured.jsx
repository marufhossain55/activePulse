import FeatureCard from '../../components/FeatureCard';

const features = [
  {
    icon: 'https://cdn.elearningindustry.com/wp-content/uploads/2023/03/Which-Personalized-Learning-Activities-Does-Your-Training-Program-Need.jpg',
    title: 'Personalized Training',
    description: 'Get customized workout plans tailored to your needs.',
  },
  {
    icon: 'https://www.eatingwell.com/thmb/Ch2LFPGHsQ5kySirTzPLNd0LfdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14-days-clean-eating-meal-plan-1200-lede-601736337d914519bb5bf8eb83540da1.jpg',
    title: 'Nutrition Plans',
    description: 'Receive meal plans and nutrition guidance from experts.',
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrwTtWS46c7l8bYFNt8iI40yB9mmpXm5spcmX8q_XVeGpoBK6hR9pkuYFnnYG74AKOfo&usqp=CAU',
    title: 'Community Support',
    description: 'Join a supportive community of fitness enthusiasts.',
  },
  {
    icon: 'https://www.actitime.com/wp-content/uploads/2020/12/How-to-Track-a-Projects-Progress.png',
    title: 'Progress Tracking',
    description: 'Track your progress with detailed analytics and reports.',
  },
  {
    icon: 'https://blog.afaa.com/hubfs/how-to-design-group-fitness-program.jpg#keepProtocol',
    title: 'Group Classes',
    description: 'Participate in group fitness classes and stay motivated.',
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukUe2b_4EuOEN8B1SfFlhDm1F_NP_N8huFg&s',
    title: 'Yoga & Meditation',
    description:
      'Enhance your mental and physical well-being with yoga and meditation sessions.',
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WSZW-7ffkOHCVBe80EkyA2OvyBczY1eS9w&s',
    title: 'Cardio Workouts',
    description:
      'Boost your cardiovascular health with diverse cardio workout plans.',
  },
  {
    icon: 'https://img.freepik.com/premium-vector/customer-support-service-24-7-chat-icons-call-center-logo-hotline-concept-vector-illustration_476325-755.jpg',
    title: '24/7 Customer Support',
    description: 'Get round-the-clock support from our dedicated team.',
  },
];

const Featured = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-3xl font-bold mt-20">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Featured;
