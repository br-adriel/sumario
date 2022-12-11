import styled from 'styled-components';

const Loading = () => {
  return (
    <RippleWrapper>
      <RippleLoader>
        <div></div>
        <div></div>
      </RippleLoader>
    </RippleWrapper>
  );
};

const RippleWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
`;

const RippleLoader = styled.div`
  @keyframes ripple-loader {
    0% {
      top: 96px;
      left: 96px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 18px;
      left: 18px;
      width: 156px;
      height: 156px;
      opacity: 0;
    }
  }

  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ripple-loader 0.7s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    box-sizing: content-box;
    border-color: #0d6efd !important;
  }

  .ripple-loader div:nth-child(1) {
    animation-delay: 0s;
  }
  .ripple-loader div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export default Loading;
