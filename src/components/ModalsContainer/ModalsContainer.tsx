import * as modalsList from "./Modals";

export const ModalsContainer = () => {
  return (
    <section>
      {Object.values(modalsList).map((CurrentModal, index) => {
        return <CurrentModal key={index}></CurrentModal>;
      })}
    </section>
  );
};
