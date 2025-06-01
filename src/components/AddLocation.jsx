import React from "react";
import { useForm } from "@mantine/form";
import { validateString } from "../utils/common";
import useCountries from "../hooks/useCountries";
import { Button, Group, Select, TextInput } from "@mantine/core";
import Map from "./Map";

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAll } = useCountries();
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country || "",
      state: propertyDetails?.state || "",
      city: propertyDetails?.city || "",
      address: propertyDetails?.address || "",
    },
    validate: {
      country: (value) => validateString(value),
      state: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  // Sync form values to parent state
  React.useEffect(() => {
    setPropertyDetails((prev) => ({
      ...prev,
      ...form.values,
    }));
    // eslint-disable-next-line
  }, [form.values]);

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        country: form.values.country,
        state: form.values.state,
        city: form.values.city,
        address: form.values.address,
      }));

      nextStep();
      // Proceed to next step or submit the form
      console.log("Form submitted with values:", form.values);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="flex itmes-center justify-center flex-1">
        {/* Left: Form Fields */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            placeholder="Select country"
            data={getAll()}
            {...form.getInputProps("country")}
          />
          <TextInput
            w={"100%"}
            withAsterisk
            label="State"
            placeholder="State"
            {...form.getInputProps("state")}
          />
          <TextInput
            w={"100%"}
            withAsterisk
            label="City"
            placeholder="City"
            {...form.getInputProps("city")}
          />
          <TextInput
            w={"100%"}
            withAsterisk
            label="Address"
            placeholder="Address"
            {...form.getInputProps("address")}
          />
        </div>
        {/* Right: Map */}
        <div className="flex-1">
          <Map
            country={form.values.country}
            state={form.values.state}
            city={form.values.city}
            address={form.values.address}
          />
        </div>
      </div>
      <Group justify="center" mt="xl">
        <Button type="submit">Next step</Button>
      </Group>
    </form>
  );
};

export default AddLocation;
