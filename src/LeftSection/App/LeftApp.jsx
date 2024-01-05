import { generalContext } from "../../functions/GeneralContext";

function LeftApp() {
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <generalContext.Consumer>
        {({ renderContent }) => renderContent()}
      </generalContext.Consumer>
    </section>
  );
}

export { LeftApp };
