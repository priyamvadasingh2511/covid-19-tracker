import React, { Component } from 'react';
import  Navbar from './components/Navbar';
import { Cards,Chart, CountryPicker } from './components';
import { fetchData } from './Api';
import styles from './App.module.css';


class App extends Component{
    state= { 
        data: {},
        country:'',
    }
    async componentDidMount() {
        const fetchedData= await fetchData();

        this.setState({ data:fetchedData });
        
    }
    handleCountryChange= async(country) => {
        
        const fetchedData= await fetchData(country);
        this.setState({data:  fetchedData, country: country});
    }
    render(){
        const {data,country}=this.state;
        return(
            <div className={styles.container}>
               
                <Navbar />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                </div>
            </div>
        )
    }
} 
export default App;