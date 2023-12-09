import Section from "../ui/Section";

function Home({ loggedin }) {
  return (
    <>
      <Section loggedin={loggedin} />
    </>
  );
}

export default Home;
