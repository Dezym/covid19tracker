import React,{useState} from 'react';
import Cards from './componets/Cards/Cards';
import Chart from './componets/Chart/Chart';
import CountryPicker from './componets/CountryPicker/CountryPicker';
import { fetchData } from './api';
import coronaImage from './Images/covid19.png'
//import { Cards,Chart,CountryPicker} from './componets';
import styles from './App.module.css';
class App extends React.Component{
    state={
        data:{},
        country : '',
    }
    async componentDidMount(){
        const fetchedData= await fetchData();
        

        this.setState({data:fetchedData})
    }

    handelCountryChange = async (country) => {
      const fetchedData= await fetchData(country);
      this.setState({data:fetchedData, country:country})
      //this.setState({  fetchedData, country: country });
      console.log(fetchedData);
    

    }

    render()
    {
        const {data, country}=this.state;
        return (
          
          <div className ={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID_19"/>
            <Cards data={data}/>
            <CountryPicker handelCountryChange ={this.handelCountryChange} />
            <Chart data={data} country={country}/>
    
           
           
          </div>
        )
      }
}
export default App;