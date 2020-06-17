// This code is copied nearly verbatim from the Dropdown section of the React-Bootstrap website
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

class CustomDropdown extends React.Component {
  renderDropdownItems() {
    const breedList = this.props.breeds ? Object.keys(this.props.breeds) : [];
    return breedList.map((breed, index) => (
      <Dropdown.Item key={index} eventKey={index} as={Link} to={`/breeds/${breed}`}>{breed}</Dropdown.Item>
    ));
  } // renderDropdownItems

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Breed
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          {this.renderDropdownItems()}
        </Dropdown.Menu>
      </Dropdown>
    );
  } // end render
} // end CustomDropdown


export default CustomDropdown;
