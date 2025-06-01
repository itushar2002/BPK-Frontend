import { useForm } from "@mantine/form";
import React from "react";
import { validateString } from "../utils/common";
import { Box, Button, Group, TextInput, Select } from "@mantine/core";

const propertyTypes = [
  { value: "RENTED", label: "Rented" },
  { value: "SELLING", label: "Selling" },
  { value: "COMMERCIAL", label: "Commercial" },
  { value: "PLOT", label: "Plot" },
];

const BasicDetails = ({
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const form = useForm({
    initialValues: {
      title: propertyDetails.title || "",
      description: propertyDetails.description || "",
      price: propertyDetails.price || "",
      brokerContact: propertyDetails.brokerContact || "",
      propertyType: propertyDetails.propertyType || "",
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) =>
        isNaN(Number(value)) || Number(value) < 1000
          ? "Must be a valid number and minimum 1000"
          : null,
      brokerContact: (value) =>
        !/^\+?[0-9]{7,15}$/.test(value) ? "Must be a valid phone number" : null,
      propertyType: (value) =>
        value === "" ? "Property type is required" : null,
    },
  });

  const { title, description, price, brokerContact, propertyType } =
    form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        title,
        description,
        price: parseInt(price, 10),
        brokerContact,
        propertyType,
      }));
      nextStep();
    }
  };

  return (
    <Box maw={"50%"} mx={"auto"} my={"md"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Property Name"
          {...form.getInputProps("title")}
        />
        <TextInput
          withAsterisk
          label="Description"
          placeholder="Description"
          {...form.getInputProps("description")}
        />
        <TextInput
          withAsterisk
          label="Price"
          placeholder="Price"
          {...form.getInputProps("price")}
        />

        <TextInput
          withAsterisk
          label="Broker Contact Number"
          placeholder="+1234567890"
          {...form.getInputProps("brokerContact")}
        />

        <Select
          withAsterisk
          label="Property Type"
          placeholder="Select property type"
          data={propertyTypes}
          {...form.getInputProps("propertyType")}
        />

        <Group position="center" mt="xl" spacing="xl">
          <Button variant="default" onClick={prevStep}>
            Go Back
          </Button>
          <Button type="submit" color="green">
            Continue
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default BasicDetails;
