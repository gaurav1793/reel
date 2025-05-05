import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Reels from './components/organisms/Reels';

function App() {
  
  const queryclinet =  new QueryClient();
  return (
    <QueryClientProvider client={queryclinet}>
        <div   className='w-[100vw] h-[100vh] flex justify-center items-center' >
        <Reels/>
        </div>
    </QueryClientProvider>
  )
}

export default App
