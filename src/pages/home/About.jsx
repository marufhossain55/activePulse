import aboutLogo from '../../assets/aboutLogo.png';

const About = () => {
  return (
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-center text-3xl font-bold">About Us</h2>
      <div className="mt-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10">
          <img
            src={aboutLogo}
            alt="Our Organization"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="mb-4">
            At Fitness Pro, we are dedicated to helping you achieve your fitness
            goals through personalized training, comprehensive nutrition plans,
            and a supportive community. Our team of experienced trainers and
            nutritionists work together to provide a holistic approach to
            fitness and well-being.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="mb-4">
            Our mission is to empower individuals to lead healthier lives by
            providing them with the tools, knowledge, and support they need to
            succeed. We believe that fitness is not just about physical health,
            but also about mental and emotional well-being.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
          <p>
            We offer a wide range of services, from personalized training
            programs to group classes and yoga sessions. Our state-of-the-art
            facility is equipped with the latest fitness equipment, and our
            community is always here to motivate and inspire you. Join us and
            take the first step towards a healthier, happier you!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
