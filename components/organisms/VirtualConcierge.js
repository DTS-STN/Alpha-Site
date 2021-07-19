import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the virtual concierge page
 */

export const VirtualConcierge = (props) => {
  return (
    <div
      className="flex flex-col w-full "
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
    >
      <p className="pb-2 ">{props.description}</p>
      <p className="pb-2 ">{props.description1}</p>
      <p className="pb-2 ">{props.description2}</p>

      <div>
        {/* className={props.className} TODO the aspect ratio of the image for mobile needs to be resolved. this is just temp for now */}
        <img
          className={`mb-5 object-fill max-h-auto p-1 lg:w-1/3 lg:h-auto ${
            props.className ? " " + props.className : " mb-4"
          }`}
          src={props.vcImage}
          alt={props.vcImageAltText}
        />
      </div>
    </div>
  );
};

VirtualConcierge.propTypes = {
  /**
   * VC image
   */
  vcImage: PropTypes.string,

  /**
   * Image alt text
   */
  vcImageAltText: PropTypes.string,

  /**
   * Description of the project image.
   */
  description: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  /**
   * css overrides for image
   */
  className: PropTypes.string,
  /**
   * the test id for unit tests
   */
  dataTestId: PropTypes.string,

  /**
   * the test id for cypress test
   */
  dataCy: PropTypes.string,
};

export default VirtualConcierge;