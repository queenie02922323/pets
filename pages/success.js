import Layout from '../components/Layout';
import {
    Grid,
    Typography,
    Button,
    Card,

 
  } from '@material-ui/core';
  import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import NextLink from 'next/link';
function Success() {
    const router = useRouter();
    const whatsapp=require('../public/images/whatsapps.png')
    return (
        
   
        <Layout title="Success">
        <Typography component="h1" variant="h1">
           
            {'  '}
          After Payment
        </Typography>
  
        
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
        <Card >
       <h1>Step1:</h1>
        <Typography component="h5" variant="h5" color="secondary">
                    Send your payment receipt to our Payment Security Support Team ( WhatsApps:016-8120292)
                    
                    </Typography>
                    </Card>
                    </Grid>
                    </Grid>
  
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <Card >
              
            </Card>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
              <Card >
              <h1>Step2:</h1>
              <Typography component="h5" variant="h5" color="secondary">
                    Wait for your beloved pets to arrive at your place .
            
                    </Typography>
    
               
             
              </Card>
              <Grid>
                <NextLink href="http://www.wasap.my/60168120292" passhref>
              <Link href="http://www.wasap.my/60168120292" passhref>

<Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        <Image
        alt="image"
        src={whatsapp}
        width={30}
        height={30}
        layout="fixed"
        />
        {'   '}
        Queenie Payment Security Support Team
      </Button>

      </Link>
      </NextLink>
       <Button  
                            fullWidth
                            type="button"
                            variant="contained"
                            color="secondary"
                            onClick={() => router.push('/')}
                  > 
                   Done
                  </Button>
                  </Grid>

            <Button
              fullWidth
              type="button"
              variant="contained"
              onClick={() => router.push('/banking')}
            >
              Back
            </Button>

        
       </Grid>
       </Grid>
       

       
        
               
      </Layout>
            


    
    )
}
export default Success
