import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

export default function Demo() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(true);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8 flex flex-col items-center">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <div className="mt-16">
        {/* Your content for each step goes here */}
        {activeStep === 0 && <div>Step 1 Content</div>}
        {activeStep === 1 && <div>Step 2 Content</div>}
        {activeStep === 2 && <div>Step 3 Content</div>}
      </div>
      <div className="mt-8 flex justify-between w-full">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}
