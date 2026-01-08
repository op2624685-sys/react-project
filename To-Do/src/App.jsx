import Card from "./components/card";

const App = () => {
  return (
    <div>
      <h2>My TO-DO List</h2>
      <div className="container">
        <Card time = {'08:00'} work = 'Boil milk'/>
        <Card time = {'09:00'} work = 'Drink milk'/>
        <Card time = {'10:00'} work = 'Walking outside'/>
        <Card time = {'11:00'} work = 'Doing homework'/>
        <Card time = {'12:00'} work = 'Reading book'/>
        </div>
      </div>
  )
}

export default App
