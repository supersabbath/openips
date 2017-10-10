import React from 'react'
import { grey50, lightBlueA700 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as routes from '../routes'
import { Link } from 'react-router-dom'


//UI 
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
// Components
import Login from './toolbar/Login'
// Pages
import AgendaPage from './agenda/AgendaPage'
import PacientsPage from './pacients/PacientsPage'


// import { List, ListItem } from 'material-ui/List';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    appBar: {
        height: 50,
    },
    toolbar: {
        backgroundColor: lightBlueA700,
    }
});


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            section: 'agendaPage'
        };

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange = (event, index, value) => {
        console.log(value)
        this.setState({ section:value });
    }

    renderSection(section){
       
        console.log("rendering " + section)
        switch (section) {
        case 'agendaPage':
        return ( <AgendaPage/> )
            break;
        case 'pacientsPage':
          return ( <PacientsPage/>)
        default:
        return (  <AgendaPage/> )
            break;
        }        
    }
    render() {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Toolbar>
                        <ToolbarGroup firstChild={true}>
                            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value={"agendaPage"} primaryText="Agenda" />
                                <MenuItem value={"pacientsPage"}  primaryText="Pacients" />
                                <MenuItem value="reportsPage" primaryText="Reports" />
                            </DropDownMenu>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarTitle text="Niehans Zellen" />
                            <FontIcon className="muidocs-icon-custom-sort" />
                            <ToolbarSeparator />
                            <RaisedButton label="Crear Paciente" primary={true} />                           
                        </ToolbarGroup>
                        <ToolbarGroup>
                        <Login/>
                        </ToolbarGroup>
                    </Toolbar>
                    {this.renderSection(this.state.section)}
                 </div>
            </MuiThemeProvider>

        )
    }
}

/**
 * 
 *                  
 */


export default App