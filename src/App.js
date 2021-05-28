import './App.css';
import Card from './Card'
import arr from './Arr'
function App() {
  return (
    <div className="main"> 
      <nav> 
        <p>Title</p>
      </nav> 
      <div className="row">
        {arr.map((el, ind)=>{
          return <Card title={el.title} text={el.text } footer={el.footer} key={ind} />
        })}
      </div>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
