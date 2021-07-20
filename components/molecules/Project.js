import React from "react";
import PropTypes from "prop-types";

/**
 * Displays an project card on the page
 */

export const Project = (props) => {
  const tagColours = {
    active: "custom-blue-project-blue",
    coming_soon: "gray-project",
    alpha: "custom-blue-project-blue",
  };
  return (
    <a
      className={`shadow-project-shadow p-4 border-b-4 h-400px ${
        "border-" + (tagColours[props.tag] || "gray-project")
      }`}
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
      tabIndex="0"
      href={props.href}
    >
      <h2 className="mb-2 text-p">{props.title}</h2>
      <span
        className={`inline-block py-2 px-2 uppercase font-body text-xxs text-white font-bold rounded ${
          "bg-" + (tagColours[props.tag] || "gray-project")
        }`}
      >
        {props.tagLabel}
      </span>
      <p className="mt-2 text-sm">{props.description}</p>
    </a>
  );
};

Project.propTypes = {
  /**
   * Title of the project card.
   */
  title: PropTypes.string.isRequired,

  /**
   * tag of the project card
   */
  tag: PropTypes.string.isRequired,

  /**
   * Link of the card
   */
  href: PropTypes.string,

  /**
   * the label of the tag card
   */
  tagLabel: PropTypes.string.isRequired,

  /**
   * Description of the project card.
   */
  description: PropTypes.string.isRequired,

  /**
   * the test id for unit tests
   */
  dataTestId: PropTypes.string,

  /**
   * the test id for cypress test
   */
  dataCy: PropTypes.string,
};

export default Project;