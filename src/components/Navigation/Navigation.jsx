import { WrapperContent, Header, Logo, Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Header>
      <WrapperContent>
        <Logo>
                  {/* <span style={{fontSize: "40px"}} role="img" aria-label="computer icon">
            git commit --amend -m "Some info"
          </span>{" "} */}
          Сar Rental Warehouse
        </Logo>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </WrapperContent>
    </Header>
  );
};
