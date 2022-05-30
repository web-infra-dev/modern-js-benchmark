import styled from '@modern-js/runtime/styled';
import { IconGithub } from '@arco-design/web-react/icon';

const Root = styled.div`
  display: flex;
  height: 60px;
  padding: 4px 24px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
`;

const Left = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  color: #111;
`;

const Image = styled.img`
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 48px;
  height: 36px;
  overflow: hidden;
  margin-right: 16px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 28px;
  color: #222;
`;

const GitHubIcon = () => (
  <Link
    target="_blank"
    href="https://github.com/modern-js-dev/modern-js-benchmark"
  >
    <IconGithub />
  </Link>
);

export const NavBar = () => {
  return (
    <Root className="nav-bar">
      <Left>
        <ImageWrapper>
          <Image src="https://lf-cdn-tos.bytescm.com/obj/static/webinfra/modern-js-website/assets/images/images/modernjs-logo.svg" />
        </ImageWrapper>
        Modern.js Benchmark
      </Left>
      <GitHubIcon />
    </Root>
  );
};
