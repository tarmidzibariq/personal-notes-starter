import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesAppBody from './components/NotesAppBody';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesAppBody/>);