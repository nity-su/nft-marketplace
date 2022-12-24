import styled from "styled-components";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // buttonstyle이 따로 지정되지 않으면 가장 기본인 배열의 0번째가 설정된다.
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  // buttonsize가 지정되지 않으면 가장 기본 사이즈인 0번재 btn-medium이 설정된다.
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    // children안에 어떤 내용을 입력해도 버튼 이름이 된다.
    <Section>
      <Link to="/sign-up" className="btn-mobile">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    </Section>
  );
};

const Section = styled.section`
  :root {
    --primary: #fff;
  }

  .btn {
    padding: 8px 20px;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .btn--primary {
    background-color: var(--primary);
    color: #242424;
    border: 1px solid var(--primary);
  }

  .btn--outline {
    background-color: transparent;
    color: white;
    padding: 8px 20px;
    border: 1px solid var(--primary);
    transition: all 0.3s ease-out;
  }

  .btn-medium {
    padding: 8px 20px;
    font-size: 20px;
  }

  .btn--large {
    padding: 12px 26px;
    font-size: 20px;
  }

  .btn--medium:hover,
  .btn--large:hover {
    background: white;
    color: #242424;
    transition: all 0.3s ease-out;
  }
`;
