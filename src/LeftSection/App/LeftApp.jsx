import { generalContext } from "../../functions/GeneralContext";

function LeftApp() {
  return (
    <section>
      <generalContext.Consumer>
        {({ renderContent }) => renderContent()}
      </generalContext.Consumer>
    </section>
  );
}

export { LeftApp };
