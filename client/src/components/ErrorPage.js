import React from "react";
import { Header, Icon } from "semantic-ui-react";

const Error = ({ code, message }) => {
  return (
    <div align="center" style={{ paddingTop: "5em" }}>
      <Header as="h2" icon>
        <Icon name="settings" />
        {`Error ${code}`}
        <Header.Subheader>{message}</Header.Subheader>
      </Header>
    </div>
  );
};

const ErrorPage = ({ code }) => {
  console.log(code);
  switch (code) {
    case "400": {
      return <Error code="400" message="Bad Request" />;
    }
    case "403": {
      return <Error code="403" message="Forbidden - Please Login" />;
    }
    case "404": {
      return <Error code="404" message="Page not found" />;
    }
    default: {
      return <Error code={code} message="Unknown Error, devs... plz fix" />;
    }
  }
};

export default ErrorPage;
