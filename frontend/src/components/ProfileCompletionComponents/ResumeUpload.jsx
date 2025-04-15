"use client";

import { Button } from "../ui/button";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { useEmployeeContext } from "../../app/context";

function ResumeUpload() {
  const acceptedFileTypes = ["pdf", "doc", "docx"];
  const maxFileSizeMB = 3 * 1024 * 1024;
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const { profileData, setProfileData } = useEmployeeContext();

  const validateFile = (file) => {
    if (file.size > maxFileSizeMB) {
      setError("File size exceeds 3MB");
      return false;
    }
    const fileType = file.name.split(".").pop();
    const isValidFileType = acceptedFileTypes.includes(fileType.toLowerCase());
    if (!isValidFileType) {
      setError("Invalid file type. Please upload a PDF, DOC, or DOCX file.");
      return false;
    }
    setError(null);
    setProfileData((prev) => {
      return { ...prev, resume: { filename: file.name } };
    });
    return true;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = () => {
    inputRef.current.click();
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateFile(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="mt-24 w-full max-w-2xl mx-auto ">
      <h2 className="text-4xl mb-6 font-bold">Upload your resume</h2>
      {!profileData?.resume?.filename ? (
        <div
          className={`
            relative w-full font-poppins h-80 rounded-xl transition-all duration-300 ease-in-out
            border-2 border-dashed flex flex-col items-center justify-center cursor-pointer
             
             ${
               isDragging
                 ? "border-blue-500 bg-blue-50 "
                 : "border-gray-300 hover:border-gray-400 "
             }         
            `}
          onDragOver={(e) => {
            handleDragOver(e);
          }}
          onDragLeave={(e) => {
            handleDragLeave(e);
          }}
          onDrop={(e) => {
            handleDrop(e);
          }}
          onClick={handleFileChange}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            id="resume-upload"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />

          <div className="flex flex-col items-center gap-4 px-6 text-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                isDragging
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              <Upload
                className={`${
                  isDragging ? "scale-110" : ""
                } transition-transform`}
                size={28}
              />
            </div>

            <div className="space-y-2">
              <p className="text-lg font-medium">
                {isDragging ? "Drop your file here" : "Upload your resume"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drag and drop your file here or click to browse
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Supported formats: {acceptedFileTypes.join(", ")} (Max 3MB)
              </p>
            </div>

            {/* <Button
            variant="outline"
            className="mt-4"
            onClick={(e) => {
              e.stopPropagation();
              triggerFileInput();
            }}
          >
            Select file
          </Button> */}
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center gap-2">
          <div>{profileData.resume.filename}</div>
          <Button
            onClick={handleRemove}
            className="p-1"
            variant="outline"
            size="small"
          >
            <X size={16} />
          </Button>
        </div>
      )}
      {error && (
        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 flex items-center gap-2">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
