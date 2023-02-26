import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Explanation from "./Explanation";
import RateConverter from "./RateConverter";

const Container = styled.div`
  width: 400px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 0;
  margin-right: 0.5rem;
`;

const Icon = styled.span`
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const Dropdown = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 1rem;
`;

const DescriptionHeader = styled.h3`
  margin: 0;
  margin-right: 0.5rem;
`;

const DescriptionIcon = styled.span`
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
`;

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [paragraphOpen, setParagraphOpen] = useState(false);
  const [rateConverterOpen, setRateConverterOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function toggleParagraph() {
    setParagraphOpen(!paragraphOpen);
  }

  function toggleRateConverter() {
    setRateConverterOpen(!rateConverterOpen);
  }

  return (
    <Container>
      <Header onClick={toggleDropdown}>
        <Title>Margin Ratio vs LTV</Title>
        <Icon isOpen={dropdownOpen}>&gt;</Icon>
      </Header>
      {dropdownOpen && (
        <Dropdown>
          <Form />
        </Dropdown>
      )}
      <Header onClick={toggleRateConverter}>
        <Title>Rate Converter</Title>
        <Icon isOpen={rateConverterOpen}>&gt;</Icon>
      </Header>
      {rateConverterOpen && (
        <Dropdown>
          <RateConverter />
        </Dropdown>
      )}
    </Container>
  );
}

export default App;
