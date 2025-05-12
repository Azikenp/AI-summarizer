const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h1 className="font-extrabold text-[34px] orange_gradient cursor-pointer">
          {" "}
          Summa
        </h1>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Azikenp/AI-summarizer.git")
          }
          className="red_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Summa, using this open source article
        summarizer that transforms lengthy articles into clear and concise
        summaries making assimilating easier.
      </h2>
    </header>
  );
};

export default Hero;
