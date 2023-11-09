import './App.css'
import FruitList from './components/FruitList/FruitList';
import PrimaryButton from './components/PrimaryButton'
import Users from './components/Users/User'

const fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
export const users = [
  { id: 1, name: 'John', age: 32 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 43 },
];


function App() {

  return (
    <div>
      <h1>Hello World</h1>
      {/* <PrimaryButton action='Add' />
      <PrimaryButton action='Delete' /> */}
      <Users />
      <FruitList fruits={fruits} />
    </div>
  )
}

export default App
