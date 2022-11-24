import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

export const Head = ({ title = "", description = "" }) => {
  return (
    <Helmet
      title={title ? `${title} | Portfolio` : undefined}
      defaultTitle="Me"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
