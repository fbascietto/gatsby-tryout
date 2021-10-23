// Step 1: Import React
import * as React from 'react';
import { Header } from '../components/Header';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header className='font-wohn text-green-700' />
    </main>
  )
}
// Step 3: Export your component
export default IndexPage