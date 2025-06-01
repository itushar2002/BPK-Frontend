import React, { useState } from "react";
import { Modal, Container, Stepper, Group, Button } from "@mantine/core";
import AddLocation from "./AddLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "./UploadImage";
import Facilities from "./Facilities";
import BasicDetails from "./BasicDetails";

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: "",
    country: "",
    state: "",
    city: "",
    address: "",
    images: [], // Array for up to 10 images
    video: "", // Video URL
    facilities: {
      bedrooms: 0,
      parking: 0,
      bathroom: 0,
    },
    area: "",
    userEmail: user?.email,
  });
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // Example submit handler (replace with actual API call)
  const handleSubmit = () => {
    // TODO: Add API call to submit propertyDetails
    alert("Property submitted! (implement API call)");
    setOpened(false);
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Add Property"
      size={"90rem"}
      closeOnClickOutside
    >
      <Container h={"34rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Location" description="Address">
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
            <Group justify="center" mt="xl">
              <Button onClick={nextStep}>Next step</Button>
            </Group>
          </Stepper.Step>
          <Stepper.Step label="Upload Images & Video" description="Upload">
            <UploadImage
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Basics" description="Details">
            <BasicDetails
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Facilities and Review"
            description="enter facilities"
          >
            <Facilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setOpened={setOpened}
              setActiveStep={setActive}
            />
          </Stepper.Step>
          
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
