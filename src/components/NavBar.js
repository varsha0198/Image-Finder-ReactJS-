import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CollectionsIcon from '@material-ui/icons/Collections';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    container: {
        background:'#445A6F'
    }
})



const NavBar = () => {
    const classes = useStyles();
    return(
        <AppBar className={ classes.container} position="static">
            <Toolbar>
               <CollectionsIcon />
               <Typography variant="h5" style={{marginLeft: 10}}>Image Finder</Typography>
            </Toolbar>
        </AppBar>       
    );

}

export default NavBar;