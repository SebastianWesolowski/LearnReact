import React from "react";
import AppContext from "../../context";
const ArticleViews = () => {
  return (
    <AppContext.Consumer>
      {context => <p>This is an Atruicle ViewTest, {context}</p>}
    </AppContext.Consumer>
  );
};

export default ArticleViews;
