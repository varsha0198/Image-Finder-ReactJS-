import { Box, makeStyles, TextField } from "@material-ui/core";



const useStyles = makeStyles( theme => ({
    component:{
        background:"#F6F6F6",
        ' & > *':{
            margin: theme.spacing(1)
        }    
    }
}))

const BreadCrumb = ({onTextChange, onCountChange}) => {
    const classes = useStyles();
    return (
        <Box m={1} className={classes.component}>
            <TextField
                label="Search images"
                onChange={(e)=> onTextChange(e.target.value)}
            />
            <TextField
                label="Number of images"
                onChange={(e)=> onCountChange(e.target.value)}
            />
        </Box>
    )

}
export default BreadCrumb;