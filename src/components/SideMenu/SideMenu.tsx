import { Link, useLocation } from "react-router-dom";
import { HamburgerButton } from "./components";
import useMenuStore from "../../store/useMenuStore";
import { IoHomeOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { RiFileListLine } from "react-icons/ri";
import { Aside, BgContent, ButtonContainer, LinkContainer } from "./style";

export const SideMenu = () => {
  const { pathname } = useLocation();
  const { isMenuOpen, toggleMenu } = useMenuStore();
  const PagesPath = {
    HomePage: { name: "Home", path: "/", icon: <IoHomeOutline size="40px" /> },
    ExercisesPage: {
      name: "Exercícios",
      path: "/exercicios",
      icon: <CgGym size="40px" />,
    },
    SeriesPage: {
      name: "Séries",
      path: "/series",
      icon: <RiFileListLine size="40px" />,
    },
  };
  const sortedPagesNames = Object.entries(PagesPath).sort(
    ([prevPageName], [nextPageName]) => {
      if (prevPageName === "HomePage") return -1;
      if (nextPageName === "HomePage") return 1;
      return prevPageName.localeCompare(nextPageName);
    }
  );

  return (
    <Aside $isopen={isMenuOpen.toString()}>
      <nav>
        <ButtonContainer>
          <BgContent
            $isopen={isMenuOpen.toString()}
            onClick={() => {
              toggleMenu();
            }}
          />
          <HamburgerButton
            isChecked={!isMenuOpen}
            onClick={() => {
              toggleMenu();
            }}
          />
        </ButtonContainer>
        {sortedPagesNames.map(([, { name, path, icon }], index) => {
          const isChecked = pathname === path;

          return (
            <LinkContainer
              $ischecked={isChecked.toString()}
              key={name + "-" + index}
            >
              <Link
                to={path}
                onClick={() => {
                  if (isMenuOpen) {
                    toggleMenu();
                  }
                }}
              >
                <span>{name}</span>
                {icon}
              </Link>
            </LinkContainer>
          );
        })}
      </nav>
    </Aside>
  );
};
