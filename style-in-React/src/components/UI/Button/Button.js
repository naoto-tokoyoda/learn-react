
// I installed from styled-component, so I can use this.
// import styled from 'styled-components';

//using CSS as modules 
import styles from './Button.module.css';

/*

  This is not as global css.
  since we have unique class names for every styled component, the style set up here
  will never be able to affect the number of component in the app.
  Because these unique class names are really well unique per style component.

  you can check button for css using developer tool on website.
  class name is unique

*/
// const Button = styled.button`
//     width:100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #1d3557;
//     color: white;
//     background: #1d3557;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
//     cursor: pointer;
  
//   @media (min-width: 768px) {
//     width:auto;
//   }
//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #495057;
//     border-color: #495057;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
//   }
// `;
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
