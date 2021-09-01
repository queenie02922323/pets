import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';
import useStyles from '../utils/styles';
import {
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';

export default function Transport() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles();
  const router = useRouter();
  const [transportMethod, setTransportMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;
  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping');
    } else {
      setTransportMethod(Cookies.get('transportMethod') || '');
    }
  }, []);
  const submitHandler = (e) => {
    closeSnackbar();
    e.preventDefault();
    if (!transportMethod) {
      enqueueSnackbar('Delivery method is required', { variant: 'error' });
    } else {
      dispatch({ type: 'SAVE_TRANSPORT_METHOD', payload: transportMethod });
      Cookies.set('transportMethod', transportMethod);
      router.push('/payment');
    }
  };
  return (
    <Layout title="Delivery Method">
      <CheckoutWizard activeStep={2}></CheckoutWizard>
      <form className={classes.form} onSubmit={submitHandler}>
        <Typography component="h1" variant="h1">
          Delivery Method
        </Typography>
        <List>
          <ListItem>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Delivery Method"
                name="transportMethod"
                value={transportMethod}
                onChange={(e) => setTransportMethod(e.target.value)}
              >
                <FormControlLabel
                  label="Pet Taxi"
                  value="Pet Taxi"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Meet Up With Seller"
                  value="Meet Up With Seller"
                  control={<Radio />}
                ></FormControlLabel>
                
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Continue
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              type="button"
              variant="contained"
              onClick={() => router.push('/shipping')}
            >
              Back
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}


