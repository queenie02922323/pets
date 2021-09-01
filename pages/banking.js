import React, {  useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
  Grid,
  Typography,
  Button,
  Card,
  List,
  ListItem,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import useStyles from '../utils/styles';


function Banking() {
    const router = useRouter();
  const classes = useStyles();
  const [inputValue,setInputValue]=useState('8010563205')
 
  return (
    <Layout title="Online Bank Transfer">
      <Typography component="h1" variant="h1">
          <AccountBalanceIcon />
          {'  '}
        Online Bank Transfer
      </Typography>

      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h1" variant="h1">
                  <h1>Safe and Secure Payment <SupervisorAccountIcon /> </h1>
                  <Typography component="h1" variant="h1" color="secondary">
                  Your payment will be secured under our Support Team and you will only billed once you get your beloved pets.
                  
                  </Typography>
                </Typography>
              </ListItem>
            </List>
            
          </Card>
          </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
      <Card className={classes.section}>
     <h1>Bank :</h1>
      <Typography component="h5" variant="h5" color="secondary">
                  CIMB Bank
                  </Typography>
                  </Card>
                  </Grid>
                  </Grid>

      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            
          </Card>
          </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
            <Card className={classes.section}>
            <h1>Bank Account Name:</h1>
            <Typography component="h5" variant="h5" color="secondary">
                  Emilyn Pet Store
                  </Typography>
            </Card>
      <Card className={classes.section}>
      <h1>Bank Account Number:</h1>
      <Typography component="h5" variant="h5" color="secondary">
                  8010563205
                  </Typography>
           
          
      <input className="copy" type="text"/>
      <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
            <CopyToClipboard text={inputValue}>
                <button>Copy</button>
            </CopyToClipboard>           
     </Card>
     <Grid>
     <Button  
                          fullWidth
                          type="button"
                          variant="contained"
                          color="secondary"
                          onClick={() => router.push('/success')}
                > 
                  Next
                </Button>
     </Grid>
     </Grid>
      </Grid>
      
             
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Banking), { ssr: false });
