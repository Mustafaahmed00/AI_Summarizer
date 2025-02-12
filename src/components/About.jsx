const About = () => {
    return (
      <div className="min-h-screen p-8">
        <h1 className="head_text mb-12">About Sumz</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Sumz aims to make information more accessible by providing high-quality article summaries powered by advanced machine learning.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">How It Works</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Paste any article URL</li>
                <li>Our AI analyzes the content</li>
                <li>Get instant, accurate summaries</li>
                <li>Choose between different formats</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Technology</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advanced Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Content Analysis</li>
                <li>Multi-language Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;