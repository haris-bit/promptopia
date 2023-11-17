import Feed from "@components/Feed";

const Home = () => {
  return (
    // flex-col: so elements fall below one another 
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        {/* Hide it on our large devices but break the content on our smaller devices */}
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
