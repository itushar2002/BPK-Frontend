import { Button, Group } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  prevStep,
  nextStep,
}) => {
  const [imageURLs, setImageURLs] = useState(propertyDetails.images || []);
  const [videoURL, setVideoURL] = useState(propertyDetails.video || "");
  const cloudinaryRef = useRef();
  const imageWidgetRef = useRef();
  const videoWidgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    imageWidgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dezcahce0",
        uploadPreset: "bhopalProperty",
        maxFiles: 10,
        sources: ["local", "url", "camera"],
        multiple: true,
        resourceType: "image",
      },
      (err, result) => {
        if (result.event === "success") {
          setImageURLs((prev) => {
            if (prev.length < 10) {
              return [...prev, result.info.secure_url];
            }
            return prev;
          });
        }
      }
    );
    videoWidgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dezcahce0",
        uploadPreset: "bhopalProperty",
        maxFiles: 1,
        sources: ["local", "url", "camera"],
        multiple: false,
        resourceType: "video",
      },
      (err, result) => {
        if (result.event === "success") {
          setVideoURL(result.info.secure_url);
        }
      }
    );
  }, []);

  const handleNext = () => {
    setPropertyDetails((prev) => ({
      ...prev,
      images: imageURLs,
      video: videoURL,
    }));
    nextStep();
  };

  const handleRemoveImage = (idx) => {
    setImageURLs((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleRemoveVideo = () => {
    setVideoURL("");
  };

  return (
    <div className="!mt-12 w-3/4 mx-auto !p-6 border-2 border-dashed rounded-lg border-gray-400 cursor-pointer bg-gray-50">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Images Section */}
        <div className="flex-1">
          <Button
            onClick={() => imageWidgetRef.current.open()}
            disabled={imageURLs.length >= 10}
            leftSection={<MdOutlineCloudUpload size={24} />}
            fullWidth
            variant="outline"
          >
            {imageURLs.length === 0
              ? "Upload Images"
              : `Add More Images (${imageURLs.length}/10)`}
          </Button>

          <div className="flex flex-wrap gap-3 !mt-4">
            {imageURLs.map((url, idx) => (
              <div
                key={idx}
                className="relative w-20 h-20 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={url}
                  alt={`property-${idx}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm hover:bg-red-700 transition"
                  aria-label="Remove image"
                  type="button"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {imageURLs.length >= 10 && (
            <p className="!mt-2 text-sm text-red-600 font-semibold">
              Maximum 10 images allowed.
            </p>
          )}
        </div>

        {/* Video Section */}
        <div className="flex-1">
          <Button
            onClick={() => videoWidgetRef.current.open()}
            leftSection={<MdOutlineCloudUpload size={24} />}
            fullWidth
            variant="outline"
          >
            {videoURL ? "Replace Video" : "Upload Video"}
          </Button>

          {videoURL && (
            <div className="relative !mt-4 rounded-lg overflow-hidden shadow-lg">
              <video
                src={videoURL}
                controls
                className="w-full max-w-md rounded-lg"
              />
              <button
                onClick={handleRemoveVideo}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-lg font-bold hover:bg-red-700 transition"
                aria-label="Remove video"
                type="button"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Group position="center" mt="xl" spacing="xl">
        <Button variant="default" onClick={prevStep}>
          Go Back
        </Button>
        <Button onClick={handleNext} disabled={imageURLs.length === 0}>
          Next Step
        </Button>
      </Group>
    </div>
  );
};

export default UploadImage;
