const FeatureCard = ({ title, description, icon }) => (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  const Features = () => {
    return (
      <div className="min-h-screen p-8">
        <h1 className="head_text mb-12">Our Features</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Article Summarization"
            description="Transform lengthy articles into concise, readable summaries"
            icon="📝"
          />
          <FeatureCard
            title="Bullet Points"
            description="Convert summaries into easy-to-read bullet points"
            icon="•"
          />
          <FeatureCard
            title="Multi-Language Support"
            description="Summarize articles in multiple languages"
            icon="🌐"
          />
          <FeatureCard
            title="Save & Share"
            description="Save summaries for later and share with others"
            icon="💾"
          />
          <FeatureCard
            title="Custom Length"
            description="Choose summary length based on your needs"
            icon="📏"
          />
          <FeatureCard
            title="Key Points Extraction"
            description="Automatically identify and highlight key points"
            icon="🎯"
          />
        </div>
      </div>
    );
  };
  
  export default Features;