const FeatureCard = ({ title, description, icon }) => {
  return (
    <div
      className="rounded-lg shadow-md p-6 mb-4 my-10"
      style={{ background: "#f1e9fc" }}
    >
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 mr-2">{icon /* Replace with your icon */}</div>
        <h2 className="text-md font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600 text-xs">{description}</p>
    </div>
  );
};

const Questions = () => {
  return (
    <div className="p-8 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-black">
        Four key questions answered by Crest
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <FeatureCard
            title="What to order"
            description="Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle."
            icon={
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"
                loading="lazy"
                alt="What to order"
              />
            }
          />
          {/* Add other FeatureCard components here */}
        </div>
        <div className="flex-1">
          <FeatureCard
            title="When to order"
            description="Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing."
            icon={
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"
                loading="lazy"
                alt="When to order"
              />
            }
          />
          {/* Add other FeatureCard components here */}
        </div>
        <div className="flex-1">
          <FeatureCard
            title="How much to stock"
            description="Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes."
            icon={
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg"
                loading="lazy"
                alt="how much to stock"
              />
            }
          />
          {/* Add other FeatureCard components here */}
        </div>
        <div className="flex-1">
          <FeatureCard
            title="Where to place"
            description="Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities."
            icon={
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"
                loading="lazy"
                alt="where to place"
              />
            }
          />
          {/* Add other FeatureCard components here */}
        </div>
      </div>
    </div>
  );
};

export default Questions;
