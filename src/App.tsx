import './App.css'
import CounterPage from './pages/LearnHooks/SetState/CounterPage'
import RemovableTodosPage from './pages/LearnHooks/SetState/RemovableTodosPage'
import ApiCallPage from './pages/LearnHooks/UseEffect/ApiCall'
import ApiCallDependingOnState from './pages/LearnHooks/UseEffect/ApiCallDependingOnState'
import FilterSearchResults from './pages/LearnHooks/UseMemo/FilterSearchResults'
import CssModules from './pages/CssModules'

function App() {
  return <CssModules />
  return <FilterSearchResults />

  return <ApiCallDependingOnState />
  return <ApiCallPage />
  return <RemovableTodosPage />
  return <CounterPage />
}

export default App
