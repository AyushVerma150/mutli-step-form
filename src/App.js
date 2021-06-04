import { useState } from 'react';

import
{
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress
} from "@material-ui/core";

import { Formik, useFormik } from "formik";

import Button from './Components/UI/Button';
import Form from './Components/UI/Form';
import BusinessProfile from './Components/Forms/BusinessProfile';
import BankingDetails from './Components/Forms/BankingDetails';

import { formInitialValues, formValidators } from './Components/FormModal/FormValidations';
import styles from './Components/Forms/Forms.module.css';


const formSteps = ["Business Profile", "Banking Details", "Identity Proof"];

const renderActiveForm = ( activeStep, formProps ) =>
{
  if ( activeStep === 0 )
  {
    return <BusinessProfile formProps={formProps} />;  //formFields={formFields} 
  }
  if ( activeStep === 1 )
  {
    return <BankingDetails formProps={formProps} />;
  }
}

const App = () =>
{

  const [stepCounter, setStepCounter] = useState( 0 );

  const validationSchema = formValidators[stepCounter];

  const renderNextForm = () =>
  {
    alert( "I was called" );

    if ( stepCounter < formSteps.length - 1 )
    {
      setStepCounter( stepCounter + 1 );
    }
  }

  function handleBack()
  {
    setStepCounter( stepCounter - 1 );
  }


  return (
    <div>
      <h1>Hello and welcome</h1>
      <Stepper activeStep={stepCounter}>
        {formSteps.map( ( formLabel ) => (
          <Step key={formLabel}>
            <StepLabel>{formLabel}</StepLabel>
          </Step>
        ) )}
      </Stepper>

      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={( values, actions ) =>
        {
          alert( "Lets move to the next Form" );
          renderNextForm();
          actions.setTouched( {} );
          actions.setSubmitting( false );
        }}
      >

        {props => (
          <Form submitHandler={props.handleSubmit} style={styles.FormStyle}>
            {renderActiveForm( stepCounter, props )}

            <div style={{ float: "right" }}>
              <Button>
                Next
              </Button>
              {stepCounter !== 0 && (
                <Button clicked={handleBack}>
                  Back
                </Button>
              )}
              {/* <Button>
                Back
              </Button> */}
            </div>
          </Form>
        )}
      </Formik>
    </div >
  );
}

export default App;
