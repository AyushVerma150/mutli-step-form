import { useState } from 'react';

import
{
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { Formik } from "formik";

import
{
  formInitialValues,
  formValidators
} from './Components/FormModal/FormValidations';
import Form from './Components/UI/Form';
import Button from './Components/UI/Button';
import CheckOut from './Components/Forms/CheckOut';
import IdentityProof from './Components/Forms/IdentityProof';
import BankingDetails from './Components/Forms/BankingDetails';
import BusinessProfile from './Components/Forms/BusinessProfile';

import CONSTANTS from './Constants/Constants';
import styles from './Components/Forms/Forms.module.css';


const formSteps = ["Business Profile", "Banking Details", "Identity Proof"];

const renderActiveForm = ( activeStep, formProps ) =>
{
  if ( activeStep === 0 )
  {
    return <BusinessProfile formProps={formProps} />;
  }
  else if ( activeStep === 1 )
  {
    return <BankingDetails formProps={formProps} />;
  }
  else if ( activeStep === 2 )
  {
    return <IdentityProof formProps={formProps} />;
  }
};

const App = () =>
{


  const [stepCounter, setStepCounter] = useState( 0 );
  const validationSchema = formValidators[stepCounter];


  const renderNextForm = () =>
  {
    if ( stepCounter <= formSteps.length )
    {
      setStepCounter( stepCounter + 1 );
    }
  };

  const renderPreviousForm = () =>
  {
    if ( stepCounter > 0 )
    {
      const prevStep = stepCounter - 1;
      setStepCounter( prevStep );
    }
  };


  return (
    <div>
      <Stepper activeStep={stepCounter}>
        {formSteps.map( ( formLabel ) => (
          <Step key={formLabel}>
            <StepLabel>{formLabel}</StepLabel>
          </Step>
        ) )}
      </Stepper>
      {
        stepCounter === formSteps.length ?
          <CheckOut /> :
          <Formik
            initialValues={formInitialValues}
            validationSchema={validationSchema}
            onSubmit={( _, actions ) =>
            {
              renderNextForm();
              actions.setTouched( {} );
              actions.setSubmitting( false );
            }}
          >
            {
              ( props ) =>
              (
                <Form
                  submitHandler={props.handleSubmit}
                  style={styles.FormStyle}
                >
                  {renderActiveForm( stepCounter, props )}
                  <div className={styles.floatRight}>
                    <Button type={CONSTANTS.UI.SUBMIT_TYPE}>
                      {
                        stepCounter === formSteps.length - 1 ?
                          CONSTANTS.NAME.SUBMIT_BUTTON :
                          CONSTANTS.NAME.NEXT_BUTTON
                      }
                    </Button>
                    {
                      stepCounter !== 0 && (
                        <Button
                          type={CONSTANTS.UI.BUTTON_TYPE}
                          clicked={renderPreviousForm}
                        >
                          {CONSTANTS.NAME.PREV_BUTTON}
                        </Button>
                      )
                    }
                  </div>
                </Form>
              )
            }
          </Formik>
      }
    </div >
  );
}

export default App;
