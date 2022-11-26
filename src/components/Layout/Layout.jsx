import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Container, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Navigation />
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
