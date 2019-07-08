import React from 'react';
// import Button from './components/button/button';
import Dropdown from './components/dropdown/dropdown';
import Button from '@material-ui/core/Button'

const data = [
  {value: 'Shaahin', text: 'Shaahin Text'},
  {value: 'Abbas', text: 'Abbas Text'},
  {value: 'Farzin', text: 'Farzin Text'},
  {value: 'Aylin', text: 'Aylin Text'},
]

function App() {
  return (
    // <div className="App">
    //   <Button type={'button'} text={'Shaahin'} />
    //   {/* <Button styles={{background: 'red'}} type={'button'} text={'Shaahin'} /> */}

    //   <div style={{width: '250px', padding: '50px'}}>
    //     <Dropdown payload={data} searchable={true} defaultText={'Choose One'} />
    //   </div>
    // </div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

export default App;
