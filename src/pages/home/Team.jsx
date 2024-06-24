const trainersData = [
  {
    name: 'John Doe',
    biography:
      'John is a certified personal trainer with over 10 years of experience.',
    expertise: ['Strength Training', 'Cardio', 'Nutrition'],
    photo:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Jane Smith',
    biography:
      'Jane specializes in yoga and pilates, helping clients improve flexibility and core strength.',
    expertise: ['Yoga', 'Pilates', 'Mindfulness'],
    photo:
      'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg',
  },
  {
    name: 'Mike Johnson',
    biography:
      'Mike is an expert in high-intensity interval training and functional fitness.',
    expertise: ['HIIT', 'Functional Fitness', 'Endurance'],
    photo:
      'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
  },
  {
    name: 'Emily Davis',
    biography:
      'Emily focuses on holistic health and wellness, combining fitness with mental well-being.',
    expertise: ['Holistic Health', 'Mental Well-being', 'Nutrition'],
    photo:
      'https://st4.depositphotos.com/1049680/21781/i/450/depositphotos_217810676-stock-photo-young-blonde-woman-isolated-background.jpg',
  },
];

const Team = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mt-20">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {trainersData.map((trainer, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <img
              src={trainer.photo}
              alt={trainer.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">{trainer.name}</h2>
            <p className="text-gray-600 mt-2">{trainer.biography}</p>
            <h3 className="text-md font-semibold mt-4">Expertise:</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {trainer.expertise.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Team;
