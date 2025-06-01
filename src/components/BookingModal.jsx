import React, { useContext, useState } from "react";
import { Button, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import UserDetailContext from "../context/userDetailContext.jsx";
import { useMutation } from "@tanstack/react-query";
import { bookVisit } from "../utils/api";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("Visit booked successfully", { position: "bottom-right" });

    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        { id: propertyId, date: dayjs(value).format("DD-MM-YYYY") },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) =>
      toast.error(response.data.message, { position: "bottom-right" }),
    onSettled: () => {
      setOpened(false);
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date to visit"
      centered
    >
      <div className="flex items-center justify-center flex-col gap-4">
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button loading={isLoading} disabled={!value} onClick={() => mutate()}>
          Book visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
