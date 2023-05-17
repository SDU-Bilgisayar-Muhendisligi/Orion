

function App() {

	const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 
	return (
		<Router>
			<div className="wrapper">
				<Sidebar/>
				<Content/>
			</div>
			<BottomBar/>
	       <div className="App">
              {
                     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
              }
        </div>
		
		</Router>
		
		
	);
	
}


export default App;