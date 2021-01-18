import React,{useState} from 'react';
import {Box,Grid,Paper,Typography,Divider,Button,IconButton} from '@material-ui/core';
import {TableBody,TableRow,TableCell,Table,TableHead,TableContainer} from '@material-ui/core';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { TablePagination,Toolbar,InputAdornment} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import {Info} from './info';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        marginLeft:'280px',
        marginTop:'60px',
        backgroundColor:'#fac411',
        padding:'20px',
        marginBottom:'-3rem'
    },
    container:{
        borderRadius:'30px',
        padding:'15px',
        minHeight:'95%'
    },
    addIcon:{
        color:'#fac411',
        fontSize:30
    },
    contestBox:{
        margin:'10px'
    },
    button:{
        textTransform: 'none'
    },
    contestDetails:{
        backgroundColor:'#fac411',
        display:"flex",
        justifyContent:"space-between",
        borderRadius:'30px',
        padding:'15px',
        margin:'20px 15px'
    },
    contestBox2:{
        border:'2px solid #fac411',
        borderRadius:'30px',
        height:'90px',
        margin:'20px 15px'
    },
    contestBox3:{
        backgroundColor:'#fac411',
        borderRadius:'30px',
        height:'90px',
        margin:'20px 15px 40px'
    },
    divider:{
        marginBottom:'15px'
    },
    container2:{
        borderRadius:'30px',
        padding:'15px',
        minHeight:'95%'
    },contestDetailOptions:{
        fontWeight:'bolder',
        color:'#fff'
    },
    tableRow:{
        display: 'block',
        borderRadius:'8px!important'
    }
  });

const ContestPage = () => {
    const classes = useStyles();
    const [records,setRecords]=useState(Info); 
    const [filterFn,setFilterFn]=useState({fn:items=>{return items;}});
    const pages=[10];
    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(pages[page]);
   
    const handleChangePage=(e,newPage)=>{
        setPage(newPage);
    }
    const handleChangeRowsPerPage=event=>{
        setRowsPerPage(parseInt(event.target.value,10));
        setPage(0);
    }
    const recordsAfterPagingAndSorting=()=>{
        return filterFn.fn(records).slice(page*rowsPerPage,(page+1)*rowsPerPage);
    }

    return (
         <Box component="div" className={classes.root}  display="flex" alignItems="center" justifyContent="conter">
             <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={10} lg={5} >
                   <Paper elevation={3} className={classes.container}>
                       <Box component="div" className={classes.contestBox}  display="flex" alignItems="center" justifyContent="space-between" >
                            <Typography variat="h4" gutterBottom style={{fontFamily:'galano',fontWeight:"bolder"}}>CONTESTS</Typography>
                            < AddBoxRoundedIcon className={classes.addIcon}/>
                       </Box>
                       <Divider className={classes.divider}/>
                       <Box  display="flex" flexDirection="row" alignItems="center" > 
                            <Button  className={classes.button} size="small"  style={{color:'#6b6c6e',fontFamily:'galano',fontWeight:'bold'}} >All</Button>
                            <Button  className={classes.button}  size="small" style={{fontWeight:'bolder',fontFamily:'galano'}} >Active</Button>
                            <Button  className={classes.button} size="small"  style={{color:'#6b6c6e',fontFamily:'galano',fontWeight:'bold'}}>Completed</Button>
                       </Box>
                       <Paper elevation={4} className={classes.contestDetails} >
                          <Box>
                             <Typography variant="subtitle2" className={classes.contestDetailOptions} style={{fontFamily:'galano'}}>Contest Name</Typography>
                             <Typography variant="subtitle2" className={classes.contestDetailOptions} style={{fontFamily:'galano'}}>Contest Level</Typography>
                             <Typography variant="subtitle2" align="left" className={classes.contestDetailOptions} style={{fontFamily:'galano'}}>End Date</Typography>
                          </Box>
                          <Box display="flex" flexDirection="column" justifyContent="space-between">
                             <Typography variant="subtitle2" className={classes.contestDetailOptions} style={{fontFamily:'galano'}}>Start date</Typography>
                             <Box  display="flex" alignItems="center" >
                                <PeopleIcon />
                                <Box component="span" className={classes.contestDetailOptions} style={{fontFamily:'galano'}}>1000</Box>
                             </Box>
                          </Box>
                         </Paper>
                         <Paper  elevation={4} className={classes.contestBox2}/>
                         <Paper  elevation={4} className={classes.contestBox3}/>
                   </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={7}>
                   <Paper elevation={3} className={classes.container2}>
                       <Typography variant="h6"  gutterBottom align="left" style={{margin:'10px',fontFamily:'galano',fontWeight:"bolder",marginTop:'1.5rem'}}>Contest Monitoring</Typography>
                       <Divider className={classes.divider}/>
                       <Typography variant="body2"  align="left"  style={{color:'#6b6c6e',fontFamily:'galano',fontWeight:'bold'}} gutterBottom>Contest Name : </Typography>
                       <Box component="div" display="flex" justifyContent="center" flexDirection="column" alignItems="center"> 
                       <TableContainer component={Paper} style={{width:'90%'}} >
                          <Table size="small" >
                             <TableHead>
                                <TableRow  className={classes.tableRow}  style={{background : "#fac411"}}>
                                  <TableCell style={{width: '170px', whiteSpace: 'nowrap'}} align="left">Name</TableCell>
                                  <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}  align="right">Level</TableCell>
                                  <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}  align="left">Status</TableCell>
                                  <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}  align="left">Amount</TableCell>
                                  <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}  align="left">Join Date</TableCell>
                                </TableRow>
                             </TableHead>
                             <TableBody>
                                {
                                  recordsAfterPagingAndSorting().map((row,index)=> (
                               <TableRow  key={row.no}  className={classes.tableRow} style={ index % 2? { background : "#fff" }:{ background :"#fac411" }} > 
                                 <TableCell  style={{width: '170px', whiteSpace: 'nowrap'}}>{row.name}</TableCell>
                                 <TableCell style={{width: '1px', whiteSpace: 'nowrap'}} align="right" >{row.level}</TableCell>
                                 <TableCell  style={{width: '1px', whiteSpace: 'nowrap'}} >{row.status}</TableCell>
                                 <TableCell  style={{width: '1px', whiteSpace: 'nowrap'}} >{row.amount}</TableCell>
                                 <TableCell  style={{width: '1px', whiteSpace: 'nowrap'}} >{row.joinDate}</TableCell> 
                               </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                     </TableContainer>
                     <TablePagination count={records.length} component="div" page={page} 
                        rowsPerPage={rowsPerPage} rowsPerPageOptions={pages} 
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                          onChangePage={handleChangePage}/>
                    </Box>
                   </Paper>
                </Grid>
             </Grid>
        </Box>
    )
}
export default ContestPage;