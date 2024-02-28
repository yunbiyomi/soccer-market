import React from 'react'
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <SLoader>
      <Bar className="bar1" />
      <Bar className="bar2" />
      <Bar className="bar3" />
      <Bar className="bar4" />
      <Bar className="bar5" />
      <Bar className="bar6" />
      <Bar className="bar7" />
      <Bar className="bar8" />
      <Bar className="bar9" />
      <Bar className="bar10" />
      <Bar className="bar11" />
      <Bar className="bar12" />
    </SLoader>
  )
}

export default Loader

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.25;
  }
`;

const SLoader = styled.div`
  margin: 100px 0;
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 10px;
`;

const Bar = styled.div`
  width: 8%;
  height: 24%;
  background: rgb(128, 128, 128);
  position: absolute;
  left: 50%;
  top: 30%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s linear infinite;

  &.bar1 { transform: rotate(0deg) translate(0, -130%); animation-delay: 0s; }
  &.bar2 { transform: rotate(30deg) translate(0, -130%); animation-delay: -1.1s; }
  &.bar3 { transform: rotate(60deg) translate(0, -130%); animation-delay: -1s; }
  &.bar4 { transform: rotate(90deg) translate(0, -130%); animation-delay: -0.9s; }
  &.bar5 { transform: rotate(120deg) translate(0, -130%); animation-delay: -0.8s; }
  &.bar6 { transform: rotate(150deg) translate(0, -130%); animation-delay: -0.7s; }
  &.bar7 { transform: rotate(180deg) translate(0, -130%); animation-delay: -0.6s; }
  &.bar8 { transform: rotate(210deg) translate(0, -130%); animation-delay: -0.5s; }
  &.bar9 { transform: rotate(240deg) translate(0, -130%); animation-delay: -0.4s; }
  &.bar10 { transform: rotate(270deg) translate(0, -130%); animation-delay: -0.3s; }
  &.bar11 { transform: rotate(300deg) translate(0, -130%); animation-delay: -0.2s; }
  &.bar12 { transform: rotate(330deg) translate(0, -130%); animation-delay: -0.1s; }
`;