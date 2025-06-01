import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Button,
  Group,
  NumberInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import UserDetailContext from "../context/userDetailContext";
import useProperties from "../hooks/useProperties";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createResidency } from "../utils/api";

const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);

  const { refetch: refetchProperties } = useProperties();

  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails?.facilities?.bedrooms ?? 1,
      parkings: propertyDetails?.facilities?.parkings ?? 0,
      bathrooms: propertyDetails?.facilities?.bathrooms ?? 1,
      area: propertyDetails?.area ?? "",
    },
    validate: {
      bedrooms: (value) =>
        value < 1 ? "Must have at least one bedroom" : null,
      bathrooms: (value) =>
        value < 1 ? "Must have at least one bathroom" : null,
      area: (value) => (value.trim().length < 2 ? "Area is required" : null),
    },
  });

  const { bedrooms, parkings, bathrooms, area } = form.values;

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createResidency(
        {
          ...propertyDetails,
          facilities: { bedrooms, parkings, bathrooms, area },
        },
        token,
        user?.email
      ),
    onError: ({ response }) =>
      toast.error(response.data.message, { position: "bottom-right" }),
    onSettled: () => {
      toast.success("Property added successfully!", {
        position: "bottom-right",
      });

      // Reset form and close modal
      setPropertyDetails({
        title: "",
        description: "",
        price: "",
        country: "",
        state: "",
        city: "",
        address: "",
        images: [],
        video: "",
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        area: "",
        userEmail: user?.email,
      });
      setOpened(false);
      setActiveStep(0);
      refetchProperties();
    },
  });

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, parkings, bathrooms, area },
      }));
      mutate();
    }
  };

  return (
    <Box
      maw={400}
      w="100%"
      mx="auto"
      my="lg"
      p="lg"
      sx={{
        background: "#f8f9fa",
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Stack spacing="md">
          <NumberInput
            withAsterisk
            label="No. of Bedrooms"
            min={1}
            {...form.getInputProps("bedrooms")}
            error={form.errors.bedrooms}
          />
          <NumberInput
            withAsterisk
            label="No. of Parkings"
            min={0}
            {...form.getInputProps("parkings")}
            error={form.errors.parkings}
          />
          <NumberInput
            withAsterisk
            label="No. of Bathrooms"
            min={1}
            {...form.getInputProps("bathrooms")}
            error={form.errors.bathrooms}
          />
          <TextInput
            withAsterisk
            label="Area"
            placeholder="e.g., 1200 sqft"
            {...form.getInputProps("area")}
            error={form.errors.area}
          />
        </Stack>
        <Group position="apart" mt="xl" spacing="xl">
          <Button variant="default" onClick={prevStep} size="md">
            Go Back
          </Button>
          <Button type="submit" color="green" size="md" loading={isLoading}>
            {isLoading ? "Submitting..." : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
