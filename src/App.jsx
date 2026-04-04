import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AppRouter from './app/router';
import { SidebarProvider } from './context/SidebarContext';

const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </SidebarProvider>
    </Router>
  );
};

export default App;
