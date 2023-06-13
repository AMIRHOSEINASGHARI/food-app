import MenuPage from "@/components/templates/MenuPage";

const Menu = ({ menu }) => {
  return <MenuPage menu={menu} />;
};

export default Menu;

export async function getStaticProps() {
  const res = await fetch("https://food-api-ashen.vercel.app/data");
  const data = await res.json();
  return {
    props: {
      menu: data,
    },
    revalidate: 10,
  };
}
