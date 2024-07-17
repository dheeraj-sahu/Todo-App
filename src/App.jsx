import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (id) => {
    const itemToEdit = todos.find((item) => item.id === id);
    setTodo(itemToEdit.todo);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    if (editId) {
      setTodos(todos.map(item => item.id === editId ? { ...item, todo } : item));
      setEditId(null);
    } else {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    }
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (e) => {
    const id = e.target.name;
    setTodos(todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10 px-4 lg:px-8">
        <div className="bg-gray-100 rounded-xl p-8 shadow-lg max-w-xl mx-auto">
          <h1 className='text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text shadow-md'>
            Keep Track, Stay on Track
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <input 
              onChange={handleChange} 
              value={todo} 
              type="text" 
              className='rounded-lg w-full lg:w-3/4 p-3 border border-gray-300' 
              placeholder="What’s your next task?" 
            />
            <button 
              onClick={handleAdd} 
              className='bg-green-500 text-white rounded-lg w-full lg:w-1/4 lg:ml-4 p-3 mt-4 lg:mt-0'
            >
              Add
            </button>
          </div>
          <div className="todos space-y-4">
            {todos.map(item => (
              <div key={item.id} className="todo bg-white rounded-lg shadow-md p-5 flex items-center justify-between max-w-lg mx-auto">
                <div className="flex items-center">
                  <input 
                    name={item.id} 
                    onChange={handleCheck} 
                    type="checkbox" 
                    checked={item.isCompleted} 
                    className='mr-4'
                  />
                  <div className={item.isCompleted ? "line-through text-gray-500 text-sm" : "text-sm"}>
                    {item.todo}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(item.id)} 
                    className='bg-gray-400 text-white rounded-lg px-3 py-1 text-xs'
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)} 
                    className='bg-red-600 text-white rounded-lg px-3 py-1 text-xs'
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
